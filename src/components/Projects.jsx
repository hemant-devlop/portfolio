import { Col, Row } from "react-bootstrap";
import projects from '../components/projects.json';
const Projects = () => {
  return (
    <div className="container my-3" id="projects">
    <h2 className='font text-center py-3 text-decoration-underline ' id='skill'>My Projects</h2>
      <Row>
      {projects.map((p,id)=>
      <Col key={id} sm={6} className="mb-3 d-flex flex-column justify-content-between">
        <div className="d-lg-flex gap-3 mb-2">
        <a href={p.project_web} aria-label={p.project_title}>
            {/* 429+226 px ration  from imageresizer.com */}
                    <img  src={p.project_img} alt="image" height={220} width={300} className="mx-auto d-block border border-info rounded"/>

        </a>
          <div className="">
            <h3 className="text-center mt-2 font">{p.project_title}</h3>
            <p className=" max-w-100 text-justify">{p.project_description}</p>
          </div>
        </div>
        <div className="d-flex gap-2">
          <a href={p.project_web} aria-label="project_web" target="_blank" type="button" className="btn btn-outline-dark grow font"> <i className="bi bi-globe align-middle fs-3"></i> server</a>
          <a href={p.project_git} aria-label={p.project_img} target="_blank" type="button" className="btn btn-outline-dark grow font "><i className="bi bi-github align-middle fs-3"></i> github</a>
        </div>
      </Col>
      )}
      </Row>
    </div>
  );
};

export default Projects;
