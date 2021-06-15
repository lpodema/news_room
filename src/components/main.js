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
        console.log("llamado al constructor,");
        super(props);
        this.state = {
            newsToShow: [],
            page: 0,
        };
        this.mounted = true;
    }

    componentDidMount() {
        let params;
        if (this.props.url) {
            params = this.props.url.category;
        } else {
            params = `search/${this.props.term}`;
        }
        this.props.onGet(params)
    }

    componentWillUnmount() {
        this.props.onClear()
        this.mounted = false;
    }

    onPaginate = (quantity) => {
        const newPage = this.state.page + quantity;
        this.setState({ page: newPage });
        this.setState({
            newsToShow: this.state.news.slice(newPage * 12, newPage * 12 + 12),
        });
    };

    render() {
        const { news, loadingError, isLoading } = this.props;
        
        if (loadingError) {
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
            const newsToShow = news.slice(0, 12);
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
