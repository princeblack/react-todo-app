import React from 'react';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});    
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.state.value);
    this.setState({ value: '' });
  }
  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit} >
          <input type="text" value={this.state.value} onChange={this.handleChange} className="input-form" ></input>
          <input type="submit" value="submit" className="submit-button"></input>
        </form>
      </div>
    );
  }
}
 


export default FormContainer;