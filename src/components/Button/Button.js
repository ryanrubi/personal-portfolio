import { Fragment } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Button.css";

const Nav = () => {
    const history = useHistory();

    const homepage = () => {
        history.push("/");
    };

    return (
        <Fragment>
            <h1 id="logo" onClick={homepage}>Ꮢ</h1>
            <NavLink id="back" to="/">Go Back</NavLink>
        </Fragment>
    );
};

export default Nav;