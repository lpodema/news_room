import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        // padding: theme.spacing(2),
        margin: "auto",
        maxWidth: 500,
    },
    image: {
        maxWidth: "100%",
        maxHeight: "100%",
    },
    img: {
        // margin: "auto",
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%",
    },
}));

const Article = (article) => {
    const classes = useStyles();

    const news = article.article;
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2} direction='column'>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img
                                className={classes.img}
                                alt='complex'
                                src={news.img_url}
                            />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant='h5'>
                                    {news.source_name}
                                </Typography>
                                <Typography variant='body1' gutterBottom>
                                    {news.title}
                                </Typography>
                            </Grid>
                            <Grid container direction='row-reverse'>
                                <Grid item xs={12}>
                                    <Button
                                        type='button'
                                        onClick={() => window.open(news.url)}
                                        color='primary'
                                        variant='outlined'>
                                        Ver más
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default Article;
