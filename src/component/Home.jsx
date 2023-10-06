import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:9000/user')
      .then(res => setData(res.data))
      // .then(res => console.log(data))
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <h4>List Of Student</h4>

        <div type='text' className='rounded bg-white border shadow p-4 w-75' >
          <div className='d-flex justify-content-end align-content-end'>
            <Link to='/create' className='btn btn-info btn-sm' >Add</Link>
          </div>
          <table className='table table-header container p-4'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>

            <tbody>
              {
                data.map((d, i) => (
                  <tr key={i}>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>{d.phone}</td>
                    <td>
                      <Link to={'/Update/:id'} className='btn btn-warning btn-sm m-2'>Edit</Link>
                      <Link to={`/read/${d.id}`} className='btn btn-primary btn-sm m-2'>Read</Link>
                      <button className='btn btn-danger btn-sm m-2'>Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>


      </div>


    </>
  )
}

export default Home
