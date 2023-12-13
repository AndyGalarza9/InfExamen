import React from "react";
import { useState } from 'react';
import { Container, Row, Col,Form, Button,Alert,Carousel } from "react-bootstrap";
import Particle from "../Particle";
import homePro1 from "../../Assets/Products/pro1.jpeg";
import homePro2 from "../../Assets/Products/pro2.jpeg";
import homePro3 from "../../Assets/Products/pro3.jpeg";

function Pedidos() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowAlert(true);
  };

  return (
    <Container fluid className="pedidos">
      <Container>
      <Row>
      <Col md={6}>
      <Carousel style={{ maxWidth: "800px", margin: "auto" }}> {/* Ajustar tamaño del carrusel */}
              <Carousel.Item>
                <img
                   src={homePro1}
                   alt="home pic"
                   className="img-fluid"
                   style={{ maxHeight: "600px" }}
                />
                
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={homePro2}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "6000px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={homePro3}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "600px" }}
                />
              </Carousel.Item>
         
            </Carousel>
      </Col>
      <Col md={6}>
        <h1 className="project-heading">
          !<strong className="black">REGISTRATE ! </strong>
        </h1>
        <p>En esta sección podrás registrarte para realizar tus pedidos</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>NickName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su nombre de usuario"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese su correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Registrarte
          </Button>
        </Form>

        {showAlert && (
          <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
            ¡Bienvenido, {name}!
          </Alert>
        )}
        </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Pedidos;
