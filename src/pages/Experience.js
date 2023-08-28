import React, { useState } from 'react'
// import React from 'react'
import { Formik, Field, Form } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Experience = () => {

  const [data, setData] = useState([])
  const history = useHistory()
    const deletHandler =(index)=> {
      let copyData =[...data]
      copyData.splice(index,1)
      setData(copyData)
    }

    useEffect(()=>{
      let token = localStorage.getItem('token')
      console.log(token);
      if (!token) {
        return history.push('./Login')
      }
      axios.get('https://portfolio-api-new.onrender.com/api/v1/resume/workexperience',{
        headers: { Authorization: token }
      })
        .then((res) => {
          console.log(res.data.data);
          setData(res.data.data)
        })
        .catch((err) => {
          console.log(err)
        })


    } , [])

  return (
    <div className="d-flex align-items-center justify-content-center w-101">
    <div className='login col-lg-6'>
    <h2>Experience Details:</h2>
    <Formik
      initialValues={{
       
        companyName: '',
        title: '',
        startDate: '',
        endDate: '',
        description: '',
      }}
      onSubmit={async (values) => {
        console.log(JSON.stringify(values, null, 2));
            console.log(values)
            let copyArr = [...data]
            copyArr.push(values)
            setData(copyArr)
      }}
    >
      <Form className='text-left'> 
        

        <div className="form-group mb-2">
        <label htmlFor="companyName" className='fs-5'> companyName Name: </label><br />
        <Field id="companyName"  className="fs-4 rounded rounded-pill text-center" name="companyName" placeholder="companyName name" />
        </div>

        <div className="form-group mb-2">
        <label htmlFor="title " className='fs-5'> title Title: </label><br />
        <Field id="title"  className="fs-4 rounded rounded-pill text-center" name="title" placeholder="title" />
        </div>

        <div className="form-group mb-2">
        <label htmlFor="startDate" className='fs-5'>startDate date: </label><br />
        <Field id="startDate"  className="fs-4 rounded rounded-pill text-center" name="startDate"  type="date" placeholder="startDate date:"  />
        </div>

        <div className="form-group mb-2">
        <label htmlFor="endDate" className='fs-5'> endDate date: </label><br />
        <Field id="endDate"  className="fs-4 rounded rounded-pill text-center" name="endDate" type="date" placeholder="endDate date:" />
        </div>

        <div className="form-group mb-2">
        <label htmlFor="description" className='fs-5'> description: </label><br />
        <Field id="description"  className="fs-4 rounded rounded-pill text-center" name="description" placeholder="description" />
        </div>

        <div className="btn text-center">
              <button type="next " className='bg-success rounded px-3 py-1 '><a href='/Educational'>preview</a></button>
        </div>

        <div className="btn text-center ms-4">
        <button type="submit " className='bg-success rounded px-3 py-1 '>Submit</button>
        </div>

        
        <div className="btn text-center">
              <button type="next " className='bg-success rounded px-3 py-1 '><a href='/Skills'>Next</a></button>
        </div>
        
      </Form>
    </Formik>
    <center>
        <table border={2}>
          <tr border={2}>
            <th>Pesonal Details:-</th>
          </tr>
          <tr>
            
            <td>companyName</td>
            <td>title</td>
            <td>startDate</td>
            <td>endDate</td>
            <td>description</td>

          </tr>
          {
            data.map((el , index)=>{
              return <tr>
               
                <td>{el.companyName}</td>
                <td>{el.title}</td>
                <td>{el.startDate}</td>
                <td>{el.endDate}</td>
                 <td>{el.description}</td>


                <td><button onClick={()=>deletHandler(index)}>delete</button></td>

              </tr>
            })
          }

        </table>
        </center>
  </div>
  <hr></hr>
  </div>
  
  )
}

export default  Experience