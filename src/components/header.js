import React from "react";
import { Link } from "react-router-dom";
import Search from "../containers/searchMenu";
import routes from "../components/routes";
const Header = () => {
    return (
        <ul>
            {routes.map((route) => (
                <li key={route.path}>
                    <Link to={route.path}>{route.path}</Link>
                </li>
            ))}
            {/* <li>
                <Link to='/' onClick={}>Home</Link>
            </li>
            <li>
                <Link to='/politica'>politica</Link>
            </li>
            <li>
                <Link to='/internacionales'>internacionales</Link>
            </li>
            <li>
                <Link to='/tecnologia'>tecnologia</Link>
            </li>
            <li>
                <Link to='/espectaculos'>espectaculos</Link>
            </li>
            <li>
                <Link to='/deportes'>deportes</Link>
            </li> */}
            <li>
                <Search />
            </li>
        </ul>
    );
};

export default Header;
