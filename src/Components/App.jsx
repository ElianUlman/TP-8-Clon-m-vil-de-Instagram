import { useState } from 'react'
import { getXpics } from "../api_connection/api.js"
import './App.css'
import BarraLateral from './elements/BarraLateral.jsx'
import BarraEstados from './components/BarraEstados.jsx'
import ListaSugeridosLateral from './components/ListaSugeridosLateral.jsx'
import ListaSugeridosFeed from './components/ListaSugeridosFeed.jsx'
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";

import MyProfile from './pages/myProfile.jsx'
import Home from './pages/home.jsx'


function App() {

  let estadoEjemplo = {
    nombrePerfil: "Prueba",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZplF3Pj0NxTcY3xFKC2-a3M0imAf83-T3sA&s",
    id: "aaa"
  }

  let estadoEjemplo2 = {
    nombrePerfil: "Prueba2",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStu5YvSHorDHL1YfVdlHI-_3_4s0-xLB2Q7w&s",
    id: "xxx"
  }

  const [response, setResponse] = useState([])
  const [estados, setEstados] = useState([estadoEjemplo, estadoEjemplo2])
  const [ListaSugeridos, setListaSugeridos] = useState([estadoEjemplo, estadoEjemplo2])
  const [profile, setProfile] = useState({nombre: "MI PROFILE", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiL6bujH6u1Jx9PkPOCEy-5V9x1x3KQS_l6g&s", id: "123jh"})

  const trye = async () => {
    const e = await get10pics()
    setResponse(e)
    console.log(response)
  }

  return (
     

    <BrowserRouter>
      <BarraLateral />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/miperfil' element={<MyProfile />} />
      </Routes>
      {/**
      <BarraLateral />
      < BarraEstados estados={estados} />
      <ListaSugeridosLateral ListaSugeridos={ListaSugeridos} profile={profile} /> 
      
      
      
      <ListaSugeridosFeed ListaSugeridos={ListaSugeridos} /> */}
    </BrowserRouter>

     
  )
}

export default App


