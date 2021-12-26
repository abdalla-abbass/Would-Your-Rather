import React, { Component } from "react";
import { connect } from "react-redux";
import { saveQuestionAnswer } from "../Redux/shared";
import "./Poll.scss";

export class Poll extends Component {
    state = {
        option: null,
    };
    handleChange = (e) => {
        const { name, value } = e.target;
        e.preventDefault();
        this.setState({ [name]: value });
    };
    handleOnClick = (e) => {
        e.preventDefault();
        const {
            dispatch,
            question: { id },
            authedUser,
            history,
        } = this.props;
        const { option } = this.state;
        dispatch(saveQuestionAnswer({ authedUser, qid: id, answer: option }));
        history.push("/questions");
    };
    render() {
        const { question, userName } = this.props;
        return (
            <div className="poll">
                {question ? (
                    <React.Fragment>
                        <h1>{userName} asks:</h1>
                        <h2>Would you rather...?</h2>
                        <form className="poll__form">
                            <div className="poll__div">
                                <input
                                    className="poll__input"
                                    id="opt1"
                                    type="radio"
                                    name="option"
                                    value="optionOne"
                                    onChange={(e) => this.handleChange(e)}
                                />
                                <label htmlFor="opt1" className="poll__label">
                                    {question.optionOne.text}
                                </label>
                            </div>
                            <div className="poll__div">
                                <input
                                    className="poll__input"
                                    id="opt2"
                                    type="radio"
                                    name="option"
                                    value="optionTwo"
                                    onChange={(e) => this.handleChange(e)}
                                />
                                <label htmlFor="opt2" className="poll__label">
                                    {question.optionTwo.text}
                                </label>
                            </div>
                            <button
                                type="poll"
                                className="poll__btn"
                                onClick={(e) => this.handleOnClick(e)}
                            >
                                Submit
                            </button>
                        </form>
                    </React.Fragment>
                ) : (
                    <h1 className="firstHeader">404 page</h1>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const question = state.questions[ownProps.match.params.pollQuestion];
    return {
        question,
        userName: state.users[question.author].name,
        authedUser: state.authedUser,
    };
};
export default connect(mapStateToProps)(Poll);
