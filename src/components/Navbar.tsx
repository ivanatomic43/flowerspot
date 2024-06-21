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
      <Text color="app-button">
        <li>
          <button
            id="sign-in-btn"
            className="login-btn"
            onClick={showModalClick}
          >
            Login
          </button>
        </li>
      </Text>
      <Text color="app-white" className="rounded-3xl">
        <li className="register-btn">
          <button id="sign-up-btn" onClick={showModalClick}>
            New Account
          </button>
        </li>
      </Text>
    </>
  )

  const navbarLoggedUser = (
    <>
      <Text color="app-white">
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
    <header>
      <nav className="w-full">
        <div className="nav-container">
          <Text color="app-button" className="logo-container">
            <GiSpotedFlower className="logo app-button" />
            <a href="/" className="logo-title">
              FlowerSpot
            </a>
          </Text>

          <div className="flex">
            <ul>
              <li>
                <Link to="/flowers">
                  <Text
                    className="text body"
                    color="app-white"
                    type="body.medium"
                  >
                    Flowers
                  </Text>
                </Link>
              </li>
              <li>
                <Text color="app-white" className="text body">
                  Latest Sightings
                </Text>
              </li>
              <li>
                <Text color="app-white" className="text body">
                  Favorites
                </Text>
              </li>
              {loggedIn ? navbarLoggedUser : navbarPublic}
            </ul>
          </div>
        </div>
      </nav>
      {showSignUpModal && signUpModal}
      {showSignInModal && signInModal}
      {showProfileModal && (
        <Profile onClose={handleProfileClose} currentUser={user} />
      )}
    </header>
  )
}

export default Navbar
