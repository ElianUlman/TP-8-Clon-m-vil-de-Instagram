import { use, useState } from 'react'
import "./Estado.css"

function Estado({nombrePerfil, img}){

    const [estadoVisto, setEstadoVisto] = useState(false)

    return(

        <div>
            <img src={img} alt="" />
            <p>{nombrePerfil}</p>
        </div>
    )
}

export default Estado