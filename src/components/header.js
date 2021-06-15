import React from "react";
import { Link } from "react-router-dom";
import Search from "../containers/searchMenu";
import routes from "../components/routes";
const Header = (props) => {
    return (
        <ul>
            {routes.map((route) => (
                <li key={route.path}>
                    <Link to={`/${route.path}`}>{route.path}</Link>
                </li>
            ))}
            <li>
                <Search handleChangeInput={props.handleChangeInput} />
            </li>
        </ul>
    );
};

export default Header;
