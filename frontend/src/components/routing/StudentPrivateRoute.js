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


const mapStateToProps = state => ({
    student: state.student
  });
  
  export default connect(
    mapStateToProps,
    { }
  )(StudentPrivateRoute);