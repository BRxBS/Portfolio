import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import ReactPlayer from "react-player";
import "./styles.scss";

const GET_INFO_QUERY = gql`
    query info {
        portfolios {
            id
            title
            iframeUrl
            description
            repoUrl
            videoUrl
        }
    }
`;
interface GetInfoQueryResponse {
    portfolios: {
        id: string;
        iframeUrl: string;
        title: string;
        description: string;
        repoUrl: string;
        videoUrl: string;
    }[];
}

export function ProjectsPage() {
    const { data, loading } = useQuery<GetInfoQueryResponse>(GET_INFO_QUERY);
    const [expandedMap, setExpandedMap] = useState<{ [key: string]: boolean }>(
        {}
    );

    const toggleExpand = (newInfo: any) => {
        setExpandedMap((prevExpandedMap) => ({
            ...prevExpandedMap,
            [newInfo.id]: !prevExpandedMap[newInfo.id],
        }));
    };

    return (
        <>
            {loading ? (
                <div>loading...</div>
            ) : (
                <div className="projectsPage-container">
                    {data?.portfolios.map((info) => {
                        const newInfo = { ...info };
                        return (
                            <div className="info-wrapper" key={info.id}>
                                <div className="info-content">
                                    <h2 className="info-title">{info.title}</h2>

                                    {info.iframeUrl ? (
                                        <iframe
                                            src={info.iframeUrl}
                                            frameBorder="0"
                                        ></iframe>
                                    ) : (
                                        <ReactPlayer
                                            url={info.videoUrl}
                                            width="100%"
                                            height="100%"
                                        />
                                    )}

                                    {info.iframeUrl ? (
                                        <a
                                            href={info.iframeUrl}
                                            target="blanck"
                                            className="a-iframeUrl"
                                        >
                                            {" "}
                                            Ir para Página.
                                        </a>
                                    ) : (
                                        ""
                                    )}

                                    <p
                                        className={`info-discription desc-text ${
                                            expandedMap[newInfo.id]
                                                ? "expanded"
                                                : ""
                                        }`}
                                    >
                                        {info.description}
                                    </p>
                                    <p
                                        className="read-more-btn"
                                        onClick={() => toggleExpand(newInfo)}
                                    >
                                        {expandedMap[newInfo.id]
                                            ? "Read Less"
                                            : "Read More"}
                                    </p>

                                    <a
                                        href={info.repoUrl}
                                        target="blanck"
                                        className="repoUrl"
                                    >
                                        Ir ao Repositorio.
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
}
