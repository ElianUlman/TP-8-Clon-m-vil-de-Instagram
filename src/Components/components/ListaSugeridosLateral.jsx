import { useState } from 'react'
import './ListaSugeridosLateral.css'
import PerfilSugerido from '../elements/PerfilSugerido'
import MiPerfil from '../elements/MiPerfil'
import Footer from '../elements/Footer'

function ListaSugeridosLateral({ ListaSugeridos, profile }) {

    return (
        
        <section className="lista-sugeridos-lateral">

            <MiPerfil Profile={profile}/>
            
            <div className="lista-sugeridos-lateral__header">
                <h5 className="lista-sugeridos-lateral__titulo">Suggestions for you</h5>
                <button className="lista-sugeridos-lateral__ver-todos">See all</button>
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