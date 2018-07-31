import React, { Component } from 'react';
import { connect } from 'react-redux';

class SnackList extends Component {

  render() {

    let snack = this.props.snackItems.map((snack, index) => {
        return (
          <li key={index}>{snack}</li>
        )
      })

    return (
      <ul>
          {snack}
      </ul>
    );
  }
}

// const mapReduxStateToProps = reduxState => ({snackItems : reduxState.onSubmit});

const mapReduxStateToProps = (reduxState) => {  
    return { snackItems : reduxState.onSubmit }
  }

export default connect(mapReduxStateToProps)(SnackList);