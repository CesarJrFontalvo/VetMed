import React from 'react'
import { Image, Grid, Embed, Segment } from 'semantic-ui-react'
import { Carousel } from 'react-bootstrap';
//import NavBar2 from './NavBar2';

const Home = () => {

  return (

    <div>
      {/* <NavBar2/> */}
      {/* Carousel img*/}

      <div className='container-carousel'>
        <Carousel>
          <Carousel.Item>
            <Image
              className="h-25 d-inline-block  w-100"
              // src="https://i.imgur.com/HsvhVTg.jpg"
              src="https://res.cloudinary.com/difxvqjj3/image/upload/v1646697085/demoDay/perro2_pjjnls.png"
              alt="Slide image 1"
            />
             <Carousel.Caption>
              <h3>Elegir el mejor alimento tu cachorro </h3>
              <p>Desde proteína magra hasta aceite de pescado de alta calidad, el alimento para cachorros
                <br/>a nutrición correcta puede transformar la vida de su perro.
        
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="h-25 d-inline-block  w-100" 
              // src="https://i.imgur.com/t8Ayz0Q.jpg"
              src="https://cdn.pixabay.com/photo/2017/10/29/14/55/kitten-2899930_960_720.jpg"
              alt="Slide image 2"
            />
            <Carousel.Caption>
              <h3>¿Quieres entrenar a tu gato?</h3>
              <p>Mientras que los perros quieren complacer a su "líder", es importante recordar que los gatos son diferentes. 
                <br/>¡Están más interesados en complacerse a sí mismos!
                <br/>vas a necesitar mucha paciencia, respeto, refuerzo y recompensas
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="h-25 d-inline-block  w-100" src="https://res.cloudinary.com/difxvqjj3/image/upload/v1646698952/demoDay/ave2_sixzwa.png"
              alt="Slide image 3"
            />
             <Carousel.Caption>
              <h3>Cuidado de aves, ¿en qué consiste?</h3>
              <p style={{ background: '#74e9e94b'}}>Para ser felices, lo más básico que necesitan las aves es amor y compañía
                <br/>Deberás limpiar la jaula regularmente para que tu ave se sienta cómoda dentro
                <br/>Desinfecta la jaula una vez a la semana y elimina todos los restos de heces y comida.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="h-25 d-inline-block  w-100" src="https://res.cloudinary.com/difxvqjj3/image/upload/v1646698964/demoDay/conejo_iaywkt.png"
              alt="Slide image 4"
            />
             <Carousel.Caption>
               
              <h3>Cuidados básicos</h3>
              <p>1. Una jaula limpia y lo más grande posible (tiene que caber el conejo de pie, de alto), donde va a dormir,
                <br/>con HENO disponible siempre ya que tiene que ser el principal alimento de su dieta. ...
                <br/>2. Agua fresquita cada día o cada dos días como máximo.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Segment attached='bottom'>
        <div>
          <h1 style={{
            color: "white", textAlign: "center", backgroundColor: "#63CEC1"
          }}>Videos de interes</h1>
          <br />
          <Grid centered columns='three' divided>
            <Grid.Row>
              <Grid.Column>
                <h4>Como cuidar a tu mascota</h4>
                <Embed
                  /*Primver video */
                  id='hL-yIBieVxk'
                  placeholder='https://www.prensalibre.com/wp-content/uploads/2019/06/mascotas-preguntas-veterinario-perros-gatos-4.jpg?resize=760,430'
                  source='youtube'
                />
              </Grid.Column>
              <Grid.Column>
                <h4>Que Alimento elegir</h4>
                <Embed
                  id='gBzfZ_z8oM0'
                  placeholder='https://www.purina-latam.com/sites/g/files/auxxlc391/files/2021-02/familia_de_productos_ecuador.png'
                  source='youtube'
                />
              </Grid.Column>
              <Grid.Column>
                <h4>Consejos para tener un conejo en casa</h4>
                <Embed
                  id='cduBsaY4_4U'
                  placeholder='https://www.centroveterinariobarbanza.es/manejo-y-comportamiento_img8825t1.jpg'
                  source='youtube'
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <h4>Consejos para las vacunas de tus perros</h4>
                <Embed
                  id='N0dEsDEtxag'
                  placeholder='https://s3.amazonaws.com/businessinsider.mx/wp-content/uploads/2021/09/15194756/Vacunas-para-perritos-1280x620.jpg'
                  source='youtube'
                />
              </Grid.Column>
              <Grid.Column>
                <h4>Consejos para las vacunas de tus gatos</h4>
                <Embed
                  id='07-SDcN7ReE'
                  placeholder='https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_960/public/purina-que-vacunas-para-gatos-necesita-mi-gatito.png?itok=kMeQGQR4'
                  source='youtube'
                />
              </Grid.Column>
              <Grid.Column>
                <h4>Escoge un buen alimento para tu ave</h4>
                <Embed
                  id='pg4pXluYerk'
                  placeholder='https://media.istockphoto.com/photos/food-for-birds-food-for-parrots-for-every-day-picture-id826653298?s=612x612'
                  source='youtube'
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Segment>
    </div>
  )
}

export default Home;
