//import logo from './logo.svg';
import React from 'react';
import './App.css';
import {useTodos} from './useTodos';

import {ChangeAlertWithStorageListener} from '../ChangeAlert';
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
      <TodoHeader
        loading={loading}
      >
          <TodoCounter 
            totalTodos={totalTodos} 
            completedTodos={completedTodos}
          />
          <TodoSearch
            searchV={searchV}
            setSearchV={setSearchV}
          />
      </TodoHeader>

      <TodoList 
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchV}
        onError ={()=> <TodosError/> }
        onLoading = {()=> <MyLoader/>}
        onEmptyTodos ={()=> <EmptyTodos/> }
        onEmptySerchResults = {(searchText) => <p>no tenemos resultados para {searchText}</p>}
        render={todo =>(
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={()=>completeTodo(todo.text)}
            onDelete={()=>deleteTodo(todo.text)}
            />
        )}
      />

        {/* {todo =>(
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={()=>completeTodo(todo.text)}
            onDelete={()=>deleteTodo(todo.text)}
            />
        )} */}
      
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

    <ChangeAlertWithStorageListener />
  </React.Fragment>
  );
}

export default App;
