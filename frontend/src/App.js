
// import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Studentlogin from "./components/student/studentlogin";
import Studentregister from "./components/student/studentregister";
import Stafflogin from "./components/staff/stafflogin";
import Staffregister from "./components/staff/staffregister";
import Home from "./components/home";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App px-2">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/studentregister" element={<Studentregister />}></Route>
      <Route path="/studentlogin" element={<Studentlogin />}></Route>
      <Route path="/staffregister" element={<Staffregister />}></Route>
      <Route path="/stafflogin" element={<Stafflogin />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
