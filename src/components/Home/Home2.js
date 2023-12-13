import React from "react";
import homePro1 from "../../Assets/Products/pro1.jpeg";
import homePro2 from "../../Assets/Products/pro2.jpeg";
import homePro3 from "../../Assets/Products/pro3.jpeg";
import { Container, Row, Col,Carousel,Button} from "react-bootstrap";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <div>

    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row className="justify-content-center"> {/* Centrar el carrusel */}
      
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>Descubre lo último en mobiliario innovador.</h1>
            <h1 style={{ fontSize: "2.6em" }}>
              Busca Tus <span className="black1"> MUEBLES </span> Favoritos!!
            </h1>
            <br/>
            <br/>
            <br/>
            <Col>
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
            <br/>
            <br/>
            <br/>
          </Col>
        </Row>
        <Row>
        <Button variant="primary" type="submit">
            Registrate!!
          </Button>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Encuentranos en nuestras redes</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/andrea-liced-galarza-salguero-b43560218/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/andygalarza69/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/AndyGalarza9/proyectoandrea"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

      </Container>
    </Container>
    </div>
  );
}
export default Home2;
