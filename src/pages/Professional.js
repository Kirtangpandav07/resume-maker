import React, { useState,useEffect } from 'react'


import { Formik, Field, Form } from 'formik';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";
import axios from 'axios';


const Professional  = () => {
  const [data, setData] = useState([])
  const history = useHistory()
  useEffect(() => {
      const token = localStorage.getItem('token')
      console.log(token);
      if(!token){
          return history.push('/login')
      }
      axios.get('https://portfolio-api-new.onrender.com/api/v1/resume/professionaldetails',{
        headers: { Authorization: token }
      })
          .then((res) => {
            console.log(res.data.data);
            setData(res.data.data)
          })
          .catch((err) => {
            console.log(err)
          })
  },[] )
   
  return (
    <div className="d-flex align-items-center justify-content-center w-101">
    <div className='login col-lg-6'>
    <h2>Professional</h2>
    <Formik
      initialValues={{
        Profession: '',
        Qualification: '',
        Language: '',
        experience: '',

      }}
      onSubmit={async (values) => {
        console.log(JSON.stringify(values, null, 2));
        console.log(values)
      }}
    >
      <Form className='text-left'> 
        <div className="form-group mb-2">
        <label htmlFor="Profession" className='fs-5'>Enter the  Profession: </label><br />
        <Field id="Profession" className="fs-4 rounded rounded-pill text-center" name="Profession" placeholder="Profession" />
        </div>

        <div className="form-group mb-2">
        <label htmlFor="Qualification" className='fs-5'>Enter the Qualification: </label><br />
        <Field id="Qualification"  className="fs-4 rounded rounded-pill text-center" name="Qualification" placeholder="Qualification" />
        </div>

        <div className="form-group mb-2">
        <label htmlFor="Language" className='fs-5'>Language you speak: </label><br />
        <Field id="Language"  className="fs-4 rounded rounded-pill text-center" name="Language" placeholder="Language" />
        </div>

        <div className="form-group mb-2">
        <label htmlFor="experience" className='fs-5'>Total years of experience: </label><br />
        <Field id="experience"  className="fs-4 rounded rounded-pill text-center" name="experience" type="number" placeholder="experience" />
        </div>

      
        <div className="btn text-center">
              <button type="next " className='bg-success rounded px-3 py-1 '><a href='/'>preview</a></button>
        </div>

        <div className="btn text-center ms-4">
        <button type="submit " className='bg-success rounded px-3 py-1 '>Submit</button>
        </div>


        <div className="btn text-center">
              <button type="next " className='bg-success rounded px-3 py-1 '><a href='/personal'>Next</a></button>
        </div>
        

      </Form>
    </Formik>
    
  </div>
  <hr></hr>
  </div>
  
  )
}

export default  Professional 