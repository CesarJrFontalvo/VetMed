import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listVeterinariaAsync } from '../actions/actionVeterinarias';
import { ContainerDiv } from '../style/StyledNav';
import CardVet from './CardVet';
import Mapa from './Mapa'
const Veterinarias = () => {
  const dispatch = useDispatch();

  const { listaVets } = useSelector(store => store.veterinaria);
  console.log(listaVets)

  useEffect(() => {
    dispatch(listVeterinariaAsync())
  }, [dispatch])

  return (
    <ContainerDiv className='d-flex '>
      <Mapa data={listaVets} />
      <div height= '100vh'>
        {
          listaVets.map((item, index) => (
            <CardVet
              key={index}
              {...item}
            />
          ))
        }
      </div>
    </ContainerDiv>
  )
}

export default Veterinarias