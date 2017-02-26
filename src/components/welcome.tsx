import React = require('react');

// Components
import GreetButton from './GreetButton';
import NameInput from './NameInput';
import Form from './Form';

const Welcome = function(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Customize your greeting</p>
      <Form handleGreetFormSubmit={props.handleGreetFormSubmit} />
    </div>
  );
}

export default Welcome;