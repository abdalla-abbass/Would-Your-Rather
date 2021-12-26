/* Action Types */

const GET_INIT_AUTHEDUSER = "GET_INIT_AUTHEDUSER";
const SET_AUTHED_USER_TO_NULL = "SET_AUTHED_USER_TO_NULL";

/* Action Creators */

export function getInitAuthedUser(authedUser) {
    return {
        type: GET_INIT_AUTHEDUSER,
        authedUser,
    };
}
export function setAuthedUserToNull() {
    return {
        type: SET_AUTHED_USER_TO_NULL,
        payload: null,
    };
}

/* Action reducer */

export default function authedUserReducer(state = null, action) {
    switch (action.type) {
        case GET_INIT_AUTHEDUSER:
            return action.authedUser;
        case SET_AUTHED_USER_TO_NULL:
            return action.payload;
        default:
            return state;
    }
}
