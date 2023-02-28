import { useState } from 'react';
import { useNavigate } from 'react-router';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

import Modal from '../common/Modal';
import Input from '../common/Input';
import Button from '../common/Button';


export interface SignInProps {
  handleCloseModal: () => void;
}

function SignIn( {handleCloseModal} : SignInProps ) : JSX.Element {

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = formData;
  const navigate = useNavigate();

  const handleOnChange = (event: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value
    }))
  }

  const onSubmit = async (event: any) => {
    event.preventDefault();
   
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
  
      if(userCredential.user){
        navigate("/");
        handleCloseModal();
      }
    } catch(error) {
      console.log("Error logging in");
    }
  }


  return (
   <>
    <Modal hasForm={true} modalTitle="Welcome back" onClose={handleCloseModal} onSubmit={onSubmit}>
    <div className='grid grid-rows-2 grid-flow-row p-3'>
      <Input labelName='Email address' inputType='text' id="email" name="email" value={email} onChange={handleOnChange} />
      <Input labelName='Password' inputType='password' id="password" name="password" value={password} onChange={handleOnChange} />
      <div className='p-3 w-full m-auto'>
        <Button className='p-3'full pink primary rounded>Login to your Account</Button>
      </div>
    </div>
  </Modal>
   </>
  )
}

export default SignIn
