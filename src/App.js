//import logo from './logo.svg';
import React from 'react';
import './CSS/App.css';
import {TodoCounter} from './TodoCounter'
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';

const todos = [
  {
    text: 'Cortar Cebolla',
    completed: false,
  },
  {
    text: 'Cortar Tomates',
    completed: false,
  },
  {
    text: 'Estudiar Ingles',
    completed: false,
  }
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />
      <TodoList>
        {todos.map(todo =>(
          <TodoItem 
            key={todo.text} 
            text="todo.text" 
            completed={todo.complete}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
