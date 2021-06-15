import { PuffLoader } from "react-spinners";
import styled from "styled-components";

const IsLoadingComponentStyling = styled.div`
    color: black;
`;

export const IsLoadingComponent = () => {
    return (
        <IsLoadingComponentStyling>
            <h4>Cargando...</h4>
            <PuffLoader color={"#000000"} loading={true} size={200} />
        </IsLoadingComponentStyling>
    );
};

const ErrorComponentStyling = styled.div`
    color: red;
`;

export const ErrorComponent = (props) => {
    return (
        <ErrorComponentStyling>
            <h4>No se han encontrado artículos sobre {props.search}.</h4>
        </ErrorComponentStyling>
    );
};
