import { Route, Navigate } from 'react-router-dom';
import React, { useContext } from 'react';
import staffContext from '../../context/staff/staffContext';
// import { connect } from 'react-redux';

const StaffPrivateRoute = ({ element: Component, ...rest }) => {

    const StaffContext = useContext(staffContext);

    const { isAuthenticated } = StaffContext;
 
    
    return (
        <Route
            {...rest}
            render={props => 
                !isAuthenticated ? 
                (<Navigate to='/stafflogin'/>) :
                 (<Component {...props}/>)
            }
        />
    );
};


// const mapStateToProps = state => ({
//     staff: state.staff
//   });
  
//   export default connect(
//     mapStateToProps,
//     { }
//   )(StaffPrivateRoute);

  export default StaffPrivateRoute;