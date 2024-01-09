import React,{useEffect} from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'



function Navbar() {
  useEffect(()=>{
    AOS.init({
      duration:1000
    })
  })
  return (
    <div>
      <header class="py-lg-4 py-2 position-relative z-in3 menu_setting">
        <div class="container">
          <div class="row">
            <div class=" col-lg-12">
              <div class="home-header d-lg-flex justify-content-between align-items-center">
                <div class="logo wow fadeInUp"  >
                  <a href="/">
                    <img src="images/logotop68b3.png" class="img-fluid " />
                  </a>
                </div>
                {/* <!-- <div class="time d-flex align-items-center wow fadeInUp" data-wow-delay="0.4s">
                           <h6 class="text-white mb-0"><a href="index.html"><img src="images/1money-bag.png" 
                             style="height: 20px;margin-right: 5px;margin-left: 5px;">Investor</a></h6>
                           <h6 class="text-primary mb-0 fw-bold"><a href="index.html">
                           <img src="images/money-bag.png" style="height: 20px;margin-right: 5px;margin-left: 5px;">Paidout</a></h6>
                           </div> --> */}
                <div class="position-relative wow fadeInUp"  >
                  <div class="menu">
                    <div class="menu-flex d-flex align align-items-center">
                      <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainnavigation"
                        aria-controls="mainnavigation"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span class="navbar-toggler-icon"></span>{' '}
                      </button>
                      <span class="text-primary toggl-menu">Main Menu</span>
                    </div>
                  </div>
                  <div class="collapse navbar-collapse   justify-content-center " id="mainnavigation">
                    <ul class="navbar-nav head-nav-link">
                      {/* <li class="">
                        {' '}
                        <a class="" aria-current="page" href="/">
                          Home
                        </a>{' '}
                      </li> */}
                      {/* <li class="">
                        <a class="" href="/About">
                          About
                        </a>
                      </li> */}
                      <li class="">
                        {' '}
                        <a class="" href="/Mission">
                          Our Principles
                        </a>{' '}
                      </li>
                      <li class="">
                        {' '}
                        <a class="" href="/Roadmap">
                          Roadmap
                        </a>{' '}
                      </li>
                      <li class="">
                        {' '}
                        <a class="" href="#">
                          Marketing Plan
                        </a>{' '}
                      </li>
                      <li class="">
                        {' '}
                        <a class="" href="/Academy">
                          Academy
                        </a>{' '}
                      </li>
                      <li class="">
                        {' '}
                        <a class="" href="/FAQ">
                          Faq
                        </a>{' '}
                      </li>
                      <li class="">
                        {' '}
                        <a class="" href="/Contact">
                          Contact
                        </a>{' '}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="head-btn wow fadeInUp"  >
                  <a href="/Login" class="btn btn-secondary m-2" >
                    Login
                  </a>
                  <a href="/Registration" class="btn btn-secondary m-2"
                  //  style={{display:'none'}}
                   >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
