import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Question.scss";
function Question(props) {
    const { user, status, id } = props;

    return (
        <li className="question">
            <h2 className="question__heading">{user.name} asks:</h2>

            <div className="question__info">
                <div className="question__img__container">
                    <img
                        src={user.avatarURL}
                        alt={user.name}
                        className="question__img"
                    />
                </div>
                <div className="question__result">
                    <h2>Would you rather?</h2>
                    {status === "answered" ? (
                        <Link to={`/questions/showResult/${id}`}>
                            View Result
                        </Link>
                    ) : (
                        <Link to={`/questions/showAnswer/${id}`}>
                            View Question
                        </Link>
                    )}
                </div>
            </div>
        </li>
    );
}
const mapStateToProps = ({ questions, users }, { id }) => {
    return {
        question: questions[id],
        user: users[questions[id].author],
    };
};

export default connect(mapStateToProps)(Question);
