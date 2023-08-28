import img11 from '../img11.png'
import img22 from '../img22.png'
import Badge from 'react-bootstrap/Badge';
import {
    Link
  } from "react-router-dom";
import '../App.css'




function Header(){
  return(   
      <>
      <div className='w-100' >
        <div className='flex'>
          <div className='ww'>
            <img  className='zz' src={img11} alt="" />
            <img className='zz-1' src={img22} alt="" />
          </div>
          <div className='ww'>
            <ul>
            
              <Link to=""><li>Home</li></Link>
              <Link to="About"><li>About Us</li></Link>
              <Link to="Tamplet" ><li>Resume tamplet</li></Link>
              <Link to="contact"> <li>Contact</li></Link>
              

            </ul>
          </div>
          <div className='ww'>
            <div className='flex'>
              <div className='btn-1'>
                  <a href='/Login'><button>Log in</button></a>
                </div>
                <div className='btn-2'>
                   <a href='/signup'><button>Sigh up</button></a>
                </div>
              </div>
          </div>
        </div>
     </div>
     </>
  )
}
export default Header;

