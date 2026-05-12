import { useState } from 'react'
import {get10pics}from "./api_connection/api.js"
import './App.css'
import BarraLateral from './BarraLateral'

function App() {
  const [response, setResponse] = useState([])
  

  const trye = async () =>{
    const e = await get10pics()
    setResponse( e)
    console.log(response)
  }

  return (
    <>
        <BarraLateral/>
    </>
  )
}

export default App


