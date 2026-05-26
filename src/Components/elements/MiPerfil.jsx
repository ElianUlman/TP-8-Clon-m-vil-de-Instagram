import { useState } from 'react'
import './MiPerfil.css'

function MiPerfil({ Profile }){

    return(
        <div>
            <img className='miPerfilImg' src={ Profile.url } alt="" />
            <p>{ Profile.nombre || "mi nombre"}</p>
            <button>Switch</button>
            
        </div>
    )
}

export default MiPerfil