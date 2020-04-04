import React from 'react';
import './contactos.css';
import { Form ,Col, Button, InputGroup, Container  } from 'react-bootstrap';

const Contacto = () => {
    return ( 
    <Container>
      <Form className=" mt-5 mx-5 backform text-center">
        <Form.Row className="mx-5">
          <Form.Group as={Col} >
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control type="text" aria-describedby="inputGroupPrepend" required placeholder="Ingresa Tu nombre" />
          </Form.Group>
          
          <Form.Control.Feedback type="invalid">
                Completa este campo
          </Form.Control.Feedback>
        
          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
            <Form.Label>Email</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Completa este campo
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Group className="mx-5" controlId="formGridAddress1">
          <Form.Label>Direccion</Form.Label>
          <Form.Control placeholder="Ej. Av. Peron 250" type="text" aria-describedby="inputGroupPrepend" required />
          <Form.Control.Feedback type="invalid">
                Completa este campo
              </Form.Control.Feedback>
        </Form.Group>

        <Form.Row className="mx-5">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control placeholder="Ej. Tucuman" type="text" aria-describedby="inputGroupPrepend" required />
            <Form.Control.Feedback type="invalid">
                Completa este campo
              </Form.Control.Feedback>
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Telefono</Form.Label>
            <Form.Control placeholder="Ej. 3815397893" type="number" aria-describedby="inputGroupPrepend" required />
            <Form.Control.Feedback type="invalid">
                Completa este campo
              </Form.Control.Feedback>
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Codigo Postal</Form.Label>
            <Form.Control placeholder="Ej. 4000" type="number" aria-describedby="inputGroupPrepend" required />
            <Form.Control.Feedback type="invalid">
                Completa este campo
              </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Group className="mx-5" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder="Ej. Mensaje" aria-describedby="inputGroupPrepend"  required />
          <Form.Control.Feedback type="invalid">
                Completa este campo
              </Form.Control.Feedback>
        </Form.Group>
          
         
      
        <Button className="mx-5 rounded-pill my-4 px-4" variant="danger" type="submit">
          Enviar
        </Button>
      </Form> 
    </Container>
      );
}
 
export default Contacto;