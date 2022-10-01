import { connect } from 'react-redux';
import React, { useContext, useEffect } from 'react';
import studentContext from '../../context/student/studentContext';

const Studentprofile = () => {

  const StudentContext = useContext(studentContext);

  const { getStudents} = StudentContext;

  useEffect(() => {
    getStudents()
  },)

  return (
    <div>
       <div>Image : </div>
       <div>Name : </div>
       <div>Student ID : </div>
       <div>Level : </div>
       <div> 
          <h6>Courses :</h6> 
          <table class="table">
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
                    <th scope="row">{}</th>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    </tr>
                </tbody>
           </table>
          
          </div> 
          <div>
            <h3>Download Result</h3>
            <h3><i class="fa-duotone fa-folder-arrow-down"></i></h3>
          </div>
          
    </div>
  );
}


const mapStateToProps = state => ({
  student: state.student
});

export default connect(
  mapStateToProps,
  { }
)(Studentprofile);