import { useState } from 'react'
import './PerfilSugerido.css'
import FollowBtn from './followBtn'

function PerfilSugerido({perfil}){

    return(
        <div>

            <img className='perfilSugeridoImg' src={perfil.url} alt="" />
            <p>{perfil.nombre}</p>
            <FollowBtn id={perfil.id}/>

        </div>
    )
}

export default PerfilSugerido