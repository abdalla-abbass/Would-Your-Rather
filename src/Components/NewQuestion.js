import React, { Component } from "react";
import { connect } from "react-redux";
import "./NewQuestion.scss";
import { saveQuestion } from "../Redux/shared";
export class NewQuestion extends Component {
    state = {
        optionOneText: "",
        optionTwoText: "",
    };
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(
            saveQuestion({
                optionOneText: this.state.optionOneText,
                optionTwoText: this.state.optionTwoText,
                author: this.props.authedUser,
            })
        );
        this.props.history.push("./questions");
    };
    render() {
        const { authedUser } = this.props;
        return (
            <div className="newQuestion">
                {authedUser ? (
                    <React.Fragment>
                        <h1 className="newQuestion__header firstHeader">
                            Create New Question
                        </h1>

                        <h3 className="newQuestion__would secondHeader">
                            Would you rather...
                        </h3>
                        <form
                            onSubmit={this.handleSubmit}
                            className="newQuestion__form"
                        >
                            <input
                                className="newQuestion__input"
                                type="text"
                                name="optionOneText"
                                placeholder="Enter Option One Text Here"
                                onChange={this.handleChange}
                            />
                            <div className="newQuestion__or">OR</div>
                            <input
                                className="newQuestion__input"
                                type="text"
                                name="optionTwoText"
                                placeholder="Enter Option Two Text Here"
                                onChange={this.handleChange}
                            />
                            <button
                                type="submit"
                                className="newQuestion__btn btn"
                            >
                                Submit
                            </button>
                        </form>
                    </React.Fragment>
                ) : (
                    <h1 className="firstHeader">Please log In</h1>
                )}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        authedUser: state.authedUser,
    };
};
export default connect(mapStateToProps)(NewQuestion);
