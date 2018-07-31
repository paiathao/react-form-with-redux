import React, { Component } from 'react';
import { connect } from 'react-redux';

class SnackForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            snackList : {
               name: '',
               snack: ''
            }  
        }
    }

    handleChange = (propertyName) => (event) => {
        this.setState({
            snackList: {
                ...this.state.snackList,
                [propertyName]: event.target.value,
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.snackList)
        this.props.dispatch({ type: 'ON_SUBMIT', payload : this.state.snackList})
    }
    

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange('snack')} placeholder="snack name"/>
          <input type="text" onChange={this.handleChange('name')} placeholder="person name"/>
          <input type="submit" />
          </form>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({reduxState});

export default connect(mapReduxStateToProps)(SnackForm);
