import React from "react";
import { Container, Row, Col ,Carousel} from "react-bootstrap";
import Particle from "../Particle";
import chatify from "../../Assets/ban1.jpeg"
import homePro1 from "../../Assets/Perfil/a1.jpg";
import homePro2 from "../../Assets/Perfil/a2.jpg";
import homePro3 from "../../Assets/Perfil/a3.jpg";
import homePro4 from "../../Assets/Perfil/a4.jpg";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function AboutMe() {
  return (
    <Container fluid className="about-section">
      <Container>
        <div className="row">
          <div className="col-md-6">
            <h1 className="project-heading">
              Estudiante <strong className="black1">Andrea Liced Galarza Salguero </strong>
            </h1>
            <h1 className="project-heading">
              MIS DATOS: <strong className="black1"> CI: 6844183LP</strong>
            </h1>
            <p>¡Hola! Soy Andrea, estudiante de Informática en la UMSA, apasionado por la tecnología y con una energía inagotable. Mi fascinación por la informática se combina con mi amor por el deporte, una combinación que alimenta mi vitalidad y enfoque en cada desafío.</p>
            <br/>
            <p>La tecnología es mi mundo; disfruto explorando sus infinitas posibilidades y manteniéndome al tanto de las últimas innovaciones. Además, mi banda favorita, Twenty One Pilots, es una constante fuente de inspiración y motivación en mi día a día.</p>
            <br/>
            <p>Una de mis fortalezas es mi habilidad para trabajar en equipo, siempre dispuesto a colaborar y aportar ideas. La investigación es otra de mis pasiones; me encanta explorar y profundizar en diversos temas, lo cual se refleja en mi compromiso con cada proyecto en el que me involucro.</p>
            <br/>
            <p>Recientemente, tuve la oportunidad de sumergirme en un proyecto que me resultó especialmente gratificante: la realización de un proyecto utilizando React, HTML y Bootstrap. Estas herramientas me han cautivado por su versatilidad y capacidad para materializar ideas de manera efectiva.</p>
            <br/>
            <p>Creo firmemente que esta experiencia no solo fortalecerá mi base académica, sino que también se convertirá en un pilar fundamental para mi desarrollo futuro. Estoy convencido de que aprender estas tecnologías será de gran valor en mi trayectoria profesional.</p>


          </div>
          <div className="col-md-6">
            <div className="embed-responsive embed-responsive-16by9">
              {<iframe width="560" height="315" src="https://www.youtube.com/embed/FiXVRdotCEk?si=bpOg9SKvwcmJJGKV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
              <iframe
                className="embed-responsive-item"
                title="Video de la empresa de mueblería"
                allowFullScreen
              ></iframe>
            </div>
            <div>
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
              <Carousel.Item>
                <img
                  src={homePro4}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "600px" }}
                />
              </Carousel.Item>
         
            </Carousel>
            </div>
          </div>
          <div>
            <Col md={12} className="home-about-social">
            <h1>Mis redes sociales</h1>
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
            </div>
        </div>
      </Container>
    </Container>
  );
}

export default AboutMe;
