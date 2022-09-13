import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Header from './components/header';
import Mission from './components/mission';
import Authors from './components/authors';

function App() {
  return (
    <div className="App px-2">
       <NavBar/>
      <div style={{height:""}}>
      <Header/>
      <Mission/>
      <Button variant="primary"><a href="https://buy.stripe.com/test_cN26rIfhy4kDfV66oo" class="btn btn-primary mb">Payments</a></Button>
      <Authors/>
      </div>
     
      <Footer/>
    </div>
  );
}

export default App;
