import React from 'react';

const TextInput = (props) => {
  const { handleChange, placeholder, value } = props;
  const handleInput = (e) => {
    handleChange(e.target.value);
  }
  return (
    <input
      type='text'
      placeholder={placeholder}
      onChange={handleInput}
      value={value}
    />
  );
};

export default TextInput;
