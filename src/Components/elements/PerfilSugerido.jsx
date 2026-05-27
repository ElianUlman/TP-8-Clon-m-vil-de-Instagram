import { useState } from 'react'
import './PerfilSugerido.css'
import FollowBtn from './followBtn'

function PerfilSugerido({perfil}){

    return(
        <div className="perfil-sugerido">

            <img className="perfil-sugerido__foto" src={perfil.url} alt="" />
            <div className="perfil-sugerido__info">
                <p className="perfil-sugerido__nombre">{perfil.nombre}</p>
                <p className="perfil-sugerido__subtitulo">Follows you</p>
            </div>
            <FollowBtn id={perfil.id}/>

        </div>
    )
}

export default PerfilSugerido