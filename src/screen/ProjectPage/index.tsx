import {gql, useQuery} from '@apollo/client'
import { useState } from "react"
import "./styles.scss"

const GET_INFO_QUERY = gql`
query {
    portfolio {
      id
      iframeUrl
      title
      discription
    }
  }

`
interface GetInfoQueryResponse 
{portfolio: {
  id:string
  iframeUrl: string
  title: string
  discription: string
}[]}

export function ProjectsPage(){
    const { data } = useQuery<GetInfoQueryResponse>(GET_INFO_QUERY);
// const [readMore, setMore] = useState(false)
    
    return(
        <div className="projectsPage-container">
            
                {data?.portfolio.map((info) => {
                    return(
                        <div className="ted-ed" key=
                        {info.id}>
                        <h2 className="ted-ed-h2">{info.title}</h2>
                        <iframe src={info.iframeUrl}
                         frameBorder="0"></iframe>

                        <p>{info.discription}</p>
                        </div>
                    )
                })}
            



        </div>
    )
}