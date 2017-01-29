import React = require('react');
import { render } from 'react-dom';


let rootElement = document.getElementById('app');

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

render(<Welcome name="Marco" />, rootElement);