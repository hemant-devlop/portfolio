import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
const Resume = () => {
  const googleDriveId='1DyBAf7xsD2I1HV6xr8XLlA0S4goy5YGc';
  return (
    <Container>
      <Row className="mt-4 text-sm-center">
        <Col>
        <a href="../assets/resume.pdf" download><button className='btn btn btn-dark' title='download resume'>Download Resume PDF</button></a>
          <h1 className='mb-3'>HEMANT KUMAR</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <iframe
        src={`https://drive.google.com/file/d/${googleDriveId}/preview`}
        width="100%"
        height="700"
        allow="autoplay"
        style={{ border: 'none' }}
        title="Google Drive PDF"
      ></iframe>
      </Row>
    </Container>
  );
};

export default Resume;
