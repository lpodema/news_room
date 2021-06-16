import React, { Component } from "react";
import Article from "./article";
import { ErrorComponent, IsLoadingComponent } from "./uielements";
import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsToShow: [],
            page: 1,
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
        if (params.includes("latest")) {
            this.props.onChangeTab(0);
        } else {
            if (params.includes("category")) {
                this.props.onChangeTab(parseInt(params[params.length - 1]));
            } else {
                this.props.onChangeTab(7);
            }
        }
        this.props.onGet(params);
    }

    componentWillUnmount() {
        this.props.onClear();
        this.mounted = false;
    }

    onPaginate = (event, value) => {
        this.setState({ page: value });
    };

    render() {
        const { news, loadingError, isLoading } = this.props;
        const page = this.state.page;
        if (loadingError) {
            return (
                <ErrorComponent
                    search={
                        this.props.term
                            ? this.props.term
                            : this.props.url.category
                    }
                />
            );
        }

        if (isLoading) {
            return <IsLoadingComponent />;
        }

        if (news.length > 0) {
            const newsToShow = news.slice((page - 1) * 12, page * 12);
            return (
                <>
                    <Grid container spacing={3}>
                        {newsToShow.map((article) => (
                            <Grid item xs={12} sm={4} key={article.news_id}>
                                <Article article={article}></Article>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid
                        container
                        justify='space-evenly'
                        alignContent='center'
                        direction='column'
                        alignItems='stretch'>
                        <Pagination
                            count={Math.ceil(news.length / 12)}
                            color='primary'
                            showFirstButton
                            showLastButton
                            page={page}
                            onChange={this.onPaginate}
                        />
                    </Grid>
                </>
            );
        }
    }
}

export default Main;
