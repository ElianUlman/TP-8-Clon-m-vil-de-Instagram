import { useState } from 'react'
import "./PublicacionesPerfil.css"


function PublicacionesPerfil({ perfil }) {
    return (
        <section className="publicaciones-perfil">

            <div className="publicaciones-perfil__tabs">
                <button className="publicaciones-perfil__tab publicaciones-perfil__tab--activa"><img src="../src/img/posts.png" alt="" />POSTS</button>
                <button className="publicaciones-perfil__tab"><img src="../src/img/reels.png" alt="" />REELS</button>
                <button className="publicaciones-perfil__tab"><img src="../src/img/tagged.png" alt="" />TAGGED</button>
            </div>

            <div className="publicaciones-perfil__grid">
                {
                    perfil.posts.map((post, index) =>{
                        return <div className="publicaciones-perfil__item"><img className="publicaciones-perfil__img" src={post.url} alt="postImage" /></div>
                    })
                }
            </div>

        </section>
    )
}

export default PublicacionesPerfil
