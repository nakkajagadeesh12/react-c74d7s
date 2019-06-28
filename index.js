import React, { Component } from 'react';
import { render } from 'react-dom';
import MainComponent from './MainComponent';
import './style.css';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <h1>My Name is {this.props.name}</h1>
        <MainComponent />
      </div>
    );
  }
}

render(
  <Provider store={store}>
    <App name="react"/>
  </Provider>
  , document.getElementById('root'));
