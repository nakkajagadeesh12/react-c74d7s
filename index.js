import React, { Component } from 'react';
import { render } from 'react-dom';
import MainComponent from './MainComponent';
import './style.css';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <MainComponent />
      </div>
    );
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
