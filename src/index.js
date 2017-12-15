import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
import { rootReducer } from './reducers/index';
// import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/post_show';


const createStoreWithMiddleware = applyMiddleware(promise, thunk, logger)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  return store;
}

ReactDOM.render(
    <div className="App">
        <div className="App-header">
            <h2 className="blog-name">Blog App</h2>
            <img src='http://1000logos.net/wp-content/uploads/2017/02/Home-Depot-Logo-Meaning-history.jpg' className="App-logo" alt="logo" />
        </div>
    
        <Provider store={configureStore()}>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/posts/new' component={PostsNew} />
                        <Route path='/posts/:id' component={PostsShow} />
                        <Route path='/' component={PostsIndex} />
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    </div>, document.getElementById('root'));
   
registerServiceWorker();
