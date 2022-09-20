import { Route, Navigate } from 'react-router-dom';
import React, { useContext } from 'react';
import adminContext from '../../context/admin/adminContext';
// import { connect } from 'react-redux';

const AdminPrivateRoute = ({ element: Component, ...rest }) => {

    const AdminContext = useContext(adminContext);

  const { isAuthenticated } = AdminContext;
 
    
    return (
        <Route
            {...rest}
            render={props => 
                !isAuthenticated ? 
                (<Navigate to='/adminlogin'/>) :
                 (<Component {...props}/>)
            }
        />
    );
};


// const mapStateToProps = state => ({
//     admin: state.admin
//   });
  
//   export default connect(
//     mapStateToProps,
//     { }
//   )(AdminPrivateRoute);

  export default AdminPrivateRoute;