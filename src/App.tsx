import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from 'react-router'

import Homepage from './pages/Homepage'
import FlowersPage from './pages/FlowersPage'
import Navbar from './components/Navbar'

import './css/style.css'

function App() {
  return (
   <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/flowers' element={<FlowersPage />} />
      </Routes>
    </Router>
   </>
  )
}

export default App
