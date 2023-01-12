import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import {  List, X } from "phosphor-react"
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
                    <li> <Link to={`/aboutPage`}> About</Link></li>
                    <li> <Link to={`/projects`}>Projects</Link> </li>
                </ul>
                </aside> )}

        </div>
        </div>

    )
}