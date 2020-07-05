import { createStore, combineReducers } from 'redux';
import { Campsites } from './campsites.js';
import { Comments } from './comments.js';
import { Partners } from './partners.js';
import { Promotions } from './promotions.js';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
        })
    );

    return store;
};