import React = require('react');

// Components
import GreetButton from './GreetButton';
import NameInput from './NameInput';


const Welcome = function(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <NameInput handleInput={props.handleNameInput}/>
      <GreetButton handleClick={props.handleGreetButtonClick}/>
    </div>
  );
}

export default Welcome;