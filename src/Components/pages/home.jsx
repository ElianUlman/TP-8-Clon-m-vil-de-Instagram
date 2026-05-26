import { use, useState, useEffect } from 'react'
import { getXpics, getCatById } from '../../api_connection/api'
import BarraEstados from '../components/BarraEstados'
import ListaSugeridosLateral from '../components/ListaSugeridosLateral.jsx'
import Feed from '../components/Feed.jsx'

function Home( ){
    const [estados, setEstados] = useState()
    const [sugeridos, setSugeridos] = useState()
    const [perfil, setPerfil] = useState()
    const [postsXAuthors, setpostsXAuthors] = useState()
    const [perfilesCardSugeridos, setPerfilesCardSugeridos] = useState()
    

    useEffect(() => {

        async function loadData() {
            if(estados == null){
                
                setEstados(await getXpics(7))
                setSugeridos(await getXpics(5))
                let perfil = JSON.parse(localStorage.getItem("myprofile")) || ""
                
                if(perfil == ""){
                    perfil = await getXpics(1)
                    localStorage.setItem("myprofile", JSON.stringify(perfil[0]))
                    setPerfil(perfil[0])
                }else{
                    setPerfil(perfil)
                }

                
                const authors = await getXpics(10)
                const posts = await getXpics(10)
                setpostsXAuthors(posts.map((post, index)=>{return {author: authors[index], ...post}}))
                
                setPerfilesCardSugeridos(await getXpics(5))
            }
            
        }

        loadData()

    }, [])

    return(
        <section>
            
            {estados? < BarraEstados estados={estados}/> : <p>cargando...</p> }
            {(sugeridos && perfil) && <ListaSugeridosLateral ListaSugeridos={sugeridos} profile={perfil} /> }
            {(postsXAuthors && perfilesCardSugeridos) ? <Feed publicaciones={postsXAuthors} sugeridos={perfilesCardSugeridos}/> : <p>cargando posts...</p> }

        </section>
    )
}

export default Home