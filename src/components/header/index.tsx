import "./styles.scss"
import icon from '../../../public/icon.svg'
import { List } from "phosphor-react"

export function Header(){

    
    return(
        <header>
            <img src={icon} alt="icon" />
            <h2>Bruna Santos</h2>
            <List size={32} color="#fffafa" />
         
        </header>
    )
}