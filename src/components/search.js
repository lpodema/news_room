import { TextField } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

const Input = (props) => (
    <TextField
        id='outlined-search'
        label='Buscar palabras clave'
        type='text'
        variant='outlined'
        size='small'
        value={props.value}
        onKeyDown={(e) => props.handleKeyPress(e)}
        onChange={(e) => {
            props.onChange(e);
        }}
    />
);

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    history = this.props.history;

    handleSubmit = async () => {
        if (this.state.value !== "") {
            this.props.onClear();
            await this.props.onGet(`search/${this.state.value}`);
            this.history.push(`/search/${this.state.value}`);
        } else {
            this.history.push(`/`);
        }
    };

    handleChange = (event) => {
        this.setState({ value: event.target.value });
        if (event.key === "Enter") {
            this.handleSubmit();
        }
    };

    handleKeyPress = (event) => {
        if (event.key === "Enter") {
            this.handleSubmit();
        }
    };

    render() {
        return (
            <Grid container direction='row' lg={12} alignItems='stretch'>
                <Grid item>
                    <Input
                        onChange={this.handleChange}
                        value={this.state.value}
                        handleKeyPress={this.handleKeyPress}
                        history={this.props.history}
                    />
                </Grid>
                <Grid item>
                    <Button
                        variant='contained'
                        onClick={this.handleSubmit}
                        color='primary'
                        fullWidth={true}>
                        Buscar
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

const SearchMenu = withRouter(Search);
export default SearchMenu;
