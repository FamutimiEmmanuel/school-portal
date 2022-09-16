import { Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const StaffPrivateRoute = ({ staff:{isAuthenticated} ,element: Component, ...rest }) => {
 
    
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


const mapStateToProps = state => ({
    staff: state.staff
  });
  
  export default connect(
    mapStateToProps,
    { }
  )(StaffPrivateRoute);