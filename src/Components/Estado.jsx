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

        <div onClick={handleClick}>
            <img src={img} alt="" />
            <p>{nombrePerfil}</p>
        </div>
    )
}

export default Estado