import Badge from 'react-bootstrap/Badge';
import {
    Link
  } from "react-router-dom";
import '../App.css'

function Footer(){
    return(
        <>
            <div className='w-1233'>
                <center>
                    <i class="fa-brands fa-facebook"><a href='https://www.instagram.com/'></a></i>  
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                </center>
            </div>
            <div className='w-1230'>
                <div className='w-1140'>
                        <div className='flex'>
                            <div className='w-45'>
                                <ul>
                                    <li><a href='/'>Novorésumé</a></li>
                                    <li><a href='/'>Homepages</a></li>
                                    <li><a href='/Tamplet'>resumetaplet</a></li>
                                    <li><a href='/Tamplet'>cv tamplets</a></li>
                                    <li><a href='/Tamplet'>cover leter</a></li>
                                </ul>
                            </div>
                            <div className='w-45'>
                                <ul>
                                    <li>learn</li>
                                    <li>Career Blog</li>
                                    <li>How to Write a Resume</li>
                                    <li>How to Write CV</li>
                                    <li>How to Write a Cover Letter</li>
                                    <li>Resume Examples</li>
                                    <li>Cover Letter Examples</li>
                                </ul>
                            </div>
                            <div className='w-45'>
                                <ul>
                                    <li>Other</li>
                                    <li>Pricing</li>
                                    <li><a href='./About'>About Us</a></li>
                                    <li>E-book: How to get a job in 2023</li>
                                    <li>Media Kit</li>
                                    <li>Help Center</li>
                                </ul>
                            </div>
                            <div className='w-45'>
                                <ul>
                                    <li><a href='./contact'><p>Legal/Contact</p></a></li>
                                    <li><a href='./Tamplet'>Terms of Use</a></li>
                                    <li><a href='./Policy'>Privacy Policy</a></li>
                                    <li><a href='./Cookie'>Cookie Policy</a></li>
                                    <li>kirtanpanda4@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
            <div className='w-1222'>
                <center>
                    <p>Our Vision is to</p>
                    <p className='wwww'>Fight Galactic Unemployment</p>
                    <div className='we'></div>
                    <p>Ny Carlsberg Vej 80</p>
                    <p>DK 1799 Copenhagen, Denmark</p>
                    <p>Copyright © 2023 Novorésumé ApS. All Rights Reserved.</p>
                </center>
            </div>
       </>
    )
}
export default Footer;