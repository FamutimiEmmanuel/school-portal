import React, { useContext, useEffect } from 'react';
import adminContext from '../../context/admin/adminContext';
import { Button } from "react-bootstrap";

function Adminprofile() {

  const AdminContext = useContext(adminContext);

  const {  getAdmin , admin } = AdminContext;

  useEffect(() => {
    getAdmin()
  },)
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
      <Button type="submit" style={{background:'#333'}}><i className='fas fa-bullhorn'  style={{fontSize:'25px', color:'green'}}></i>Disserminate Info
       </Button>
      <Button type="submit" style={{background:'#333'}}><i className='fas fa-remove'  style={{fontSize:'25px', color:'green'}}></i> Delete Student/ Staff
       </Button>
      <Button type="submit" style={{background:'#333'}}><i className='fas fa-upload'  style={{fontSize:'25px', color:'green'}}></i>Upload Student Result
       </Button>
     
      
 
       </div>
       
 </div>

 </div>
    );
  }
  
  export default Adminprofile;