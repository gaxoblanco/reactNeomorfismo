import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({openModal, setOpenModal}){
    
    const onClickButton = ()=>{
        setOpenModal(prevState => !prevState);
    }

    return (
        <button 
            className="CreateTodoButton shadow"
            onClick={onClickButton}
        >
                <h1 className="textShadow">+</h1>
        </button>)
}

export {CreateTodoButton};