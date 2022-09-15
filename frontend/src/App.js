
// import { render } from "react-dom";
import React,{Fragment} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Studentlogin from "./components/student/studentlogin";
import Studentregister from "./components/student/studentregister";
import Studentprofile from "./components/student/studentprofile";
import Stafflogin from "./components/staff/stafflogin";
import Staffregister from "./components/staff/staffregister";
import Staffprofile from "./components/staff/staffprofile";
import Adminlogin from "./components/admin/adminlogin";
import Home from "./components/home";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    {/* <div className="App px-2"> */}
    <Fragment>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/studentregister" element={<Studentregister />}></Route>
      <Route path="/studentlogin" element={<Studentlogin />}></Route>
      <Route path="/studentprofile" element={<Studentprofile />}></Route>
      <Route path="/staffregister" element={<Staffregister />}></Route>
      <Route path="/stafflogin" element={<Stafflogin />}></Route>
      <Route path="/staffprofile" element={<Staffprofile />}></Route>
      <Route path="/adminlogin" element={<Adminlogin />}></Route>
    </Routes>
    </BrowserRouter>
    </Fragment>
    {/* </div> */}
    </Provider>
  );
}

export default App;
