import React, { Component } from "react";
import Article from "./article";
import styled from "styled-components";

const Grilla = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* grid-template-rows: 1fr 1fr 1fr; */
`;

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: props.articles,
            articlesToShow: props.articles.slice(0, 12),
            hasError: props.hasError,
            isLoading: props.isLoading,
            page: 0,
        };
    }

    componentWillMount() {
        // console.log(this.props.url.category);
        this.props.onGet(this.props.url.category);
    }

    onPaginate = (quantity) => {
        const newPage = this.state.page + quantity;
        this.setState({ page: newPage });
        this.setState({
            articlesToShow: this.state.articles.slice(
                newPage * 12,
                newPage * 12 + 12
            ),
        });
    };

    render() {
        const { articles, hasError, isLoading } = this.state;
        if (hasError) {
            return (
                <div className='container'>
                    <h6>Error al buscar los repos.</h6>
                </div>
            );
        }

        if (isLoading) {
            return (
                <div className='container'>
                    <h6>Loading…</h6>
                </div>
            );
        }

        if (articles) {
            const { articlesToShow } = this.state;
            return (
                <Grilla>
                    {articlesToShow.map((article) => (
                        <Article
                            article={article}
                            key={article.news_id}></Article>
                    ))}
                    <button
                        onClick={() => this.onPaginate(-1)}
                        disabled={this.state.page === 0}>
                        Pagina Anterior
                    </button>
                    <button
                        onClick={() => this.onPaginate(1)}
                        disabled={this.state.page * 12 + 12 >= articles.length}>
                        Pagina Siguiente
                    </button>
                </Grilla>
            );
        }
    }
}

export default Main;
