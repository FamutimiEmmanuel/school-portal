
// import { render } from "react-dom";
import React,{Fragment} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Studentlogin from "./components/student/studentlogin";
import Studentregister from "./components/student/studentregister";
import Studentprofile from "./components/student/studentprofile";
import Stafflogin from "./components/staff/stafflogin";
import Staffregister from "./components/staff/staffregister";
import Staffprofile from "./components/staff/staffprofile";
import Adminlogin from "./components/admin/adminlogin";
import Adminprofile from "./components/admin/adminprofile";
import Adminregister from './components/admin/adminregister';
import StudentPrivateRoute from './components/routing/StudentPrivateRoute';
import StaffPrivateRoute from './components/routing/StaffPrivateRoute';
import AdminPrivateRoute from './components/routing/AdminPrivateRoute';
import Home from "./components/home";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';



function App() {
  return (
    <Provider store={store}>   
    <Fragment>
      <div className="App px-2">
    <BrowserRouter>   
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/studentregister" element={<Studentregister />}></Route>
      <Route path="/studentlogin" element={<Studentlogin />}></Route>
      <Route
                        path="/studentprofile"
                        element={
                            <StudentPrivateRoute>
                                <Studentprofile />
                            </StudentPrivateRoute>
                        }
                    ></Route>
      
     
      <Route path="/staffregister" element={<Staffregister />}></Route>
      <Route path="/stafflogin" element={<Stafflogin />}></Route>
      <Route
                        path="/staffprofile"
                        element={
                            <StaffPrivateRoute>
                                <Staffprofile />
                            </StaffPrivateRoute>
                        }
                    ></Route>
     
      <Route path="/adminlogin" element={<Adminlogin />}></Route>
      <Route path="/adminregister" element={<Adminregister />}></Route>
      <Route
                        path="/adminprofile"
                        element={
                            <AdminPrivateRoute>
                                <Adminprofile />
                            </AdminPrivateRoute>
                        }
                    ></Route>
     
    </Routes>
    </BrowserRouter>
       </div>
    </Fragment>
 
    </Provider>
  );
}

export default App;
