import React = require('react');

// 
import { connect } from 'react-redux';

// Components
import Welcome from './Welcome';

// Actions
import { updateGreeting } from './../actions/actions';


const mapStateToProps = (state) => {
  return { 
    name: state.greeting
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleGreetFormSubmit: (greeting: string) => {
      dispatch(updateGreeting(greeting));
    }
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Welcome);