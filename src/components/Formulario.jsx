import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const Formulario = ({validarForm,errorNombre,errorCorreo,errorEdad,errorCargo,errorTelefono}) => {

    const [nombre,setNombre] = useState('')
    const [correo,setCorreo] = useState('')
    const [edad,setEdad] = useState('')
    const [cargo,setCargo] = useState('')
    const [telefono,setTelefono] = useState('')

    const validarInput = (e) => {
        e.preventDefault()
        validarForm(nombre,correo,edad,cargo,telefono)
    }


  return (
    <Container fluid className='mt-2 p-1' style={{backgroundColor:'#373DD1'}}>  
        <h2 style={{color:'white'}}>Agregar colaborador</h2>
        <Form onSubmit={validarInput}>
            <Form.Group className="mb-2" style={{display:'flex',justifyContent:'center'}} controlId="formBasicEmail">
                <Form.Control className={errorNombre ? 'error' : 'inputs'} placeholder={errorNombre ? 'Introduzca el nombre' : 'Juan Perez'}
                type='text' name='nombre' onChange={(e) => setNombre(e.target.value)} value={nombre}/>
            </Form.Group>
            <Form.Group className="mb-2" style={{display:'flex',justifyContent:'center'}} controlId="formBasicEmail">
                <Form.Control className={errorCorreo ? 'error' : 'inputs'}  placeholder={errorCorreo ? 'Introduzca el correo' : 'JuanPerez@hotmail.cl'}
                type='email' name='email' onChange={(e) => setCorreo(e.target.value)} value={correo} />
            </Form.Group>
            <Form.Group className="mb-2" style={{display:'flex',justifyContent:'center'}} controlId="formBasicEmail">
                <Form.Control className={errorEdad ? 'error' : 'inputs'} placeholder={errorEdad ? 'Introduzca su edad' : '29'}
                type='text' name='edad' onChange={(e) => setEdad(e.target.value)} value={edad} /> 
            </Form.Group>
            <Form.Group className="mb-2" style={{display:'flex',justifyContent:'center'}} controlId="formBasicEmail">
                <Form.Control className={errorCargo ? 'error' : 'inputs'} placeholder={errorCargo ? 'Introdusca el cargo' : 'traficante de pasta'}
                type='text' name='cargo' onChange={(e) => setCargo(e.target.value)} value={cargo} /> 
            </Form.Group>
            <Form.Group className="mb-2" style={{display:'flex',justifyContent:'center'}} controlId="formBasicEmail">
                <Form.Control className={errorTelefono ? 'error' : 'inputs'} placeholder={errorTelefono ? 'Introduzca el telefono' : '+56 966666666'}
                type='tel' name='telefono' onChange={(e) => setTelefono(e.target.value)} value={telefono}/> 
            </Form.Group>
            <button type="submit" className="btn btn-success mt-1 pb-2 boton-reg" style={{width:'80%'}}>Agregar colaborador</button>

        </Form>
    </Container>
  )
}

Formulario.propTypes = {}

export default Formulario