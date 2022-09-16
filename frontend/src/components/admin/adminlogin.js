import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
import { adminLogin, setAlert } from '../../actions/adminActions';

function Adminlogin() {

  const [adminid, setAdminId] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (adminid === '' || password === '') {
      setAlert('please input a valid ID and password', 'danger')
    } else {
      const adminLoginDetails = {
        adminid,
        password
      };

      console.log(adminLoginDetails);

      adminLogin(adminLoginDetails);

      setAlert('Register success', 'success')

      setAdminId('');
      setPassword('');
     
    }
  };

  return (
    <div>
    <h3 className="mt-4 text-primary">Admin Login</h3>
    <Form onSubmit={onSubmit}>
      <Form.Group as={Row} className="mb-3 mt-4" controlId="formHorizontalAdminId">
        <Form.Label column sm={2}>
          Admin ID
        </Form.Label>
        <Col sm={4}>
        <Form.Control type="adminid" name="adminid" placeholder="AdminID" value={adminid}
              onChange={e => setAdminId(e.target.value)}/>
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

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 3, offset: 1 }}>
          <Button type="submit">Sign in</Button>
        </Col>
      </Form.Group>
    </Form>
    <a href="/adminregister">Click here if you're not yet registered</a>
    </div>
  );
}


export default connect(
  null,
  { adminLogin, setAlert }
)(Adminlogin);