import React from 'react';
import {useLocalStorage} from './useLocalStorage';



function useTodos(){

    const {
        item: todos, 
        saveItem: saveTodos, 
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
      const [searchV, setSearchV] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
    
      //const filterTodos = todos.filter(todo=> todo.text == setSearchV);
      const completedTodos = todos.filter(todo=> !!todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos =[];
    
      if (!searchV.length >= 1){
        searchedTodos = todos;
      }else{
        searchedTodos = todos.filter(todo=>{
         const todoText = todo.text.toLowerCase(); 
         const searchText = searchV.toLowerCase(); 
         return todoText.includes(searchText); 
        })
        
      }
    
    
      const completeTodo = (text)=>{
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos= [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      }
    
      const deleteTodo = (text)=>{
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos= [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      }

      const addTodo = (text)=>{
        const newTodos= [...todos];
        newTodos.push({
          completed: false,
          text,
        });
        saveTodos(newTodos);
      }



    return {
            loading,
            error,
            totalTodos,
            completedTodos,
            searchV,
            setSearchV,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        };
}

export {useTodos};