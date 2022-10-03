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
          style={{ width: '100%', height: '90vh' }}
          // width={900} height={500}
        />
        <Carousel.Caption  style={{ color:"#333",fontSize:"20px", fontWeight:"bold"}}>
          <h3>School Children Reading</h3>
          <p>Famutimi was invited to training camp with the Philadelphia 76ers and made appearances in four preseason games (4.5 ppg, 2.0 rpg) before being waived. 
            He played 47 games for the Arkansas RimRockers in 2005–06, and averaged 6.8 points 
            and 2.7 rebounds in 16.5 minutes per game while shooting .513 (122-238) from the field.
         </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
        //   src="holder.js/800x400?text=Second slide&bg=282c34"
          src={childrenlibrary}
          alt="Second slide"
          style={{ width: '100%', height: '90vh' }}
          // width={900} height={500}
        />

        <Carousel.Caption style={{ color:"#fff",fontSize:"20px", fontWeight:"bold"}}>
          <h3>School Library</h3>
          <p>Famutimi was invited to training camp with the Philadelphia 76ers and made appearances in four preseason games (4.5 ppg, 2.0 rpg) before being waived. 
            He played 47 games for the Arkansas RimRockers in 2005–06, and averaged 6.8 points 
            and 2.7 rebounds in 16.5 minutes per game while shooting .513 (122-238) from the field.
         </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
        //   src="https://unsplash.com/photos/UqTrGSohyCs"
          src={sport}
          alt="Fourth slide"
          style={{ width: '100%', height: '90vh' }}
          // width={900} height={500}
        />
        <Carousel.Caption style={{ color:"#fff",fontSize:"20px", fontWeight:"bold"}}>
          <h3>Sporting Activities</h3>
          <p>Famutimi was invited to training camp with the Philadelphia 76ers and made appearances in four preseason games (4.5 ppg, 2.0 rpg) before being waived. 
            He played 47 games for the Arkansas RimRockers in 2005–06, and averaged 6.8 points 
            and 2.7 rebounds in 16.5 minutes per game while shooting .513 (122-238) from the field.
         </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
  );
}

export default Header;