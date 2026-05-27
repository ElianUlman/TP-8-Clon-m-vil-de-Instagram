import { useState } from 'react'
import "./Estado.css"

function Estado({ estado }){

    const [estadoVisto, setEstadoVisto] = useState(false)

    const handleClick = () => {
        if(!estadoVisto){
            setEstadoVisto(true)
        }
    }

    return(
        <div onClick={handleClick}>
            <img className='estadoImg' src={estado.url} alt="" />
            <p>{estado.author?.nombre || "nombre"}</p> 
        </div>
    )
}

export default Estado