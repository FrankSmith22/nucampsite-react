import * as ActionTypes from './ActionTypes.js';

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    }
    /*
    Same as:
    payload: {
        campsiteId,
        rating,
        author,
        text
    }
    */
})