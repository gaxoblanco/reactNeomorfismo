import React from 'react';
import './EmptyTodos.css';
import {CreateTodoButton} from '../CreateTodoButton';

function EmptyTodos ({setOpenModal}){
    return (
        <span className={'EmptyTodos shadow'}>
            <p>Crea tu primer tarea</p>
        </span>
    )
}

export {EmptyTodos};