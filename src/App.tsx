import { BrowserRouter as Router, Route } from "react-router-dom"
import { Routes } from "react-router"

import Homepage from "./pages/Homepage"
import FlowersPage from "./pages/FlowersPage"
import ProfilePage from "./pages/ProfilePage"
import Navbar from "./components/Navbar"

import "./css/style.css"
import "../src/styles/navbar.css"
import "../src/styles/homepage.css"

function App(): JSX.Element {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/flowers" element={<FlowersPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
