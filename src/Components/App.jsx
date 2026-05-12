import { useState } from 'react'
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


