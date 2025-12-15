import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
const Resume = () => {
  const googleDriveId='147ramDx9a-84fNPAIIIDUkVADhsGyG2t'; // ID from
  // https://drive.google.com/file/d/147ramDx9a-84fNPAIIIDUkVADhsGyG2t/view?usp=sharing
  return (
    <Container>
      <Row className="mt-4 text-sm-center">
        <Col>
        <a href="../assets/resume.pdf" download><button aria-label='resume_download' className='btn btn btn-dark' title='download resume'>Download Resume PDF</button></a>
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
