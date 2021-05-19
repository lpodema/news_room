import React from "react";
import { withRouter } from "react-router-dom";

const SearchMenu = ({ onGet, onClear, isLoading, hasError }) => {
    let input;

    const onClickHandler = async (value, history) => {
        onClear();
        onGet(`search/${value}`);
        if (!isLoading && !hasError) {
            console.log(isLoading, hasError);
            history.push("/search/");
        }
    };

    const Button = withRouter(({ history }) => (
        <button
            type='button'
            onClick={() => onClickHandler(input.value, history)}>
            Buscar
        </button>
    ));

    return (
        <div>
            <Button />
            <input
                type='text'
                placeholder='buscar palabras clave'
                defaultValue={null}
                ref={(node) => (input = node)}
            />
        </div>
    );
};

export default SearchMenu;
