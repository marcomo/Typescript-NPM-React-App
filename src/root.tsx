import React = require('react');
import { render } from 'react-dom';

// Components
import Welcome from './components/welcome';

// CSS import
import './stylesheets/styles.scss';

render(
  <Welcome name="Marco" />, 
  document.getElementById('app')
);