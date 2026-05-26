import { useState, useEffect } from 'react'
import { getXpics, getCatById } from '../../api_connection/api'
import BarraEstados from '../components/BarraEstados'
import ListaSugeridosLateral from '../components/ListaSugeridosLateral.jsx'
import Feed from '../components/Feed.jsx'
import PublicacionEspecifica from "../components/PublicacionEspecifica.jsx"

function Home() {
    const [estados, setEstados] = useState()
    const [sugeridos, setSugeridos] = useState()
    const [perfil, setPerfil] = useState()
    const [posts, setPosts] = useState()
    const [viendoPublicacion, setViendoPublicacion] = useState(null)
    const [authors, setAuthors] = useState()

    const verPublicacion = () => {
        setViendoPublicacion
    }

    useEffect(() => {

        async function loadData() {
            if (estados == null) {

                // --- perfil ---
                let perfilData = JSON.parse(localStorage.getItem("myprofile")) || ""
                if (perfilData == "") {
                    const perfilPic = await getXpics(1)
                    perfilData = perfilPic[0]
                    localStorage.setItem("myprofile", JSON.stringify(perfilData))
                }

                const perfilEstadoPics = await getXpics(3)
                const authorEstadoPics = await getXpics(30)
                const allEstadoPics = [...perfilEstadoPics, ...authorEstadoPics]

                const perfilAuthor = {
                    id: 0,
                    nombre: "mi perfil",
                    url: perfilData.url,
                    posts: 12,
                    followers: 48,
                    following: 35,
                    descripcion: "esta es mi cuenta de instagram",
                    estados: [0, 1, 2]
                }

                setPerfil(perfilAuthor)

                const authorPics = await getXpics(10)

                const otrosAuthors = Array.from({ length: 10 }, (_, i) => ({
                    id: i + 1,
                    nombre: "instagram user",
                    url: authorPics[i].url,
                    posts: (i + 1) * 3,
                    followers: (i + 1) * 5,
                    following: (i + 1) * 10,
                    descripcion: `soy el usuario de instagram numero ${i + 1}`,
                    estados: Array.from({ length: 3 }, (_, j) => 3 + i * 3 + j)
                }))

                const builtAuthors = [perfilAuthor, ...otrosAuthors]
                setAuthors(builtAuthors)

                // --- sugeridos desde authors, sin incluir el perfil propio ---
                setSugeridos(builtAuthors.slice(1, 6))

                // --- lista global de estados ---
                const builtEstados = allEstadoPics.map((pic, i) => {
                    const author = builtAuthors.find(a => a.estados.includes(i))
                    return {
                        id: i,
                        img: pic.url,
                        author
                    }
                })

                setEstados(builtEstados)

                // --- posts ---
                const postPics = await getXpics(10)

                const builtPosts = postPics.map((pic, i) => {
                    const cantidadComentarios = i + 2
                    const comentarios = []
                    for (let c = 0; c < cantidadComentarios; c++) {
                        comentarios.push({
                            author: builtAuthors[c % builtAuthors.length],
                            contenido: "que linda foto!"
                        })
                    }

                    return {
                        id: i,
                        url: pic.url,
                        author: builtAuthors[i % builtAuthors.length],
                        likes: (i + 1) * 7,
                        descripcion: "una publicacion mas en instagram",
                        comentarios
                    }
                })

                setPosts(builtPosts)
            }
        }

        loadData()

    }, [])

    return (
        <section>
            {viendoPublicacion === null && (
                <>
                    {estados ? <BarraEstados estados={estados} /> : <p>cargando...</p>}
                    {(sugeridos && perfil) && <ListaSugeridosLateral ListaSugeridos={sugeridos} profile={perfil} />}
                    {posts ? <Feed publicaciones={posts} /> : <p>cargando posts...</p>}
                </>
            )}

            {viendoPublicacion != null && <PublicacionEspecifica publicacion={viendoPublicacion} />}
        </section>
    )
}

export default Home