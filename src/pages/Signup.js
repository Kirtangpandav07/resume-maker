import React from 'react'

import { Formik, Field, Form } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';



const Signup = () =>{
    
  return (
    <div className="d-flex align-items-center justify-content-center w-101">
    <div className='login col-lg-6'>
    <h2>Signup </h2>
    <Formik
      initialValues={{
        Firstname: '',
        Lastname:'',
        password: ''
      }}
      onSubmit={async (values) => {
       
        console.log(values);
        // loginHandler(values)
      }}
    >
      <Form className='text-left'> 
      
        <div className="form-group mb-3">

        <label htmlFor="Firstname" className='fs-5'> First name: </label><br />
        <Field id="Firstname"  className="fs-4 rounded rounded-pill text-center" name="Firstname" placeholder="Firstname" /><br></br>


        <label htmlFor="Lastname" className='fs-5'> Last name: </label><br />
        <Field id="Lastname"  className="fs-4 rounded rounded-pill text-center" name="Lastname" placeholder="Lastname" /><br></br>

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

export default  Signup