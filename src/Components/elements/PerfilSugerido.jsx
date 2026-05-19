import { useState } from 'react'
import './PerfilSugerido.css'
import FollowBtn from './followBtn'

function PerfilSugerido({foto, nombre, id}){

    return(
        <div>

            <img className='perfilSugeridoImg' src={foto} alt="" />
            <p>{nombre}</p>
            <FollowBtn id={id}/>

        </div>
    )
}

export default PerfilSugerido