import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import studentContext from '../../context/student/studentContext';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { connect } from 'react-redux';
// import { studentLogin, setAlert } from '../../actions/studentActions';


const Studentlogin = () => {

  const StudentContext = useContext(studentContext);

  const { studentLogin,isAuthenticated } = StudentContext;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      // setAlert('please input a valid email and password', 'danger')
    } else {
      const studentLoginDetails = {
        email,
        password,
      };

      console.log(studentLoginDetails);

      studentLogin(studentLoginDetails);

      // setAlert('login successful', 'success')

      setEmail('');
      setPassword('');
     
    }
  };

  if (isAuthenticated) return <Navigate to='/studentprofile' />;
  return (
    <div style={{background:'#333', height:'100vh'}}>
    <h3 className="pt-5 " style={{color:'white',fontSize:'35px'}}>Student Login</h3>
    <Form onSubmit={onSubmit}>
      <Form.Group as={Row} className="mb-3 mt-4" controlId="formHorizontalEmail" style={{justifyContent:'center', justifyItems:'center', textAlign:'center'}}>
        {/* <Form.Label column sm={2}>
          Email
        </Form.Label> */}
        <Col xs ={6} sm={6} md={4} lg={3} xl={3}>
          <Form.Control type="email" name="email" placeholder="Email" value={email}
              onChange={e => setEmail(e.target.value)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword" style={{justifyContent:'center', justifyItems:'center', textAlign:'center'}}>
        {/* <Form.Label column sm={2}>
          Password
        </Form.Label> */}
        <Col xs ={6} sm={6} md={4} lg={3} xl={3}>
        <Form.Control type="password" name="password" placeholder="Password" value={password}
              onChange={e => setPassword(e.target.value)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" style={{justifyContent:'center', justifyItems:'center', textAlign:'center'}}>
        <Col sm={{ span: 3, offset: 0 }}>
          <Button type="submit"  style={{background:'#333'}}>Sign in</Button>
        </Col>
      </Form.Group>
    </Form>
    <a href="/studentregister">Click here if you're not yet registered</a><br></br>
    <a href="/studentforgotpassword">forgot password</a>
    </div>
  );
}


// export default connect(
//   null,
//   { studentLogin, setAlert }
// )(Studentlogin);

export default Studentlogin;