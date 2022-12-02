import Request from '../../components/request/Request'
// import './verification.css'

import Icon from "awesome-react-icons";
import { Button,Table } from 'react-bootstrap';

function Verification() {
  return (
    <div className='verify'>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>College Name</th>
          <th>Hod Name</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td><Button><Icon name="check-circle"/></Button></td>
        </tr>
       
      </tbody>
    </Table>
    </div>
  )
}
export default Verification