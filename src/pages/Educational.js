import React, { useState } from 'react'
// import React from 'react'
import { Formik, Field, Form } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Educational = () => {
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
      axios.get('https://portfolio-api-new.onrender.com/api/v1/resume/educationsdetails',{
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
    <h2>Educational Details:</h2>
    <Formik
      initialValues={{
        degree: '',
        school: '',
        grade: '',
        passingYear:'',

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
        <label htmlFor="degree" className='fs-5'>degree: </label><br />
        <Field id="degree" className="fs-4 rounded rounded-pill text-center" name="degree" placeholder="degree" />
        </div>

        <div className="form-group mb-2">
        <label htmlFor="school" className='fs-5'>school: </label><br />
        <Field id="school"  className="fs-4 rounded rounded-pill text-center" name="school" placeholder="school" />
        </div>

        <div className="form-group mb-2">
        <label htmlFor="grade" className='fs-5'>grade: </label><br />
        <Field id="grade"  className="fs-4 rounded rounded-pill text-center" name="grade" placeholder="grade" />
        </div>

            <div className="form-group mb-2">
        <label htmlFor=" passingYear" className='fs-5'> passingYear: </label><br />
        <Field id=" passingYear"  className="fs-4 rounded rounded-pill text-center" name= "passingYear" placeholder=" passingYear" />
        </div>



        <div className="btn text-center">
              <button type="next " className='bg-success rounded px-3 py-1 '><a href='/personal'>preview</a></button>
        </div>

        
        <div className="btn text-center ms-4">
        <button type="submit " className='bg-success rounded px-3 py-1 '>Submit</button>
        </div>


        <div className="btn text-center">
              <button type="next " className='bg-success rounded px-3 py-1 '><a href='/Experience'>Next</a></button>
        </div>

        
      </Form>
    </Formik>
    <center>
        <table border={2}>
          <tr border={2}>
            <th>Educational Details:</th>
          </tr>
          <tr>
            <td>degree</td>
            <td>school</td>
            <td>grade</td>
            <td>passingYear</td>
          </tr>
          {
            data.map((el , index)=>{
              return <tr>
                <td>{el.degree}</td>
                <td>{el.school}</td>
                <td>{el.grade}</td>
                <td>{el.passingYear}</td>
               


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

export default  Educational