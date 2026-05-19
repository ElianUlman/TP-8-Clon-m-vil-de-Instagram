import { useState } from 'react'
import "./infoPerfil.css"
import { FollowBtn } from "./followBtn.jsx"
import { BarraEstados } from "./BarraEstados.jsx" 
function infoPerfil({ perfil }) {

    return (

        <div>

            <img src={perfil.url} alt="" />
            <h5>{perfil.nombre}</h5>
            <FollowBtn id = {perfil.id}/>
            <button>Message</button>
            <button><img src="" alt="" /></button>
            <button>...</button>

            <div>
                <p>{perfil.posts.length} Posts</p>
                <p>{perfil.followers.length} Follower</p>
                <p>{perfil.following.length} Following</p>
            </div>

            <p>{perfil.description}</p>

            <BarraEstados estados={perfil.estadosGuardados}/>
            
        </div>
    )
}

export default infoPerfil
