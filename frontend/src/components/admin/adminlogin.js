import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import adminContext from '../../context/admin/adminContext';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import { connect } from 'react-redux';
// import { adminLogin, setAlert } from '../../actions/adminActions';

const Adminlogin = (props) => {

  const AdminContext = useContext(adminContext);

  const { adminLogin, isAuthenticated } = AdminContext;

  const [adminid, setAdminId] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (adminid === '' || password === '') {
      // setAlert('please input a valid ID and password', 'danger')
    } else {
      const adminLoginDetails = {
        adminid,
        password
      };

      console.log(adminLoginDetails);

      adminLogin(adminLoginDetails);

      // setAlert('Register success', 'success')

      setAdminId('');
      setPassword('');
     
    }
  };

  if (isAuthenticated) return <Navigate to='/adminprofile' />;

  return (
    <div style={{background:'#333', height:'100vh'}}>
    <h3 className="pt-5 " style={{color:'white',fontSize:'35px'}}>Admin Login</h3>
    <Form onSubmit={onSubmit}>
      <Form.Group as={Row} className="mb-3 mt-4" controlId="formHorizontalAdminId" style={{justifyContent:'center', justifyItems:'center', textAlign:'center'}}>
        {/* <Form.Label column sm={2}>
          Admin ID
        </Form.Label> */}
        <Col xs ={6} sm={6} md={4} lg={3} xl={3}>
        <Form.Control type="adminid" name="adminid" placeholder="AdminID" value={adminid}
              onChange={e => setAdminId(e.target.value)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword" style={{justifyContent:'center', justifyItems:'center', textAlign:'center'}}>
        {/* <Form.Label column sm={2}>
          Password
        </Form.Label> */}
        <Col xs ={6} sm={6} md={4} lg={3} xl={3}>
        <Form.Control type="password" name="password" placeholder="Password" value={password}
          onChange={e => setPassword(e.target.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" style={{justifyContent:'center', justifyItems:'center', textAlign:'center'}}>
        <Col sm={{ span: 3, offset: 0 }}>
          <Button type="submit" style={{background:'#333'}}>Sign in</Button>
        </Col>
      </Form.Group>
    </Form>
    <a href="/adminregister">Click here if you're not yet registered</a><br></br>
    <a href="/adminforgotpassword">Forgot Password</a><br></br>
    </div>
  );
}


// export default connect(
//   null,
//   { adminLogin, setAlert }
// )(Adminlogin);

export default Adminlogin;