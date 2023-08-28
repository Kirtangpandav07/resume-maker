
import img33 from '../img33.webp'
import img44 from '../img44.png'
import img55 from '../img55.png'
import img66 from '../img66.png'
import img77 from '../img77.png'
import img88 from '../img88.png'
import img99 from '../img99.png'
import img10 from '../img10.png'
import img180 from '../img180.webp'
import img190 from '../img190.png'
import aa from '../aa.webp'
import Badge from 'react-bootstrap/Badge';
// import Marquee from "react-fast-marquee";
import Carousel from 'react-bootstrap/Carousel';
import About from './About'
import Tamplet from './Tamplet'
import Contact from './Contact'


import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
function Home(){

    return(
        <>
      
        <div className='w-1140'>
        <h1>The online resume builder getting folks <br></br>hired by BBC, Google, Apple, Tesla, and <br></br> Airbnb.</h1>
       </div>

       <div className='part'></div>
       <div className='part1'></div>
       <div className='w-1130'>
       
          <div className='main'>
              <div className='flex'>
                <div className='main1'>
                   <h2>Build your brand-new <br></br>resume in as little as 5<br></br> minutes. <h3>Try it for free.</h3></h2>
                   <div className='fgh'>
                   <div className='btn-3'>
                    <div className='tyuyug'>
                        <div className='btn-1'>
                              <a href='/Professional'><button> Get Started Now <i class="fa-solid fa-arrow-right"></i> </button></a>
                        </div>
                      </div>
                    </div>  
                    </div>
                    <div className='card22'>
                        <h2>No credit card required</h2>
                    </div>    
                    <div className='logo'>
                      <h3>Featured In</h3>
                      <div className='line'></div>
                      <div className='logo-111'>
                        <div className='flex'>
                          <div className='img'>
                            <img src={img44} alt="" />
                          </div>
                          <div className='img'>
                             <img src={img55} alt="" />
                          </div>
                        </div>
                        <div className='flex'>
                          <div className='img'>
                            <img src={img66} alt="" />
                          </div>
                          <div className='img'>
                             <img src={img77} alt="" />
                          </div>
                          
                        </div>
                        <div className='flex'>
                          <div className='img'>
                            <img src={img88} alt="" />
                          </div>
                          <div className='img'>
                             <img src={img99} alt="" />
                          </div>
                          
                        </div>
                          
                      </div>
                      
                      <div className='imggg'>
                        <div className='imgg-1'>
                          <center>
                           <img src={img10} alt="" width={200} />
                           <div className='flex'>
                                <div className='box'><i class="fa-solid fa-star"></i></div>
                                <div className='box'><i class="fa-solid fa-star"></i></div>
                                <div className='box'><i class="fa-solid fa-star"></i></div>
                                <div className='box'><i class="fa-solid fa-star"></i></div>
                                <div className='box'><i class="fa-regular fa-star-half-stroke"></i></div>
                                
                            </div>
                            <span>trustcore 4.4 | 896 reviews</span>
                            </center>
                            
                         </div>  
                         {/* <div className='imgg-2'>
                           <img src={aa} alt="" />
                         </div>   */}
                       </div> 
                    </div>
                </div>
                
                <div className='main2'>
                    <img src={img33} alt="" width={800}/>
                </div>
              </div>
              
          </div>
       </div>
       <About/>
       <Tamplet/>
       <Contact/>
    </>   
    
    );
};
export default Home;