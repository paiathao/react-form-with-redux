import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>React Form</p>
      </div>
    );
  }
}

export default connect()(App);
