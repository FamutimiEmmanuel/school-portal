import React, { useState, useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import adminContext from '../../context/admin/adminContext';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import admin from '../../img/admin1.jpg'
// import { connect } from 'react-redux';
// import { adminRegister, setAlert } from '../../actions/adminActions';

const Adminregister = (props) => {

  const AdminContext = useContext(adminContext);

  const { adminRegister, isAuthenticated } = AdminContext;

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

  

  const [adminid, setAdminId] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
  
      const adminRegisterDetails = {
        adminid,
        password,
        picture:url
      };

      console.log(adminRegisterDetails);

      adminRegister(adminRegisterDetails);

  };

  if (isAuthenticated) return <Navigate to='/adminprofile' />;

  return (
    <div style={{background:`url(${admin}) center center/cover`, height:'100vh', opacity:'0.7'}}>
    <h3 className="pt-5 " style={{color:'white',fontSize:'35px'}}>Admin Register</h3>
    <Form onSubmit={onSubmit}>
      <Form.Group as={Row} className="mb-3 mt-4" controlId="formHorizontalName" style={{justifyContent:'center', justifyItems:'center', textAlign:'center'}}>
        {/* <Form.Label column sm={2}>
          AdminID
        </Form.Label> */}
        <Col xs ={6} sm={6} md={4} lg={3} xl={3}>
        <Form.Control type="adminid" name="adminid" placeholder="AdminID" value={adminid}
              onChange={e => setAdminId(e.target.value)}/>
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
        <Col sm={{ span: 3, offset: 0 }}>
          <h4 style={{color:'#fff'}}>Upload Picture</h4>
          <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" style={{justifyContent:'center', justifyItems:'center', textAlign:'center'}}>
        <Col sm={{ span: 3, offset: 0 }}>
          <Button type="submit" style={{background:'#333'}}>Submit</Button>
        </Col>
      </Form.Group>
    </Form>
    </div>
  );
}


// export default connect(
//   null,
//   { adminRegister, setAlert }
// )(Adminregister);

export default Adminregister;