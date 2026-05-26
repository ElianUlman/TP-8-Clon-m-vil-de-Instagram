import { use, useState } from 'react'
import "./Estado.css"

function Estado({nombrePerfil, img}){

    const [estadoVisto, setEstadoVisto] = useState(false)

    const handleClick = () => {
        if(!estadoVisto){
            setEstadoVisto(true)
        }
    }

    return(

        <div className={`estado ${estadoVisto ? 'estado--visto' : ''}`} onClick={handleClick}>
            <img className='estado__avatar' src={img} alt="" />
            <p className='estado__nombre'>{nombrePerfil}</p> 
        </div>
    )
}

export default Estado