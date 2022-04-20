import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { listaMascotaAsync } from '../actions/actionMascota';
import CardMascota from './card/CardMascota';


const Perfil = () => {
    const dispatch = useDispatch();

    const { listaMascotas } = useSelector(store => store.mascota);
    console.log(listaMascotas)
    // const { listaUsuario } = useSelector(store => store.usuario);
    // console.log(listaUsuario)
  
    useEffect(() => {
      dispatch(listaMascotaAsync())
    //   dispatch(listaUsuarioAsync())
    }, [dispatch])
    return (
        <div className='container m-4 d-flex'>
           {
                listaMascotas.map((e, i) => (
                
                        <CardMascota className="me-5 mt-5"  key={i}
                        {...e}/>
                      ))
               
            }
         
        </div>
    )
}

export default Perfil