import axios from 'axios';
// import thunk from 'redux-thunk';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
export const FETCH_SEARCH_RESULTS = 'FETCH_SEARCH_RESULTS';
export const FETCH_SEARCH_RESULTS_SUCCESS = 'FETCH_SEARCH_RESULTS_SUCCESS';
export const FETCH_SEARCH_RESULTS_FAILURE = 'FETCH_SEARCH_RESULTS_FAILURE';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=UNIQUE_KEY';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: FETCH_POSTS, 
        payload: request
    };
}

export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(() => callback());
    return {
        type: CREATE_POST, 
        payload: request
    };
}

export function fetchPost(id) {
    const url = `${ROOT_URL}/posts/${id}${API_KEY}`;
    const request = axios.get(url)
    return {
        type: 'FETCH_POST',
        payload: request
    }
}

export function deletePost(id, callback) {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
        .then(() => callback());

    return {
        type: DELETE_POST, 
        payload: id
    };
}



export const searchPosts = (searchQuery) => {
   console.log('Search Query', searchQuery);
   return dispatch => {
       return fetch(`${ROOT_URL}/posts${API_KEY}`)
           .then(response => response.json())
           .then(json =>  {
               const filteredPosts =  json.filter((post)=> {
                   return post.title.includes(searchQuery);
               })
               dispatch(getDataSuccess(filteredPosts));
            })
            .catch( err => console.log('Error: ', err));
   };
};

export function getDataFailure() {
    return {
        type: `${FETCH_SEARCH_RESULTS}_FAILURE`
    };
}

export function getDataSuccess(payload) {
    console.log(payload);
    return {
        type: `${FETCH_SEARCH_RESULTS}_SUCCESS`,
        payload,
    };
}
