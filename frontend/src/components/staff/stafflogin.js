import React, { useState, useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import staffContext from '../../context/staff/staffContext';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import staff from '../../img/staffroom.jpg'
import NavBar from '../navbar';
import Footer from '../footer'
// import { connect } from 'react-redux';
// import { staffLogin, setAlert } from '../../actions/staffActions';

const Stafflogin = (props) => {
  const StaffContext = useContext(staffContext);

  const { staffLogin, isAuthenticated } = StaffContext;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//   useEffect(() => {
//     if (isAuthenticated)  <Navigate to='/staffprofile' />;
// },);

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

  if (isAuthenticated) return <Navigate to='/staffprofile' />;
  return (
    <div style={{background:`url(${staff}) center center/cover`, height:'100vh', opacity:'1'}}>
      <NavBar/>
      <div style={{height:'85vh'}}>
    <h3 className="pt-5 " style={{color:'white',fontSize:'35px'}}>Staff Login</h3>
    
    <Form onSubmit={onSubmit}>
      <Form.Group as={Row} className="mb-3 mt-4" controlId="formHorizontalEmail" style={{justifyContent:'center', justifyItems:'center', textAlign:'center'}}>
     
{/*     
        <Form.Label column sm={2}>
          Email
        </Form.Label> */}
        
        <Col  xs ={6} sm={6} md={4} lg={3} xl={3}>
       
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
          <Button type="submit" style={{background:'#333'}}>Sign in</Button>
        </Col>
      </Form.Group>
      <a href="/staffregister" style={{color:''}}>Click here if you're not yet registered</a> <br></br>
      <a href="/staffforgotpassword" style={{color:''}}>Forgot Password</a> <br></br>
      
      
    </Form>
    </div>
    <Footer/>
    </div>
  );
}

// export default connect(
//   null,
//   { staffLogin, setAlert }
// )(Stafflogin);

export default Stafflogin;