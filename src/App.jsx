import { useState } from 'react'
import {get10pics}from "./api_connection/api.js"
import './App.css'

function App() {
  const [response, setResponse] = useState([])
  

  const trye = async () =>{
    const e = await get10pics()
    setResponse( e)
    console.log(response)
  }

  return (
    <>
        <button onClick={()=>trye()}>eeeeeee</button>
        {response[0] && (<img src={response[0].url} alt="eee" />)}
        <p>hola soy homero chino</p>
    </>
  )
}

export default App


