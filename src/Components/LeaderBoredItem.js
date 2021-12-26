import React from "react";
import { connect } from "react-redux";
import "./LeaderBoredItem.scss";
function LeaderBoredItem({ user: { name, answers, questions, avatarURL } }) {
    const answeredQuestion = Object.keys(answers).length;
    const createdQuestion = questions.length;
    const score = answeredQuestion + createdQuestion;
    return (
        <li className="LeaderBoredItem">
            <div className="LeaderBoredItem__img__container">
                <img
                    src={avatarURL}
                    alt={name}
                    className="LeaderBoredItem__img"
                />
            </div>
            <div className="LeaderBoredItem__info">
                <h1 className="firstHeader">{name}</h1>
                <div>
                    <p>Answered Questions</p> <span>{answeredQuestion}</span>
                </div>
                <div>
                    <p>Created Questions</p> <span>{createdQuestion}</span>
                </div>
            </div>
            <div className="LeaderBoredItem__score">
                <h2>Score</h2>
                <p>{score}</p>
            </div>
        </li>
    );
}

const mapStateToProps = ({ users }, { id }) => {
    return {
        user: users[id],
    };
};
export default connect(mapStateToProps)(LeaderBoredItem);
