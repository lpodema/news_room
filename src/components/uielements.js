import CircularProgress from "@material-ui/core/CircularProgress";
import { Paper, Card, Typography, Grid } from "@material-ui/core/";

export const IsLoadingComponent = () => {
    return (
        <Card elevation={3} height='auto'>
            <Grid container direction='column' alignItems='center'>
                <Typography variant='h5' align='center' color='textPrimary'>
                    Buscando Noticias...
                </Typography>
                <CircularProgress size={100} />
            </Grid>
        </Card>
    );
};

export const ErrorComponent = (props) => {
    return (
        <Paper elevation={3} height='auto'>
            <Typography variant='h5' align='center' color='error'>
                No se han encontrado artículos para {props.search}.
            </Typography>
            <Typography variant='h5' align='center' color='error'>
                Por favor busca otras noticias o bien reintenta nuevamente más
                tarde.
            </Typography>
        </Paper>
    );
};
