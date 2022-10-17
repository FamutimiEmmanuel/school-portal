import React, { useContext, useEffect, useState } from 'react';
import adminContext from '../../context/admin/adminContext';
import { Button } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Adminprofile() {

  const AdminContext = useContext(adminContext);

  const {  getAdmin , admin ,deleteStaff, deleteStudent, logout } = AdminContext;

  const [staff, setStaff] = useState('');
  const [student, setStudent] = useState('');

  useEffect(() => {
    getAdmin()
  },)

  const onDeleteStaff = () => {
    deleteStaff(staff);
    console.log('staff deleted');
  }
  const onDeleteStudent = () => {
    deleteStudent(student);
    console.log('student deleted');
  }
    return (
      <div style={{background:'#333', height:'100vh', color:'#fff'}}>
      <h1 className="pt-2" style={{justifyContent:'center',justifyItems:'center', textAlign:'center'}}>Welcome {admin.name}</h1>
   
    <div className='pt-5' style={{fontSize:'25px', fontWeight:'bold', justifyContent:'left',justifyItems:'left', textAlign:'left'}}>
    <div className='mt-3'>
                   <img style={{width:"160px",height:"160px",borderRadius:"80px"}} alt="profile"
                   src={admin.picture}
                   />
                 
               </div>
    <div  className="mt-2">Name :{admin.name}</div>
    <div  className="pt-2"> Email: {admin.email}</div>


       <div className="pt-5" style={{justifyContent:'center',justifyItems:'center', textAlign:'center'}}>
       <Form.Group as={Row} className="mb-3 mt-4" controlId="formHorizontalEmail" style={{justifyContent:'center', justifyItems:'center', textAlign:'center'}}>

        <Col xs ={6} sm={6} md={4} lg={3} xl={3}>
          <Form.Control type="staff" name="staff" placeholder="Enter staff email" value={staff}
              onChange={e => setStaff(e.target.value)}/>
        </Col>
      </Form.Group>
      <Button type="submit" style={{background:'#333'}} onClick={onDeleteStaff}><i className='fas fa-remove'  style={{fontSize:'25px', color:'green'}}></i> Delete Staff
       </Button>

       <Form.Group as={Row} className="mb-3 mt-4" controlId="formHorizontalEmail" style={{justifyContent:'center', justifyItems:'center', textAlign:'center'}}>

      <Col xs ={6} sm={6} md={4} lg={3} xl={3}>
        <Form.Control type="student" name="student" placeholder="Enter student id" value={student}
            onChange={e => setStudent(e.target.value)}/>
      </Col>
      </Form.Group>
      <Button type="submit" style={{background:'#333'}} onClick={onDeleteStudent}><i className='fas fa-remove'  style={{fontSize:'25px', color:'green'}}></i>Delete Student
       </Button>
       
       <Button type="submit" style={{background:'#333'}}  onClick={() => logout()}><i className='fas fa-logout'  style={{fontSize:'25px', color:'green'}}></i>Disserminate Info
       </Button>
     
      
 
       </div>
       
 </div>

 </div>
    );
  }
  
  export default Adminprofile;