import React from "react";
import { connect } from "react-redux";
import "./Result.scss";
import ProgressBar from "./ProgressBar";

function Result({ question, user, authedUser, error }) {
    const { optionOne, optionTwo } = question;
    const totalVotes = optionOne.votes.length + optionTwo.votes.length;
    const num1 = optionOne.votes.length;
    const num2 = optionTwo.votes.length;
    const prg1 = (optionOne.votes.length / 3) * 100;
    const prg2 = (optionTwo.votes.length / 3) * 100;

    return (
        <div className="result">
            {error === "404 page" ? (
                <h1 className="firstHeader">{error}</h1>
            ) : (
                <React.Fragment>
                    <h2 className="result__heading">Asked by {user.name}. </h2>
                    <div className="result__info">
                        <div className="result__img__container ">
                            <img
                                src={user.avatarURL}
                                alt={user.name}
                                className="result__img"
                            />
                        </div>
                        <div className="result__right">
                            <h1>Results:</h1>
                            <div className="result__qus">
                                {optionOne.votes.includes(authedUser) ? (
                                    <span className="result__votes">
                                        Your vote
                                    </span>
                                ) : (
                                    ""
                                )}
                                <h3>{optionOne.text}?</h3>
                                <ProgressBar completed={Math.round(prg1)} />
                                <p>
                                    {num1} out of {totalVotes} votes
                                </p>
                            </div>

                            <div className="result__hr"></div>

                            <div className="result__qus">
                                {optionTwo.votes.includes(authedUser) ? (
                                    <span className="result__votes">
                                        Your vote
                                    </span>
                                ) : (
                                    ""
                                )}

                                <h3>{optionTwo.text}?</h3>
                                <ProgressBar completed={Math.round(prg2)} />
                                <p>
                                    {num2} out of {totalVotes} votes
                                </p>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )}
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    if (isEmpty(state.questions) || isEmpty(state.users)) {
        return {
            error: "404 page",
        };
    } else {
        const question = state.questions[ownProps.match.params.resultQuestion];
        const user = state.users[question.author];
        return {
            question,
            user,
            authedUser: state.authedUser,
        };
    }
};
export default connect(mapStateToProps)(Result);
