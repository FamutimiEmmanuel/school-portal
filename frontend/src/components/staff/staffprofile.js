import { Button } from "react-bootstrap";

function Staffprofile() {
    return (
      <div>
         <div>Image : </div>
         <div>Name : </div>
         
          <div> 
            <h3>Results</h3> 
            <table class="table">
                  <thead>
                      <tr>
                      <th scope="col">S/N</th>
                      <th scope="col">Student Name </th>
                      <th scope="col">Course code</th>
                      <th scope="col">Grade</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                      <th scope="row">{}</th>
                      <td>{}</td>
                      <td>{}</td>
                      <td>{}</td>
                      </tr>
                  </tbody>
             </table>
             <Button type="submit">Submit</Button>
            </div> 
            
            
      </div>
    );
  }
  
  export default Staffprofile;