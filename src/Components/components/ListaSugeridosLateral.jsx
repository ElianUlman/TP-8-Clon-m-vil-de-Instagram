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
                ListaSugeridos.map((item, index) => (
                    <PerfilSugerido foto={item.url} nombre={item.nombrePerfil || "nombre perfil"} id={item.id} key={index}/>  //la API no retorna un nombre.
                ))
            }

            <Footer/>

        </section>
    )
}

export default ListaSugeridosLateral