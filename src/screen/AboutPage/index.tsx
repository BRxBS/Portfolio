import {gql, useQuery} from '@apollo/client'
import "./styles.scss"

const GET_INFO_QUERY = gql`
query info {
    aboutMes {
      id
      title
      info {
        text
      }
      hardSkills
    }
  }

`
interface GetInfoQueryResponse 
{aboutMes: {
  id: string
  title: string
  info:{
    text:string
  }
  hardSkills:string
}[]}

export function AboutPage(){
   
    
    return(
        <div className="about-container">

                    
                      <div className='about-wrapper' >
                        <div className="about-content" >
                        <h2 className="about-title">Sobre mim:</h2>
                          <div className='about-text' >
                            <p>2020 estudando para o Enem, mas por conta da pandemia de covid-19 fiz o 
                          Enem em 2021 entrei na universidade para estudar Línguas estrangeiras 
                          aplicadas com foco em negociações internacionais na faculdade federal da 
                          Paraíba, por conta da pandemia não pude ingressar imediatamente. </p>
                            <p>      
                            Em março de 2021
                           comecei a me interessar pela área de desenvolvimento de software, e então 
                           iniciei o aprendizado como passatempo, nesse mesmo ano tive a oportunidade de 
                           trabalhar como professora de inglês em uma escola particular (comecei a estudar
                            inglês com 14 anos estudei sozinha por 2 anos, aos 16 anos consegui uma 
                             de estudos em um curso que terminaria no ano de 2020, mas por conta da 
                              e instituição veio a falência), como professora dava aulas para alunos do 2º 
                              ao 5º ano do ensino fundamental, com o trabalho acabei dedicando menos tempo
                               a programação, mas sentia falta.</p>
                            <p>
                            Então decide me dedicar inteiramente a 
                               programação no ano de 2022, pois quanto mais eu entendi sobre lógicas de 
                               programação, como as coisas funcionam em uma aplicação e as possibilidades de 
                               coisas que eu poderia desenvolver, me apaixonei pela área, hoje em dia sinto 
                               que sou uma pessoa diferente, a lógica de programação transformou o meu dia a 
                               dia, hoje enxergo vários caminhos para chegar na solução desejada e entendo 
                               que não existe somente uma alternativa para resolver o meu problema, e o mais 
                               importante, que eu tenho sempre que continuar a aprender, pois sei que em 
                               algum momento eu terei domínio suficiente para entender os meus erros e 
                               consertá-los.
                            </p>
                               </div>
                          
                        <h2 className="about-title">Hard Skills:</h2>
                          <div className='about-text' >
                            <p>Tenho uma rotina diária de estudo e prática e desenvolvimento de projetos </p>
                            
                            <br />
                            Ferramentas que domino: 
                          <ul>
                            <li>Javascript </li>
                            <li>TypeScript  </li>
                            <li>React </li>
                            <li>React-Native  </li>
                            <li>Next.js </li>
                            <li>Html </li>
                            <li>Css  </li>
                            <li>Sass   </li>
                            <li>TailwindCss </li>
                            <li>Styled-Components  </li>
                            <li>MongoDB data-base  </li>
                            <li>Hygraph </li>
                          </ul>
                          Ferramentas que tenho conhecimento, mas não muita prática: 

                          <ul>
                            <li>Node.js </li>
                            <li>Redux </li>
                            <li>Git </li>
                          </ul>
                          </div>

                        </div>
                        </div>
                    
          

            
        </div>
    )
}