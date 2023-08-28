import { Formik, Field, Form } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Gi3DGlasses } from "react-icons/gi";


const Personal = () => {
  
  return (
    <div className="d-flex align-items-center justify-content-center w-101">
    <div className='login col-lg-6'>
    <h2>Pesonal Details:-</h2>
    <Formik
      initialValues={{
        img: '',
        phone: '',
        DOB: '',
        Gender: '',
        Address: '',
        PinCode:'',

      }}
      onSubmit={async (values) => {
        console.log(JSON.stringify(values, null, 2));
        console.log(values)
           
      }}
    >
      <Form className='text-left'> 
      <Gi3DGlasses />
        <div className="form-group mb-2">
        <label htmlFor="img" className='fs-5'>img: </label><br />
        <Field id="img" className="fs-4 rounded rounded-pill text-center" name="img" placeholder="img" />
        </div>

        <div className="form-group mb-2">
        <label htmlFor="phone" className='fs-5'>phone: </label><br />
        <Field id="phone"  className="fs-4 rounded rounded-pill text-center" name="phone" placeholder="phone" type="number"/>
        </div>

        <div className="form-group mb-2">
        <label htmlFor="DOB" className='fs-5'> DOB: </label><br />
        <Field id="DOB"  className="fs-4 rounded rounded-pill text-center" name="DOB" placeholder="DOB" type="date" />
        </div>

        <div className="form-group mb-2">
        <label className='m-2' htmlFor="gender">Gender :-</label>

          <label>
              <Field type="radio" name="gender" value="male" />
              male
          </label>
          <label>
              <Field type="radio" name="gender" value="female" />
              female
          </label>
        </div>

        <div className="form-group mb-2">
        <label htmlFor="Address" className='fs-5'>Address: </label><br />
        <Field id="Address"  className="fs-4 rounded rounded-pill text-center" name="Address" placeholder="Address" />
        </div>

        <div className="form-group mb-2">
        <label htmlFor="PinCode" className='fs-5'> Pin Code: </label><br />
        <Field id="PinCode"  className="fs-4 rounded rounded-pill text-center" name="PinCode" placeholder="PinCode" type=""/>
        </div>

        <div className="btn text-center">
              <button type="next " className='bg-success rounded px-3 py-1 '><a href='/professional'>preview</a></button>
        </div>

        <div className="btn text-center ms-4">
        <button type="submit " className='bg-success rounded px-3 py-1 '>Submit</button>
        </div>
        

        <div className="btn text-center">
              <button type="next " className='bg-success rounded px-3 py-1 '><a href='/Educational'>Next</a></button>
        </div>

      </Form>
    </Formik>
  
  </div>
  <hr></hr>
  </div>
  
  )
}

export default  Personal