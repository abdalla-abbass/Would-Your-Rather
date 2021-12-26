import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading";
import authedUserReducer from "./authedUser/authedUser";
import questionReducer from "./question/question";
import userReducer from "./users/users";

export default combineReducers({
    authedUser: authedUserReducer,
    users: userReducer,
    questions: questionReducer,
    loadingBar: loadingBarReducer,
});
