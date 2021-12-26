import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUserToNull } from "../Redux/authedUser/authedUser";
import "./Navbar.scss";
function Navbar(props) {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li>
                    <Link to="/questions">Home</Link>
                </li>
                <li>
                    <Link to="/add">New Question</Link>
                </li>
                <li>
                    <Link to="/leaderbored">Leader Bored</Link>
                </li>
            </ul>
            <ul className="nav__list">
                {props.user && (
                    <li className="nav__spic">
                        <p> {`Hello, ${props.user.name}`}</p>
                        <img
                            src={props.user.avatarURL}
                            alt="user img"
                            className="nav__img"
                        />
                    </li>
                )}

                {props.user ? (
                    <Link
                        to="/"
                        onClick={() => props.dispatch(setAuthedUserToNull())}
                    >
                        Log Out
                    </Link>
                ) : (
                    <Link to="/">Log In</Link>
                )}
            </ul>
        </nav>
    );
}
const mapStateToProps = (state) => {
    const authedUser = state.authedUser;
    const user = state.users[authedUser];
    return { user };
};

export default connect(mapStateToProps)(Navbar);
