// import {Navigate} from 'react-router-dom'
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
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux';
// import { staffRegister, setAlert } from '../../actions/staffActions';

const Staffregister = (props) => {
  const StaffContext = useContext(staffContext);

  const { staffRegister, isAuthenticated } = StaffContext;

  const [image, setImage] = useState('');
  const [url,setUrl] = useState('');

  
  useEffect(()=>{
    if(image){
      const data = new FormData()
      data.append("file",image)
      data.append("upload_preset","insta-clone")
      data.append("cloud_name","integrity1212")
      fetch("https://api.cloudinary.com/v1_1/integrity1212/image/upload",{
        method:"post",
        body:data
    })
     .then(res=>res.json())
     .then(data=>{
 
      setUrl(data.url);
      // console.log(url);
       
    
     })
     .catch(err=>{
         console.log(err)
     })
    }
 },[image,url])
  



  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const onSubmit = (e) => {
    e.preventDefault();
   
      const staffRegisterDetails = {
        name,
        email,
        password,
        picture:url
      };

      console.log(staffRegisterDetails);

      staffRegister(staffRegisterDetails);
  };

  if (isAuthenticated) return <Navigate to='/staffprofile' />;

 
  return (
    <div style={{background:`url(${staff}) center center/cover`, height:'100vh', opacity:'1'}}>
      <NavBar/>
      <div style={{height:'85vh'}}>
    <h3 className="pt-5 " style={{color:'white',fontSize:'35px'}}>Staff Register</h3>
    <Form onSubmit={onSubmit}>
      <Form.Group as={Row} className="mb-3 mt-4" controlId="formHorizontalName" style={{justifyContent:'center', justifyItems:'center', textAlign:'center'}}>
        {/* <Form.Label column sm={2}>
          Name
        </Form.Label> */}
        <Col xs ={6} sm={6} md={4} lg={3} xl={3}>
        <Form.Control type="name" name="name" placeholder="Name" value={name}
              onChange={e => setName(e.target.value)}/>
        </Col>
      </Form.Group>
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
          onChange={e => setPassword(e.target.value)} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalImage" style={{justifyContent:'center', justifyItems:'center', textAlign:'start'}}>
        {/* <Form.Label column sm={2}>
          Upload Image
        </Form.Label> */}
        <Col style={{justifyContent:'center', justifyItems:'center', textAlign:'center'}}>
          <h4 className="text-primary" style={{color:'#fff'}}>Upload Picture</h4>
          <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" style={{justifyContent:'center', justifyItems:'center', textAlign:'center'}}>
        <Col sm={{ span: 3, offset: 0 }}>
          <Button type="submit" style={{background:'#333'}}>Submit</Button>
        </Col>
      </Form.Group>
      {/* {isAuthenticated ? <h6>you are registered</h6> : <h6> register here</h6>} */}
    </Form>
    </div>
    <Footer/>
    </div>
  );
}



export default Staffregister;