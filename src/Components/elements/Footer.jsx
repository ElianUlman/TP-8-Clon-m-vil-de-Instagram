import { useState } from 'react'
import './Footer.css'

function Footer(){

    const [year, setYear] = useState(new Date().getFullYear())

    return(
        <div>

            <div>

                <a href="">About</a>
                <a href="">Help</a>
                <a href="">Press</a>
                <a href="">API</a>
                <a href="">Jobs</a>
                <a href="">Privacy</a>
                <a href="">Terms</a>
                <a href="">Locations</a>
                <a href="">Language</a>
                <a href="">Meta Verified</a>

            </div>

            <p>@{year} INSTAGRAM FROM META</p>

        </div>
    )
}

export default Footer