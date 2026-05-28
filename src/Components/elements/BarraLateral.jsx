import { useState } from 'react'
import "./BarraLateral.css"
import { useNavigate } from "react-router-dom";

function BarraLateral() {
    ///miperfil
    const navigate = useNavigate();

    return (

        <section className="barra-lateral">
            <button className="barra-lateral__logo"><img src="../src/img/instagram.png" alt="Instagram" className="barra-lateral__logo-img" /></button>
            <ul className="barra-lateral__nav">
                <li className="barra-lateral__nav-item"><button className="barra-lateral__nav-btn" onClick={() => navigate("/")}><img src="../src/img/home.png" alt="home" className="barra-lateral__nav-icon-img" /><span className="barra-lateral__nav-label">Home</span></button></li>
                <li className="barra-lateral__nav-item"><button className="barra-lateral__nav-btn"><img src="../src/img/search.png" alt="Search" className="barra-lateral__nav-icon-img" /><span className="barra-lateral__nav-label">Search</span></button></li>
                <li className="barra-lateral__nav-item"><button className="barra-lateral__nav-btn"><img src="../src/img/explore.png" alt="Explore" className="barra-lateral__nav-icon-img" /><span className="barra-lateral__nav-label">Explore</span></button></li>
                <li className="barra-lateral__nav-item"><button className="barra-lateral__nav-btn"><img src="../src/img/reels.png" alt="Reels" className="barra-lateral__nav-icon-img" /><span className="barra-lateral__nav-label">Reels</span></button></li>
                <li className="barra-lateral__nav-item"><button className="barra-lateral__nav-btn"><img src="../src/img/messages.png" alt="Messages" className="barra-lateral__nav-icon-img" /><span className="barra-lateral__nav-label">Messages</span></button></li>
                <li className="barra-lateral__nav-item"><button className="barra-lateral__nav-btn"><img src="../src/img/notifications.png" alt="Notifications" className="barra-lateral__nav-icon-img" /><span className="barra-lateral__nav-label">Notifications</span></button></li>
                <li className="barra-lateral__nav-item"><button className="barra-lateral__nav-btn"><img src="../src/img/create.png" alt="Create" className="barra-lateral__nav-icon-img" /><span className="barra-lateral__nav-label">Create</span></button></li>
                <li className="barra-lateral__nav-item"><button className="barra-lateral__nav-btn" onClick={() => navigate('/miperfil')}><img src="../src/img/profile.png" alt="Profile" className="barra-lateral__avatar" /><span className="barra-lateral__nav-label">Profile</span></button></li>
                <li className="barra-lateral__nav-item"><button className="barra-lateral__nav-btn"><img src="../src/img/more.png" alt="More" className="barra-lateral__nav-icon-img" /><span className="barra-lateral__nav-label">More</span></button></li>
            </ul>
        </section>
    )
}

export default BarraLateral