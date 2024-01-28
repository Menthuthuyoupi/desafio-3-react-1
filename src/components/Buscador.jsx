import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Buscador = ({colaboradores}) => {

    const [errorColaborador,setErrorColaborador] = useState(false)
    const [colaborador,setColaborador] = useState('')

    const [mostrar,setMostrar] = useState(false)

    const [informacionColaborador, setInformacionColaborador] = useState([])

    const arr = []
    
    const [press,setPress] = useState(false)

    const validarBuscador = (e) => {

        setPress(true)
        e.preventDefault()
        setInformacionColaborador([])

        if(colaborador === ''){
            setErrorColaborador(true)
            setMostrar(false)
        }else{
            setErrorColaborador(false)
            let i = 0
            colaboradores.filter((nombreColaborador) => {
                if(nombreColaborador.nombre.toLowerCase().includes(colaborador.toLowerCase())){
                    arr.push(nombreColaborador)
                    setInformacionColaborador(arr)
                    setMostrar(true)
                    i++
                }else{
                    if(i < 1){
                        setMostrar(false)
                    }
                }
            })      
        }
    }   

    return (
         
        <div className='mb-2'>
            <Form className='display-flex-form py-2 px-1' onSubmit={validarBuscador}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className={errorColaborador ? 'error' : 'inputs'} placeholder={errorColaborador ? 'Introduzca el nombre del colaborador' : 'Escribir Palabra'}
                        style={{width:'100%'}} type='text' name='buscador' onChange={(e) => setColaborador(e.target.value)} value={colaborador}/>
                </Form.Group>
                <Button className='display-flex-start' variant="primary" type="submit">
                    Buscar colaborador
                </Button>
            </Form>
            <div className='p-1' style={{backgroundColor:'#DF533A'}}>
                {
                    mostrar && !errorColaborador ?
                    <>
                        <h3>Resultado de la busqueda</h3>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Correo</th>
                                    <th>Edad</th>
                                    <th>Cargo</th>
                                    <th>Telefono</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    informacionColaborador.map(item => 
                                        <>
                                            <tr>
                                                <td key={item.nombre}>{item.nombre}</td>
                                                <td key={item.correo}>{item.correo}</td>
                                                <td key={item.edad}>{item.edad}</td>
                                                <td key={item.cargo}>{item.cargo}</td>
                                                <td key={item.telefono}>{item.telefono}</td>
                                            </tr> 
                                        </>

                                    )
                                }
                            </tbody>
                        </Table>
                    </> : (press ? <p className='resultado-busqueda' style={{color:'white'}}>Ningun Resultado</p> : null)

            }
            </div>

        </div>
    )
}

Buscador.propTypes = {}

export default Buscador