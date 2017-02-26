import React = require('react');

// Components
import GreetButton from './GreetButton';
import NameInput from './NameInput';

interface FormProps {
  handleGreetFormSubmit: React.FormEventHandler;  
}


export class Form extends React.Component<FormProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      greeting: null
    }
  }

  updateGreetingState = (e: React.FormEvent) => {
    this.setState({ greeting: (e.target as HTMLInputElement).value });
  }

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.handleGreetFormSubmit(this.state.greeting);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <NameInput handleChange={this.updateGreetingState} />
        <GreetButton />
      </form>
    );
  }
}

export default Form;
