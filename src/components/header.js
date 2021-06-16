import React from "react";
import { Link } from "react-router-dom";
import Search from "../containers/searchMenu";
import routes from "../components/routes";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { AppBar, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

const styledHeader = makeStyles({
    root: {
        height: 120,
        alignItems: "flex-end",
    },
});

const MenuTabs = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <AppBar position='fixed'>
            <Paper elevation={3}>
                <Grid container justify='space-around'>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor='primary'
                        textColor='primary'
                        variant='scrollable'
                        scrollButtons='auto'>
                        {routes.map((route) => (
                            <Tab
                                key={route.path}
                                label={route.label}
                                component={Link}
                                to={`/${route.path}`}></Tab>
                        ))}
                    </Tabs>
                </Grid>
            </Paper>
        </AppBar>
    );
};

const Header = (props) => {
    const classes = styledHeader();
    return (
        <Grid
            container
            xs={12}
            direction='row'
            justify='flex-end'
            alignItems='center'
            alignContent='flex-end'
            className={classes.root}>
            <Grid item>
                <TextField
                    id='outlined-search'
                    label='Busqueda'
                    type='search'
                    variant='outlined'
                    component={Search}
                    handleChangeInput={props.handleChangeInput}
                />
            </Grid>
            <MenuTabs props={props} />
        </Grid>
    );
};

export default Header;
