import { useState } from 'react'
import "./PublicacionesPerfil.css"
import { PostPerfil } from "../elements/PostPerfil.jsx"

function PublicacionesPerfil({ perfil }) {
    return (
        <section>

            <div>
                <button><img src="" alt="" />POSTS</button>
                <button><img src="" alt="" />REELS</button>
                <button><img src="" alt="" />TAGGED</button>
            </div>

            <div>
                {
                    perfil.posts.map((post, index) =>{
                        <PostPerfil url = {post.url}/>
                    })
                }
            </div>

        </section>
    )
}

export default PublicacionesPerfil
