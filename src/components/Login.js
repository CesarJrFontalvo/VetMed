import React, { useState } from 'react'

import LoginForm from './LoginForm';
import '../style/Login.css';
import { Button } from 'semantic-ui-react';
import RegistroForm from './RegistroForm';

const Login = () => {

const [isLogin, setIsLogin] = useState(true);


    return (
        <div className='container-login'>
            <div className='container-grid-login'>
                <div className='row container-row'>
                    <div className='col p-0 d-none d-lg-block col-md-6 col-lg-6 col-xl-6 h-100'> 
                        <img src='https://imagenes.elpais.com/resizer/u1uh_Yz5kTzhdmlp_oIj6Y9GECk=/980x980/cloudfront-eu-central-1.images.arcpublishing.com/prisa/RESGTJDP6ZHVLLSPQRSS35O33A.jpg' alt='no-found' width={475} className='bg-mascota'/>
                    </div>

                    <div className='col h-100'>
                        <div className='mt-4 mx-auto text-center'>
                            <Button.Group>
                                <Button color='teal' onClick={() => setIsLogin(true)}>Iniciar Sesión</Button>
                                <Button.Or />
                                <Button color='teal' onClick={() => setIsLogin(false)}>Registrarse</Button>
                            </Button.Group>
                        </div>
                            {

                                isLogin
                                ? <LoginForm />
                                : <RegistroForm />
                            }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;