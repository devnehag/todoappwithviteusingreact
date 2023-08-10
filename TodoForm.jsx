// src/TodoForm.jsx
import React, { useState } from 'react';

const TodoForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter your todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoForm;
