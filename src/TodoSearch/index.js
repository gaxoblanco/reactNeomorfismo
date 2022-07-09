import React from 'react';
import {TodoContext} from '../TodoContext';
import './TodoSearch.css';

function TodoSearch (){
    const {searchV, setSearchV} = React.useContext(TodoContext);
    const onSearchValueChange = (event)=>{
        setSearchV(event.target.value);
    }
    return (
        <div className="TodoSearch">
            <input 
                placeholder="Buscar"
                onChange={onSearchValueChange}
                value={searchV}
                />
        </div>
    )
}

export {TodoSearch};