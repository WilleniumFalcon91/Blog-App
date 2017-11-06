import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
  render() { return <div>Hello!</div>}
}
class Goodbye extends React.Component {
  render() { return <div>Goodbye!</div>}
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src='https://cdn4.iconfinder.com/data/icons/free-3d-social-icons/png/512x512/Online%20writing.png' className="App-logo" alt="logo" />
          <h2>Blog App</h2>
        </div>
        <Provider store={createStoreWithMiddleware}>
          <BrowserRouter>
              <div>
                  <Route path="/hello" component={Hello}/>
                  <Route path="/goodbye" component={Goodbye} />
              </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
