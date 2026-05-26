import { useState } from 'react'
import './Footer.css'

function Footer(){
    const [year, setYear] = useState(new Date().getFullYear())

    return(
        <div className="footer">

            <div className="footer__links">
                <a className="footer__link" href="">About</a>
                <a className="footer__link" href="">Help</a>
                <a className="footer__link" href="">Press</a>
                <a className="footer__link" href="">API</a>
                <a className="footer__link" href="">Jobs</a>
                <a className="footer__link" href="">Privacy</a>
                <a className="footer__link" href="">Terms</a>
                <a className="footer__link" href="">Locations</a>
                <a className="footer__link" href="">Language</a>
                <a className="footer__link" href="">Meta Verified</a>
            </div>

            <p className="footer__copyright">© {year} INSTAGRAM FROM META</p>

        </div>
    )
}

export default Footer