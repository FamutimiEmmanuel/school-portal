import React, { useState, } from 'react';
import { Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import forgotpassword from '../../img/forgotpassword.jpg';
import NavBar from '../navbar';
import Footer from '../footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



const Studentforgotpassword = () => {

  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const studentLoginDetails = {
    email,
    password:password1
  };
 const postforgotdetails = (e) => {
    fetch("http://localhost:5000/api/students/forgotpassword",{
        method:"post",
        body:studentLoginDetails
    })
    .catch(err=>{
        console.log(err)
    })
 }
       


  const onSubmit = async (e) => {
    e.preventDefault();
    if (password1 !== password2) {
     return <h3>passwords do not match</h3>
    } else {
       postforgotdetails();
       <Navigate to='/studentlogin' />

    }

};

     
     
   


  return (
    <div style={{background:`url(${forgotpassword}) center center/cover`, height:'100vh', opacity:'1'}}>
      <NavBar/>
      <div style={{height:'85vh'}}>
    <h3 className="pt-5 " style={{color:'white',fontSize:'35px'}}>Student Forgot Password</h3>
    <Form onSubmit={onSubmit}>
      <Form.Group as={Row} className="mb-3 mt-4" controlId="formHorizontalEmail" style={{justifyContent:'center', justifyItems:'center', textAlign:'center'}}>
        {/* <Form.Label column sm={2}>
          Email
        </Form.Label> */}
        <Col xs ={6} sm={6} md={4} lg={3} xl={3}>
          <Form.Control type="email" name="email" placeholder="Enter Email" value={email}
              onChange={e => setEmail(e.target.value)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword1" style={{justifyContent:'center', justifyItems:'center', textAlign:'center'}}>
        {/* <Form.Label column sm={2}>
          Password
        </Form.Label> */}
        <Col xs ={6} sm={6} md={4} lg={3} xl={3}>
        <Form.Control type="password" name="password1" placeholder="Enter new Password" value={password1}
              onChange={e => setPassword1(e.target.value)} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword2" style={{justifyContent:'center', justifyItems:'center', textAlign:'center'}}>
        {/* <Form.Label column sm={2}>
          Password
        </Form.Label> */}
        <Col xs ={6} sm={6} md={4} lg={3} xl={3}>
        <Form.Control type="password" name="password2" placeholder="Confirm new Password" value={password2}
              onChange={e => setPassword2(e.target.value)} required/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" style={{justifyContent:'center', justifyItems:'center', textAlign:'center'}}>
        <Col sm={{ span: 3, offset: 0 }}>
          <Button type="submit"  style={{background:'#333'}}>Submit</Button>
        </Col>
      </Form.Group>
    </Form>
    </div>
    <Footer/>
    </div>
  );
}


// export default connect(
//   null,
//   { studentLogin, setAlert }
// )(Studentlogin);

export default Studentforgotpassword;