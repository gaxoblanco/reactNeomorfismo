import React from 'react';

function TodoItem(props){
    return (
        <li>
            <span className={`${props.completed }`}>C</span>
            <p>{props.text}</p>
            <span>Z</span>
        </li>
    )
}

export {TodoItem};