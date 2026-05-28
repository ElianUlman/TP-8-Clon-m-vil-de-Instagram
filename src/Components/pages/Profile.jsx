import { use, useState, useEffect } from 'react'
import { getXpics, getCatById } from '../../api_connection/api'
import InfoPerfil from "../components/infoPerfil.jsx"
import PublicacionesPerfil from '../components/PublicacionesPerfil.jsx'
import BarraLateral from '../elements/BarraLateral'
import "../App.css"

function Profile() {

    

    const [perfil, setPerfil] = useState()
    const [misPosts, setMisPosts] = useState()
    const [misEstados, setMisEstados] = useState()

    const [miPerfil, setMiPerfil] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    

    useEffect(() => {


        async function loadData() {

            if (miPerfil == null) {

                let storedPerfil = JSON.parse(localStorage.getItem("myprofile")) || ""
                if (storedPerfil == "") {
                    storedPerfil = (await getXpics(1))[0]
                    localStorage.setItem("myprofile", JSON.stringify(storedPerfil))
                    setPerfil(storedPerfil)
                } else {
                    setPerfil(storedPerfil)
                }

                let storedMyPosts = JSON.parse(localStorage.getItem("myposts")) || ""
                if (storedMyPosts == "") {
                    storedMyPosts = await getXpics(10)
                    localStorage.setItem("myposts", JSON.stringify(storedMyPosts))
                    setMisPosts(storedMyPosts)
                } else {
                    setMisPosts(storedMyPosts)
                }

                let storedMisEstados = JSON.parse(localStorage.getItem("mystories")) || ""
                if (storedMisEstados == "") {
                    storedMisEstados = await getXpics(5)
                    localStorage.setItem("mystories", JSON.stringify(storedMisEstados))
                    setMisEstados(storedMisEstados)
                } else {
                    setMisEstados(storedMisEstados)
                }



                setMiPerfil({
                    ...storedPerfil,
                    "posts": [...storedMyPosts],
                    "estadosGuardados": [...storedMisEstados]
                })
                setIsLoaded(true)

            }

        }

        loadData()

    }, [])

    return (
        <section className="profile-layout">

            <BarraLateral />

            <div className="profile-main">
                {isLoaded
                    ? <>
                        <InfoPerfil perfil={miPerfil} />
                        <PublicacionesPerfil perfil={miPerfil} />
                      </>
                    : <p className="profile-cargando">cargando...</p>
                }
            </div>

        </section>
    )
}

export default Profile