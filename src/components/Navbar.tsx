import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { GiSpotedFlower } from "react-icons/gi"
import { getAuth, User } from "firebase/auth"

import SignUp from "./SignUp"
import SignIn from "./SignIn"
import Profile from "./Profile"
import Text from "../common/Text"

import { useAuthStatus } from "../hooks/useAuthStatus"

import Avatar from "../images/avatar.jpg"

import "../styles/common/app-styles.css"

// TODO: Add hover to navbar links
// TODO: Add animation to login/sign in modals
// TODO: Implement user picture upload after the registration

function Navbar(): JSX.Element {
  //User
  const { loggedIn } = useAuthStatus()
  const [user, setUser] = useState<User | null>(null)

  const auth = getAuth()

  useEffect(() => {
    setUser(auth.currentUser)
  })

  //Modal
  const [showSignUpModal, setShowSignUpModal] = useState(false)
  const [showSignInModal, setShowSignInModal] = useState(false)

  const showModalClick = (event: any) => {
    if (event.target.id === "sign-in-btn") {
      setShowSignInModal(true)
    } else if (event.target.id === "sign-up-btn") {
      setShowSignUpModal(true)
    }
  }

  const handleCloseModal = () => {
    setShowSignInModal(false)
    setShowSignUpModal(false)
  }

  const signUpModal = <SignUp handleCloseModal={handleCloseModal} />
  const signInModal = <SignIn handleCloseModal={handleCloseModal} />

  //Profile
  const [showProfileModal, setShowProfileModal] = useState(false)

  const showProfileModalClick = (event: any) => {
    setShowProfileModal(true)
  }

  const handleProfileClose = () => {
    setShowProfileModal(false)
  }

  const navbarPublic = (
    <>
      <Text color="app-button" type="body.medium" className="m-7">
        <button id="sign-in-btn" className="login-btn" onClick={showModalClick}>
          Login
        </button>
      </Text>
      <div className="register-btn m-auto p-4">
        <Text color="app-white" type="body.medium" className="">
          <button id="sign-up-btn" onClick={showModalClick}>
            New Account
          </button>
        </Text>
      </div>
    </>
  )

  const navbarLoggedUser = (
    <>
      <Text color="app-white" type="body.medium" className="m-7">
        <li>
          <Link to="/profile">{user?.displayName}</Link>
        </li>
      </Text>
      <li>
        <button onClick={showProfileModalClick}>
          <img src={Avatar} alt="avatar" className="img-avatar w-7 h-7" />
        </button>
      </li>
    </>
  )

  return (
    <nav className="nav-container">
      <div className="flex m-5">
        <Text color="app-button" type="title.h3" className="my-2">
          <GiSpotedFlower />
        </Text>
        <Text color="app-button" type="title.h4" className=" mx-3">
          <a href="/">FlowerSpot</a>
        </Text>
      </div>

      <div className="flex mx-5">
        <Link to="/flowers">
          <Text color="app-white" type="body.medium" className="m-7">
            Flowers
          </Text>
        </Link>

        <Text color="app-white" type="body.medium" className="m-7">
          Latest Sightings
        </Text>

        <Text color="app-white" type="body.medium" className="m-7">
          Favorites
        </Text>

        {loggedIn ? navbarLoggedUser : navbarPublic}
      </div>
      {showSignUpModal && signUpModal}
      {showSignInModal && signInModal}
      {showProfileModal && (
        <Profile onClose={handleProfileClose} currentUser={user} />
      )}
    </nav>
  )
}

export default Navbar
