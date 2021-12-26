import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import "./Home.scss";

export class Home extends Component {
    state = {
        question: false,
    };

    handleUnanswered = (e) => {
        this.setState({ question: false });
    };

    handleAnswered = (e) => {
        this.setState({ question: true });
    };

    render() {
        const { questions, questionsIDs, authedUser } = this.props;

        const unansweredQuestions = [];
        const answeredQuestions = [];

        const sortAnsweredAndUnanswered = () => {
            questionsIDs.forEach((id) => {
                if (
                    questions[id].optionOne.votes.includes(authedUser) ||
                    questions[id].optionTwo.votes.includes(authedUser)
                ) {
                    return answeredQuestions.push(id);
                } else {
                    unansweredQuestions.push(id);
                }
            });
        };

        sortAnsweredAndUnanswered();
        return (
            <div className="home">
                {authedUser ? (
                    <React.Fragment>
                        <div className="home__buttons">
                            <button
                                onClick={this.handleUnanswered}
                                className={`home__button ${
                                    !this.state.question
                                        ? "home__button--flag"
                                        : ""
                                }`}
                            >
                                Unanswered Questions
                            </button>
                            <button
                                onClick={this.handleAnswered}
                                className={`home__button ${
                                    this.state.question
                                        ? "home__button--flag"
                                        : ""
                                }`}
                            >
                                Answered Questions
                            </button>
                        </div>
                        <ul className="home__list">
                            {this.state.question
                                ? answeredQuestions.map((id) => {
                                      return (
                                          <Question
                                              key={id}
                                              id={id}
                                              status="answered"
                                          />
                                      );
                                  })
                                : unansweredQuestions.map((id) => {
                                      return (
                                          <Question
                                              key={id}
                                              id={id}
                                              status="Unanswered"
                                          />
                                      );
                                  })}
                        </ul>
                    </React.Fragment>
                ) : (
                    <h1 className="firstHeader">Please log In</h1>
                )}
            </div>
        );
    }
}
const mapStateToProps = ({ users, questions, authedUser }) => {
    return {
        users: users,
        questions: questions,
        authedUser: authedUser,
        questionsIDs: Object.keys(questions).sort((a, b) => {
            return questions[b].timestamp - questions[a].timestamp;
        }),
    };
};
export default connect(mapStateToProps)(Home);
