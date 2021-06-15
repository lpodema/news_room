import React from "react";
import { withRouter } from "react-router-dom";

const SearchMenu = ({
    onGet,
    onClear,
}) => {
    let input;

    const onClickHandler = async (value, history) => {
        onClear();
        await onGet(`search/${value}`);
        history.push(`/search/${value}`);
    };

    const onEnterHandler = (event, history) => {
        if (event.code === "Enter") {
            onClickHandler(input.value, history);
        }
    };

    const Button = withRouter(({ history }) => (
        <button
            type='button'
            onClick={() => onClickHandler(input.value, history)}>
            Buscar
        </button>
    ));

    const Input = withRouter(({ history }) => (
        <input
            type='text'
            placeholder='buscar palabras clave'
            defaultValue={null}
            ref={(node) => (input = node)}
            onKeyPress={(e) => onEnterHandler(e, history)}
        />
    ));

    return (
        <div>
            <Button />
            <Input />
        </div>
    );
};

export default SearchMenu;
