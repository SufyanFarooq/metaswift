import React, { useState, useEffect } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar'
import Particles_dot from '../Particle/Particales'

import './Acamedy.css'

function Academy() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [
    'images/b.jpg',
    'images/b1.jpg',
    'images/b2.jpg',
    'images/b3.jpg',
    'images/b4.jpg',
    'images/b5.jpg',
    'images/b6.jpg',
  ]

  const academyLink = [
    'https://www.wsj.com/articles/agriculture-industry-bets-on-a-new-cash-crop-carbon-11608719403',
    'https://www.vox.com/2020/2/27/20994118/carbon-offset-climate-change-net-zero-neutral-emissions',
    'https://www.reuters.com/world/africa/kenya-plans-set-up-emissions-trading-system-2021-05-11/',
    'https://www.nasdaq.com/solutions/marketplace-services-platform/carbon-credit-exchanges',
    'https://www.financeasia.com/article/credit-relevance-will-increase-as-voluntary-carbon-markets-grow/480240',
    'https://www.bp.com/en/global/air-bp/news-and-views/network-news/what-is-carbon-offsetting-and-what-you-should-know.html',
    'https://en.wikipedia.org/wiki/Gold_Standard_(carbon_offset_standard)',
  ]
  const academyText = [
    'The Wall Street Journal',
    'Vox',
    'Kenya plans to set up emissions trading system',
    'Trading Technology for Carbon Credit Exchanges',
    'Finance Asia',
    'Air BP',
    'Wikipedia',
  ]

  const handleSlide = () => {
    let newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  useEffect(() => {
    sessionStorage.clear();
    const interval = setInterval(handleSlide,4000)
    return () => clearInterval(interval)
  }, [currentIndex])
  return (
    <div className='section_setting'>
      <section className="banner-bg banner-pad position-relative">
        {/* <div id="particles-js"></div> */}
        <Particles_dot />
        <Navbar />
        <div className="about-page position-relative z-in1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="about-page-title text-center py-lg-4 pb-2">
                  <h1 className="text-white text-uppercase fw-bold mb-0">Academy</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="stat-sec-bg stat_sec_bg2 about-sec position-relative about-sec-af">
        <div className=" position-relative">
          <div className="position-relative z-in3">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  {/* <div className="reg-company-af position-relative z-in3 wow fadeInUp" data-wow-delay="0.4s">
                    <div className="company-back d-md-flex justify-content-between align-items-center">
                      <div className="company-cont">
                        <h5 className="text-black btn btn-secondary m-2">
                          <a href="/Registration" className="text-black">
                            {' '}
                            Registered Here
                          </a>
                        </h5>
                      </div>
                      <div className="certifcate-logo">
                        <img src="images/logotop68b3.png" className="" width="100px" />
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-8 offset-xl-2">
                  <div className="">
                    <div id="fadeSlider" className="sliderWrapper">
                      <div className="slide acadmy_slid">
                        <h2 className="text-center">{academyText[currentIndex]}</h2>
                        <a href={academyLink[currentIndex]}>
                          <img className="acadmy_ip" src={images[currentIndex]} />
                        </a>
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

export default Academy
