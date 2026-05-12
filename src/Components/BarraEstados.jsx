import { use, useState } from 'react'
import "./BarraEstados.css"
import Estado from './Estado'

function BarraEstados({estados}){


    return(
        <section>
            {
                estados.map((item, index) => (
                    <Estado nombrePerfil = {item.nombrePerfil} img = {item.img} key={index}/>
                ))
            }
        </section>
    )
}

export default BarraEstados
