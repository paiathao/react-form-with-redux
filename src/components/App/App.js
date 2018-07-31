import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import SnackForm from '../SnackForm/SnackForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>React Form</p>
        <SnackForm />
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return {reduxState}
}

export default connect(mapReduxStateToProps)(App);
