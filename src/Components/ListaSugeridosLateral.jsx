import { useState } from 'react'
import './ListaSugeridosLateral.css'
import PerfilSugerido from './PerfilSugerido'
import MiPerfil from './MiPerfil'
import Footer from './Footer'

function ListaSugeridosLateral({ ListaSugeridos, profile }) {

    return (
        
        <section>

            <MiPerfil Profile={profile}/>

            <div>
                <h5>Suggestions for you</h5>
                <button>See all</button>
            </div>

            {
                ListaSugeridos.map((item, index) => (
                    <PerfilSugerido foto={item.img} nombre={item.nombrePerfil} key={index}/>
                ))
            }

            <Footer/>

        </section>
    )
}

export default ListaSugeridosLateral