import "./styles.scss"
import myImg from '/img.svg'

export function HomePage(){

    
    return(
        <div className="HomePage-container">
            <div className="img-wrapper">
            <img src={myImg} alt="myPhoto" />
            </div>


            <div className="text">
            <h2>
                Introdução
            </h2>
            <p className="top-text"> I enjoy build websites. </p>
             <p>Todo dia é dia de <strong>Aprender</strong>.</p> 
            </div>
    
        </div>
    )
}