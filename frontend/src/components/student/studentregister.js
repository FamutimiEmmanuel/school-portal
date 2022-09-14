import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Studentregister() {
  return (
    <div>
    <h3 className="mt-4 text-primary">Student Register</h3>
    <Form>
      <Form.Group as={Row} className="mb-3 mt-4" controlId="formHorizontalName">
        <Form.Label column sm={2}>
          Name
        </Form.Label>
        <Col sm={4}>
          <Form.Control type="name" placeholder="Name" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3 mt-4" controlId="formHorizontalStudentid">
        <Form.Label column sm={2}>
          Student ID
        </Form.Label>
        <Col sm={4}>
          <Form.Control type="studentid" placeholder="Student ID" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3 mt-4" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={4}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={4}>
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 3, offset: 1 }}>
          <Button type="submit">Submit</Button>
        </Col>
      </Form.Group>
    </Form>
    </div>
  );
}

export default Studentregister;