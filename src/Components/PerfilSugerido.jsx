import { useState } from 'react'
import './PerfilSugerido.css'

function PerfilSugerido({foto, nombre}){

    return(
        <div>

            <img src={foto} alt="" />
            <p>{nombre}</p>
            <button>Follow</button>

        </div>
    )
}

export default PerfilSugerido