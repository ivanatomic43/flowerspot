import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { setDoc, doc, serverTimestamp, FieldValue } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { db }  from '../firebase.config';

import { validateField } from '../utils/helpers/formValidation';
import { useDispatch } from 'react-redux';
import { addUser } from '../store';

import Modal from "../common/Modal";
import Input from "../common/Input";
import Button from "../common/Button";

export interface SignUpProps {
  handleCloseModal: () => void;
}

export interface FormProps {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  password?: string;
  timestamp?: FieldValue
}

function SignUp({handleCloseModal} : SignUpProps) : JSX.Element {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<FormProps>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    password: ''
  })

  const [formValidation, setFormValidation] = useState({
    firstNameValid: false,
    lastNameValid: false,
    dateOfBirthValid: false,
    emailValid: false,
    passwordValid: false,
    formErrors: { firstName: '', lastName: '', dateOfBirth: '', email: '', password: ''},
    formValid: false,
    isSignUpForm: true
  });

  const { firstName, lastName, dateOfBirth, email, password} = formData;

  const handleOnChange = (event: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value
    }))

    setFormValidation((prevState) => ({
      ...prevState,
      firstNameValid: validateField(event.target.id, event.target.value, formValidation).firstNameValid,
      lastNameValid: validateField(event.target.id, event.target.value, formValidation).lastNameValid,
      dateOfBirthValid: validateField(event.target.id, event.target.value, formValidation).dateOfBirthValid,
      emailValid: validateField(event.target.id, event.target.value, formValidation).emailValid,
      passwordValid: validateField(event.target.id, event.target.value, formValidation).passwordValid,
      formValid: validateField(event.target.id, event.target.value, formValidation).formValid
    }))
  }

  const onSubmit = async (event : any) => {
    event.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password as string);

      const user = userCredential.user

      if (auth.currentUser) {
        updateProfile(auth.currentUser, {
          displayName: firstName
        });
      }

      // adding user to firestore without password
      const formDataCopy = {...formData}
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, 'users', user.uid), formDataCopy)

      const newUser = {
        id: user.uid,
        firstName: formData.firstName,
        lastName: formData.lastName,
        dateOfBirth: formData.dateOfBirth,
        email: formData.email
      }

      dispatch(addUser(newUser));

      navigate('/');
      handleCloseModal();

    } catch(error) {
      console.log("Greska");
    }
  }

  return (
    <>
      <Modal hasForm={true} modalTitle="Create an Account" onClose={handleCloseModal} onSubmit={onSubmit}>
        <div className="grid grid-rows-4 grid-flow-row p-2">
          <div className="flex justify-between">
            <div>
              <Input labelName="First Name" inputType="text" id="firstName" name="firstName" value={firstName} onChange={handleOnChange} validationError={formValidation.formErrors.firstName} />
            </div>
            <div>
              <Input labelName="Last Name" inputType="text" id="lastName" name="lastName" value={lastName} onChange={handleOnChange} validationError={formValidation.formErrors.lastName} />
            </div>
          </div>
          <div>
            <Input labelName="Date of Birth" inputType="text" id="dateOfBirth" name="dateOfBirth" value={dateOfBirth} onChange={handleOnChange}  validationError={formValidation.formErrors.dateOfBirth} />
          </div>
          <div>
            <Input labelName="Email address" inputType="text" id="email" name="email" value={email} onChange={handleOnChange} validationError={formValidation.formErrors.email} />
          </div>
          <div>
            <Input labelName="Password" inputType="password" id="password" name="password" value={password as string} onChange={handleOnChange} validationError={formValidation.formErrors.password} />
          </div>
          <div className="m-2">
            <Button className="p-3 w-full" full primary disabled={!formValidation.formValid}>Create an Account</Button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default SignUp
