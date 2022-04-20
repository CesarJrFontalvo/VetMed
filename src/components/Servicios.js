import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listVeterinariaAsync } from '../actions/actionVeterinarias';

const Servicios = () => {
  // props?.data[0]&&
  // console.log(props?.data[0].servicios)
  const dispatch = useDispatch();

  const { listaVets } = useSelector(store => store.veterinaria);
  console.log(listaVets)

  useEffect(() => {
    dispatch(listVeterinariaAsync())
  }, [dispatch])
  return (
    <div className="m-5">Servicios</div>
  )
}

export default Servicios