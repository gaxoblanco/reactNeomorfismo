import React from 'react';
import './TodoForm.css';

function TodoForm ({addTodo, setOpenModal}){
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onCancel = () =>{
        setOpenModal(false);
    }
    const Submit = (event)=>{
        if(newTodoValue !== ''){
            event.preventDefault();
            addTodo(newTodoValue);
            setOpenModal(false);
        }else {
            event.preventDefault();
            setOpenModal(false);
        }
    }
    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    }

    return(
        <form className="container-todo--form shadow" onSubmit={Submit}>
            <label className="todo-label">Escribe tu nuevo Todo</label>
            <textarea 
                className="form--textarea"
                value = {newTodoValue}
                onChange={onChange}
                placeholder="Nueva tarea"
            />
            <div className="container-form--button">
                <button
                type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>

                <button
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export {TodoForm}