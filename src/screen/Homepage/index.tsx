import "./styles.scss"

export function HomePage(){

    
    return(
        <div className="HomePage-container">
            <div className="img-wrapper">
            <img src="https://picsum.photos/200" alt="" />
            </div>


            <div className="text">
            <h2>
                Introdução
            </h2>
            <p className="top-text"> I enjoy build websites. </p>
             <p>Todos os dias é dia de <strong>aprender</strong>.</p> 
            </div>
    
        </div>
    )
}