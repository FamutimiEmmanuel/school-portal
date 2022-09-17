import {Button} from 'react-bootstrap';
import NavBar from './navbar';
import Footer from './footer';
import Header from './header';
import Mission from './mission';
import Authors from './authors';

function Home() {
  return (
    <>
    <NavBar/>
    <div style={{height:""}}>
    <Header/>
    <Mission/>
    <Button variant="primary"><a href="https://buy.stripe.com/test_cN26rIfhy4kDfV66oo" className="btn btn-primary mb">Payments</a></Button>
    <Authors/>
    </div>
   
    <Footer/>
    </>
  );
}

export default Home;