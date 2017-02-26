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
    handleNameInput: (e: React.FormEvent) => {
      dispatch(updateGreeting((e.currentTarget as HTMLInputElement).value));
    },

    handleGreetButtonClick: () => {
      console.log("GREET BUTTON CLICK");
    }
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Welcome);