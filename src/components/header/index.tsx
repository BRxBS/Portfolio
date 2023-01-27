import { useState } from "react"
import { Link } from "react-router-dom"
import { EnvelopeSimple, List, X } from "phosphor-react"
import icon from '../../../public/icon.svg'
import { SideBar } from "../sideBar"
import "./styles.scss"




export function Header(){

    return(
        <header>
            <img src={icon} alt="icon" />
            <h2>Bruna Santos</h2>

            <div>
            <SideBar/>
            </div>

            <ul>
                <li> <Link to={`/`}>Home</Link> </li>
                <li> <Link to={`/aboutPage`}> About</Link></li>
                <li> <Link to={`/projectsPage`}>Projects</Link> </li>
            </ul>

            <div className="contact-wrapper">
            <EnvelopeSimple size={32} color="#fffafa"  className="svgEnvelope" />
            <a href="#">
            <p>Talk to me.</p>
            </a>
            
            </div>
         
        </header>
    )
}