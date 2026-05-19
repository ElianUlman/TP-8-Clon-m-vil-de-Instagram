import { use, useState, useEffect } from 'react'
import { get10pics } from '../../api_connection/api'
import BarraEstados from '../components/BarraEstados'

function Home( ){
    const [profiles, setProfile] = useState()

    useEffect(() => {

        async function loadData() {
            if(profiles == null){
                const data = await get10pics()
                setProfile(data)
            }
            
        }

        loadData()

    }, [])

    return(
        <section>
            
            {profiles? < BarraEstados estados={profiles}/> : <p>cargando</p> }
            
        </section>
    )
}

export default Home