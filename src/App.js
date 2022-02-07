import React from 'react'
import './styles/App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './componets/UI/Navbar/Navbar'
import AppRouter from './componets/AppRouter'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
