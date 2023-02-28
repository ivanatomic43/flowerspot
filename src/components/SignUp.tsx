import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { setDoc, doc, serverTimestamp, FieldValue } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { db }  from '../firebase.config';

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

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormProps>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    password: ''
  })

  const { firstName, lastName, dateOfBirth, email, password} = formData;

  const handleOnChange = (event: any) => {
    console.log(event.target.value);
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value
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
            <Input labelName="First Name" inputType="text" id="firstName" name="firstName" value={firstName} onChange={handleOnChange} />
            <Input labelName="Last Name" inputType="text" id="lastName" name="lastName" value={lastName} onChange={handleOnChange} />
          </div>
          <Input labelName="Date of Birth" inputType="text" id="dateOfBirth" name="dateOfBirth" value={dateOfBirth} onChange={handleOnChange} />
          <Input labelName="Email address" inputType="text" id="email" name="email" value={email} onChange={handleOnChange} />
          <Input labelName="Password" inputType="password" id="password" name="password" value={password as string} onChange={handleOnChange} />
          <div className="m-2">
            <Button className="p-3 w-full" full pink primary rounded>Create an Account</Button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default SignUp
