import { use, useState } from 'react'
import "./BarraEstados.css"
import Estado from '../elements/Estado'

function BarraEstados({estados}){


    return(
        <section>
            {
                estados.map((item, index) => (
                    <Estado   nombrePerfil = {item.nombrePerfil || "estado default"} img = {item.url} key={index}/> //la API no retorna un nombre.
                ))
            }
        </section>
    )
}

export default BarraEstados
