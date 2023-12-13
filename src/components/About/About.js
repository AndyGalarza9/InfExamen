import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import chatify from "../../Assets/ban1.jpeg"


function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <div className="row">
          <div className="col-md-6">
            <h1 className="project-heading">
             <strong className="black1">Madera y Diseño !!!</strong>
            </h1>
            <p>¡Bienvenido a nuestra empresa de mueblería! Somos expertos en crear muebles de calidad que se adaptan a tu estilo y necesidades.</p>
            <br/>
            <p>En Madera y Diseño, nos especializamos en la creación de muebles artesanales con materiales de alta calidad, como la madera y la melamina. Además, nos enorgullecemos de innovar utilizando materiales reciclados, especialmente plástico, para darles una segunda vida y reducir nuestro impacto en el medio ambiente.</p>
            <br></br>
            <p>Nuestro compromiso con la sostenibilidad va más allá de la elección de materiales. Cada pieza que creamos tiene en cuenta el ciclo de vida completo del mueble, desde su producción hasta su uso y, eventualmente, su reciclaje. Además, como parte de nuestra misión ecológica, destinamos un porcentaje de cada compra para la siembra de árboles, contribuyendo así a la restauración y preservación de nuestros bosques.</p>
            <br></br>
            <p>En Madera y Diseño, cada compra no solo significa adquirir un mueble excepcionalmente diseñado y fabricado, sino también ser parte activa de nuestro compromiso con el planeta. ¡Únete a nosotros en nuestro viaje hacia un estilo de vida más consciente y sostenible!</p>
          </div>
          <div className="col-md-6">
            <div className="embed-responsive embed-responsive-16by9">
              {<iframe width="560" height="315" src="https://www.youtube.com/embed/-d8I5QT33uU?si=G204i2u9Tvc3cKbW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
              <iframe
                className="embed-responsive-item"
                title="Video de la empresa de mueblería"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <img
                src={chatify}
                alt="baner1"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default About;
