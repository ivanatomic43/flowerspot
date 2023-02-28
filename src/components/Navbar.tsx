import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import {GiSpotedFlower } from 'react-icons/gi'
import { getAuth, User } from 'firebase/auth';

import SignUp from './SignUp';
import SignIn from './SignIn';
import Profile from './Profile';

import { useAuthStatus } from '../hooks/useAuthStatus';

import Avatar from '../images/avatar.jpg';


function Navbar() : JSX.Element {

  const navigate = useNavigate();

  //User
  const { loggedIn, checkingStatus } = useAuthStatus();
  const [user, setUser] = useState<User | null>(null);

  const auth = getAuth();

  useEffect(() => {
    console.log("Radi useeff");
    setUser(auth.currentUser);
  });

  const onLogout = () => {
    auth.signOut();
    navigate('/');
  }

  //Modal
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
  const signInModal = <SignIn handleCloseModal={handleCloseModal} />

  //Profile
  const [showProfileModal, setShowProfileModal] = useState(false);
  
  const showProfileModalClick = (event:any) => {
    setShowProfileModal(true);
  }

  const handleProfileClose = () => {
    setShowProfileModal(false);
  }

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
          { loggedIn && <li className="text-black"><a href="/#">{user?.displayName}</a></li> }
          { loggedIn && <li className="text-black"><button onClick={showProfileModalClick}><img src={Avatar} alt="avatar" className='img-avatar' /></button></li> }
          { loggedIn && <li className="register-btn"><button  onClick={onLogout}>Logout</button></li> }
          { !loggedIn && <li><button id="sign-in-btn" className="login-btn" onClick={showModalClick}>Login</button></li> }
          { !loggedIn && <li className='register-btn'><button id="sign-up-btn" onClick={showModalClick}>New Account</button></li> }
        </ul>
      </div>
      </div>
    </nav>
    { showSignUpModal && signUpModal }
    { showSignInModal && signInModal }
    { showProfileModal && <Profile onClose={handleProfileClose} />}

    </header>
  )
}

export default Navbar