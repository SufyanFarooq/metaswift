import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import WOW from "wow.js";
import { useEffect } from "react";
import Particles_dot from "../Particle/Particales";

function About() {
  const [readMore, setReadMore] = useState(false);
  useEffect(() => {
    sessionStorage.clear();
    new WOW().init();
  }, []);
  return (
    <div>
      <section className="banner-bg banner-pad position-relative">
        {/* <div id="particles-js"></div> */}
        <Particles_dot />
        <Navbar />
        <div className="about-page position-relative z-in1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="about-page-title text-center py-lg-4 pb-2">
                  <h1 className="text-white text-uppercase fw-bold mb-0">
                    About Us
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="stat-sec-bg about-sec position-relative about-sec-af statistic-sec-after5 set-bgimg">
        <div className="about-img-af position-relative">
          <div className="position-relative z-in3">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="reg-company-af position-relative z-in3 wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="company-back d-md-flex justify-content-between align-items-center">
                      <div className="company-cont">
                        <h5 className="text-black btn btn-secondary m-2">
                          <a
                            href="/Registration"
                            className="text-black"
                            id="text-black1"
                            style={{ textDecoration: "none" }}
                          >
                            {" "}
                            Registered Here
                          </a>
                        </h5>
                      </div>
                      <div className="certifcate-logo">
                        <img
                          src="images/logotop68b3.png"
                          className=""
                          width="100px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-6" id="myRedDIV">
                  <div
                    className="about-cont wow fadeInLeft"
                    data-wow-delay="0.4s"
                  >
                    <div className="title">
                      <h1 className="fw-bold mb-0 text-box">
                        What is Carbon Trading?
                      </h1>
                      <h2 className="text-white fw-bold font_ab font_mainh ">
                        <span className="text-primary font_ab">
                          You Traded{" "}
                        </span>{" "}
                        Stocks, Crypto and Forex{" "}
                        <span className="font_ab text-primary">
                          for Income{" "}
                        </span>
                        <span className="color_font"> Now Trade </span> Carbon{" "}
                        <span className="color_font">For</span> “Planet Earth ”
                      </h2>
                    </div>
                    <p className="mt-2">
                      Carbon trading has become extremely popular today among
                      individuals and organizations and carbon exchanges are
                      starting to emerge.
                      <br />
                      <b>
                        Carbon trading is Enhancing All over World including
                        Countries of{" "}
                        <span className="color_contry">
                          European Union and Canada, China, Japan, New Zealand,
                          South Korea, Switzerland and the United States.
                        </span>{" "}
                      </b>
                      <br />
                      Carbon Credits are also known as carbon Footprint
                      are permits that allow the owner to emit a certain amount
                      of carbon dioxide. <br />
                      {readMore ? (
                        <span className="description-text">
                          Here Traders Buy the carbon Credits and Use them to
                          trade with the Big Industries or They Use to Trade
                          them on Carbon Exchanges which are highly Profitable
                          and Shown Incredible Growth in last Few years.
                          <br />
                        </span>
                      ) : null}
                      <button
                        className="btn btn-secondary m-2 my-3 description-header"
                        onClick={() => setReadMore(!readMore)}
                      >
                        {readMore ? "Read Less" : "Read More"}
                      </button>
                      <br />
                    </p>

                    {/* <a className="btn btn-secondary m-2 my-3 description-header" onclick="getDescription(0)">
                      Read More
                    </a> */}
                  </div>
                </div>

                <div className="col-md-6 text-center " id="myPinkDIV">
                  <div
                    className="img_main wow fadeInRight "
                    data-wow-delay="0.4s"
                    id="myGreenDIV"
                  >
                    <img
                      src="images/co2.png"
                      className="about_img"
                      width="90%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className=" stat-sec-bg about-sec position-relative "
        style={{ paddingBottom: "83px" }}
      >
        <div
          className="about-img-af position-relative"
          style={{ paddingTop: "40px" }}
        >
          <div className="position-relative z-in3">
            <div className="container">
              <div className="row">
                <div
                  className="col-md-6 text-center wow fadeInLeft"
                  data-wow-delay="0.4s"
                >
                  <div className="text-center statistic-sec-after4">
                    <img src="images/mission1.png" width="80%" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="about-cont wow fadeInRight"
                    data-wow-delay="0.4s"
                    style={{ paddingTop: "80px" }}
                  >
                    <div className="title">
                      <h2 className="text-primary ab_fonts">
                        <span className=" text-white fw-bold">What is</span>
                        Dorado Community?
                      </h2>
                    </div>
                    <p className="mt-2">
                      Dorado Community is Decentralized Blockchain 4.0 Platform
                      in Web 3.0 NFT Eco-System Through which{" "}
                      <span className="color_contry">
                        Carbon Credits Certificates are Reachable to People
                        Globally.
                      </span>
                      <br />
                      In Dorado Community Platform you can make Micro
                      investments in Gold Carbon Certificates which are
                      converted into NFT’s and you will get the Traded
                      Certificate Bonus. <br />
                      Dorado Community Eco-System in Built on the Latest Tech
                      Stack and Adoption to the Incredible Combination of
                      Blockchain 4.0 AI and Carbon Credits Eco-System.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="inves-bg about-sec position-relative about-sec-af"
        style={{ paddingBottom: "68px" }}
      >
        <div className="about-img-af position-relative feature-af">
          <div className="position-relative z-in3">
            <div className="container">
              <div className="row">
                <div className="col-md-6" id="myRedDIV">
                  <div
                    className="order-1 about-cont wow fadeInLeft"
                    style={{ paddingTop: "80px" }}
                  >
                    <div className="title">
                      <h2 className="text-primary ab_fonts">
                        <span className=" text-white fw-bold">
                          Why it Is Worlds Best
                        </span>
                        NFT Platform ?
                      </h2>
                    </div>
                    <br />
                    <h2 className="text-white fw-bold font_ab font_mainh ">
                      Bridging{" "}
                      <span className="color_contry">
                        {" "}
                        Grade Gold Carbon Credits{" "}
                      </span>
                      and
                      <span className="binance">Binance</span> Powered AI NFT
                      Platform
                    </h2>

                    <br />
                    <p className="mt-2">
                      Dorado Community is world’s first Web 3.0 Gold Grade
                      Carbon Credits NFT Eco-System which not only Is Secured
                      but also Proved enormous source of Income.
                      <br />
                      <span className="color_contry">
                        You Receive Carbon Credits NFT Certificate Trading Bonus
                        or Your NFT which you can Sell on Open Sea
                      </span>{" "}
                      … Either Way You Win .. Nothing to Lose
                      <br />
                      We Use Artificial intelligence (AI) on Blockchain WEB 3.0
                      to track carbon emissions which are Material embodied
                      carbon emissions and will be tracked with the use of
                      artificial intelligence (AI) and IOT.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 text-center" id="myPinkDIV">
                  <div
                    className="order-2 wow fadeInRight"
                    data-wow-delay="0.4s"
                  >
                    <center>
                      <img
                        src="images/me.png"
                        className="img_singa"
                        width="80%"
                      />
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
