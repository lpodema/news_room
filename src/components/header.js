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

const styledHeader = makeStyles({
    root: {
        height: 100,
        paddingTop: 110,
    },
});

const MenuTabs = (props) => {
    const handleChange = (event, newValue) => {
        props.onChangeTab(newValue);
    };

    return (
        <AppBar position='fixed'>
            <Paper elevation={3}>
                <Grid container justify='space-around'>
                    <Tabs
                        value={props.tab}
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
                        <Tab label='Busqueda' disabled={props.tab !== 7}></Tab>
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
            direction='row'
            justify='flex-end'
            alignItems='flex-end'
            alignContent='flex-end'
            className={classes.root}
            height={120}>
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
            <MenuTabs {...props} />
        </Grid>
    );
};

export default Header;
