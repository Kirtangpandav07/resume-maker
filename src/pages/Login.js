import React from 'react'
import axios from 'axios'
import { Formik, Field, Form } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";


const Login = () => {
  const history = useHistory()
    const loginHandler = async (data) => {
        try {
            const logindata = await axios.post('https://portfolio-api-new.onrender.com/api/v1/user/login', data)
            console.log(logindata.data.token);
            localStorage.setItem('token', logindata.data.token)
            history.push('/Professional')
        } catch (err) {
            alert(err.response.data.message);
        }
    }
  return (
    <div className="d-flex align-items-center justify-content-center w-101">
    <div className='login col-lg-6'>
    <h2>Log in</h2>
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      onSubmit={async (values) => {
       
        // console.log(values);
        loginHandler(values)
      }}
    >
      <Form className='text-left'> 
      
        <div className="form-group mb-3">
        <label htmlFor="email" className='fs-5'>Email: </label><br />
        <Field  className="fs-4 rounded rounded-pill text-center"
          id="email"
          name="email"
          placeholder="emailid.com" 
          type="email"
        /><br></br>

        <label htmlFor="password" className='fs-5'> password: </label><br />
        <Field id="password"  className="fs-4 rounded rounded-pill text-center" name="password" placeholder="password" type="password"/>
        
        </div>
        <div className="btn text-center ms-4">
        <button type="submit " className='bg-success rounded px-3 py-1 '>Submit</button>
        </div>
        
      </Form>
    </Formik>
  </div>
  <hr></hr>
  </div>
  
  )
}

export default  Login