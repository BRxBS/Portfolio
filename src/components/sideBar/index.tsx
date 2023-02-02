import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import {  EnvelopeSimple, List, X } from "phosphor-react"
import "./styles.scss"



export function SideBar(){
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handler = () => setIsOpen(false)

        window.addEventListener('click', handler)
        return () => {
            window.addEventListener('click', handler)
        }
    },[])
    const handleInputClick = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation()
        setIsOpen(!isOpen)
    }
    return(

        <div className="dropdown_cart_container">
        <div className="container-aside" onClick={handleInputClick}>
            {isOpen ? 
          
             <X size={32} 
                color="#fffafa" 
                className="svgX" />      
            : 
             <List size={32} 
                   color="#fffafa" 
                   className="svgList" />}
         { isOpen  &&   (          
                <aside>
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

                </aside> )}

        </div>
        </div>

    )
}