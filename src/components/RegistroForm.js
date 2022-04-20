import React from 'react'
import { useDispatch } from 'react-redux';
import { Button, Form } from 'semantic-ui-react'
import { registroEmailPasswordNombre } from '../actions/actionRegister';
import { useForm } from '../hooks/useForm';

const RegistroForm = () => {
  
    const dispatch = useDispatch();

    const [values, handleInputChange] = useForm({
        nombre: "",
        email: "",
        contraseña: ""
    });

    const { nombre, email, contraseña } = values;


    const handleRegistro  = (e) => {
        e.preventDefault();
        dispatch(registroEmailPasswordNombre(nombre, email, contraseña))
    }

    return (
        <div className='p-4'>
            <div className='my-3 text-center'>
                <h2>Registrarse</h2>
            </div>
            <Form onSubmit={handleRegistro}>

                {/* nombre */}
                <Form.Field>
                    <label>Nombre Completo</label>
                    <input 
                        type='text' 
                        name='nombre' 
                        value={nombre}
                        onChange={handleInputChange}
                    />
                </Form.Field>

                {/* usuario */}
                <Form.Field>
                    <label>Email</label>
                    <input 
                        type='text' 
                        name='email' 
                        value={email}
                        onChange={handleInputChange}
                    />
                </Form.Field>

                {/* contraseña */}
                <Form.Field>
                    <label>Contraseña</label>
                    <input 
                        type='password'
                        name='contraseña' 
                        value={contraseña}
                        onChange={handleInputChange} 
                    />
                </Form.Field>

                <Button type='submit' color='teal' className='w-100'>Registrarse</Button>

            </Form>

        </div>
    )
}

export default RegistroForm;