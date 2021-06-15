import React from "react";
import styled from "styled-components";

const IMG = styled.img`
    height: auto;
    max-width: 100%;
`;

const NewsContainer = styled.div`
    /* padding: 2rem; */
    height: auto;
    margin: 0 1rem;
    display: grid;
    grid-template-columns: 2fr 3fr;
`;

const article = (article) => {
    const news = article.article;
    return (
        <NewsContainer>
            <IMG src={news.img_url}></IMG>
            <div>
                <p>
                    {news.title.length > 50
                        ? news.title.slice(0, 50).concat("...")
                        : news.title}{" "}
                </p>
                <p>{news.source_name}</p>
                <input
                    type='button'
                    onClick={() => window.open(news.url)}
                    value='Ver más'
                />
            </div>
        </NewsContainer>
    );
};

export default article;
