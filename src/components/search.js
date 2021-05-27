import React from "react";
import { withRouter } from "react-router-dom";

const SearchMenu = ({
    onGet,
    onClear,
    isLoading,
    loadingError,
    handleChangeInput,
}) => {
    let input;

    const onClickHandler = (value, history) => {
        onClear();
        // onGet(`search/${value}`);
        // if (!isLoading && !loadingError) {
        //     console.log(isLoading, loadingError);
        // history.replace(`/`);
        history.push(`/search/${value}`);
        // }
    };

    const onEnterHandler = (event, history) => {
        console.log(event);
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
    // console.log(handleChangeInput);

    return (
        <div>
            <Button />
            <Input />
        </div>
    );
};

export default SearchMenu;
