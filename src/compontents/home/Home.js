import React, { Fragment } from 'react';
import perrito from './perrito.jpg'
import cachorros from './cachorros.jpg'
import gatitos from './gatitos.jpg'
import './home.css';
import { Jumbotron, CardDeck ,Card,  } from 'react-bootstrap';

const Home = () => {
    return (  
        <Fragment>
            <Jumbotron className="text-center mt-5 mx-5 bg-white" id="bgperrito">
                <div className="py-5">
                <h1 className="">Bienvenido a Veterinaria Bigotes!</h1>
                <h5 className="mt-4  "> Somos fanáticos de los animales</h5>
                </div> 
                <p className="mx-5 font-weight-bold">Somos un equipo de veterinarios y asesores que creamos relaciones basadas en la confianza y juntos nos comprometemos a cuidar a tu mascota como si fuera nuestra.</p>
            </Jumbotron>
            <CardDeck className="mx-5 mb-5">
                <Card>
                    <Card.Img variant="top" src={perrito} />
                    <Card.Body>
                    <Card.Text>
                    La grandeza de una nación y su progreso moral puede ser juzgado por la forma en que sus animales son tratados
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card>
                    <Card.Img variant="top" src={cachorros} />
                    <Card.Body>
                    
                    <Card.Text>
                    Si tener alma significa ser capaz de sentir amor, lealtad y gratitud, los animales son mejores que muchos humanos{' '}
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card>
                    <Card.Img variant="top" src={gatitos} />
                    <Card.Body>
                    
                    <Card.Text>
                    Los animales son confiables, están llenos de amor, afectivos, predecibles en sus acciones, agradecidos y leales.
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
            </CardDeck>
        </Fragment>    
    );
}
 
export default Home;