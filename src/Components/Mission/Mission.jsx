import React, {useEffect} from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar'
import WOW from 'wow.js';
import Particles_dot from '../Particle/Particales'


function Mission() {
  useEffect(() => {
    sessionStorage.clear();
    new WOW().init();
  }, []);

  return (
    <div className='section_setting'>
      <section class="banner-bg banner-pad position-relative">
        {/* <div id="particles-js"></div> */}
        <Particles_dot />
      <Navbar />
        <div class="about-page position-relative z-in1">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="about-page-title text-center py-lg-4 pb-2">
                  <h1 class="text-white text-uppercase fw-bold mb-0">Our Principles</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="stat-sec-bg">
        <div class=" position-relative">
          <div class="position-relative z-in3">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-12">
                  {/* <div class="reg-company-af position-relative z-in3 wow fadeInUp"  data-wow-delay="0.4s">
                    <div class="company-back d-md-flex justify-content-between align-items-center">
                      <div class="company-cont">
                        <h5 class="text-black btn btn-secondary m-2">
                          <a href="/Registration" class="text-black">
                            {' '}
                            Registered Here
                          </a>
                        </h5>
                      </div>
                      <div class="certifcate-logo">
                        <img src="images/logotop68b3.png" class="" width="100px" />
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div class="container">
              <div class="margin-main_top">
                <div class="row">
                  <div class="col-lg-6 text-center">
                    <div class="wow fadeInLeft" data-wow-delay="0.4s">
                      <img src="images/about1.png" class="about_img top-padding" width="100%" />
                    </div>
                  </div>
                  <div class="col-lg-6 wow fadeInRight" data-wow-delay="0.4s">
                    <div class="about-cont">
                      <div class="title">
                        {/* <!-- <h1 class="fw-bold mb-0 text-box">What is Carbon Trading?</h1> --> */}
                        <h2 class="text-white fw-bold font_ab font_mainh ">
                          <span class="text-primary font_ab">Our Vision </span>
                        </h2>
                      </div>
                      <p class="mt-2">
                        The Vision at Dorado is to create a Super-fast, Reliable, Cost-Efficient, Easy-to-use user
                        experience NFT minting & Carbon Trading platform incorporating all the Latest Tech and
                        Enhancements under One Roof. Your One Stop Solution for Anything & Everything related to
                        Dorado Trading and Gold Grade Carbon Certificates.
                      </p>
                      <br />

                      <div class="title">
                        <h2 class="text-white fw-bold font_ab font_mainh ">
                          <span class="text-primary font_ab">Our Mission </span>
                        </h2>
                      </div>
                      <p class="mt-2">
                        Our mission at Dorado is to provide our Clients and Stakeholders the highest quality
                        Products, tools, Systems, Resources and everything they need to maximize their Opportunities in
                        Dorado Trading results.
                      </p>
                      <br />

                      <div class="title">
                        <h2 class="text-white fw-bold font_ab font_mainh ">
                          <span class="text-primary font_ab">Our Values </span>
                        </h2>
                      </div>
                      <p class="mt-2">
                        We at Dorado we value professional and Personal Integrity above Everything. We achieve our
                        goals by being True, Honest and Straightforward with all our stakeholders. We earn trust with
                        every action, every minute of every day.
                      </p>
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

export default Mission
