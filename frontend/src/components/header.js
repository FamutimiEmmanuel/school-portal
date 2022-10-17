import Carousel from 'react-bootstrap/Carousel';
import childrenreading from '../img/childrenreading.jpg'
import childrenlibrary from '../img/childrenlibrary.jpg'
// import childrenteacher from '../img/childrenteacher.jpg'
import sport from '../img/sport.jpg'

function Header() {
  return (
    <div >
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
        //   src="https://unsplash.com/photos/UqTrGSohyCs"
          src={childrenreading}
          alt="First slide"
          style={{ width: '100%', height: '100vh' }}
          // width={900} height={500}
        />
        <Carousel.Caption  style={{ color:"#333",fontSize:"20px", fontWeight:"bold"}}>
          <h3>School Children Reading</h3>
          <p>
            School children studying for their examinations under the supervision of their class teacher.
            Students are permitted to stay back and study extra-time during examination periods
         </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
        //   src="holder.js/800x400?text=Second slide&bg=282c34"
          src={childrenlibrary}
          alt="Second slide"
          style={{ width: '100%', height: '100vh' }}
          // width={900} height={500}
        />

        <Carousel.Caption style={{ color:"#fff",fontSize:"20px", fontWeight:"bold"}}>
          <h3>School Library</h3>
          <p>
            Student going through the school library in search of novels/textbooks.
            Students are allowed to borrow books from the library and return it when due.
         </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
        //   src="https://unsplash.com/photos/UqTrGSohyCs"
          src={sport}
          alt="Fourth slide"
          style={{ width: '100%', height: '100vh' }}
          // width={900} height={500}
        />
        <Carousel.Caption style={{ color:"#fff",fontSize:"20px", fontWeight:"bold"}}>
          <h3>Sporting Activities</h3>
          <p>
            Annual sport festival ongoing with a snapshot of basketball players competiting for 
            the prestigious principal trophy.There are also a variety of other sports(both indoor and outdoor) 
            being played too. 
         </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  
  );
}

export default Header;