import { Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const StudentPrivateRoute = ({ student:{isAuthenticated} ,element: Component, ...rest }) => {
 
    
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

// const StudentPrivateRoute = ({ student:{isAuthenticated}}) => {
    
//     if(isAuthenticated) {
//          return <Navigate to="/studentprofile" state={{ student:isAuthenticated}}/>
//     } else {
//         return <Navigate tp="/studentlogin" state={{ student:isAuthenticated}}/>
//     }
// }


const mapStateToProps = state => ({
    student: state.student
  });
  
  export default connect(
    mapStateToProps,
    { }
  )(StudentPrivateRoute);