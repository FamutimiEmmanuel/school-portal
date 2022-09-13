import Carousel from 'react-bootstrap/Carousel';
import childrenreading from '../img/childrenreading.jpg'
import childrenlibrary from '../img/childrenlibrary.jpg'
// import childrenteacher from '../img/childrenteacher.jpg'
import sport from '../img/sport.jpg'

function Header() {
  return (
    
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
        //   src="https://unsplash.com/photos/UqTrGSohyCs"
          src={childrenreading}
          alt="First slide"
          width={900} height={500}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
        //   src="holder.js/800x400?text=Second slide&bg=282c34"
          src={childrenlibrary}
          alt="Second slide"
          width={900} height={500}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
        //   src="holder.js/800x400?text=Third slide&bg=20232a"
          src={childrenteacher}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
      <Carousel.Item>
        <img
          className="d-block w-100"
        //   src="https://unsplash.com/photos/UqTrGSohyCs"
          src={sport}
          alt="Fourth slide"
          width={900} height={500}
        />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
  );
}

export default Header;