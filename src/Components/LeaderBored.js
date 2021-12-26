import React from "react";
import "./LeaderBored.scss";
import LeaderBoredItem from "./LeaderBoredItem";
import { connect } from "react-redux";

function LeaderBored(props) {
    const usersID = Object.keys(props.users);
    usersID.sort((a, b) => {
        return (
            props.users[b].questions.length +
            Object.keys(props.users[b].answers).length -
            (props.users[a].questions.length +
                Object.keys(props.users[a].answers).length)
        );
    });
    return (
        <div className="LeaderBored">
            {props.authedUser ? (
                <ul className="LeaderBored__list">
                    {usersID.map((id) => {
                        return <LeaderBoredItem key={id} id={id} />;
                    })}
                </ul>
            ) : (
                <h1 className="firstHeader">Please log In</h1>
            )}
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        users: state.users,
        authedUser: state.authedUser,
    };
};
export default connect(mapStateToProps)(LeaderBored);
