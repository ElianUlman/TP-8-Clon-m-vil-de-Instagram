import { useState } from 'react'
import "./BarraEstados.css"
import Estado from '../elements/Estado'

function BarraEstados({ estados }){
    return(
        <section>
            {
                estados.map((estado, index) => (
                    <Estado estado={estado} key={index}/>
                ))
            }
        </section>
    )
}

export default BarraEstados