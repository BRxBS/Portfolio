import {gql, useQuery} from '@apollo/client'
import { useState } from "react"
import "./styles.scss"


const GET_INFO_QUERY = gql`
query info {
  portfolios {
    id
    title
    iframeUrl
    description
  }
}

`
interface GetInfoQueryResponse 
{portfolios: {
  id: string
  iframeUrl: string
  title: string
  description: string
}[]}

export function ProjectsPage(){
    const { data } = useQuery<GetInfoQueryResponse>(GET_INFO_QUERY);
    const [expandedMap, setExpandedMap] = useState<{ [key: string]: boolean }>({});
   
    
    const toggleExpand = (newInfo : any) => {
      setExpandedMap(prevExpandedMap => ({
        ...prevExpandedMap,
        [newInfo.id]: !prevExpandedMap[newInfo.id]
      }));
    };

    
    return(
        <div className="projectsPage-container">
            
                {data?.portfolios.map((info) => {
                     const newInfo = {...info};
                    return(
                        <div className="info-content" key={info.id} >
                        <h2 className="info-title">{info.title}</h2>
                        <iframe src={info.iframeUrl}
                         frameBorder="0"></iframe>

                        <p className={`info-discription desc-text ${expandedMap[newInfo.id]  ? "expanded" : ""}`}>{info.description}</p>
                        <p className="read-more-btn"  onClick={() => toggleExpand(newInfo)}>{expandedMap[newInfo.id]  ? 'Read Less' : 'Read More'}</p>
                        </div>
                    )
                })}
            



        </div>
    )
}