import { useState } from 'react'
import "./infoPerfil.css"
import FollowBtn from "../elements/followBtn.jsx"
import BarraEstados from "./BarraEstados.jsx"

function InfoPerfil({ perfil, estados }) {
    return (
        <div>
            <img src={perfil.url} alt="" />
            <h5>{perfil.nombre}</h5>
            <FollowBtn id={perfil.id}/>
            <button>Message</button>
            <button><img src="" alt="" /></button>
            <button>...</button>

            <div>
                <p>{perfil.posts} Posts</p>
                <p>{perfil.followers} Followers</p>
                <p>{perfil.following} Following</p>
            </div>

            <p>{perfil.descripcion}</p>

            <BarraEstados estados={estados.filter(e => perfil.estados.includes(e.id))}/>
        </div>
    )
}

export default InfoPerfil