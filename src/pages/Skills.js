import React, { useState } from 'react'

// import React from 'react'
import { Formik, Field, Form } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Skills = () => {
  const history = useHistory()
  const [data, setData] = useState([])
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
      axios.get('https://portfolio-api-new.onrender.com/api/v1/resume/skills',{
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
    <h2>Skills Details:</h2>
    <Formik
      initialValues={{
        name: '',
        rate: '',
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
        <label htmlFor="name" className='fs-5'>name Name: </label><br />
        <Field id="name" className="fs-4 rounded rounded-pill text-center" name="name" placeholder="name" />
        </div>

        <div className="form-group mb-2">
        <label htmlFor="rate" className='fs-5'>Skills rate: </label><br />
        <Field id="rate"  className="fs-4 rounded rounded-pill text-center" name="rate" placeholder="rate" as="select">
                                  
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                               </Field>     
        
        </div>


        <div className="btn text-center">
              <button type="next " className='bg-success rounded px-3 py-1 '><a href='/Experience'>preview</a></button>
        </div>

        <div className="btn text-center ms-4">
        <button type="submit " className='bg-success rounded px-3 py-1 '>Submit</button>
        </div>


        
        <div className="btn text-center">
              <button type="next " className='bg-success rounded px-3 py-1 '><a href='/Achievements'>Next</a></button>
        </div>
        
      </Form>
    </Formik>
    <center>
        <table border={2}>
          <tr border={2}>
            <th>Pesonal Details:-</th>
          </tr>
          <tr>
            <td>Skills</td>
            <td>Level</td>
          </tr>
          {
            data.map((el , index)=>{
              return <tr>
                <td>{el.name}</td>
                <td>{el.rate}</td>
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

export default  Skills