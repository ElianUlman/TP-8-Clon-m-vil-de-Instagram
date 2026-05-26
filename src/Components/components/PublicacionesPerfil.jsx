import { useState } from 'react'
import "./PublicacionesPerfil.css"


function PublicacionesPerfil({ perfil }) {
    return (
        <section>

            <div>
                <button><img src="#" alt="" />POSTS</button>
                <button><img src="#" alt="" />REELS</button>
                <button><img src="#" alt="" />TAGGED</button>
            </div>

            <div>
                {
                    perfil.posts.map((post, index) =>{
                        return <img src={post.url} alt="postImage" />
                    })
                }
            </div>

        </section>
    )
}

export default PublicacionesPerfil
