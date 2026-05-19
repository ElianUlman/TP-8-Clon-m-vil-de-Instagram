import { use, useState, useEffect } from 'react'
import { getXpics, getCatById } from '../../api_connection/api'
import BarraEstados from '../components/BarraEstados'
import ListaSugeridosLateral from '../components/ListaSugeridosLateral.jsx'

function Home( ){
    const [estados, setEstados] = useState()
    const [sugeridos, setSugeridos] = useState()
    const [perfil, setPerfil] = useState()

    useEffect(() => {

        async function loadData() {
            if(estados == null){
                
                setEstados(await getXpics(10))
                setSugeridos(await getXpics(5))
                let perfil = JSON.parse(localStorage.getItem("myprofile")) || ""
                
                if(perfil == ""){
                    perfil = await getXpics(1)
                    localStorage.setItem("myprofile", JSON.stringify(perfil[0]))
                    setPerfil(perfil[0])
                }else{
                    setPerfil(perfil)
                }

                //perfil = await getXpics(1)
                //localStorage.setItem("myprofile", perfil[0]) 
                //setPerfil(perfil[0])           //      
                
            }
            
        }

        loadData()

    }, [])

    return(
        <section>
            
            {estados? < BarraEstados estados={estados}/> : <p>cargando...</p> }
            {(sugeridos && perfil) && <ListaSugeridosLateral ListaSugeridos={sugeridos} profile={perfil} /> }
            

        </section>
    )
}

export default Home