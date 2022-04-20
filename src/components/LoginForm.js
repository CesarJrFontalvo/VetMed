import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Form, Icon } from 'semantic-ui-react'
import { loginEmailPassword, loginGoogle } from '../actions/actionLogin';
import { useForm } from '../hooks/useForm';

const LoginForm = () => {
    const dispatch = useDispatch();

    const [values, handleInputChange] = useForm({
        email: "",
        contraseña: ""
    });

    const { email, contraseña } = values;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginEmailPassword(email, contraseña));

    }

    const handleGoogle = () => {
        dispatch(loginGoogle());

    }

    return (
        <div className='p-4'>
            <div className='my-3 text-center'>
                <h2>Iniciar Sesión</h2>
            </div>
            <Form onSubmit={handleLogin}>

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

                <Button type='submit' color='teal' className='w-100'>Iniciar Sesión</Button>

            </Form>
            <div className='mt-4 text-center'>
                <hr />
                <Button color='facebook' className='w-100'>
                    <Icon name='facebook' /> Facebook
                </Button>
                <Button color='basic' className='w-100' onClick={handleGoogle}>
                    <Icon name='google' /> Google
                </Button>
            </div>

        </div>
    )
}

export default LoginForm