import { Carousel } from "react-bootstrap";
import img180 from '../img180.webp'
import img110 from '../img110.webp'
import img120 from '../img120.webp'
import img160 from '../img160.webp'
import img170 from '../img170.webp'
import img130 from '../img130.png'
import img190 from '../img190.png'
import img140 from '../img140.png'
import img150 from '../img150.png'
import img33 from '../img33.webp'
import img44 from '../img44.png'
import img55 from '../img55.png'
import img66 from '../img66.png'
import img77 from '../img77.png'
import img88 from '../img88.png'
import img99 from '../img99.png'
import img10 from '../img10.png' 
import img200 from '../img200.png' 
import img201 from '../img201.png' 
import img203 from '../img203.png' 
import img204 from '../img204.png' 
import img205 from '../img205.png' 
import img206 from '../img206.png' 
import { Gi3DGlasses } from "react-icons/gi";

import React, { Component } from "react";
import Slider from "react-slick";
import Badge from 'react-bootstrap/Badge';

// import React from 'react';
// import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';


function Tamplet(){
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    
    return(
        <>
    <div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4090.9463594923322!2d72.82317525951348!3d21.22982498719333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04eb8e8232f21%3A0x8d752f2fe33145e9!2sSantoshi%20Krupa%20Society!5e0!3m2!1sen!2sin!4v1681963458569!5m2!1sen!2sin"
     width="100%" height={600}></iframe>
    </div>

    <div className="ert">
        <div className="flex">
            <div className="ert-1">
                <div className="contact col-lg-6">

                <h1>Contacts</h1>
                   <Formik
                    initialValues={{
                        Name: '',
                        email: '',
                        Numbar:'',
                        Comments:'',

                    }}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        console.log(values)
                    }}
                    >
                    <Form>
                        <label htmlFor="Name"></label>
                        <Field id="Name" name="Name" placeholder="Name" className="rounded-pill text-center" /><br></br>


                        <label htmlFor="email"></label>
                        <Field
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                        className="rounded-pill text-center" 
                        /><br></br>

                        <label htmlFor="Numbar"></label>
                        <Field id="Numbar" name="Numbar" placeholder="Phone Numbar"  className="rounded-pill text-center" /><br></br>


                        <label htmlFor="Comments"></label>
                        <Field id="Comments" name="Comments" placeholder="Comments" className="rounded-pill text-center"  /><br></br><br></br>
                        <button type="submit" className="rounded-pill text-center" bg="red" >Submit</button>
                    </Form>
                    </Formik>
                    </div>
            </div>
            <div className="ert-2">
                <h2>GET IN TOUCH WITH US</h2>
                <h3><Gi3DGlasses /> 269, Santoshi Krupa Society, Bapa sitaram Chowk ,Katargam ,Surat</h3>
                <h3><Gi3DGlasses /><a href="https://www.truecaller.com/">+91 8238844087</a> </h3>
                <h3><Gi3DGlasses /> Kirtanpandav4@gmail.com</h3>
                <h3><Gi3DGlasses /> monday-friday 9 AM -7 PM</h3>
            </div>

        </div>
    </div>
        </>
    )
}
export default Tamplet;