import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Achievements = () => {
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
    axios.get('https://portfolio-api-new.onrender.com/api/v1/resume/awardsandcertification',{
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
        <h2>Achievements & Awards :</h2>
        <Formik
          initialValues={{
            title: '',
            provider: '',
          }}
          onSubmit={async (values) => {
            console.log(JSON.stringify(values, null, 2));
            let copyArr = [...data]
            copyArr.push(values)
            setData(copyArr)
          }}
        >
          <Form className='text-left'>
            <div className="form-group mb-2">
              <label htmlFor="title" className='fs-5'>title</label><br />
              <Field id="title" className="fs-4 rounded rounded-pill text-center" name="title" placeholder="title" />
            </div>

            <div className="form-group mb-2">
              <label htmlFor="provider" className='fs-5'>provider: </label><br />
              <Field id="provider" className="fs-4 rounded rounded-pill text-center" name="provider" placeholder="provider" />
            </div>


            <div className="btn text-center">
              <button type="next " className='bg-success rounded px-3 py-1 '><a href='/Skills'>preview</a></button>
           </div>

            <div className="btn text-center ms-4">
              <button type="submit " className='bg-success rounded px-3 py-1 '>Submit</button>
            </div>


            <div className="btn text-center">
              <button type="next " className='bg-success rounded px-3 py-1 '><a href='/Projects'>Next</a></button>
            </div>

          </Form>
        </Formik>
<center>
        <table border={2}>
          <tr border={2} >
            <th>Achievements</th>
          </tr>
          <tr>
            <td>title</td>
            <td>provider</td>
            <td>delete</td>
          </tr>
          {
            data.map((el , index)=>{
              return <tr>
                <td>{el.title}</td>
                <td>{el.provider}</td>
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

export default Achievements