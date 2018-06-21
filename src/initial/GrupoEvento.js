import React, {Component}  from 'react';
import GrupoEventoForm  from './GrupoEventoForm.js';


class GrupoEvento extends Component{

    render(){

      const functionForma = (datos) =>{
      
         let GroupEventFrom = JSON.stringify({
             name:datos.nombre_evento,
             state:datos.activo_evento
         })
        

        let url = URL + 'groupevent/';       
        fetch(url,{
                method:'POST',
                headers:{
                'Authorization': 'Basic YWxlam86MTIz',
                'Content-Type': 'application/json'
            },
            body:GroupEventFrom
        })
        .then((resp) =>{
            return resp.json()
        })
        .then(data =>{
            console.log(data);
            localStorage.setItem('grupoEvento', JSON.stringify(data))
        })
        .catch(function(error){
            console.log('Error',error);
        })
      }
    
     return(
        <div>
           <GrupoEventoForm onSubmit={functionForma} />
        </div>)
    }
}

// const GrupoEvento = (props) =>{
//     const functionForma = (datos) =>{
        
//         console.log(datos);
        
//     }  
//     return (
//         <div>
//             <GrupoEventosForm onSubmit={functionForma} />
//         </div>
//     )
// }

export default GrupoEvento;