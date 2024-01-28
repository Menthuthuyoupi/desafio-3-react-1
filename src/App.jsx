import { useState } from 'react'
import './App.css'

import { BaseColaboradores } from './BaseColaboradores'

import Listado from './components/Listado'
import Formulario from './components/Formulario'
import Buscador from './components/Buscador'
import Alerta from './components/Alerta'

import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [alerta,setAlerta] = useState('')
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)

  let colaboradorRepetido
  let validacion

  const [errorNombre, setErrorNombre] = useState(false)
  const [errorCorreo, setErrorCorreo] = useState(false)
  const [errorEdad, setErrorEdad] = useState(false)
  const [errorCargo, setErrorCargo] = useState(false)
  const [errorTelefono, setErrorTelefono] = useState(false)


  const validarForm = (nombre,correo,edad,cargo,telefono) => {


    if(nombre ==='' || correo ==='' || edad ==='' || cargo === '' || telefono === ''){

      const validarNombre = () => {
          if(nombre === ''){
              setErrorNombre(true)
              return
          }
          setErrorNombre(false)
      }

        validarNombre()

        const validarCorreo = () => {
            if(correo === ''){
                setErrorCorreo(true)
                return
            }
            setErrorCorreo(false)
        }

        validarCorreo()

        const validarEdad = () => {
            if(edad === ''){
                setErrorEdad(true)
                return
            }
            setErrorEdad(false)
        }

        validarEdad()

        const validarCargo = () => {
            if(cargo === ''){
                setErrorCargo(true)
                return
            }
            setErrorCargo(false)
        }
     
        validarCargo()

        const validarTelefono = () => {
          if(telefono === ''){
              setErrorTelefono(true)
              return
          }
          setErrorTelefono(false)
      }
   
      validarTelefono()
        
        
    }else{
      setErrorNombre(false)
      setErrorCorreo(false)
      setErrorEdad(false)
      setErrorCargo(false)
      setErrorTelefono(false)

      let ide = colaboradores.length + 1
      let contador = 0
      colaboradores.map(item => {
        if(item.nombre.toLowerCase() !== nombre.toLowerCase() ){
          contador++
        }
      })

      if(contador == colaboradores.length){
        setColaboradores([...colaboradores,{id:ide,nombre:nombre,correo:correo,edad:edad,cargo:cargo,telefono:telefono}])
        colaboradorRepetido = false
      }else{
        colaboradorRepetido = true
      }
    }

    validacion = (nombre ==='' || correo ==='' || edad ==='' || cargo === '' || telefono === '' || colaboradorRepetido)

    validacion ? setAlerta(<Alert variant="danger" className='mt-2 p-2 validacion' >{colaboradorRepetido ? 'colaborador repetido':'Completar todos los campos!!!'}</Alert>) :
                 setAlerta(<Alert variant="success" className='mt-2 p-2 validacion' >Colaborador agregado</Alert>)

  }

  return (
    <>
      <div className='p-5' style={{backgroundColor:'#49c8be'}}>
        <Buscador colaboradores={colaboradores} />
        <Listado BaseColaboradores={colaboradores} />
        <Formulario validarForm={validarForm} errorNombre={errorNombre} errorCorreo={errorCorreo}
          errorEdad={errorEdad} errorCargo={errorCargo} errorTelefono={errorTelefono}/>
        <div className='mt-0 p-1' style={{backgroundColor:'#373DD1',fontSize:'25px'}}>
          <Alerta alerta={alerta}/>
        </div>  
      </div>    
    </>
  )
}

export default App
