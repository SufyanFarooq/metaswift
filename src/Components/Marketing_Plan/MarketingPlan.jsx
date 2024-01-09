import React, {useEffect} from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar'
import WOW from 'wow.js';
import Particles_dot from '../Particle/Particales'

function MarketingPlan() {
  useEffect(() => {
    sessionStorage.clear();
    new WOW().init();
  }, []);

  return (
    <div>
      <section className="banner-bg banner-pad position-relative">
         {/* <div  id="particles-js"  ></div> */}
         <Particles_dot />
         <Navbar />
         <div className="about-page position-relative z-in1">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="about-page-title text-center py-lg-4 pb-2">
                        <h1 className="text-white text-uppercase fw-bold mb-0">Marketing Plan</h1>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="inves-bg about-sec position-relative about-sec-af statistic-sec-after6 ab4">
        <div className="about-img-af position-relative">
          <div className="position-relative z-in3">
          <div className="container-fluid">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="reg-company-af position-relative z-in3 wow fadeInUp"  data-wow-delay="0.4s">
                           <div className="company-back d-md-flex justify-content-between align-items-center">
                              <div className="company-cont">
                                 <h5 className="text-black btn btn-secondary m-2"><a href="/Registration" className="text-black" id='text-black1' style={{textDecoration:'none'}} > Registere Here</a></h5>
                                
                              </div>
                              <div className="certifcate-logo"><img src="images/logotop68b3.png" className="" width="100px" /></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            <div className="container">
              <div className="row">
                <div className="col-md-6" id="myRedDIV">
                  <div className="about-cont wow fadeInleft" data-wow-delay="0.20s padddings">
                    <div className="title">
                      <h2 className="text-primary ab_fonts">
                        <span className=" text-white fw-bold">Our Unique</span>NFT Marketplace
                      </h2>
                    </div>
                    <br />
                    <p className="mt-2">
                      A Robust Multi-chain NFT platform that empowers NFT Creators and Dorado Members to have fun
                      while earning. Dorado NFT Marketplace is not just a marketplace but a community governed by
                      its Utility & Governance Token.
                      <br />
                      <br />
                      Our mission for NFT Marketplace includes bridging the gap between Digitized and Real-world while
                      allowing real-world use cases for NFTs by introducing revolutionary features like the Unique NFT
                      Gold Grade Certificates Minting and Trading. Using Dorado Platform Anyone can Mint, List &
                      Trade NFT’s in a Simple & Cost-Efficient Manner. Thanks to Its Super-Efficient Smart Contract
                      Built on Decentralized Platform. <br />
                      <br />
                      Our platform is Synergizing DeFi and E-commerce to Achieve a fully Autonomous and Royalty-Driven
                      Marketplace.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 text-center" id="myPinkDIV">
                  <div className="wow fadeInRight" data-wow-delay="0.20s">
                    <center>
                      <img src="images/nftcar1.png" className="img_singa1" width="100%" />
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="stat-sec-bg about-sec position-relative about-sec-af bg1">
        <div className="about-img-af position-relative">
          <div className="position-relative z-in3">
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-center" id="myPinkDIV">
                  <div className="wow fadeInRight" data-wow-delay="0.20s">
                    <center>
                      <img src="images/wargame.png" className="img_singa1" width="90%" />
                    </center>
                  </div>
                </div>
                <div className="col-md-6" id="myRedDIV">
                  <div className="about-cont wow fadeInleft toppa" data-wow-delay="0.20s padddddings ">
                    <div className="title">
                      <h2 className="text-primary ab_fonts">
                        <span className=" text-white fw-bold">Dorado – A Metaverse Bridging</span>The Cryptosphere To
                        The Atmosphere
                      </h2>
                    </div>
                    <br />

                    <p className="mt-2">
                      Dorado Token is a Bridge between{' '}
                      <span className="color_contry">
                        {' '}
                        <b>Carbon Credit combination of Web 3.0 (NFT ) and Environment </b>
                      </span>{' '}
                      enhancements to buy Carbon Credits to ensure the transparency and secure of every transaction that
                      is performed by every user resulting in Sophistication of Planet Earth by making more Eco Friendly
                      and Developing the Renewable energy. <br />
                      <br />
                      It is the Token built by a Visionary Team with Real time Use case and a Platform built for all
                      future Web3.0 and Metaverse Application into Gaming Industry with Different{' '}
                      <span className="color-new">WAR Games and Car Racing game</span> for our Metaverse Community to
                      enhance a Global Reach resulting in <span className="color_contry">Saving Planet Earth </span> and a
                      Metaverse with various <span className="color-new">Play2Earn</span> Unique strategy for its Community
                      Members.
                    </p>
                    <br />
                    <div id="down6" style={{ display: 'none' }}>
                      <p>
                        Every Dorado Token is a valuable digital asset as it creates high demands among market and
                        major industries Such as Production - Transportation, Digital Asset industries, Factories and
                        other sources which produce excessive carbon dioxide. Search industries required a very high
                        volume of carbon credits to carbon Credits in their industries to reach their mission Quota.
                      </p>
                      <p>
                        Hence, their or other digital assets that will also enhance Dorado Token value projects that
                        are related to property credits, health credits, water credits and logistic credits will further
                        boost the core value of Dorado Token.
                      </p>
                      <p>
                        Now as new currencies continue to soar in certain markets, carbon, token is another way to trade
                        carbon credit, creating a more convenience and faster Way into any transaction around the globe
                        in real time, while Blockchain prevent any transaction records from being hacked.
                      </p>
                    </div>

                    <a className="btn btn-secondary m-2 mt-3 description-header" id="open6">
                      Read More
                    </a>
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

export default MarketingPlan
