
// import { render } from "react-dom";
import React,{Fragment} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Studentlogin from "./components/student/studentlogin";
import Studentforgotpassword from './components/student/studentforgotpassword';
import Studentregister from "./components/student/studentregister";
import Studentprofile from "./components/student/studentprofile";
import StudentState from './context/student/StudentState';
import Stafflogin from "./components/staff/stafflogin";
import Staffforgotpassword from './components/staff/staffforgotpassword';
import Staffregister from "./components/staff/staffregister";
import Staffprofile from "./components/staff/staffprofile";
import Adminlogin from "./components/admin/adminlogin";
import Adminforgotpassword from './components/admin/adminforgotpassword';
import Adminprofile from "./components/admin/adminprofile";
import Adminregister from './components/admin/adminregister';
import AdminState from './context/admin/AdminState';
import StudentPrivateRoute from './components/routing/StudentPrivateRoute';
import StaffPrivateRoute from './components/routing/StaffPrivateRoute';
import StaffState from './context/staff/StaffState';
import AdminPrivateRoute from './components/routing/AdminPrivateRoute';
import setAuthToken from './utils/setAuthToken';
import Home from "./components/home";
import Authors from "./components/authors";
import Testing from './components/testing';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Provider } from 'react-redux';
// import store from './store';

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <StaffState>
      <StudentState>
        <AdminState>
    {/* <Provider store={store}>    */}
    <Fragment>
      <div className="App">
    <BrowserRouter>   
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<Authors />}></Route>
      <Route path="/testing" element={<Testing />}></Route>
      <Route path="/studentregister" element={<Studentregister />}></Route>
      <Route path="/studentlogin" element={<Studentlogin />}></Route>
      <Route path="/studentforgotpassword" element={<Studentforgotpassword />}></Route>
      <Route path='/studentprofile' element={<StudentPrivateRoute component={Studentprofile} />} />
      
     
      <Route path="/staffregister" element={<Staffregister />}></Route>
      <Route path="/stafflogin" element={<Stafflogin />}></Route>
      <Route path="/staffforgotpassword" element={<Staffforgotpassword />}></Route>
      <Route path='/staffprofile' element={<StaffPrivateRoute component={Staffprofile} />} />
    
     
      <Route path="/adminlogin" element={<Adminlogin />}></Route>
      <Route path="/adminforgotpassword" element={<Adminforgotpassword />}></Route>
      <Route path="/adminregister" element={<Adminregister />}></Route>
      <Route path='/adminprofile' element={<AdminPrivateRoute component={Adminprofile} />} />
     
    </Routes>
    </BrowserRouter>
       </div>
    </Fragment>
 
    {/* </Provider> */}
    </AdminState>
    </StudentState>
    </StaffState>
  );
}

export default App;
