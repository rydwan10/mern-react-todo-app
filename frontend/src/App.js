import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Import the components
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';

const App = () => {

  // ?Input text for todos
  const [inputText, setInputText] = useState('');

  // ?Real todo state
  const [todos, setTodos] = useState([
    {
      id: Math.random() * 100,
      title: 'installing react js boilerplate',
      completed: false
    },
    {
      id: Math.random() * 100,
      title: 'installing styled component package',
      completed: false
    },
    {
      id: Math.random() * 100,
      title: 'Looking for budget SSD',
      completed: true
    },
  ])

  return (
    <div className="App-header">
      <div className="App-container">
      <img className="App-logo" src={logo} alt="react logo" />
        <h4 className="title-todo">Muhammad Rydwan's Todo List</h4>
        <InputTodo inputText={inputText} setInputText={setInputText} todos={todos}  setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
