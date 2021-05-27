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
            news: [],
            newsToShow: [],
            loadingError: false,
            isLoading: true,
            page: 0,
        };
        this.mounted = true;
        // this.url = "";
    }

    // controller = new AbortController();

    componentDidMount() {
        console.log("Se montó", this.props);

        let params;

        if (this.props.url) {
            params = this.props.url.category;
        } else {
            params = `search/${this.props.term}`;
        }
        console.log(params);
        this.props.onGet(params).then(() => {
            if (this.mounted) {
                this.setState({
                    news: this.props.news,
                });
                this.setState({
                    isLoading: false,
                });
                this.setState({
                    loadingError: this.props.loadingError,
                });
                // this.setState({
                //     url: this.props.url.category,
                // });
            }
        });
    }

    /*
    componentDidUpdate(prevProps) {
        console.log(prevProps.url.category !== this.props.url.category);
        if (this.props.url.category !== prevProps.url.category) {
            console.log("did update");
            this.props.onGet(this.props.url.category).then(() => {
                if (this.mounted) {
                    this.setState({
                        news: this.props.news,
                    });
                    this.setState({
                        isLoading: false,
                    });
                    this.setState({
                        loadingError: this.props.loadingError,
                    });
                    // this.setState({
                    //     url: this.props.url.category,
                    // });
                }
            });
        }
    }
*/

    // componentWillReceiveProps(prevProps, prevState, snapshot) {
    //     console.log("entro al metodo");
    //     if (this.props.news !== prevProps.news) {
    //         console.log("recibio otras props");
    //         this.setState({
    //             news: this.props.news,
    //         });
    //     }
    // }
    componentWillUnmount() {
        this.setState({ isLoading: true });
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
        // console.log(this.props);
        const { news, loadingError, isLoading } = this.state;
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
            // console.log(news);
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
