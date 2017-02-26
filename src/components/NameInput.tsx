import React = require('react');

interface NameInputProps {
  handleInput: React.FormEventHandler;
}


function Welcome(props: NameInputProps) {
  return (
    <div>
      <input type="text" onInput={props.handleInput} />
    </div>
  );
}

export default Welcome;
