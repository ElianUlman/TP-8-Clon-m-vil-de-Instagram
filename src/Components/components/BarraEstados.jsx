import { use, useState } from 'react'
import "./BarraEstados.css"
import Estado from '../elements/Estado'

function BarraEstados({estados}){


    return(
        <section className="barra-estados">
            {
                estados.map((item, index) => (
                    <Estado   nombrePerfil = {item.nombrePerfil || "estado default"} className="estado__nombre" img = {item.url} key={index} className="estado__avatar"/> //la API no retorna un nombre.
                ))
            }
        </section>  
    )
}

export default BarraEstados
