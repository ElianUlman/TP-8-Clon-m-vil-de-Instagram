import { useState } from 'react'
import './MiPerfil.css'

function MiPerfil({ Profile }){

    return(
        <div className="mi-perfil">

            <img className="mi-perfil__foto" src={Profile.url} alt={Profile.nombre} />

            <div className="mi-perfil__info">
                <p className="mi-perfil__usuario">{Profile.nombre || "mi nombre"}</p>
                <p className="mi-perfil__nombre-completo">{Profile.nombreCompleto || "Nombre completo"}</p>
            </div>

            <button className="mi-perfil__switch">Switch</button>

        </div>
    )
}

export default MiPerfil