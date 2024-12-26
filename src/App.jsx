import React from 'react'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import UserContainer from './Components/UserContainer'
import Home from './pages/Home'
import { GitHubUserProvider } from './Providers/GitHubUsersContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile'

const App = () => {
  return (
  <BrowserRouter>
    <GitHubUserProvider>
      <Navbar />
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/profile/:id" element ={<Profile/>} />
      </Routes>
     
    </GitHubUserProvider>
  </BrowserRouter>
  )
}

export default App