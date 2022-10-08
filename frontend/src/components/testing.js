import React, { useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import { connect } from 'react-redux';
// import { studentRegister, setAlert } from '../../actions/studentActions';

const Testing = (props) => {


  const [image, setImage] = useState('');
  const [url,setUrl] = useState('');
  
  const postPicture = ()=>{
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


      console.log(data.url)
       setUrl(data.url)
    })
    .catch(err=>{
        console.log(err)
    })
  }
 

  const [name, setName] = useState('');
  const [studentid, setStudentID] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


 

  const onSubmit = (e) => {

    e.preventDefault();

    postPicture();
    
        const studentRegisterDetails = {
            name,
            studentid,
            email,
            password,
            picture:url
          };
        console.log(studentRegisterDetails)
    
 };

  
//   useEffect(() => {
//     const onSubmit = (e) => {

//         e.preventDefault();
    
//         postPicture();
//         if(url) {
//             const studentRegisterDetails = {
//                 name,
//                 studentid,
//                 email,
//                 password,
//                 picture:url
//               };
//             console.log(studentRegisterDetails)
//         }
//      };
// });




  return (
    <div style={{background:'#333', height:'100vh'}}>
    <h3 className="pt-5 " style={{color:'white',fontSize:'35px'}}>Student Register</h3>
    <Form  onSubmit = {onSubmit}>
      <Form.Group as={Row} className="mb-3 mt-4" controlId="formHorizontalName" style={{justifyContent:'center', justifyItems:'center', textAlign:'center'}}>
        {/* <Form.Label column sm={2}>
          Name
        </Form.Label> */}
        <Col xs ={6} sm={6} md={4} lg={3} xl={3}>
        <Form.Control type="name" name="name" placeholder="Name" value={name}
              onChange={e => setName(e.target.value)}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3 mt-4" controlId="formHorizontalStudentid" style={{justifyContent:'center', justifyItems:'center', textAlign:'center'}}>
        {/* <Form.Label column sm={2}>
          Student ID
        </Form.Label> */}
        <Col xs ={6} sm={6} md={4} lg={3} xl={3}>
        <Form.Control type="studentid" name="studentid" placeholder="Student ID" value={studentid}
              onChange={e => setStudentID(e.target.value)}/>
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
        <Col sm={{ span: 3, offset: 0 }}>
        <h4 style={{color:'#fff'}}>Upload Picture</h4>
        {/* <input name="Select File" type="file" value={image} onChange={(e)=>setImage(e.target.files[0])} /> */}
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



export default Testing;