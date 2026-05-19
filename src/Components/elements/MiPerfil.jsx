import { useState } from 'react'
import './MiPerfil.css'

function MiPerfil({ Profile }){

    return(
        <div>
            <img src={ Profile.img } alt="" />
            <p>{ Profile.nombre }</p>
            <button>Switch</button>
        </div>
    )
}

export default MiPerfil