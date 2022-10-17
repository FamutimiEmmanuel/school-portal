import NavBar from './navbar';
import Footer from './footer';
import email from '../img/email1.png';


function Checkemail() {
  return (
    <>
    <div style={{background:'lightgrey'}}>
    <NavBar/>
    <div style={{ background:'', fontSize:'24px', fontWeight:'20px', justifyContent:'center', textAlign:'center', justifyItems:'center',marginTop:'30vh', marginBottom:'30vh'}}>
        <img src={email} alt=""/> <br></br>
        <p>Check your email address to reset password</p>
    </div>
    <Footer/>
    </div>
  
    </>
  );
}

export default Checkemail;