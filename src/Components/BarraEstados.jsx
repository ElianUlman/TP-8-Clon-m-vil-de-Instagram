import { use, useState } from 'react'
import "./BarraEstados.css"
import Estado from './Estado'

function BarraEstados({estados}){


    return(
        <section>
            {
                estados.map((item, index) => (
                    <div><Estado nombrePerfil = {item.nombrePerfil} img = {item.img}/></div>
                ))
            }
        </section>
    )
}

export default BarraEstados
