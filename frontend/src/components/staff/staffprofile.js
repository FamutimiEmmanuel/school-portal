// import React, { useEffect, useContext } from 'react';
import React, { useContext, useEffect } from 'react';
import { Button } from "react-bootstrap";
import staffContext from '../../context/staff/staffContext';
// import staffContext from '../../context/staff/staffContext';

function Staffprofile() {
  const StaffContext = useContext(staffContext);

  const { getStaffs } = StaffContext;


  useEffect(() => {
    getStaffs()
  },)

  
    return (
      <div style={{background:'#333', height:'100vh', color:'#fff'}}>
      <h1 className="pt-2" style={{justifyContent:'center',justifyItems:'center', textAlign:'center'}}>Welcome Emmanuel</h1>
   
    <div className='pt-5' style={{fontSize:'25px', fontWeight:'bold', justifyContent:'left',justifyItems:'left', textAlign:'left'}}>
    <div className='pt-5'>Image : </div>
    <div  className="pt-2">Name : Famutimi Emmanuel</div>
    <div  className="pt-2"> Email: olamide.famutimi@gmail.com</div>
    <div  className="pt-2">Level-in-charge :100l </div>

       <div className="pt-5" style={{justifyContent:'center',justifyItems:'center', textAlign:'center'}}>
       <input name="Select File" type="file" /> <br></br>
       <Button type="submit" style={{background:'#333'}}><i className='fas fa-upload'  style={{fontSize:'25px', color:'green'}}></i>Upload Result
       </Button>

     
      
 
       </div>
       
 </div>

 </div>
    );
  }
  
  export default Staffprofile;