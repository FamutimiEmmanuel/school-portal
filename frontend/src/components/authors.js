import emmanuel from '../img/null.jpg'
import donnieyen from '../img/donnieyen.jpg'
import ronaldo from '../img/ronaldo.jpg'
import techbro from '../img/techbro1.jpg'
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
                  Meet The Founders
                </h1>
                <p class="lead">
                 The school was founded by great men of vision
                </p>
              </div>
            </div>
          </div>
       
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="card">
                <div class="card-body">
                  <img src={emmanuel} alt="" class="img-fluid rounded-circle w-50 mb-3"/>
                  <h3>Emmanuel Famutimi</h3>
                  <h5 class="text-muted">Tech Enthusiast</h5>
                  <p>Emmanuel Famutimi is passionate about health,technology & education.
                    He envisions a society with prompt health care services,quality education 
                    and effect leadership with special focus on taking youths from the slums
                    and brightening their hopes.
                  </p>
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
                 <img src={donnieyen} alt="" class="img-fluid rounded-circle w-50 mb-3"/>
                 <h3>Donnie Yen</h3>
                 <h5 class="text-muted">Martial Artist</h5>
                 <p>Donnie yen is a martial artist,movie producer of the popular IPman services
                  He's actively involved in teaching sports through quality education
                  for students which he believes goes a long way in shaping the society.</p>
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
                 <img src={ronaldo} alt="" class="img-fluid rounded-circle w-50 mb-3"/>
                 <h3>Christiano Ronaldo</h3>
                 <h5 class="text-muted"> Professional Footballer</h5>
                 <p>Christiano Ronaldo ia an athlete,a popular footballer and a 5 times ballon d'or 
                  winner.He has played across several clubs and leagues in europe and is committed to 
                  developing education in africa with special focus on sports medicine
                 </p>
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
                 <img src={techbro} alt="" class="img-fluid rounded-circle w-50 mb-3"/>
                 <h3>Tech Bro</h3>
                 <h5 class="text-muted">Tech Entrepreneur</h5>
                 <p>Tech bro is a famous tech entrepreneur across sub-sahara africa. He has
                  been committed to the advancement of numerous tech startups across africa and has 
                  recently committed himself to the education of pupils across the slums of africa
                 </p>
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
        <Footer/>
       </section>
    
    ) 
}
 
export default Authors;

 