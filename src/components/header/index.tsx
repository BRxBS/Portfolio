import "./styles.scss"
import icon from '../../../public/icon.svg'
import { EnvelopeSimple, List, } from "phosphor-react"

export function Header(){

    
    return(
        <header>
            <img src={icon} alt="icon" />
            <h2>Bruna Santos</h2>
            <List size={32} color="#fffafa" className="svgList" />

            <ul>
                <li> Home</li>
                <li> About</li>
                <li> Projects</li>
            </ul>

            <div className="contact-wrapper">
            <EnvelopeSimple size={32} color="#fffafa"  className="svgEnvelope" />
            <p>Talk to me.</p>
            </div>
         
        </header>
    )
}