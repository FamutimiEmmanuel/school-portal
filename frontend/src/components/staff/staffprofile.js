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
      <div>
         <div>Image : </div>
         <div>Name : </div>
         
          <div> 
            <h3>Results</h3> 
            <table class="table">
                  <thead>
                      <tr>
                      <th scope="col">S/N</th>
                      <th scope="col">Student Name </th>
                      <th scope="col">Course code</th>
                      <th scope="col">Grade</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                      <th scope="row">3</th>
                      <td>{}</td>
                      <td>{}</td>
                      <td>{}</td>
                      </tr>
                  </tbody>
             </table>
             <Button type="submit">Submit</Button>
            </div> 
            
            
      </div>
    );
  }
  
  export default Staffprofile;