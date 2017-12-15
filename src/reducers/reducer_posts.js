import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST, FETCH_SEARCH_RESULTS_SUCCESS, FETCH_SEARCH_RESULTS_FAILURE} from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case DELETE_POST:
            return _.omit(state, action.payload);
        case FETCH_POST:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_SEARCH_RESULTS_SUCCESS:
            return _.mapKeys(action.payload, 'id');
            
        case FETCH_SEARCH_RESULTS_FAILURE:
           return { ...state, posts: 'FETCH_SEARCH_RESULTS_FAILED' };     
        default:
            return state;
    }
}