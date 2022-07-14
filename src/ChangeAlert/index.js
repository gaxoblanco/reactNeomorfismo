import React from 'react';
import {withStorageListener} from './withStorageListener';
import './ChangeAlert.css';
import {Modal} from '../Modal';

function ChangeAlert({show, toggleShow}){
    if(show){
       return (
        <Modal>
            <div className={'ChangeAlert shadow'}>
            <h2 className={'textShadow'}>Hubieron cambios</h2>
            <button className={'shadow '}
            onClick={()=>toggleShow(false)}
            >Volver a cargar Todos</button>
        </div>
        </Modal>
       );
    }
    else{
        return null;
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export {ChangeAlertWithStorageListener}