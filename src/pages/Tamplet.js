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


import React, { Component } from "react";
import Slider from "react-slick";
import Badge from 'react-bootstrap/Badge';


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
    <div className="jhg">
        <h1>Just four simple steps to download your resume:</h1>
    </div>
    <center><div className="lll"> </div></center>
    <div className="kkk">
        <Slider {...settings}>
          <div>
             <img src={img203} alt="" />
             <div className="lkjhg">1</div>
          </div>
          <div>
          <img src={img204} alt="" />
          <div className="lkjhg">2</div>
          </div>
          <div>
          <img src={img205} alt="" />
          <div className="lkjhg">3</div>
          </div>
          <div>
          <img src={img206} alt="" />
          <div className="lkjhg">4</div>
          </div>
        </Slider>

    </div>
    <div  className="lkl">
        <h1>AS SEEN IN:</h1>
        <hr />
        <div className="werty">
           
            <div className="flex">
                <div className="company1"><h2>theguardian</h2></div>
                <div className="company2"><h2>IHUFFPOSTI</h2></div>
                <div className="company3"><h2>lifehacker</h2></div>
                <div className="company4"><h2>business.com</h2></div>
                <div className="company5"><h2>FINACIAL TIMES</h2></div>
                <div className="company6"><h2>Forbes</h2></div>

            </div>
        </div>
        <hr />
    </div>
    
        </>
    )
}
export default Tamplet;