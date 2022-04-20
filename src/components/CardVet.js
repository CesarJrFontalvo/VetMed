import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react';

const CardVet = ({direccion, foto, nombre, telefono, servicios, agenda}) => {

    return (


        <Card>
            <Card.Content>
                <Image
                    floated='right'
                    src={foto}
                />
                <Card.Header>{nombre}</Card.Header>
                <Card.Meta>{direccion}</Card.Meta>
                <Card.Description>
                    <strong>{telefono}</strong>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Link to="/servicios" params={{direccion, foto, nombre, telefono, servicios, agenda}} >
                        <Button basic color='green'>
                            Consultar Servicio
                        </Button>
                    </Link>
                </div>
            </Card.Content>
        </Card>
    )
}

export default CardVet