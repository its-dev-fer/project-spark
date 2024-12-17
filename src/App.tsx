import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import AccountSettingsPage from './Pages/settings/account'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<AccountSettingsPage />} />
      </Routes>
    </Router>
  )
}

export default App
