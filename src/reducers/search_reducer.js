import { FETCH_SEARCH_RESULTS } from '../actions';

export default function searchReducer (state = [], action) {
   console.log(action);
    switch (action.type) {
       case `${FETCH_SEARCH_RESULTS}_SUCCESS`:
            console.log(action.payload);
            return {articles};
       case `${FETCH_SEARCH_RESULTS}_FAILURE`:
           return { ...state, articles: 'FETCH_SEARCH_RESULTS_FAILED' };    
   }
   return state;
}