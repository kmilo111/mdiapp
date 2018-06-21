import React  from 'react';
//import axios from 'axios';
import RegistrarProductoForm  from './RegistrarProductoForm';

const RegistrarProducto = (props) =>{
    const functionForma = (datos) =>{
        
    }  
    return (
        <div>
            <RegistrarProductoForm onSubmit={functionForma} />
        </div>
    )
}

export default RegistrarProducto;