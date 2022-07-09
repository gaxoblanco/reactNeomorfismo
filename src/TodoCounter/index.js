import React from 'react';
import {TodoContext} from '../TodoContext';
import './TodoCounter.css';


function TodoCounter(){
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
        // <h2 style={styles}> Has completado 2 de 3 Todos </h2>
        <div className="TodoCounter">
            <h2> Has completado {completedTodos} de {totalTodos} Tareas </h2>
        </div>
    )
}


export  {TodoCounter};