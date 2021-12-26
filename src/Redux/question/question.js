/* Action Types */

const GET_QUESTIONS = "GET_QUESTIONS";
const NEW_QUESTION = "NEW_QUESTION";
/* Action Creators */

export function getQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions,
    };
}
export function newQuestion(questions) {
    return {
        type: NEW_QUESTION,
        questions,
    };
}
/* Action reducer */

export default function questionReducer(state = {}, action) {
    switch (action.type) {
        case GET_QUESTIONS:
            return { ...action.questions };
        case NEW_QUESTION:
            return { ...action.questions };
        default:
            return state;
    }
}
