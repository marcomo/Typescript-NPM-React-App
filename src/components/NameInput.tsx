import React = require('react');

interface WelcomeProps {
  handleChange: React.FormEventHandler;
}

function Welcome(props: WelcomeProps) {
  return (
    <div>
      <input type="text" onChange={props.handleChange} />
    </div>
  );
}

export default Welcome;
