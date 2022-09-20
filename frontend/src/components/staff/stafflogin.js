import React, { useState, useContext } from 'react';
import staffContext from '../../context/staff/staffContext';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import { connect } from 'react-redux';
// import { staffLogin, setAlert } from '../../actions/staffActions';

const Stafflogin = (props) => {
  const StaffContext = useContext(staffContext);

  const { staffLogin } = StaffContext;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      // setAlert('please input a valid email and password', 'danger')
    } else {
      const staffLoginDetails = {
        email,
        password,
      };

      console.log(staffLoginDetails);

      staffLogin(staffLoginDetails);

      // setAlert('login successful', 'success')

      setEmail('');
      setPassword('');
     
    }
  };
  return (
    <div>
    <h3 className="mt-4 text-primary">Staff Login</h3>
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
    <a href="/staffregister">Click here if you're not yet registered</a>
    </div>
  );
}

// export default connect(
//   null,
//   { staffLogin, setAlert }
// )(Stafflogin);

export default Stafflogin;