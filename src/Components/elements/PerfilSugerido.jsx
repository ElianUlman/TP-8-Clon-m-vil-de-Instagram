import { useState } from 'react'
import './PerfilSugerido.css'
import FollowBtn from './followBtn'

function PerfilSugerido({foto, nombre, id}){

    return(
        <div className="perfil-sugerido">

            <img className="perfil-sugerido__foto" src={foto} alt="" />
            <div className="perfil-sugerido__info">
                <p className="perfil-sugerido__nombre">{nombre}</p>
                <p className="perfil-sugerido__subtitulo">Follows you</p>
            </div>
            <FollowBtn id={id}/>

        </div>
    )
}

export default PerfilSugerido