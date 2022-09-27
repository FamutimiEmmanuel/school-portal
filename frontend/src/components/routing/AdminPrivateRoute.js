import {  Navigate } from 'react-router-dom';
import React, { useContext } from 'react';
import adminContext from '../../context/admin/adminContext';
// import { connect } from 'react-redux';

const AdminPrivateRoute = ({ component: Component }) => {

    const AdminContext = useContext(adminContext);

    const { isAuthenticated } = AdminContext;

    if (isAuthenticated) return <Component />;
    return <Navigate to='/adminlogin' />;
 
    
   
};


  export default AdminPrivateRoute;