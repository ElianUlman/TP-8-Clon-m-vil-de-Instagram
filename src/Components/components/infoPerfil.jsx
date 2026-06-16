import { useState } from 'react'
import "./infoPerfil.css"
import FollowBtn from "../elements/followBtn.jsx"
import BarraEstados from "./BarraEstados.jsx"

function InfoPerfil({ perfil }) {
    let miPerfil = JSON.parse(localStorage.getItem("myprofile")) || ""

    return (
        <div className="info-perfil">

            <div className="info-perfil__header">

                <img className="info-perfil__foto" src={perfil.url} alt={perfil.nombre} />

                <div className="info-perfil__datos">

                    <div className="info-perfil__fila-top">
                        <h2 className="info-perfil__nombre">{perfil.nombre || "nombre perfil"}</h2>
                        {/**
                        <div className="info-perfil__acciones">
                            <button className="info-perfil__btn-follow"><img src="../src/img/following.png" alt="flecha" /></button>
                            <button className="info-perfil__btn-message">Message</button>
                            <button className="info-perfil__btn-añadir"><img src="../src/img/añadir.png" alt="Añadir" /></button>
                            <button className="info-perfil__btn-mas">···</button>
                        </div>
                        */}
                        
                        
                    </div>

                    <div className="info-perfil__stats">
                        <span className="info-perfil__stat">{perfil.posts.length} posts</span>
                        <span className="info-perfil__stat">{perfil.followers?.length || 67} followers</span>
                        <span className="info-perfil__stat">{perfil.following?.length || 76} following</span>
                    </div>

                    <p className="info-perfil__descripcion">{perfil.description || "descripcion perfil"}</p>

                </div>
            </div>

            <div className="info-perfil__estados">
                <BarraEstados estados={perfil.estadosGuardados} />
            </div>

        </div>
    )
}

export default InfoPerfil