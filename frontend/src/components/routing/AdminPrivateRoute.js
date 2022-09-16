import { Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const AdminPrivateRoute = ({ admin:{isAuthenticated} ,element: Component, ...rest }) => {
 
    
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


const mapStateToProps = state => ({
    admin: state.admin
  });
  
  export default connect(
    mapStateToProps,
    { }
  )(AdminPrivateRoute);