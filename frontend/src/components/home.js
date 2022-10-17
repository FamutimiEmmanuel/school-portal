
import NavBar from './navbar';
import Footer from './footer';
import Header from './header';
// import Mission from './mission';
import Authors from './authors';

function Home() {
  return (
    <>
    <NavBar/>
    <div style={{height:""}}>
    <Header/>
    {/* <Mission/> */}
    {/* <Authors/> */}
    </div>
   
    <Footer/>
    </>
  );
}

export default Home;