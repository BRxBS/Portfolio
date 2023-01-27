import { useState } from "react"
import "./styles.scss"

export function ProjectsPage(){
const [readMore, setMore] = useState(false)
    
    return(
        <div className="projectsPage-container">
            <div className="ted-ed">
            
            <h2 className="ted-ed-h2">Plataforma de Lições</h2>
            <iframe src="https://ted-ed-plataform-ejiiqxx8b-brxbs.vercel.app/" 
                    frameBorder="0"></iframe>

            <p>Uma plataforma em que você faz a sua inscrição somente com nome completo e 
                e-mail e então você tera acesso a uma serie de video aulas
                que explicam sobre virus e pandemias entre outras coisas sobre saúde. </p>
            </div>

            {/* <div className="meeting">
            <iframe src="https://meeting-app-bmmr-1mjaqta2u-brxbs.vercel.app/" frameBorder="0"> oi</iframe>
            </div>

            <div className="mem-game">
            <iframe src="https://brxbs.github.io/Memory-Game/" frameBorder="0"> oi</iframe>
            </div> */}


        </div>
    )
}