import React from 'react'
import { DashboardLayout } from "../components/Layout";
import {Table} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function PostTable() {
  return (
    <DashboardLayout>
    <h2 className='m-4  text-md-left'>All Posts</h2>
    <Table striped bordered hover className='m-5 '>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Image Link</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td><i class="fa-solid fa-trash-can"></i></td>
          <td><i class="fa-solid fa-eye"></i></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td><i class="fa-solid fa-trash-can"></i></td>
          <td><i class="fa-solid fa-eye"></i></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td><i class="fa-solid fa-trash-can"></i></td>
          <td><i class="fa-solid fa-eye"></i></td>
        </tr>
      </tbody>
    </Table>
    </DashboardLayout>
  )
}

export default PostTable