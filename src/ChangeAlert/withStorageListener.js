import React from 'react';

function withStorageListener(WrappedComponent){
    return function WrappedComponentWithStorageListener(props){
        const [storageChange, setStorageChange] = React.useState(false);

        window.addEventListener('storage', (change) => {
            if(change.key === 'TODOS_V1'){
                console.log("Hubo cambios en TODOS_V1");
                setStorageChange(true);
            }else{
                console.log("No tuvimos cambios.");
            }
        });

        const toggleShow = ()=>{
            props.synchron()
            setStorageChange(false);
        }

        return (
            <WrappedComponent 
                show={storageChange}
                toggleShow={toggleShow}
            />
        );
    }
}

export {withStorageListener};