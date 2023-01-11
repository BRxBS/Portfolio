import "./styles.scss"
import myImg from '../../../public/img.svg'

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
             <p>Every day is a day to <strong>learn</strong>.</p> 
            </div>
    
        </div>
    )
}