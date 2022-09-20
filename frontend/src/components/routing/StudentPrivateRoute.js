import { Route, Navigate } from 'react-router-dom';
import React, { useContext } from 'react';
import studentContext from '../../context/student/studentContext';
// import { connect } from 'react-redux';

const StudentPrivateRoute = ({ element: Component, ...rest }) => {
 
    const StudentContext = useContext(studentContext);

    const { isAuthenticated } = StudentContext;
    return (
        <Route
            {...rest}
            render={props => 
                !isAuthenticated ? 
                (<Navigate to='/studentlogin'/>) :
                 (<Component {...props}/>)
            }
        />
    );
};




// const mapStateToProps = state => ({
//     student: state.student
//   });
  
//   export default connect(
//     mapStateToProps,
//     { }
//   )(StudentPrivateRoute);

  export default StudentPrivateRoute;