import React from 'react';
import './TodoList.css';

function TodoList(props){
    const renderFunc = props.children || props.render;
    return (
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySerchResults(props.searchText)}

            {(!props.loading && !props.error) && props.searchedTodos.map(props.render)}

            <ul className="TodoList">
                {props.children}
            </ul>
        </section>
    )
}

export {TodoList};