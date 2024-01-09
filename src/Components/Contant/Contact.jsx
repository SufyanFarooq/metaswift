import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar'
import Particle from '../Particle/Particle'

function Contact() {
  return (
    <div className='section_setting'>
      <section className="form-pages-bg position-relative">
        {/* <div id="particles-js"></div> */}
        <Particle />
        <Navbar />
        <div className="form-register position-relative z-in1 form-after">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 offset-xl-2">
                <div className="title text-center">
                  <h1 className="fw-bold mb-0 text-box">Contact Our Support</h1>
                  {/* <!-- <h2 className="text-white fw-bold font_ab font_mainh"><span className="text-primary font_ab font_mainh">Contact</span> our Support</h2> --> */}
                </div>

                <div className="form-back contact_setting">
                  <form className="dark-form" method="post" name="mainform" onsubmit="return checkform()">
                    <input type="hidden" name="form_id" value="16654885624596" />
                    <input type="hidden" name="form_token" value="08d2b5ed58e7ec0b7d07b03b7034d4f0" />

                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-floating mb-3">
                          <div className="form-ico">
                            {' '}
                            <i className="fa fa-edit"></i>{' '}
                          </div>
                          <input
                            className="form-control inpts"
                            id="floatingInput"
                            placeholder=" "
                            type="text"
                            name="name"
                          />
                          <label className='pdt12' for="floatingInput">username</label>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-floating mb-3">
                          <div className="form-ico">
                            {' '}
                            <i className="fa fa-envelope"></i>{' '}
                          </div>
                          <input
                            className="form-control inpts"
                            id="floatingInput"
                            placeholder=" "
                            type="text"
                            name="email"
                          />
                          <label className='pdt12' for="floatingInput">Email Address</label>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-floating mb-3">
                          <div className="form-ico form-ico2">
                            <i className="far fa-comment-dots text-white"></i>
                          </div>
                          <textarea
                            style={{ height: '200px', borderRadius: '20px' }}
                            className="form-control"
                            aria-label="With textarea"
                            placeholder="Message "
                            name="message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3 text-center">
                          {' '}
                          <img src="index8396.html?a=show_validation_image&amp;PHPSESSID=36b513f299bf371fc3d1b3be1d7d3c7a&amp;rand=362965298" />{' '}
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-floating mb-3">
                          <div className="form-ico">
                            {' '}
                            <i className="fa fa-image"></i>{' '}
                          </div>
                          <input
                            className="form-control"
                            id="floatingInput"
                            placeholder=" "
                            type="text"
                            name="validation_number"
                            size="30"
                          />
                          <label for="floatingInput">Captcha Code</label>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="text-center">
                          <div className="form-btn">
                            <input type="submit" className="btn btn-secondary m-2  mb-3" value="Submit Now" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
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

export default Contact
