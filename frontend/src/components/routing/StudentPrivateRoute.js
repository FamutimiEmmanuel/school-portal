import {  Navigate } from 'react-router-dom';
import React, { useContext } from 'react';
import studentContext from '../../context/student/studentContext';
// import { connect } from 'react-redux';

const StudentPrivateRoute = ({ component: Component }) => {

    const StudentContext = useContext(studentContext);

    const { isAuthenticated } = StudentContext;

    if (isAuthenticated) return <Component />;
    return <Navigate to='/studentlogin' />;
 
    
   
};


  export default StudentPrivateRoute;