import {  Navigate } from 'react-router-dom';
import React, { useContext } from 'react';
import staffContext from '../../context/staff/staffContext';
// import { connect } from 'react-redux';

const StaffPrivateRoute = ({ component: Component }) => {

    const StaffContext = useContext(staffContext);

    const { isAuthenticated } = StaffContext;

    if (isAuthenticated) return <Component />;
    return <Navigate to='/stafflogin' />;
 
    
   
};


  export default StaffPrivateRoute;