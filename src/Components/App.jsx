import { useState } from 'react'
<<<<<<< HEAD
=======
import { get10pics } from "../api_connection/api.js"
>>>>>>> origin/Elian
import './App.css'
import BarraLateral from './BarraLateral'
import BarraEstados from './BarraEstados.jsx'
import ListaSugeridosLateral from './ListaSugeridosLateral.jsx'

function App() {

  let estadoEjemplo = {
    nombrePerfil: "Prueba",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZplF3Pj0NxTcY3xFKC2-a3M0imAf83-T3sA&s"
  }

  let estadoEjemplo2 = {
    nombrePerfil: "Prueba2",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStu5YvSHorDHL1YfVdlHI-_3_4s0-xLB2Q7w&s"
  }

  const [response, setResponse] = useState([])
  const [estados, setEstados] = useState([estadoEjemplo, estadoEjemplo2])
  const [ListaSugeridos, setListaSugeridos] = useState([estadoEjemplo, estadoEjemplo2])
  const [profile, setProfile] = useState({nombre: "MI PROFILE", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiL6bujH6u1Jx9PkPOCEy-5V9x1x3KQS_l6g&s"})

  const trye = async () => {
    const e = await get10pics()
    setResponse(e)
    console.log(response)
  }

  return (
    <>
<<<<<<< HEAD
        <BarraLateral/>
=======
      <BarraLateral />
      <BarraEstados estados={estados} />
      <ListaSugeridosLateral ListaSugeridos={ListaSugeridos} profile={profile} />
>>>>>>> origin/Elian
    </>
  )
}

export default App


