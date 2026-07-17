import { Carousel } from "react-bootstrap";
import projects from '../components/projects.json';
import { motion } from 'motion/react';
import './Projects.css';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container my-3"
      id="projects"
    >
      <h2 className='font text-center py-3 text-decoration-underline' id='skill'>My Projects</h2>

      <Carousel variant="dark" interval={3000} pause="hover" className="projects-carousel py-4" fade>
        {projects.map((p, id) => (
          <Carousel.Item key={id} className="py-4">
            <div className="project-card flex flex-col lg:flex-row items-center mx-auto gap-4">
              <a href={p.project_web} aria-label={p.project_title} target="_blank" rel="noreferrer" className="project-image-link">
                <img
                  src={p.project_img}
                  alt={p.project_title}
                  className="project-image rounded border border-info"
                />
              </a>

              <div className="project-content text-center text-lg-start">
                <h3 className="font mb-3">{p.project_title}</h3>
                <p className="project-description">{p.project_description}</p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-2 mt-3">
                  <a
                    href={p.project_web}
                    aria-label="project web"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-dark grow font"
                  >
                    <i className="bi bi-globe align-middle fs-3"></i> Live
                  </a>
                  <a
                    href={p.project_git}
                    aria-label="project github"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-dark grow font"
                  >
                    <i className="bi bi-github align-middle fs-3"></i> github
                  </a>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </motion.div>
  );
};

export default Projects;
