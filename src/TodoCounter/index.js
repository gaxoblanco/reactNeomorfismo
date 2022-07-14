import React from 'react';
import './TodoCounter.css';


function TodoCounter({totalTodos, completedTodos, loading}){
    return (
        // <h2 style={styles}> Has completado 2 de 3 Todos </h2>
        <div className={`TodoCounter shadow ${!!loading && "TodoCounter--loading"}`}>
            <h2 className={'textShadow'}> Has completado {completedTodos} de {totalTodos} Tareas </h2>
        </div>
    )
}


export  {TodoCounter};