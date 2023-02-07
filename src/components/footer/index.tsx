import { LinkedinLogo } from "phosphor-react"
import { Link } from "react-router-dom"
import social from '/social.svg'
import "./styles.scss"




export function Footer(){

    return(
        <main className="main-footer">

        <footer>

        <a href="https://www.linkedin.com/in/bruna-santos-9bb5b0220" target='blanck' > 
        <LinkedinLogo size={32} color="#fffafa" />
        LinkedIn
        </a>

        <Link to={`/social`}> 
        <img className="social-img" src={social} alt="" />
        <p>Redes Sociais</p>
        </Link>

        </footer>
        </main>

    )
}