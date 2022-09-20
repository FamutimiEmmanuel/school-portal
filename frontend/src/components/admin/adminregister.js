import React, { useState, useContext } from 'react';
import adminContext from '../../context/admin/adminContext';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import { connect } from 'react-redux';
// import { adminRegister, setAlert } from '../../actions/adminActions';

const Adminregister = (props) => {

  const AdminContext = useContext(adminContext);

  const { adminRegister } = AdminContext;

  const [adminid, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (adminid === '' || password === '') {
      // setAlert('please input a valid ID and password', 'danger')
    } else {
      const adminRegisterDetails = {
        adminid,
        password,
        image
      };

      console.log(adminRegisterDetails);

      adminRegister(adminRegisterDetails);

      // setAlert('Register success', 'success')

      setAdminId('');
      setPassword('');
     
    }
  };

  return (
    <div>
    <h3 className="mt-4 text-primary">Admin Register</h3>
    <Form onSubmit={onSubmit}>
      <Form.Group as={Row} className="mb-3 mt-4" controlId="formHorizontalName">
        <Form.Label column sm={2}>
          AdminID
        </Form.Label>
        <Col sm={4}>
        <Form.Control type="adminid" name="adminid" placeholder="AdminID" value={adminid}
              onChange={e => setAdminId(e.target.value)}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={4}>
        <Form.Control type="password" name="password" placeholder="Password" value={password}
          onChange={e => setPassword(e.target.value)} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalImage">
        <Form.Label column sm={2}>
          Upload Image
        </Form.Label>
        <Col sm={2}>
        <input name="Select File" type="file" value={image} onChange={e => setImage(e.target.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 3, offset: 1 }}>
          <Button type="submit">Submit</Button>
        </Col>
      </Form.Group>
    </Form>
    </div>
  );
}


// export default connect(
//   null,
//   { adminRegister, setAlert }
// )(Adminregister);

export default Adminregister;