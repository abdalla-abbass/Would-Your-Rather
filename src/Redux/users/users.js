/* Action Types */

const GET_USERS = "GET_USERS";
const UPDATE_USERS = "UPDATE_USERS";
const SET_SCORE_FOR_EACH_USER = "SET_SCORE_FOR_EACH_USER";

/* Action Creators */

export function getUsers(users) {
    return {
        type: GET_USERS,
        users,
    };
}
export function updateUsers(users) {
    return {
        type: UPDATE_USERS,
        users,
    };
}
export function setScoreForEachUser() {
    return {
        type: SET_SCORE_FOR_EACH_USER,
    };
}

/* Action reducer */

export default function userReducer(state = {}, action) {
    switch (action.type) {
        case GET_USERS:
            return { ...action.users };
        case UPDATE_USERS:
            return { ...action.users };
        default:
            return state;
    }
}

// case SET_SCORE_FOR_EACH_USER:
//     return Object.keys(state).map((userId) => {
//         const user = state[userId],
//             answers = Object.keys(user.answers).length,
//             questions = user.questions.length,
//             score = answers + questions;

//         return {
//             [userId]: {
//                 ...state.userId,
//                 score,
//             },
//         };
//     });
