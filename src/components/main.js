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
            news: [],
            articlesToShow: [],
            hasError: false,
            isLoading: true,
            page: 0,
        };
        this.mounted = true;
    }

    controller = new AbortController();

    componentDidMount() {
        console.log(this.props);
        this.props.onGet(this.props.url.category).then(() => {
            if (this.mounted) {
                this.setState({
                    news: this.props.news,
                });
                this.setState({
                    isLoading: false,
                });
            }
        });
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    onPaginate = (quantity) => {
        const newPage = this.state.page + quantity;
        this.setState({ page: newPage });
        this.setState({
            articlesToShow: this.state.news.slice(
                newPage * 12,
                newPage * 12 + 12
            ),
        });
    };

    render() {
        console.log(this.props);
        const { news, hasError, isLoading } = this.state;
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

        if (news.length > 0) {
            console.log(news);
            const newsToShow = this.state.news.slice(0, 12);
            return (
                <Grilla>
                    {newsToShow.map((article) => (
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
                        disabled={this.state.page * 12 + 12 >= news.length}>
                        Pagina Siguiente
                    </button>
                </Grilla>
            );
        }
    }
}

export default Main;
