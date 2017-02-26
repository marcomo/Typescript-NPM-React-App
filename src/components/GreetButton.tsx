import React = require('react');

interface GreetButtonProps {
  handleClick: React.MouseEventHandler;
}


function Welcome(props: GreetButtonProps) {
  return <button type="button" onClick={props.handleClick}>Greet me!</button>;
}

export default Welcome;
