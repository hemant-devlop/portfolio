import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
const Resume = () => {
  return (
    <Container>
      <Row className="mt-4 text-sm-center">
        <Col>
        <a href="../assets/resume2.pdf" download><button className='btn btn-sm btn-primary' title='download resume'>Download</button></a>
          <h1 className='mb-3'>HEMANT KUMAR</h1>
          <div className='d-flex flex-column flex-sm-row justify-content-center'>
          <p className='order-sm-2'><img src="https://img.icons8.com/?size=100&id=9730&format=png&color=000000" className='d-sm-none' height='25px' /> +917027122563</p>
          <p className='order-sm-1'><img src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" height='25px' /> <a href="mailto:hemant.devlop@gmail.com">hemant.devlop@gmail.com</a> | </p>
          </div>
          <div className='d-sm-flex justify-content-between'>
          <p><img src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000" height='30px' /><a href="https://github.com/hemant-devlop">github.com/hemant-devlop</a></p>
          <p><img src="https://img.icons8.com/?size=100&id=98960&format=png&color=000000" height='30px' /><a href="https://linkedin.com/in/hemantdevloper">linkedin.com/in/hemantdevloper</a></p>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h3>SUMMARY</h3>
          <p>
            Skilled React.js Developer with 2 years of hands-on experience building dynamic web applications. Proficient in JavaScript, HTML, CSS, React.js, and Redux-toolkit. Adept at translating client requirements, optimizing performance, and collaborating with teams to deliver high-quality software products.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h3>SKILLS</h3>
          <ListGroup>
            <ListGroup.Item><strong>Language:</strong> JavaScript, Node.js</ListGroup.Item>
            <ListGroup.Item><strong>Web Technologies:</strong> HTML5, CSS3</ListGroup.Item>
            <ListGroup.Item><strong>Framework and Library:</strong> React.js, Express.js, Bootstrap5, Material UI</ListGroup.Item>
            <ListGroup.Item><strong>DB Language:</strong> MongoDB</ListGroup.Item>
            <ListGroup.Item><strong>Operating System:</strong> Windows</ListGroup.Item>
            <ListGroup.Item><strong>Tools and Technologies:</strong> Visual Studio, Sublime, Postman, git, GitHub</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h3>EDUCATION</h3>
          <p><strong>BCA | Govt. College Ateli</strong> (2020-2023)</p>
          <p><strong>XII<sup>th</sup> Commerce | Govt. S.S.S. Ateli</strong> (2018-2020)</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h3>TRAINING</h3>
          <p><strong>MERN STACK DEVELOPER | Industrial Training</strong> (06/2023-01/2024)</p>
          <p>Ducat Gurgaon</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h3>PROJECTS</h3>
          <ListGroup>
            <ListGroup.Item>
              <strong>SHOPPING CART:</strong> Developed a dynamic shopping cart application using React and Redux Toolkit with AsyncThunk for efficient state management and asynchronous operations. Implemented features for adding, removing, and updating items, ensuring a seamless user experience.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>SHOPPING DASHBOARD:</strong> Built a robust shopping website dashboard using React, Axios for asynchronous operations, and CRUD functionality. Implemented secure login/signup pages and configured seamless routing for enhanced user navigation and experience.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>EXPENSE TRACKER:</strong> Created a React-based Expense Tracker project for efficient financial management, featuring income and expense tracking with add, edit, and delete functionalities. Implemented responsive design for seamless usability across devices, prioritizing intuitive user experience.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>MY UNIVERSITY:</strong> Transformed a static website into a dynamic React.js application, enhancing interactivity and user engagement through component-driven development and efficient state management. Integrated modern UI/UX principles for responsive design and seamless navigation across all platforms.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>TODO APP:</strong> Created a React-based TODO app allowing seamless task management with features like task creation, deletion, and status tracking, ensuring efficient organization and productivity.
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row className="mt-4 mb-4">
        <Col>
          <h3>Declaration</h3>
          <p>
            I hereby declare that the information provided above is true and accurate to the best of my knowledge and belief.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
