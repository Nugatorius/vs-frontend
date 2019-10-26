import React, { Component } from 'react';
import TextInput from '../../shared/TextInput';
import Button from '../../shared/Button';

class SearchBar extends Component {
  state = {
    value: ''
  }

  handleClick = () => {
    console.log('Button click', this.state.value);
  }

  handleChange = (value) => {
    this.setState({value});
  }

  render() {
    return (
      <div>
        <TextInput placeholder='Search Videos' handleChange={this.handleChange} value={this.state.value} />
        <Button title='SEARCH' handleClick={this.handleClick} />
      </div>
    );
  }
}

export default SearchBar;