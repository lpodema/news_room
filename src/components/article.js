import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button, Paper } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        margin: "auto",
        maxWidth: 500,
    },
    image: {
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "fill",
    },
    img: {
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%",
    },
}));

const Article = (article) => {
    const classes = useStyles();

    const news = article.article;
    return (
        <Paper elevation={3}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        alt={news.title.slice(0, 50)}
                        height='300'
                        image={news.img_url}
                        title={news.title.slice(0, 50)}
                    />
                    <CardContent>
                        <Grid container spacing={2} direction='column'>
                            <Grid item xs={12} sm container>
                                <Grid item xs spacing={2}>
                                    <Grid item lg>
                                        <Typography
                                            gutterBottom
                                            variant='h6'
                                            align='center'>
                                            {news.source_name}
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            gutterBottom
                                            align='center'>
                                            {news.title}
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        container
                                        direction='column'
                                        alignContent='center'>
                                        <Button
                                            type='button'
                                            onClick={() =>
                                                window.open(news.url)
                                            }
                                            color='primary'
                                            fullWidth={true}>
                                            Ver más
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Paper>
    );
};

export default Article;
