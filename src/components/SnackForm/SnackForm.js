import React, { Component } from 'react';
import { connect } from 'react-redux';

class SnackForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            snack : '',
        }
    }

    handleChange = (event) => {
        this.setState({
            snack : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ON_SUBMIT', payload : this.state.snack})
    }
    

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
          <input type="submit" />
          </form>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({reduxState});

export default connect(mapReduxStateToProps)(SnackForm);