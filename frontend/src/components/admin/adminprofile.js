import React, { useContext, useEffect } from 'react';
import adminContext from '../../context/admin/adminContext';

function Adminprofile() {

  const AdminContext = useContext(adminContext);

  const {  getAdmin } = AdminContext;

  useEffect(() => {
    getAdmin()
  },)
    return (
      <div>
        <h1 className="text-primary">ADMIN PROFILE</h1>
        <h1 className="text-primary">ADMIN PROFILE</h1>
      </div>
    );
  }
  
  export default Adminprofile;