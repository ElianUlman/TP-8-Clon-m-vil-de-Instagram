import { useState } from 'react'
import "./infoPerfil.css"
import { FollowBtn } from "./followBtn.jsx"

function infoPerfil({ perfil }) {

    return (

        <div>

            <img src={perfil.url} alt="" />
            <h5>{perfil.nombre}</h5>
            <FollowBtn id = {perfil.id}/>
            <button>Message</button>
            <button><img src="" alt="" /></button>
        </div>
    )
}

export default infoPerfil
