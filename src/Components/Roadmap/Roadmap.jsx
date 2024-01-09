import React, {useEffect} from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar'
import WOW from 'wow.js';
import Particles_dot from '../Particle/Particales'

function Roadmap() {
   useEffect(() => {
      sessionStorage.clear();
      new WOW().init();
    }, []);
  return (
    <div className='stat-sec-bg section_setting'>
<section class="banner-bg banner-pad position-relative">
         {/* <div  id="particles-js"  ></div> */}
         <Particles_dot />
         <Navbar />
         <div class="about-page position-relative z-in1">
            <div class="container">
               <div class="row">
                  <div class="col-lg-12">
                     <div class="about-page-title text-center py-lg-4 pb-2">
                        <h1 class="text-white text-uppercase fw-bold mb-0">Roadmap</h1>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section class="stat-sec-bg">
         <div class="features position-relative feature-af">
            <div class="position-relative z-in1">
               <div class="container">
                  <div class="row">
                     <div class="col-lg-12">
                        <div class="title text-center wow fadeInUp" data-wow-delay="0.20s">
                           <h1 class="fw-bold mb-0 text-box">Roadmap</h1>
                           {/* <!-- <h2 class="text-white fw-bold font_mainh">Roadmap</h2> --> */}
                        </div>
                     </div>
                  </div>
                  <div class="col-md-12 sarkar_ip wow fadeInLeft" data-wow-delay="0.20s">
                     <img src="images/roadmap1.png" width="100%" />
                  </div>

                  <div class="row">
                     <div class="d-sm-none">
                     <div class="col-lg-3 ">
                        <div class="feature-block animation fadeInLeft" data-wow-delay="0.5s">
                           <center>
                           <div class="feature-ico5 text-center stat-bg stat-bg1">
                              <img src="images/research1.png" class="img-fluid"/>
                               
                           </div>
                           <div class="">
                               <i class="fa fa-angle-double-down imagess" aria-hidden="true"></i>
                              {/* <!-- <img src="images/arrow.png"> --> */}
                           </div>
                            </center>
                           <div class="faeture-cont ">
                              
                              <h3 class="text-secondary fw-bold"><span class="text-primary ft"></span> Research and Analysis</h3>
                              <p class="text-center"> Q2 2022</p>
                           </div>


                        </div>
                     </div>

                     <div class="col-lg-3">
                        <div class="feature-block animation fadeInUp" data-wow-delay="0.5s">
                           <center>
                           <div class="feature-ico5 text-center stat-bg stat-bg1">
                              <img src="images/nft2.png" class="img-fluid"/>
                           </div>
                           <div class="">

                              <i class="fa fa-angle-double-down imagess" aria-hidden="true"></i>
                           </div>
                        
                           </center>
                           <div class="faeture-cont">
                              <h3 class="text-secondary fw-bold"><span class="text-primary ft"></span> Ideation and NFT Design </h3>
                              <p class="text-center">Q3 2022</p>
                           </div>
                        </div>
                     </div>

                     <div class="col-lg-3">
                        <div class="feature-block animation fadeInUp" data-wow-delay="0.5s">
                           <center>
                           <div class="feature-ico5 text-center stat-bg stat-bg1">
                             <img src="images/project2.png" class="img-fluid"/>
                              
                           </div>
                           <div class="">
                              <i class="fa fa-angle-double-down imagess" aria-hidden="true"></i>
                           </div>
                        
                           </center>
                           <div class="faeture-cont">
                              <h3 class="text-secondary fw-bold"><span class="text-primary ft"></span> Project Development</h3>
                              <p class="text-center">Q4 2022</p>
                           </div>
                        </div>
                     </div>

                     <div class="col-lg-3">
                        <div class="feature-block animation fadeInRight" data-wow-delay="0.5s">
                           <center>
                              <div class="feature-ico5 text-center stat-bg stat-bg1">
                                 <img src="images/whitepaper.png" class="img-fluid" width="75px" />
                             
                              </div>

                              <div class="">
                              <i class="fa fa-angle-double-down imagess" aria-hidden="true"></i>
                           </div>
                    
                           </center>
                           <div class="faeture-cont">
                              <h3 class="text-secondary fw-bold"><span class="text-primary ft"></span> Whitepaper and Token Launch</h3>
                              <p class="text-center">Q1 2023</p>
                           </div>
                        </div>
                     </div>

                     <div class="col-lg-3">
                        <div class="feature-block animation fadeInLeft" data-wow-delay="0.5s">
                           <center>
                           <div class="feature-ico5 text-center stat-bg stat-bg1">

                              <img src="images/rocket.png" class="img-fluid"/>
                           </div>
                        <div class="">
                              <i class="fa fa-angle-double-down imagess" aria-hidden="true"></i>
                           </div>
                           </center>
                           <div class="faeture-cont">
                              <h3 class="text-secondary fw-bold"><span class="text-primary ft"></span> Project Global Launch</h3>
                              <p class="text-center">Q1 2023</p>
                           </div>
                        </div>
                     </div>

                     <div class="col-lg-3">
                        <div class="feature-block animation fadeInUp" data-wow-delay="0.5s">
                           <center>
                           <div class="feature-ico5 text-center stat-bg stat-bg1">
                              
                              {/* <!-- <i class="fa fa-television img-fluid" aria-hidden="true"></i> --> */}
                              <img src="images/ncc1.png" class="img-fluid"/>
                           </div>
                        <div class="">
                              <i class="fa fa-angle-double-down imagess" aria-hidden="true"></i>
                           </div>
                           </center>
                           <div class="faeture-cont">

                              <h3 class="text-secondary fw-bold"><span class="text-primary ft"></span> Dorado NFT Launch</h3>

                              <p class="text-center">Q1 2023</p>
                           </div>
                        </div>
                     </div>

                     <div class="col-lg-3">
                        <div class="feature-block animation fadeInUp" data-wow-delay="0.5s">
                           <center>
                           <div class="feature-ico5 text-center stat-bg stat-bg1">
                              
                              {/* <!-- <i class="fa fa-envelope img-fluid" aria-hidden="true"></i> --> */}
                              <img src="images/air.png" class="img-fluid"/>
                           </div>
                        <div class="">
                             <i class="fa fa-angle-double-down imagess" aria-hidden="true"></i>
                           </div>
                           </center>
                           <div class="faeture-cont">
                              <h3 class="text-secondary fw-bold"><span class="text-primary ft"></span> Dorado Token Airdrop</h3>
                              <p class="text-center">Q1 2023</p>
                           </div>
                        </div>
                     </div>

                     <div class="col-lg-3">
                        <div class="feature-block animation fadeInRight" data-wow-delay="0.5s">
                           <center>
                           <div class="feature-ico5 text-center stat-bg stat-bg1">
                             
                              {/* <!-- <i class="fa fa-suitcase img-fluid" aria-hidden="true"></i> --> */}
                              <img src="images/dex.png" class="img-fluid"/>
                           </div>

                           <div class="">
                              <i class="fa fa-angle-double-down imagess" aria-hidden="true"></i>
                           </div>
                           </center>
                           <div class="faeture-cont">
                              <h3 class="text-secondary fw-bold"><span class="text-primary ft"></span> Dorado Token on Dex</h3>
                              <p class="text-center">Q2 2023</p>
                           </div>
                        </div>
                     </div>

                     <div class="col-lg-3">
                        <div class="feature-block animation fadeInLeft" data-wow-delay="0.5s">
                           <center>
                           <div class="feature-ico5 text-center stat-bg stat-bg1">
                             
                              {/* <!-- <i class="fa fa-users img-fluid" aria-hidden="true"></i> --> */}
                              <img src="images/cex.png" class="img-fluid"/>
                           </div>
                       <div class="">
                              <i class="fa fa-angle-double-down imagess" aria-hidden="true"></i>
                           </div>
                           </center>
                           <div class="faeture-cont">
                              <h3 class="text-secondary fw-bold"><span class="text-primary ft"></span> Dorado Token on Cex </h3>
                              <p class="text-center">Q2 2023</p>
                           </div>
                        </div>
                     </div>

                     <div class="col-lg-3">
                        <div class="feature-block animation fadeInUp" data-wow-delay="0.5s">
                           <center>
                           <div class="feature-ico5 text-center stat-bg stat-bg1">
                             
                              {/* <!-- <i class="fa fa-database img-fluid" aria-hidden="true"></i> --> */}
                              <img src="images/project.png" class="img-fluid"/>
                           </div>
                        <div class="">
                              <i class="fa fa-angle-double-down imagess" aria-hidden="true"></i>
                           </div>
                           </center>
                           <div class="faeture-cont">
                              <h3 class="text-secondary fw-bold"><span class="text-primary ft"></span> Dorado Token Metaverse Launch </h3>
                              <p class="text-center">Q3 2023</p>
                           </div>
                        </div>
                     </div>

                     <div class="col-lg-3">
                        <div class="feature-block animation fadeInUp" data-wow-delay="0.5s">
                           <center>
                           <div class="feature-ico5 text-center stat-bg stat-bg1">
                             
                              {/* <!-- <i class="fa fa-briefcase img-fluid" aria-hidden="true"></i> --> */}
                              <img src="images/game1.png" class="img-fluid"/>
                           </div>
                        <div class="">
                              <i class="fa fa-angle-double-down imagess" aria-hidden="true"></i>
                           </div>
                           </center>
                           <div class="faeture-cont">
                              <h3 class="text-secondary fw-bold"><span class="text-primary ft"></span> Dorado Token Games Launch</h3>
                              <p class="text-center">Q3 2023</p>
                           </div>
                        </div>
                     </div>

                     <div class="col-lg-3">
                        <div class="feature-block animation fadeInRight" data-wow-delay="0.5s">
                           <center>
                           <div class="feature-ico5 text-center stat-bg stat-bg1">
                              
                              {/* <!-- <i class="fa fa-futbol-o img-fluid" aria-hidden="true"></i> --> */}
                              <img src="images/vr.png" class="img-fluid"/>
                           
                            </div>
                            <div class="">
                             <i class="fa fa-angle-double-down imagess" aria-hidden="true"></i>
                           </div>
                           </center>
                           <div class="faeture-cont">
                              <h3 class="text-secondary fw-bold"><span class="text-primary ft"></span> Virtual Reality (VR) Device Launch</h3>
                              <p class="text-center">Q4 2023</p>
                           </div>
                        </div>
                     </div>

                     <div class="col-lg-3">
                        <div class="feature-block animation fadeInLeft" data-wow-delay="0.5s">
                           <center>
                           <div class="feature-ico5 text-center stat-bg stat-bg1">
                             
                              {/* <!-- <i class="fa fa-bell-o img-fluid" aria-hidden="true"></i> --> */}
                              <img src="images/opensea.png" class="img-fluid"/>
                           </div>
                        <div class="">
                              <i class="fa fa-angle-double-down imagess" aria-hidden="true"></i>
                           </div>

                           </center>
                           <div class="faeture-cont">
                              <h3 class="text-secondary fw-bold"><span class="text-primary ft"></span> NFTs Listing on OpenSea</h3>
                              <p class="text-center">Q4 2023</p>
                           </div>
                        </div>
                     </div>


                  </div>
               </div>
               </div>
            </div>
         </div>
      </section>
<Footer />
    </div>
  )
}

export default Roadmap