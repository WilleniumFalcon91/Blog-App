import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/index';
// import reducers from './reducers';
import PostsIndex from './components/posts_index';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  return store;
}

ReactDOM.render(
    <div className="App">
        <div className="App-header">
            <img src='https://cdn4.iconfinder.com/data/icons/free-3d-social-icons/png/512x512/Online%20writing.png' className="App-logo" alt="logo" />
            <h2>Blog App</h2>
        </div>
    
        <Provider store={configureStore()}>
            <BrowserRouter>
                <div>
                    <Route path='/' component={PostsIndex} />
                </div>
            </BrowserRouter>
        </Provider>,
    </div>, document.getElementById('root'));
   
registerServiceWorker();
