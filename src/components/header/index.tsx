import { useState } from "react"
import { Link } from "react-router-dom"
import { EnvelopeSimple, List, X } from "phosphor-react"
import icon from '/icon.svg'
import { SideBar } from "../sideBar"
import "./styles.scss"




export function Header(){

    return(
        <header>
            <Link to={`/`}><img src={icon} alt="icon" /></Link>
            
            <h2>Bruna Santos</h2>

            <div>
            <SideBar/>
            </div>

            <ul>
                <li> <Link to={`/`}>Home</Link> </li>
                <li> <Link to={`/aboutPage`}> Sobre</Link></li>
                <li> <Link to={`/projectsPage`}>Projetos</Link> </li>
            </ul>

            <div className="contact-wrapper">
            <EnvelopeSimple size={32} color="#fffafa"  className="svgEnvelope" />
            <a target='blanck'
             href="mailto:brunahta2025@hotmail.com?subject=Hello">
            <p>Fale Comigo.</p>
            </a>
            
            </div>
         
        </header>
    )
}