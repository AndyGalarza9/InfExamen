import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Products/produ1.jpg"
import bitsOfCode from "../../Assets/Products/produ2.jpg";
import pro3 from "../../Assets/Products/produ3.jpg";
import pro4 from "../../Assets/Products/produ4.jpg";
import pro5 from "../../Assets/Products/produ5.jpg";
import pro6 from "../../Assets/Products/produ6.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Muebles en Tendencia <strong className="black"> "ESCRITORIO" </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui encontraras muebles de escritorio.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="500 BS"
              description="Nuestra mesa de centro rústica es más que un mueble; es una historia contada por la madera recuperada. Cada tabla de este encantador centro de reunión tiene su propio carácter y patina única. La calidez y autenticidad de la madera reciclada se combinan con un diseño funcional y robusto, convirtiéndola en el punto focal perfecto para tu sala de estar."
              
              demoLink="https://www.youtube.com/watch?v=coTXyndI1vo&list=RDitvZrAc3sRo&index=6"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="40 BS"
              description="Sumérgete en la comodidad suprema con nuestro sofá de terciopelo clásico. Su diseño elegante se combina con la suavidad del terciopelo para ofrecerte un lugar acogedor para relajarte. Con detalles finamente elaborados y una estructura resistente, este sofá no solo embellecerá tu espacio, sino que también te brindará el confort que mereces."
              
              demoLink="https://www.youtube.com/watch?v=coTXyndI1vo&list=RDitvZrAc3sRo&index=6"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro3}
              isBlog={false}
              title="90 BS"
              description="Aumenta tu productividad con nuestra silla ergonómica de oficina. Su diseño contemporáneo y ajustes personalizables te brindan comodidad durante horas de trabajo. Diseñada para apoyar tu postura y reducir la fatiga, esta silla no solo es elegante, sino también una aliada para tu bienestar mientras enfrentas tus desafíos diarios."
              
              demoLink="https://www.youtube.com/watch?v=coTXyndI1vo&list=RDitvZrAc3sRo&index=6"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro4}
              isBlog={false}
              title="600 BS"
              description="¿Buscas organización sin sacrificar el estilo? Nuestro versátil armario de almacenamiento es la solución perfecta. Con estantes ajustables y un diseño elegante, este mueble ofrece el espacio que necesitas para organizar desde libros hasta accesorios. Su construcción duradera lo convierte en un compañero confiable para mantener tu espacio ordenado y pulcro."
              
              demoLink="https://www.youtube.com/watch?v=coTXyndI1vo&list=RDitvZrAc3sRo&index=6"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro5}
              isBlog={false}
              title="300 BS"
              description="Simplifica tu dormitorio con nuestra cama plataforma minimalista. Su diseño limpio y contemporáneo ofrece un espacio de descanso tranquilo y moderno. Hecha con materiales de alta calidad, esta cama no solo añade estilo, sino que también garantiza un descanso reparador después de un largo día."
              
              demoLink="https://www.youtube.com/watch?v=coTXyndI1vo&list=RDitvZrAc3sRo&index=6"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro6}
              isBlog={false}
              title="250 BS "
              description="Celebra momentos memorables con nuestra mesa de comedor extensible. Su diseño ingenioso te permite adaptar el tamaño según tus necesidades, desde cenas íntimas hasta reuniones familiares. La combinación de funcionalidad y elegancia convierte esta mesa en el centro de encuentro para compartir experiencias inolvidables."
              
              demoLink="https://www.youtube.com/watch?v=coTXyndI1vo&list=RDitvZrAc3sRo&index=6"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
