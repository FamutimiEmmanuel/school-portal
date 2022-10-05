import sport from '../img/sport.jpg'
import NavBar from './navbar'
import Footer from './footer'


const Authors = () => {
    return (
      
        <section id="authors" class="text-center">
          <NavBar/>
        <div class="container mt-5">
          <div class="row">
            <div class="col">
              <div class="info-header mb-5">
                <h1 class="text-primary pb-3">
                  Meet The Authors
                </h1>
                <p class="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Maxime quae magnam asperiores minus, iusto nemo.
                </p>
              </div>
            </div>
          </div>
       
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="card">
                <div class="card-body">
                  <img src={sport} alt="" class="img-fluid rounded-circle w-50 mb-3"/>
                  <h3>Susan James</h3>
                  <h5 class="text-muted">Lead Writer</h5>
                  <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Est atque cum odio a quisquam. Doloremque.</p>
                   <div class="d-flex justify-content-center">
                     <div class="p-4">
                       <a href="http://facebook.com">
                       <i class="fab fa-facebook"></i>
                       </a>
                     </div>
                     <div class="p-4">
                       <a href="http://twitter.com">
                         <i class="fab fa-twitter"></i>
                         </a>
                     </div>
                     <div class="p-4">
                       <a href="http://instagram.com">
                         <i class="fab fa-instagram"></i>
                         </a>
                     </div>
                   </div>
                   </div>
              </div>
            </div>
       
            <div class="col-lg-3 col-md-6">
             <div class="card">
               <div class="card-body">
                 <img src={sport} alt="" class="img-fluid rounded-circle w-50 mb-3"/>
                 <h3>John Shank</h3>
                 <h5 class="text-muted">Co-Writer</h5>
                 <p>Lorem ipsum dolor sit amet consectetur 
                   adipisicing elit. Est atque cum odio a quisquam. Doloremque.</p>
                  <div class="d-flex justify-content-center">
                    <div class="p-4">
                      <a href="http://facebook.com">
                      <i class="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://twitter.com">
                        <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                    <div class="p-4">
                      <a href="http://instagram.com">
                        <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                  </div>
                  </div>
             </div>
           </div>
       
           <div class="col-lg-3 col-md-6">
             <div class="card">
               <div class="card-body">
                 <img src={sport} alt="" class="img-fluid rounded-circle w-50 mb-3"/>
                 <h3>Hart Luck</h3>
                 <h5 class="text-muted"> Content-Writer</h5>
                 <p>Lorem ipsum dolor sit amet consectetur 
                   adipisicing elit. Est atque cum odio a quisquam. Doloremque.</p>
                  <div class="d-flex justify-content-center">
                    <div class="p-4">
                      <a href="http://facebook.com">
                      <i class="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://twitter.com">
                        <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                    <div class="p-4">
                      <a href="http://instagram.com">
                        <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                  </div>
                  </div>
             </div>
           </div>
       
           <div class="col-lg-3 col-md-6">
             <div class="card">
               <div class="card-body">
                 <img src={sport} alt="" class="img-fluid rounded-circle w-50 mb-3"/>
                 <h3>Emmanuel Kant</h3>
                 <h5 class="text-muted">Web Designer</h5>
                 <p>Lorem ipsum dolor sit amet consectetur 
                   adipisicing elit. Est atque cum odio a quisquam. Doloremque.</p>
                  <div class="d-flex justify-content-center">
                    <div class="p-4">
                      <a href="http://facebook.com">
                      <i class="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://twitter.com">
                        <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                    <div class="p-4">
                      <a href="http://instagram.com">
                        <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                  </div>
                  </div>
             </div>
           </div>
       
          </div>
       
        </div>
        {/* <div class="mt-5">
        <Footer/>
        </div> */}






<div className='pt-5' style={{fontSize:'25px', fontWeight:'bold', justifyContent:'left',justifyItems:'left', textAlign:'left'}}>
       <div className='pt-5'>Image : </div>
       <div>Name : Famutimi Emmanuel</div>
       <div>Student ID : Den/2012/013</div>
       <div>Level :100l </div>
       <div className="pt-4"> 
          <h6 style={{fontSize:'25px',fontWeight:'bold'}}>Courses :</h6> 
          <table class="table">
                <thead>
                    <tr>
                    <th scope="col">S/N</th>
                    <th scope="col">Course Name </th>
                    <th scope="col">Course code</th>
                    <th scope="col">Unit</th>
                    <th scope="col">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Physics</td>
                    <td>phy 105</td>
                    <td>3units</td>
                    <td></td>
                     </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Chemistry</td>
                    <td>chm101</td>
                    <td>3units</td>
                    <td></td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Botany</td>
                    <td>Bot101</td>
                    <td>2units</td>
                    <td></td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>Zoology</td>
                    <td>Zoo101</td>
                    <td>2units</td>
                    <td></td>
                    </tr>
                    <tr>
                    <th scope="row">5</th>
                    <td>Sociology</td>
                    <td>Ssc 101</td>
                    <td>2units</td>
                    <td></td>
                    </tr>
                    <tr>
                    <th scope="row">6</th>
                    <td>Use of English</td>
                    <td>Ser 001</td>
                    <td>3units</td>
                    <td></td>
                    </tr>
                </tbody>
           </table>
          
          </div> 
          <div className="pt-4">
            <h3 style={{fontSize:'25px'}}>
            <i class='fas fa-download'  style={{fontSize:'30px', color:'green'}}></i>Download Result</h3>
            {/* <h3><i class="fa-duotone fa-folder-arrow-down"></i></h3> */}
          </div>
          
    </div>
      
       </section>
    
    ) 
}
 
export default Authors

 