
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Read() {

  const [data, setData] = useState();
  const { id } = useParams();


  useEffect(() => {
    axios.get('http://localhost:9000/user/' + id)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <div className="col">
          <div className="text-center">
            <label className="text-primary fw-bold">Name</label>
          </div>
          <strong>Name:{data.name}</strong>
        </div>

        <div className="col">
          <div className="text-center">
            <label className="text-primary fw-bold">Email</label>
          </div>
          <strong>Name:{data.email}</strong>
        </div>

        <div className="col">
          <div className="text-center">
            <label className="text-primary fw-bold">Phone</label>
          </div>
          <strong>Name:{data.phone}</strong>
        </div>

        <Link to={'/update/${id}'} className='btn btn-success'>Edit</Link>
        <Link to={'/'} className='btn btn-info'>Back</Link>
      </div>
    </>
  )
}

export default Read
