import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function Create() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: ''

  })

  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:9000/user`, values)
      .then(res => {
        console.log(res);
        navigate('/')
      })
      .catch(err => console.log(err));
  }


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Add User Details</h4>
            <div className="m-5 d-flex justify-content-center align-items-center w-100 rounded bg-white border shadow p-4">

              <form onSubmit={handelSubmit}>

                <div className="col">
                  <div className="text-center">
                    <label className="text-primary fw-bold">Name</label>
                  </div>
                  <input type="text" className="form-control" name='name'
                    onChange={e => setValues({ ...values, name: e.target.value })} />
                </div>

                <div className="col">
                  <div className="text-center">
                    <label className="text-primary fw-bold">Todo</label>
                  </div>
                  <input type="text" className="form-control" name="email"
                    onChange={e => setValues({ ...values, email: e.target.value })} />
                </div>

                <div className="col">
                  <div className="text-center">
                    <label className="text-primary fw-bold">Phone</label>
                  </div>
                  <input type="text" className="form-control" name="phone"
                    onChange={e => setValues({ ...values, phone: e.target.value })} />
                </div>

                <div className="col">
                  <button className="btn btn-success btn-sm m-3" >Submit</button>
                  <Link to="/" className="btn btn-warning btn-sm m-3">Back</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Create
