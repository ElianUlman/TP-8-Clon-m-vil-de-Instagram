import { useState } from 'react'
import "./BarraLateral.css"
import { useNavigate } from "react-router-dom";

function BarraLateral() {
    ///miperfil
    const navigate = useNavigate();

    return (

        <section>
            <button><img src="" alt="" /></button>
            <ul>
                <li><img src="" alt="" /><button onClick={() => navigate("/")}>Home</button></li>
                <li><img src="" alt="" /><button>Search</button></li>
                <li><img src="" alt="" /><button>Explore</button></li>
                <li><img src="" alt="" /><button>Reels</button></li>
                <li><img src="" alt="" /><button>Messages</button></li>
                <li><img src="" alt="" /><button>Notifications</button></li>
                <li><img src="" alt="" /><button>Create</button></li>
                <li><img src="" alt="" /><button onClick={() => navigate("/miperfil")}>Profile</button></li> 
                <li><img src="" alt="" /><button>More</button></li>
            </ul>
        </section>
    )
}

export default BarraLateral