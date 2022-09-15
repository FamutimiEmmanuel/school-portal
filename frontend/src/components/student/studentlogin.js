import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { login, setAlert } from '../../actions/studentActions';


function Studentlogin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    if (email === '' || password === '') {
      setAlert('please input a valid email and password', 'danger')
    } else {
      const studentLogin = {
        email,
        password,
      };

      console.log(studentLogin);

      login(studentLogin);

      setAlert('login successful', 'success')

      setEmail('');
      setPassword('');
     
    }
  };

  return (
    <div>
    <h3 className="mt-4 text-primary">Student Login</h3>
    <Form onSubmit={onSubmit}>
      <Form.Group as={Row} className="mb-3 mt-4" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={4}>
          <Form.Control type="email" name="email" placeholder="Email" value={email}
              onChange={e => setEmail(e.target.value)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={4}>
        <Form.Control type="password" name="password" placeholder="Password" value={password}
              onChange={e => setPassword(e.target.value)}/>
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

// export default Studentlogin;

export default connect(
  null,
  { login, setAlert }
)(Studentlogin);