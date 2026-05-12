import { useState } from 'react'
import './ListaSugeridosLateral.css'
import PerfilSugerido from './PerfilSugerido'

function ListaSugeridosLateral({ ListaSugeridos }) {

    return (
        <section>

            <div>
                <h5>Suggestions for you</h5>
                <button>See all</button>
            </div>

            {
                ListaSugeridos.map((item, index) => (
                    <PerfilSugerido foto={item.img} nombre={item.nombrePerfil} key={index}/>
                ))
            }

        </section>
    )
}

export default ListaSugeridosLateral