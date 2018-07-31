import React, { Component } from 'react';
import { connect } from 'react-redux';

class SnackList extends Component {

  render() {
    return (
      <div>
          {JSON.stringify(this.props.snackItems)}
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({snackItems : reduxState.onSubmit});

export default connect(mapReduxStateToProps)(SnackList);