import React, { Component } from "react";
import { connect } from "react-redux";
import { getInitAuthedUser } from "../Redux/authedUser/authedUser";
import { getInitData } from "../Redux/shared";
import "./Login.scss";
export class Login extends Component {
    componentDidMount() {
        this.props.dispatch(getInitData());
    }
    handleChange = (e) => {
        e.preventDefault();
        const authedUser = e.target.value;
        this.props.dispatch(getInitAuthedUser(authedUser));
        this.props.history.push("./questions");
    };
    render() {
        const { usersID, users } = this.props;
        return (
            <div className="login">
                <h1>Welcome To Would You Rather Project !!</h1>
                <h3>Please sign in to continue </h3>
                <select
                    onChange={(e) => this.handleChange(e)}
                    className="login__select"
                >
                    <option value="none" className="login__option">
                        None
                    </option>
                    {usersID.map((userID) => {
                        const user = users[userID];
                        return (
                            <option
                                className="login__option"
                                key={user.id}
                                value={user.id}
                            >
                                {user.name}
                            </option>
                        );
                    })}
                </select>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        usersID: Object.keys(state.users),
        users: state.users,
    };
};
export default connect(mapStateToProps)(Login);
