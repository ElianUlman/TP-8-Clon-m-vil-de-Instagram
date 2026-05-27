import { useState } from 'react'
import "./infoPerfil.css"
import  FollowBtn  from "../elements/followBtn.jsx"
import  BarraEstados  from "./BarraEstados.jsx" 
function InfoPerfil({ perfil }) {
    let miPerfil = JSON.parse(localStorage.getItem("myprofile")) || ""
    
    return (
        <div>

            <img src={perfil.url} alt="image nou work :c" />
            <h5>{perfil.nombre || "nombre perfil"}</h5>
            
            {/**el codigo que justo aca abajo hice solo para follow lo pueden poner para el resto de cosas */}
            {miPerfil?.id != perfil.id && <FollowBtn id = {perfil.id}/>}
            <button>Message</button>
            <button><img src="#" alt="aniadir" /></button>
            <button>...</button>

            <div>
                <p>{perfil.posts.length} Posts</p>
                <p>{perfil.followers?.length || 67} Follower</p>
                <p>{perfil.following?.length || 76} Following</p>
            </div>

            <p>{perfil.description || "descripcion perfil"}</p>

            <BarraEstados estados={perfil.estadosGuardados}/>
            
        </div>
    )
}

export default InfoPerfil