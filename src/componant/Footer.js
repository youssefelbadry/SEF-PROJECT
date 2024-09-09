import React from 'react'
import seff_logo_transparent from '../image/seff_logo_transparent.png'
function Footer() {
  return (
    <footer class="text-light  position-relative  ">
    <div class="container  ">
      <div class="row ">
        <div class="col-lg-9 col-md-12 col-sm-6  ">
            
              <img src={seff_logo_transparent} alt="logo" id='navbar-logo'/>
             
            <h4 className='text-color   p-5' style={{textTransform:'uppercase'}}> software engineering for future</h4>
          <div className="" >
            <ul className="  d-none d-md-flex  list my-3">
              <li className="nav-item">
                <a className="nav-link active text-color " aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link text-color " href="#">about</a>
              </li>
            
              <li class="nav-item  px-3">
                <a class="nav-link text-color " href="#">business</a>
              </li>
              <li class="nav-item">
                <a class="nav-link  text-color" href="#">security</a>
              </li>
            
            
            </ul>
          </div>
          <div className=" d-none d-md-flex " >
            <ul className=" list my-3">
          
          <li class="nav-item">
            <a class="nav-link 
            text-color" href="#">medical</a>
          </li>
          <li class="nav-item  px-3">
            <a class="nav-link 
            text-color" href="#">startups</a>
          </li>
          <li class="nav-item">
            <a class="nav-link 
            text-color" href="#">apps</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link 
            text-color" href="#">courses</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link text-color" href="#">contact us</a>
          </li>
          <li class="nav-item  px-3">
            <a class="nav-link text-color" href="#">sports</a>
          </li>
            </ul>
          </div>
                
        </div>
        <div className="col-lg-3  d-none d-md-block  mb-3">
            <div className=" list justify-content-end text-dark mb-5 ">
                <div  className="circle  border border-1 border-warning  center d-flex justify-content-center  text-dark">
                
                <i class="fa-solid fa-chevron-up mt-2 fs-1" size="3x"></i>
                </div>
                
            </div>
            <div className='mt-5 '>
                <div className="list-unstyled ">
                  <span className="mb-2 mt-5 "><a className='text-color text-decoration-none' href='seffuture@gmail.com'>seffuture@gmail.com</a></span>
                  <i class="fa-solid fa-envelopes-bulk fs-4 ps-3 text-warn"></i>
                  <li className="mb-2 text-color "  >+201098481288<i class="fa-solid fa-phone-volume text-warn fs-5 p-3"></i></li>
                  <li className="mb-2 text-color "  >+201555177645</li>
                </div>
             </div>
        </div>
       
      
       
        <hr class="border-top border-3 border-light mt-3 mb-4 list"/>
       <div className="container">
       <div className='text-color my-3 row'>
        
        <div className='col-lg-8 col-md-12'>
        <span class=" d-block "> &copy; 2023 EGYPT ,ALL  RIGHTS RESERVED</span>
        </div>
       <div className=' col-lg-4 col-md-12 text-white '>
       <div className="social-icons d fs-2 text-white">
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
      <i class="fa-brands fa-facebook" size="2x"></i>
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2">
      <i class="fa-brands fa-instagram" size="2x"></i>
    </a>
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">
      <i class="fa-brands fa-twitter" size="2x"></i>
    </a>
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2">
      <i class="fa-brands fa-linkedin" size="2x"></i>
    </a>
  </div>
       </div>
     </div>
       </div>
        
      </div>
  
    </div>
  </footer>
 
  
  )
}

export default Footer
