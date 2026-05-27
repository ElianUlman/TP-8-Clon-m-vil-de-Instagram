import { useState } from 'react'
import './App.css'
import BarraLateral from './elements/BarraLateral.jsx'
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";

import Home from './pages/home.jsx'
import Profile from './pages/Profile.jsx'


function App() {

  return (
     

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/miperfil' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


