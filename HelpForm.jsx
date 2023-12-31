// src/TodoForm.jsx
import React, { useState } from 'react';

const HelpForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter your todo"
      />
      <p>{inputValue}</p>
    </div>
  );
};

export default HelpForm;
