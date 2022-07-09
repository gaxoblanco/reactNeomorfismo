import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({openModal, setOpenModal}){
    
    const onClickButton = ()=>{
        setOpenModal(prevState => !prevState);
    }

    return (
        <button 
            className="CreateTodoButton"
            onClick={onClickButton}
        >
                <h1>+</h1>
        </button>)
}

export {CreateTodoButton};