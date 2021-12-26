import { getUsers, updateUsers } from "./users/users";
import { getQuestions, newQuestion } from "./question/question";
import {
    _getUsers,
    _getQuestions,
    _saveQuestionAnswer,
    _saveQuestion,
} from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading";

export function getInitData() {
    return (dispatch) => {
        dispatch(showLoading());

        Promise.all([_getUsers(), _getQuestions()]).then(
            ([users, questions]) => {
                dispatch(getUsers(users));
                dispatch(getQuestions(questions));
                dispatch(hideLoading());
            }
        );
    };
}

export function saveQuestionAnswer(info) {
    return (dispatch) => {
        dispatch(showLoading());

        _saveQuestionAnswer(info).then(([users, questions]) => {
            dispatch(getUsers(users));
            dispatch(getQuestions(questions));
            dispatch(hideLoading());
        });
    };
}

export function saveQuestion(info) {
    return (dispatch) => {
        dispatch(showLoading());

        _saveQuestion(info).then(([users, questions]) => {
            dispatch(newQuestion(questions));
            dispatch(updateUsers(users));
            dispatch(hideLoading());
        });
    };
}
