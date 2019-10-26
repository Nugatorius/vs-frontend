import React, { useState } from 'react';
import TextInput from '../../shared/TextInput';
import Button from '../../shared/Button';

const SearchBar = () => {
  const [value, setValue] = useState('')

  const handleClick = () => {
    console.log('Button click', value);
  }

  return (
    <div>
      <TextInput placeholder='Search Videos' handleChange={setValue} value={value} />
      <Button title='SEARCH' handleClick={handleClick} />
    </div>
  );
}

export default SearchBar;