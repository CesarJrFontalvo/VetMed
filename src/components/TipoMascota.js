import { useFormik } from 'formik';
import React from 'react'
import { Button, Card, CardGroup, Form, FormGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { registerMascotaAsync } from '../actions/actionMascota';
import '../style/TipoMascota.css';

const TipoMascota = () => {
     const dispatch = useDispatch();
   
   
    // dispatch(registerMascotaAsync(data))
    const formik = useFormik({
        initialValues: {
            edad: "",
            nombre: "",
            imagen: "",
            peso: "",
            vacunas: "",
            tipoMascota: "",
            raza: ""
        },
        onSubmit: (data) => {
            dispatch(registerMascotaAsync(data))
           
        },

    })

    return (
        <div className='container mt-4' style={{ paddingTop: "50px" }}>

            <h1 className='h1Mascota mb-4'>Selecciona tu tipo de mascota </h1>

            <CardGroup className=' mb-4'>
                <Card className=' me-4'>
                    <Card.Img variant="top" src="https://res.cloudinary.com/difxvqjj3/image/upload/v1646434131/demoDay/perro_jrgblx.png" />
                </Card>
                <Card className=' me-4'>
                    <Card.Img variant="top" src="https://res.cloudinary.com/difxvqjj3/image/upload/v1646434131/demoDay/gato_jfvqfc.png" />
                </Card>
                <Card className=' me-4'>
                    <Card.Img variant="top" src="https://res.cloudinary.com/difxvqjj3/image/upload/v1646434131/demoDay/ave_oenpek.png" />
                </Card>
                <Card className=' me-4'>
                    <Card.Img variant="top" src="https://res.cloudinary.com/difxvqjj3/image/upload/v1646434131/demoDay/roedor_va56bn.png" />
                </Card>
                <Card className=' me-4'>
                    <Card.Img variant="top" src="https://res.cloudinary.com/difxvqjj3/image/upload/v1646434131/demoDay/otro_pjrzpk.png" />
                </Card>

            </CardGroup>
            <div>
                <Form onSubmit={formik.handleSubmit }>
                    <FormGroup>
                        <h3>Cual es el nombre de tu mascota</h3>
                        <Form.Control type="text" placeholder="Nombre de tu mascota"
                        name="nombre"
                        onChange={formik.handleChange} />
                        <br />
                        <h3>Cual es el peso de tu mascota</h3>
                        <Form.Control type="text" placeholder="Peso de tu mascota" 
                        name="peso"
                        onChange={formik.handleChange}/>
                        <br />
                        <h3>Cual es la Raza de tu mascota</h3>
                        <Form.Control type="text" placeholder="Raza de tu mascota" 
                        name="raza"
                        onChange={formik.handleChange}/>
                        <br />
                        <h3>Cual es la edad de tu mascota</h3>
                        <Form.Control type="text" placeholder="Edad de tu mascota" 
                        name="edad"
                        onChange={formik.handleChange}/>
                        <br />
                        <h3>Que tipo de mascota es?</h3>
                        <Form.Control type="text" placeholder="Perro, Gato, Ave" 
                        name="tipoMascota"
                        onChange={formik.handleChange}/>
                        <br />
                        <h3>Tu mascota tiene vacunas</h3>
                        <Form.Control type="text" placeholder="si, no" 
                        name="vacunas"
                        onChange={formik.handleChange}/>
                         <br />
                        <h3>Ingresa la url de una imagen </h3>
                         <Form.Control type="text" placeholder="url de la imagen" 
                        name="imagen"
                        onChange={formik.handleChange}/>
                  
                    </FormGroup>
                    <Button className="mt-4" type="submit" variant="primary">
                        Registrar
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default TipoMascota