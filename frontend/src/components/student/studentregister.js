import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
import { studentRegister, setAlert } from '../../actions/studentActions';

const Studentregister = ({studentRegister}) => {

  const [name, setName] = useState('');
  const [studentid, setStudentID] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');

  const onSubmit = (e) => {

    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('please input a valid email and password', 'danger')
    } else {
      const studentRegisterDetails = {
        name,
        studentid,
        email,
        password,
        image
      };

      console.log(studentRegisterDetails);

      studentRegister(studentRegisterDetails);

      setAlert('Register success', 'success')

      setEmail('');
      setPassword('');
     
    }
  };

  return (
    <div>
    <h3 className="mt-4 text-primary">Student Register</h3>
    <Form onSubmit={onSubmit}>
      <Form.Group as={Row} className="mb-3 mt-4" controlId="formHorizontalName">
        <Form.Label column sm={2}>
          Name
        </Form.Label>
        <Col sm={4}>
        <Form.Control type="name" name="name" placeholder="Name" value={name}
              onChange={e => setName(e.target.value)}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3 mt-4" controlId="formHorizontalStudentid">
        <Form.Label column sm={2}>
          Student ID
        </Form.Label>
        <Col sm={4}>
        <Form.Control type="studentid" name="studentid" placeholder="Student ID" value={studentid}
              onChange={e => setStudentID(e.target.value)}/>
        </Col>
      </Form.Group>
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
          onChange={e => setPassword(e.target.value)} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalImage">
        <Form.Label column sm={2}>
          Upload Image
        </Form.Label>
        <Col sm={2}>
        <input name="Select File" type="file" value={image} onChange={e => setImage(e.target.value)} />
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


// Studentregister.propTypes = {
//   studentRegister: PropTypes.func.isRequired
// };

export default connect(
  null,
  { studentRegister, setAlert }
)(Studentregister);