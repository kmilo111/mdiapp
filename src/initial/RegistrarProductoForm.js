import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import ReactTable from "react-table";
import 'react-table/react-table.css';

export class RegistrarProductoForm extends Component {

  render() {
    const { handleSubmit } = this.props;
    const renderField = ({
      input,
      label,
      type,
      meta: { touched, error, warning }
    }) => (
        <div>
         <label>{label}</label>
          <input {...input} className="form-control"  placeholder={label} type={type} />
          {touched &&
            ((error && <span>{error}</span>) ||
              (warning && <span>{warning}</span>))}
        </div>
    );

    //data atributos
    const dataAtributos = [{
        nombre:'fit',
        tipo:'online'
    },
    {
      nombre:'no fit',
      tipo:'offline'
    }];
 
     const columnAtributos = [{
        Cell: <Field name="activo_attr" type="checkbox" component={renderField}   />,
        Header: 'Activo',
    },
    {
      Header: 'Nombre',
      accessor:'nombre',
      Cell: props => <span className='number'>{props.value}</span>
    },
    {
      Header: '',
      Cell: props => <a href="/edit">d</a>
    }];

    return (
      <div className="container">
        <div className="row">
          <h2 className="mainHeader">Registrar Producto</h2>
           <div className="col-md-8 center">
            <form onSubmit={handleSubmit}>
             <div className="form-group">
               <Field name="id_producto" type="text" component={renderField} label="Id Producto"/>
             </div>
             <div className="form-group">
               <Field name="nombre_producto" type="text" component={renderField} label="Nombre Producto"/>
             </div>
             <div className="custom-control custom-checkbox">
               <Field name="activo_producto" type="checkbox" component={renderField} label="Activo" /> 
             </div>
             <p className="font-weight-bold text-mod">Atributos:</p>
             <div className="form-group">
               <Field name="nombre_atributo" type="text" component={renderField} label="Nombre" /> 
             </div>
             <div className="custom-control custom-checkbox">
               <Field name="dimension_sku" type="checkbox" component={renderField} label="Dimensión SKU" /> 
             </div>
             <div className="custom-control custom-checkbox">
               <Field name="activo_atributo" type="checkbox" component={renderField} label="Activo" /> 
             </div>
             <ReactTable
                data={dataAtributos}
                columns={columnAtributos}
                defaultPageSize={5}
                className="-striped -highlight" />
              <div className="col-md-8 center-button center">
                <button type="button" className="btn btn-info">Guardar</button>
              </div>
           </form>  
         </div>
        </div>
      </div>
    )
  }
};

RegistrarProductoForm = reduxForm({
    form: 'RegistrarProductoForm' // a unique name for this form
  })(RegistrarProductoForm);

export default RegistrarProductoForm;
