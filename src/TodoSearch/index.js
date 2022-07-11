import React from 'react';
import './TodoSearch.css';

function TodoSearch ({searchV, setSearchV}){
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