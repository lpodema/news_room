import React from "react";
import { Link } from "react-router-dom";
import Search from "../containers/searchMenu";
import routes from "../components/routes";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TextField } from "@material-ui/core";
import styled from "styled-components";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

const MenuTabs = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor='primary'
                textColor='primary'
                centered>
                {routes.map((route) => (
                    <Tab
                        key={route.path}
                        label={route.label}
                        component={Link}
                        to={`/${route.path}`}></Tab>
                ))}
            </Tabs>
        </Paper>
    );
};

const Header = (props) => {
    return (
        <>
            <TextField
                id='outlined-search'
                label='Busqueda'
                type='search'
                variant='outlined'
                component={Search}
                handleChangeInput={props.handleChangeInput}
            />
            <MenuTabs props={props} />
        </>
    );
};

export default Header;
