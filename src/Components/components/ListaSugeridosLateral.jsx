import { useState } from 'react'
import './ListaSugeridosLateral.css'
import PerfilSugerido from '../elements/PerfilSugerido'
import MiPerfil from '../elements/MiPerfil'
import Footer from '../elements/Footer'

function ListaSugeridosLateral({ ListaSugeridos, profile }) {
    return (
        <section>
            <MiPerfil Profile={profile}/>
            
            <div>
                <h5>Suggestions for you</h5>
                <button>See all</button>
            </div>

            {
                ListaSugeridos.map((perfil, index) => (
                    <PerfilSugerido perfil={perfil} key={index}/>
                ))
            }

            <Footer/>
        </section>
    )
}

export default ListaSugeridosLateral