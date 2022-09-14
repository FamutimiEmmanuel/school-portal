import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Stafflogin() {
  return (
    <div>
    <h3 className="mt-4 text-primary">Staff Login</h3>
    <Form>
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
          <Button type="submit">Sign in</Button>
        </Col>
      </Form.Group>
    </Form>
    <a href="/studentregister">Click here if you're not yet registered</a>
    </div>
  );
}

export default Stafflogin;