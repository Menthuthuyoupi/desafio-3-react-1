import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BaseColaboradores } from '../BaseColaboradores';

const Listado = ({BaseColaboradores}) => {
  return (
    <Container fluid className='p-1' style={{backgroundColor:'#8C210E'}}>
      <h3 style={{color:'white'}}>Colaboradores Iniciales</h3>
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
          {BaseColaboradores.map(colaborador =>
            <tr>
              <td key={colaborador.nombre}>{colaborador.nombre}</td>
              <td key={colaborador.correo}>{colaborador.correo}</td>
              <td key={colaborador.edad}>{colaborador.edad}</td>
              <td key={colaborador.cargo}>{colaborador.cargo}</td>
              <td key={colaborador.telefono}>{colaborador.telefono}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>

  )
}

Listado.propTypes = {}

export default Listado