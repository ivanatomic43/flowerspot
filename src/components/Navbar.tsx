import React from 'react'
import {GiSpotedFlower } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import Input from '../common/Input';
import SignUp from './SignUp';


function Navbar() {

  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

  const showModalClick = (event : any) => {
    if (event.target.id === 'sign-in-btn'){
      setShowSignInModal(true);
    } else if (event.target.id === 'sign-up-btn') {
      setShowSignUpModal(true)
    }
  }

  const handleCloseModal = () => {
    setShowSignInModal(false);
    setShowSignUpModal(false);
  }

  const signUpModal = <SignUp handleCloseModal={handleCloseModal} />

  /*const signInModal = <Modal modalTitle="Welcome back" onClose={handleCloseModal}>
    <div className='grid grid-rows-2 grid-flow-row p-3'>
      <Input labelName='Email address' inputType='text' />
      <Input labelName='Password' inputType='password' />
      <div className='p-3 w-full m-auto'>
        <Button className='p-3'full pink primary rounded>Login to your Account</Button>
      </div>
    </div>
  </Modal>*/
  return (
    <header>
      <nav >
        <div className="nav-container">
      <div className='logo-container'>
          <GiSpotedFlower className='logo' />
          <a href="/" className='logo-title'>FlowerSpot</a>
      </div>
      <div>
        <ul>
          <li><Link to="/flowers">Flowers</Link></li>
          <li><a href="/#">Latest Sightings</a></li>
          <li><a href="/#">Favorites</a></li>
          <li><button id="sign-in-btn" className="login-btn" onClick={showModalClick}>Login</button></li>
          <li className='register-btn'><button id="sign-up-btn" onClick={showModalClick}>New Account</button></li>
        </ul>
      </div>
      </div>
    </nav>
    { showSignUpModal && signUpModal }
    
    </header>
  )
}

export default Navbar