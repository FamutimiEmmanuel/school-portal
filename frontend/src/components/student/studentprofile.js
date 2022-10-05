import { connect } from 'react-redux';
import React, { useContext, useEffect } from 'react';
import studentContext from '../../context/student/studentContext';

const Studentprofile = (props) => {

  const StudentContext = useContext(studentContext);

  const { getStudents} = StudentContext;

  useEffect(() => {
    getStudents()
  },)

  return (
    <div style={{background:'#333', height:'100vh', color:'#fff'}}>
      <h1 className="pt-2" style={{justifyContent:'left',justifyItems:'left', textAlign:'left'}}>My Profile</h1>
   
    <div className='pt-5' style={{fontSize:'25px', fontWeight:'bold', justifyContent:'left',justifyItems:'left', textAlign:'left'}}>
    <div className='pt-5'>Image : </div>
    <div>Name : Famutimi Emmanuel</div>
    <div>Student ID : Den/2012/013</div>
    <div>Level :100l </div>
    <div className="pt-4"> 
       <h6 style={{fontSize:'25px',fontWeight:'bold'}}>Courses :</h6> 
       <table className="table" style={{color:'#fff'}}>
             <thead>
                 <tr>
                 <th scope="col">S/N</th>
                 <th scope="col">Course Name </th>
                 <th scope="col">Course code</th>
                 <th scope="col">Unit</th>
                 <th scope="col">Grade</th>
                 </tr>
             </thead>
             <tbody>
                 <tr>
                 <th scope="row">1</th>
                 <td>Physics</td>
                 <td>phy 105</td>
                 <td>3units</td>
                 <td></td>
                  </tr>
                 <tr>
                 <th scope="row">2</th>
                 <td>Chemistry</td>
                 <td>chm101</td>
                 <td>3units</td>
                 <td></td>
                 </tr>
                 <tr>
                 <th scope="row">3</th>
                 <td>Botany</td>
                 <td>Bot101</td>
                 <td>2units</td>
                 <td></td>
                 </tr>
                 <tr>
                 <th scope="row">4</th>
                 <td>Zoology</td>
                 <td>Zoo101</td>
                 <td>2units</td>
                 <td></td>
                 </tr>
                 <tr>
                 <th scope="row">5</th>
                 <td>Sociology</td>
                 <td>Ssc 101</td>
                 <td>2units</td>
                 <td></td>
                 </tr>
                 <tr>
                 <th scope="row">6</th>
                 <td>Use of English</td>
                 <td>Ser 001</td>
                 <td>3units</td>
                 <td></td>
                 </tr>
             </tbody>
        </table>
       
       </div> 
       <div className="pt-4">
         <h3 style={{fontSize:'25px'}}>
         <i class='fas fa-download'  style={{fontSize:'30px', color:'green'}}></i>Download Result</h3>
         
       </div>
       
 </div>

 </div>
  );
}


export default Studentprofile;