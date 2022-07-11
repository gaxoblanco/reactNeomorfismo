//import logo from './logo.svg';
import React from 'react';
import './App.css';
import {useTodos} from './useTodos';


import {TodoCounter} from '../TodoCounter'
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import {Modal} from '../Modal';
import {TodoForm} from '../TodoForm';
import {MyLoader} from '../MyLoader';
import {TodosError} from '../TodosError';
import {EmptyTodos} from '../EmptyTodos';
import {TodoHeader} from '../TodoHeader';




//----
function App() {

  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    addTodo,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchV, 
    setSearchV,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader>
          <TodoCounter 
              totalTodos={totalTodos} 
              completedTodos={completedTodos}
          />
          <TodoSearch 
              searchV={searchV}
              setSearchV={setSearchV}
          />
      </TodoHeader>

        <TodoList>
          {error  && <TodosError error={error} />}
          {loading  && new Array(3).fill(1).map((a,i)=><MyLoader key={i}/>)}
          {(!loading && !searchedTodos.length) && <EmptyTodos/> }

          {searchedTodos.map(todo =>(
        <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={()=>completeTodo(todo.text)}
            onDelete={()=>deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
    {!!openModal && (
      <Modal>
        <TodoForm 
          addTodo={addTodo}
          setOpenModal={setOpenModal}
        />
      </Modal>
    )}

    <CreateTodoButton 
      setOpenModal={setOpenModal}
    />
  </React.Fragment>
  );
}

export default App;
