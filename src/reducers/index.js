import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';

export const rootReducer = combineReducers({
    posts: PostsReducer
})

export default rootReducer;