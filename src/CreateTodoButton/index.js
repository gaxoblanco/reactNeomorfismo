import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(){

    const onClickButton = (mensaje) =>{
        alert(mensaje);
    }

    return (
        <button 
            className="CreateTodoButton"
            onClick={()=> onClickButton("holaa")}
        >
            <div className="shadow-white">
                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor"  viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </div>
            <div className="shadow-black">
                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor"  viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </div>
            <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor"  viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </div>
        </button>)
}

export {CreateTodoButton};