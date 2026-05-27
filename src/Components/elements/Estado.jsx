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

        <div className={`estado ${estadoVisto ? 'estado--visto' : ''}`} onClick={handleClick}>
            <img className='estado__avatar' src={estado.url} alt="" />
            <p className='estado__nombre'>{estado.author?.nombre || "nombre"}</p> 
        </div>
    )
}

export default Estado