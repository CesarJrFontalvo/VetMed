import React from 'react'
import { Card } from 'react-bootstrap'

const CardMascota = ({
    nombre,
    edad,
    imagen,
    peso,
    raza,
    tipoMascota,
    vacuna
}) => {
  return (
    <div>
         <div > 
           
                
           <Card className="perfilMascota m-4 mt-3"  >
               
              <Card.Img  src={imagen}   alt="..." />
                     
               <Card.Body>
                   <Card.Text>
                     <h4>Nombre: {nombre}</h4>
                     <h4>Edad:  {edad}</h4>
                     <h4>Peso: {peso}</h4>
                     <h4>Tipo: {tipoMascota}</h4>
                     <h4>Raza: {raza}</h4>
                     <h4>Vacunas: {vacuna}</h4>
                                 
                    </Card.Text>
                    
             </Card.Body>
           </Card>
       
  

      
       
  
   </div>  
    </div>
  )
}

export default CardMascota