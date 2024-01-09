import React, { useEffect, useState } from 'react'
import Navbar from '../Header/Navbar'
import WOW from 'wow.js'
import Footer from '../Footer/Footer'
import Particle from '../Particle/Particle'

function Index_main() {
    const [readMore, setReadMore] = useState(false)
    const [tranding, setTranding] = useState(false)
    const [staking, setStaking] = useState(false)
    const [games, setGames] = useState(false)
    const [work, setwork] = useState(false)
    const [metadora, setMetadora] = useState(false)
    const [atmosphere, setAtmosphere] = useState(false)
    const [dorado, setDorado] = useState(false)

    useEffect(() => {
        new WOW().init()
    }, [])

    return (
        <div className="section_setting">
        <div class='top'></div>
        <section className="banner-bg banner-pad position-relative">
            {/* <div id="particles-js"></div> */}
            <Particle />
            <Navbar />
            <div className="banner position-relative z-in1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7" id="myRedDIV">
                            <div className="banner-cont position-relative z-in1 wow  fadeInLeft" data-wow-delay="0.4s">
                                

                                <h1 className="text-white fw-bold mb-0 Font_Text" style={{ marginBottom: '18px' }}>
                                    World's 1st Gold Grade Carbon Credits NFT on Decentralized WEB 3.0 Space.
                                </h1>
                                <p class="home_p1">
                                    Dorado Community is Decentralized Blockchain 4.0 Platform in Web 3.0 Defi Eco-System Through which
                                    <span className="color_contry"> Carbon Credits Certificates are Reachable to People Globally.</span>
                                    <br />
                                    <br />
                                    <span className="color_contry">
                                        In{' '}
                                        <span class="home_p1" style={{ color: 'white' }}>
                                            Dorado Community
                                        </span>{' '}
                                        Platform you can make Micro investments in Gold Grade Carbon Credits Certificates which are
                                        converted into NFT’s and Every Individual will get the Traded Certificate Bonus.
                                    </span>
                                    <br />
                                    <br />
                                    Dorado Community Eco-System is Built on the Latest Tech Stack and Adoption to the Incredible
                                    Combination of Blockchain 4.0 AI and Carbon Credits Eco-System.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-5 text-center">
                            <div>
                                <img src="assets/img/Gold_drd.gif" className='drd1_gif' width="90%" />
                                {/* <video type='videos/mp4' src='assets/img/Gold.webm' width="80%" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="stat-sec-bg about-sec position-relative about-sec-af">
            <div className="about-img-af position-relative">
                <div className="position-relative z-in3">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 ">
                                <div className="text-center reg-company-af position-relative z-in3 wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="company-back justify-content-between align-items-center">
                                        {/* <div className="company-cont">
                                            <h5 className="text-black btn btn-secondary m-2">
                                                <a
                                                    href="/Registration"
                                                    className="text-black"
                                                    id="text-black1"
                                                    style={{ textDecoration: 'none' }}
                                                >
                                                    {' '}
                                                    Registere Here
                                                </a>
                                            </h5>
                                        </div> */}
                                        <div className="certifcate-logo">
                                            <img src="images/logotop68b3.png" className="" width="100px" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="margin-main_top">
                            <div className="row">
                                <div className="col-lg-6 text-center">
                                    <div className="wow  fadeInLeft" data-wow-delay="0.4s">
                                        <img src="images/about1.png" className="about_img top-padding" width="100%" />
                                    </div>
                                </div>
                                <div className="col-lg-6 wow  fadeInRight" data-wow-delay="0.4s">
                                    <div className="about-cont">
                                        <div className="title">
                                            {/* <!-- <h1 className="fw-bold mb-0 text-box">What is Carbon Trading?</h1> --> */}
                                            <h2 className="text-white fw-bold font_ab font_mainh ">
                                                <span className="text-primary font_ab">Our Vision </span>
                                            </h2>
                                        </div>
                                        <p className="mt-2">
                                            The Vision of <span style={{ color: '#00c194' }}>Dorado Community</span> is to create a
                                            Super-fast, Reliable, Cost-Efficient, Easy-to-use user experience NFT minting & Carbon Trading
                                            platform incorporating all the Latest Tech and Enhancements under One Roof. Your One Stop
                                            Solution for Anything & Everything related to
                                            <span style={{ color: '#00c194' }}> Carbon Credits NFT</span> Trading on Gold Grade Carbon
                                            Certificates.
                                        </p>
                                        <br />

                                        <div className="title">
                                            <h2 className="text-white fw-bold font_ab font_mainh ">
                                                <span className="text-primary font_ab">Our Mission </span>
                                            </h2>
                                        </div>
                                        <p className="mt-2">
                                            Our mission at <span style={{ color: '#00c194' }}> Dorado Community</span> is to provide our
                                            Clients and Stakeholders the highest quality Products, tools, Systems, Resources and everything
                                            they need to maximize their Opportunities in
                                            <span style={{ color: '#00c194' }}> Carbon Credits NFT</span> Trading results.
                                        </p>
                                        <br />

                                        <div className="title">
                                            <h2 className="text-white fw-bold font_ab font_mainh ">
                                                <span className="text-primary font_ab">Our Values </span>
                                            </h2>
                                        </div>
                                        <p className="mt-2">
                                            We at<span style={{ color: '#00c194' }}> Dorado Community</span> we value professional and
                                            Personal Integrity above Everything. We achieve our goals by being True, Honest and Straight
                                            forward with all our stakeholders.
                                            <span style={{ color: '#00c194' }}>
                                                {' '}
                                                We earn trust with every action, every minute of every day.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="inves-bg about-sec position-relative about-sec-af banner-bg statistic-sec-after5 set-bgimg">
            <div className="about-img-af position-relative">
                <div className="position-relative z-in3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6" id="myRedDIV">
                                <div className="about-cont wow  fadeInLeft" data-wow-delay="0.4s">
                                    <div className="title">
                                        <h1 className="fw-bold mb-0 text-box">What is Carbon Trading?</h1>
                                        <h2 className="text-white fw-bold font_ab font_mainh ">
                                            <span className="text-primary font_ab">You Traded </span> Stocks, Crypto and Forex{' '}
                                            <span className="font_ab text-primary">for Income </span>
                                            <span className="color_font"> Now Trade </span> Carbon <span className="color_font">For</span>{' '}
                                            “Planet Earth ”
                                        </h2>
                                    </div>
                                    <p className="mt-2">
                                        Carbon trading has become extremely popular today among individuals and organizations and carbon
                                        exchanges are starting to emerge.
                                        <br />
                                        <b>
                                            Carbon trading is Enhancing All over World including Countries of{' '}
                                            <span className="color_contry">
                                                European Union and Canada, China, Japan, New Zealand, South Korea, Switzerland and the United
                                                States.
                                            </span>{' '}
                                        </b>
                                        <br />
                                        Carbon Credits are also known as carbon Footprint are permits that allow the owner to emit a
                                        certain amount of carbon dioxide. <br />
                                        {readMore ? (
                                            <span className="description-text">
                                                Here Traders Buy the carbon Credits and Use them to trade with the Big Industries or They Use
                                                to Trade them on Carbon Exchanges which are highly Profitable and Shown Incredible Growth in
                                                last Few years.
                                                <br />
                                            </span>
                                        ) : null}
                                        <button
                                            className="btn btn-secondary m-2 my-3 description-header"
                                            onClick={() => setReadMore(!readMore)}
                                        >
                                            {readMore ? 'Read Less' : 'Read More'}
                                        </button>
                                    </p>

                                    {/* <a className="btn btn-secondary m-2 my-3 description-header" onclick="getDescription(0)">
                  Read More
                </a> */}
                                </div>
                            </div>

                            <div className="col-md-6 text-center " id="myPinkDIV">
                                <div className="set_bgimg_after5">
                                    <img src="images/foot.png" className="foot5_img" />
                                </div>
                                <div className="img_main foot_ip wow  fadeInRight " data-wow-delay="0.4s" id="myGreenDIV">
                                    <div className='co2_img'>
                                        <img src="images/co2.png" className="about_img" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className=" stat-sec-bg about-sec position-relative paddding pd_Top3">
            <div className="about-img-af position-relative" style={{ paddingTop: '40px' }}>
                <div className="position-relative z-in3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center wow  fadeInLeft" data-wow-delay="0.4s">
                                <div className="text-center statistic-sec-after4 topbg">
                                    <img src="images/mission1.png" width="80%" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about-cont wow  fadeInRight new_padding" data-wow-delay="0.4s">
                                    <div className="title">
                                        <h2 className="text-primary ab_fonts">
                                            <span className=" text-white fw-bold">What is </span>Dorado Community?
                                        </h2>
                                    </div>
                                    <p className="mt-2">
                                        <span>
                                            {' '}
                                            <span style={{ color: '#00c194' }}>Dorado Community</span> is First time ever Launching Globally
                                            Reliable Earning Platform with Real Gold Grade Carbon Certificates in Metaverse as NFT.
                                        </span>
                                        <br />
                                        <br />
                                        <span>
                                            In <span style={{ color: '#00c194' }}>Dorado Community</span> the Gold Grade Carbon Certificates
                                            as NFTs 100% Decentralized Verified Smart Contract for Carbon Credit NFT Ever Minted on Binance
                                            Chain.{' '}
                                        </span>
                                        <br />
                                        <br />
                                        <span className="">
                                            In <span style={{ color: '#00c194' }}>Dorado Community</span>
                                        </span>
                                        <span style={{}}> You Choose the Package after which</span>{' '}
                                        <span className="color-new">within 24 Hours</span> a Certificate will be
                                        <span className="color-new"> Created </span> then <span className="color-new">Minted </span>
                                        <span>and </span>
                                        <span className="color-new">converted into an NFT</span>
                                        <span>
                                            {' '}
                                            which is <span className="color-new">Traded</span> for you and you will Start Receiving
                                            Trading Bonus.
                                        </span>
                                        <br /> <br />
                                        {dorado ? (
                                            <p>
                                                <span style={{ color: '#00c194' }}>Dorado Community</span>
                                                <span> has its</span>
                                                <span> Own Token</span>
                                                <span> known as</span>
                                                <span style={{ color: '#00c194' }}> Dorado Token</span>
                                                <span> which is Listed on Pancake Swap from DAY 1. It’s very Limited supply and </span>
                                                <span className="color-new">Unlocks strategically for 10 Years</span>
                                                <span> makes it Stand Apart from any Other Metaverse Web3.0 NFT Tokens.</span>
                                            </p>
                                        ) : null}
                                        <button
                                            className="btn btn-secondary m-2 mt-3 description-header"
                                            onClick={() => setDorado(!dorado)}
                                        >
                                            {dorado ? 'Read Less' : 'Read More'}
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="inves-bg about-sec position-relative about-sec-af pading" id='dorado_aft'>
            <div className="about-img-af position-relative feature-af">
                <div className="position-relative z-in3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6" id="myRedDIV">
                                <div className="order-1 padddings about-cont wow  fadeInLeft" data-wow-delay="0.4s">
                                    <div className="title">
                                        <h2 className="text-primary ab_fonts">
                                            <span className=" text-white fw-bold">Why it Is Worlds Best </span>NFT Platform ?
                                        </h2>
                                    </div>
                                    <br />
                                    <h2 className="text-white fw-bold font_ab font_mainh ">
                                        Bridging <span className="color_contry"> Gold Grade Carbon Credits </span>
                                        and
                                        <span className="binance"> Binance</span> Powered AI NFT Platform
                                    </h2>

                                    <br />
                                    <p className="mt-2">
                                        Dorado Community is world’s first Web 3.0 Gold Grade Carbon Credits NFT Eco-System which not only
                                        Is Secured but also Proved enormous source of Income.
                                        <br />
                                        <span className="color_contry">
                                            You Receive Carbon Credits NFT Certificate Trading Bonus or Your NFT which you can Sell on Open
                                            Sea
                                        </span>{' '}
                                        … Either Way You Win .. Nothing to Lose
                                        <br />
                                        We Use Artificial intelligence (AI) on Blockchain WEB 3.0 to track carbon emissions which are
                                        Material embodied carbon emissions and will be tracked with the use of artificial intelligence
                                        (AI) and IOT.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6 text-center" id="myPinkDIV">
                                <div className="order-2 wow  fadeInRight" data-wow-delay="0.4s">
                                    <center>
                                        <img src="images/me.png" className="img_singa" width="80%" />
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="stat-sec-bg about-sec position-relative about-sec-af paasding">
            <div className="about-img-af position-relative">
                <div className="position-relative z-in3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title text-center wow fadeInUp" data-wow-delay="0.4s">
                                    <h1 className="fw-bold mb-0 text-box ab_fonts">Our Dorado Community Ecosystem Core Competencies</h1>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="wow  fadeInLeft" data-wow-delay="0.4s">
                                    <div className="withdraw-block position-relative">
                                        <div className="title">
                                            <h2 className="text-white fw-bold font_ab font_mainh color_contry ">
                                                NFT Trading
                                            </h2>
                                        </div>
                                        <p className="mt-2">
                                            NFT trading is massive news right now. So we are here to Trade your Carbon Credits NFTs for you
                                            and will build strategies for your trades.
                                        </p>
                                        {/* <br /> */}
                                        {tranding ? (
                                            // <div id="flippanel">
                                            <p>
                                                It is the process of buying and selling the Credits on Carbon Exchanges that allow the permit
                                                to Emit carbon Dioxide for the Authorized Carbon Credits Holders.
                                                <div className="stat-bg stat-bg1">
                                                    <img src="images/nft.png" className="img-fluid1" />
                                                </div>
                                            </p>
                                        ) : // </div>
                                            null}
                                        <button
                                            className="btn btn-secondary m-2 mt-3 description-header"
                                            onClick={() => setTranding(!tranding)}
                                        >
                                            {tranding ? 'Read Less' : 'Read More'}
                                        </button>

                                        {/* <a className="btn btn-secondary m-2 mt-3 description-header" id="flippy">
                    Read More
                  </a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="wow  fadeInRight" data-wow-delay="0.4s">
                                    <div className="withdraw-block position-relative">
                                        <div className="title">
                                            <h2 className="text-white fw-bold font_ab font_mainh color_contry">DeFi Staking</h2>
                                        </div>
                                        <p className="mt-2">
                                            DeFi staking is currently one of the best and easiest ways of earning profits from crypto assets.
                                            You are already planning to hodl or are sitting idle.
                                        </p>
                                        {/* <div id="down" style={{ display: 'none' }}> */}
                                        {staking ? (
                                            <p>
                                                The system enables people to deposit any amount of tokens to a staking pool and start earning
                                                passive income based on how much of the pool’s total holdings their deposit accounts.
                                                {/* </p> */}
                                                <div className="stat-bg stat-bg1">
                                                    <img src="images/defi.png" className="img-fluid1" />
                                                </div>
                                            </p>
                                        ) : null}
                                        <button
                                            className="btn btn-secondary m-2 mt-3 description-header"
                                            onClick={() => setStaking(!staking)}
                                        >
                                            {staking ? 'Read Less' : 'Read More'}
                                        </button>
                                        {/* // </div> */}

                                        {/* <a className="btn btn-secondary m-2 mt-3 description-header" id="open">
                    Read More
                  </a> */}
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="wow  fadeInLeft" data-wow-delay="0.4s">
                                    <div className="withdraw-block position-relative">
                                        <div className="title">
                                            <h2 className="text-white fw-bold font_ab font_mainh color_contry">Play-to-Earn Games</h2>
                                        </div>
                                        <p className="mt-2">
                                            Play-to-earn Games offer the chance to generate income to the users through playing with their
                                            Avatars, Weapons and many more.
                                        </p>
                                        {/* <div id="down1" style={{ display: 'none' }}> */}
                                        {games ? (
                                            <p>
                                                {' '}
                                                The longer they play, the more tokens will be rewarded to the players. The tokens earned hold
                                                utility inside the game, or they can be sold on exchanges.
                                                <div className="stat-bg stat-bg1">
                                                    <img src="images/game.png" className="img-fluid1" />
                                                </div>
                                            </p>
                                        ) : null}
                                        <button
                                            className="btn btn-secondary m-2 mt-3 description-header"
                                            onClick={() => setGames(!games)}
                                        >
                                            {games ? 'Read Less' : 'Read More'}
                                        </button>
                                        {/* </div> */}
                                        {/* <a className="btn btn-secondary m-2 mt-3 description-header" id="open1">
                    Read More
                  </a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="wow  fadeInRight" data-wow-delay="0.4s">
                                    <div className="withdraw-block position-relative">
                                        <div className="title">
                                            <h2 className="text-white fw-bold font_ab font_mainh color_contry">
                                                You Rest But System Works
                                            </h2>
                                        </div>
                                        <p className="mt-2">
                                            Dorado Community is a Huge Community of Gold Carbon Trading System that allows you to make money
                                            while you Rest.
                                        </p>
                                        {work ? (
                                            // <div id="down2" style={{ display: 'none' }}>
                                            <p>
                                                {' '}
                                                Remove your focus from the Market Hiccups, It’s here to Work for you Passively.
                                                <div className="stat-bg stat-bg1">
                                                    <img src="images/rest.png" className="img-fluid1" />
                                                </div>
                                            </p>
                                        ) : null}
                                        <button className="btn btn-secondary m-2 mt-3 description-header" onClick={() => setwork(!work)}>
                                            {work ? 'Read Less' : 'Read More'}
                                        </button>
                                        {/* </div> */}

                                        {/* <a className="btn btn-secondary m-2 mt-3 description-header" id="open2">
                    Read More
                  </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-7">
                                <div className="wow  fadeInLeft" data-wow-delay="0.4s">
                                    <div className="withdraw-block position-relative">
                                        <div className="title">
                                            <h2 className="text-white fw-bold font_ab font_mainh color_contry">
                                                Wings to Dorado Community Opportunities
                                            </h2>
                                        </div>
                                        <p className="mt-2">
                                            Dorado Community is the Magnum Opportunity in the Blockchain 4.0 a place to give Wings to your
                                            Own empowerment.
                                        </p>
                                        {/* <div id="down3" style={{ display: 'none' }}> */}
                                        {metadora ? (
                                            <p>
                                                {' '}
                                                The combination of Web3.0 AI and Blockchain 4.0 gives you the most User Friendly access to the
                                                “Never to Ever experience “in the Decentralized Space.
                                                <div className="stat-bg stat-bg1">
                                                    <img src="images/wing.png" className="img-fluid1" />
                                                </div>
                                            </p>
                                        ) : null}
                                        <button
                                            className="btn btn-secondary m-2 mt-3 description-header"
                                            onClick={() => setMetadora(!metadora)}
                                        >
                                            {metadora ? 'Read Less' : 'Read More'}
                                        </button>
                                        {/* </div> */}
                                        {/* <a className="btn btn-secondary m-2 mt-3 description-header" id="open3">
                    Read More
                  </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid" style={{ display: 'none' }}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div
                                    className="reg-company-af position-relative z-in3 wow fadeInUp"
                                    data-wow-delay="0.4s"
                                    style={{ marginTop: '0px' }}
                                >
                                    <div className="company-back1 align-items-center">
                                        <div className="">
                                            <div className="title">
                                                <h2 className="text-white fw-bold font_ab font_mainh color_contry">
                                                    Wings to Dorado Community Opportunities
                                                </h2>
                                            </div>
                                            <p className="mt-2">
                                                Dorado Community is the Magnum Opportunity in the Blockchain 4.0 a place to give Wings to your
                                                Own empowerment. The combination of Web3.0 AI and Blockchain 4.0 gives you the most User
                                                Friendly access to the “Never to Ever experience “in the Decentralized Space.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="inves-bg about-sec position-relative about-sec-af statistic-sec-after6 ab4 sm_pt0">
            <div className="about-img-af position-relative">
                <div className="position-relative z-in3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6" id="myRedDIV">
                                <div className="about-cont wow  fadeInLeft" data-wow-delay="0.4s">
                                    <div className="title">
                                        <h2 className="text-primary ab_fonts">
                                            <span className=" text-white fw-bold">Our Unique</span> NFT Marketplace
                                        </h2>
                                    </div>
                                    <br />
                                    {/* <!-- <h2 className="text-white fw-bold font_ab font_mainh ">Bridging <span className="color_contry"> Grade Gold Carbon Credits </span>
                             and
                             <span className="binance">Binance</span> Powered AI NFT Platform
                          </h2>
                          
                       <br> --> */}
                                    <p className="mt-2">
                                        A Robust Multi-chain NFT platform that empowers NFT Creators and Dorado Community Members to have
                                        fun while earning. Dorado Community NFT Marketplace is not just a marketplace but a community
                                        governed by its Utility & Governance Token.
                                        <br />
                                        <br />
                                        Our mission for NFT Marketplace includes bridging the gap between Digitized and Real-world while
                                        allowing real-world use cases for NFTs by introducing revolutionary features like the Unique NFT
                                        Gold Grade Certificates Minting and Trading. Using Dorado Community Platform Anyone can Mint, List
                                        & Trade NFT’s in a Simple & Cost-Efficient Manner. Thanks to Its Super-Efficient Smart Contract
                                        Built on Decentralized Platform. <br />
                                        <br />
                                        Our platform is Synergizing DeFi and E-commerce to Achieve a fully Autonomous and Royalty-Driven
                                        Marketplace.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6 text-center" id="myPinkDIV">
                                <div className="statistic-sec-setbg6">
                                    <img src="/images/win1.png" />
                                </div>
                                <div className="wow  fadeInRight" data-wow-delay="0.4s">
                                    <center className='nftcar_img'>
                                        <img src="images/nftcar1.png" className="img_singa1" />
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="stat-sec-bg about-sec position-relative about-sec-af bg1 pd_Top23">
            <div className="about-img-af position-relative">
                <div className="position-relative z-in3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center pd_0_" id="myPinkDIV">
                                <div className="wow  fadeInRight" data-wow-delay="0.4s">
                                    <center className='shield_img'>
                                        <img src="images/shield-without-logo.png" className="img_singa1 img_single2" width="100%" />
                                    </center>
                                </div>
                            </div>
                            <div className="col-md-6 pd_0_" id="myRedDIV">
                                <div className="about-cont wow  fadeInLeft toppa" data-wow-delay="0.4s">
                                    <div className="title">
                                        <h2 className="text-primary ab_fonts">
                                            <span className=" text-white fw-bold">Dorado Token – A Metaverse Bridging</span> The
                                            Cryptosphere To The Atmosphere
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

                                        {/* It is the Token built by a Visionary Team with Real time Use case and a Platform built for all
                  future Web3.0 and Metaverse Application into Gaming Industry with Different{' '}
                  <span className="color-new">WAR Games and Car Racing game</span> for our Metaverse Community to
                  enhance a Global Reach resulting in <span className="color_contry">Saving Planet Earth </span> and
                  a Metaverse with various <span className="color-new">Play2Earn</span> Unique strategy for its
                  Community Members. */}
                                    </p>
                                    <br />
                                    <p>
                                        Every Dorado Token is a valuable digital asset as it creates high demands among
                                        market and major industries Such as Production - Transportation, Digital Asset industries,
                                        Factories and other sources which produce excessive carbon dioxide. Search industries required
                                        a very high volume of carbon credits to their industries to reach their
                                        mission Quota.
                                    </p>
                                    <br />
                                    {atmosphere ? (
                                        <div id="down6">

                                            <p>
                                                Hence, their or other digital assets that will also enhance Dorado Token value
                                                projects that are related to property credits, health credits, water credits and logistic
                                                credits will further boost the core value of Dorado Token.
                                            </p>
                                            <p>
                                                Now as new currencies continue to soar in certain markets. Carbon token is another way to
                                                trade carbon credit, creating a more convenience and faster Way into any transaction around
                                                the globe in real time, while Blockchain prevent any transaction records from being hacked.
                                            </p>
                                        </div>
                                    ) : null}
                                    <button
                                        className="btn btn-secondary m-2 mt-3 description-header"
                                        onClick={() => setAtmosphere(!atmosphere)}
                                    >
                                        {atmosphere ? 'Read Less' : 'Read More'}
                                    </button>
                                    {/* <a className="btn btn-secondary m-2 mt-3 description-header" id="open6">
                  Read More
                </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="inves-bg ng5 sm_pt0">
            <div className="statistics position-relative statistic-sec-after">
                <div className="position-relative z-in1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title text-center wow fadeInUp" data-wow-delay="0.4s">
                                    <h1 className="fw-bold mb-0 text-box ab_fonts">Our NFT Packages</h1>
                                    {/* <!-- <h2 className="text-white fw-bold font_ab font_mainh">Packages <span className="text-primary font_ab font_mainh">Name</span></h2> --> */}
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="statis-margin">
                                    <ul className="list-unstyled stat-top text-center">
                                        <li className="wow  fadeInLeft" data-wow-delay="0.4s">
                                            <h5 className="text-primary fw-bold bold_blue">Blue Carbon Credit NFT </h5>
                                            {/* <br /> */}
                                            {/* <h3 className="text-white fw-bold rd_font">0.40 % Daily</h3> */}
                                          
                                            <img src="assets/img/blue_drd.gif" className='drd1_gif1' />
                                        </li>
                                        <li className="wow fadeInUp" data-aos="fade-up" data-wow-delay="0.4s">
                                            <h5 className="text-primary fw-bold bold_blue">Brown Carbon Credit NFT </h5>
                                            {/* <br /> */}
                                            {/* <h3 className="text-white fw-bold rd_font">0.50 % Daily</h3> */}
                                           
                                            <img src="assets/img/brown_drd.gif" className='drd1_gif1' />
                                        </li>
                                        <li className="wow fadeInUp" data-aos="fade-up" data-wow-delay="0.4s">
                                            <h5 className="text-primary fw-bold bold_blue">Green Carbon Credit NFT </h5>
                                            {/* <br /> */}
                                            {/* <h3 className="text-white fw-bold rd_font">0.60 % Daily</h3> */}
                                            
                                            <img src="assets/img/Green_drd.gif" className='drd1_gif1 drd_pp' />
                                        </li>
                                       
                                        
                                    </ul>
                                    <ul className="list-unstyled stat-top stat-below text-center">
                                   
                                        <li className="wow  fadeInLeft" data-wow-delay="0.4s">
                                            
                                        
                                            <h5 className="text-primary fw-bold bold_blue"> Red Carbon Credit NFT </h5>
                                            <img src="assets/img/Red_drd.gif" className='drd1_gif1' />
                                            {/* <h3 className="text-white fw-bold rd_font">0.70% Daily</h3> */}
                                        </li>
                                        <li className="wow  fadeInLeft" data-wow-delay="0.4s">
                                            <h5 className="text-primary fw-bold bold_blue"> Gold Carbon Credit NFT </h5>
                                        <img src="assets/img/Gold_drd.gif" className='drd1_gif1' />
                                           
                                            {/* <h3 className="text-white fw-bold rd_font">0.80% Daily</h3> */}
                                        </li>

                                        <li className="wow  fadeInRight" data-wow-delay="0.4s">
                                           
                                            <h5 className="text-primary fw-bold bold_blue">Platinum Carbon Credit NFT</h5>
                                            <img src="assets/img/Titenium_drd.gif" className='drd1_gif1 drd_pp'  />
                                            {/* <br /> */}
                                            {/* <h3 className="text-white fw-bold rd_font">1.0 % Daily</h3> */}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="inverse_md_none inves-bg inverse_md_none ng5 sm_pt0">
            <div className="statistics position-relative statistic-sec-after">
                <div className="position-relative z-in1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title text-center wow fadeInUp" data-wow-delay="0.4s">
                                    <h1 className="fw-bold mb-0 text-box ab_fonts"> DISCOVER THE THRILL OF RACING <br class="hidden md:block" /> IN THE <span class="text-primary ab_fonts">METAVERSE</span></h1>
                                    {/* <!-- <h2 className="text-white fw-bold font_ab font_mainh">Packages <span className="text-primary font_ab font_mainh">Name</span></h2> --> */}
                                    <p>
                                        <b className="color_contry">
                                            COLLECT & TRADE
                                            <span style={{ color: "white" }}> stunning CARS and accelerate your way to the{' '}  <br class="hidden lg:block" />
                                                finish line to</span> WIN BIG REWARDS<span style={{ color: "white" }}> daily </span>
                                        </b>

                                    </p>
                                    <br />
                                    <br />
                                </div>
                            </div>
                            <div className='col-lg-12 collect_ip_pr'>
                                <div className="col-md-2 colle_1 ">
                                    <div className="wow  fadeInLeft" data-wow-delay="0.4s">
                                        <div className="withdraw-block1 colle_2 position-relative">
                                            <div className="title">
                                                <h2 className="text-white fw-bold font_ab font_mainh color_contry ">
                                                    <img class="w-full pb-5" src="images/1.png" alt="image" />
                                                </h2>
                                            </div>
                                            <h3 className="text-white fw-bold font_ab font_mainh color_contry ">
                                                COLLECT
                                            </h3>
                                            <p className="mt-2 color_contry1">
                                                Own your digital dream car
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 colle_1">
                                    <div className="wow  fadeInLeft" data-wow-delay="0.4s">
                                        <div className="withdraw-block1 colle_3 position-relative">
                                            <div className="title">
                                                <h2 className="text-white fw-bold font_ab font_mainh color_contry ">
                                                    <img class="w-full pb-5" src="images/2.png" alt="image" />
                                                </h2>
                                            </div>
                                            <h3 className="text-white fw-bold font_ab font_mainh color_contry ">
                                                RACE
                                            </h3>
                                            <p className="mt-2 color_contry1">
                                                complete for the top places in action-packed races
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 colle_1">
                                    <div className="wow  fadeInLeft" data-wow-delay="0.4s">
                                        <div className="withdraw-block1 colle_4 position-relative">
                                            <div className="title">
                                                <h2 className="text-white fw-bold font_ab font_mainh color_contry ">
                                                    <img class="w-full pb-5" src="images/3.png" alt="image" />
                                                </h2>
                                            </div>
                                            <h3 className="text-white fw-bold font_ab font_mainh color_contry ">
                                                EARN
                                            </h3>
                                            <p className="mt-2 color_contry1">
                                                Race your way to victory &amp; winning rewards!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 colle_1">
                                    <div className="wow  fadeInLeft" data-wow-delay="0.4s">
                                        <div className="withdraw-block1 colle_5 position-relative">
                                            <div className="title">
                                                <h2 className="text-white fw-bold font_ab font_mainh color_contry ">
                                                    <img class="w-full pb-5" src="images/4.png" alt="image" />
                                                </h2>
                                            </div>
                                            <h3 className="text-white fw-bold font_ab font_mainh color_contry ">
                                                UPGRADE
                                            </h3>
                                            <p className="mt-2 color_contry1">
                                                Level up your car to boost its performance &amp; visuals!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 colle_1">
                                    <div className="wow  fadeInLeft" data-wow-delay="0.4s">
                                        <div className="withdraw-block1 colle_6 position-relative">
                                            <div className="title">
                                                <h2 className="text-white fw-bold font_ab font_mainh color_contry ">
                                                    <img class="w-full pb-5" src="images/5.png" alt="image" />
                                                </h2>
                                            </div>
                                            <h3 className="text-white fw-bold font_ab font_mainh color_contry ">
                                                TRADE
                                            </h3>
                                            <p className="mt-2 color_contry1">
                                                Exlpore exciting options to trade your car nfts!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="stat-sec-bg inves-sec position-relative z-in1 sm_pb00 pd_Top23">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title text-center wow fadeInUp" data-aos="fade-up" data-wow-delay="0.4s">
                            <h1 className="fw-bold mb-0 text-box ab_fonts">Token Economics</h1>

                            <p>
                                <b className="color_contry">
                                    A Multi chain Token Ecosystem Built Exclusively for Metaverse DeFi Gaming NFT Web 3.0 on " <span className="color-new">Binance </span>
                                    and <span style={{ color: 'rgba(123, 63, 228) ' }}>Polygon</span> Blockchain ".
                                </b>
                                <br />
                                <br />
                                We have the Most Thrilling, Competitive, and Addictive NFT Car Racing Games and War Games. Show off
                                your skills behind the wheels and Steering’s to dominate your opponents to win big rewards in the
                                AmiDorado Metaverse.
                                <br />
                                <br />
                                <b className="color-new">
                                    A Unique Play to Earn, Rent to Earn and Collect to Earn scholarship Strategy Multi Games Platform
                                </b>
                            </p>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="">
                        <p>
                            Total Supply - <span className="color_contry"> 11,11,11,111</span> Tokens
                            <br />
                            Total tokens <span className="color_contry">Unlocks strategically for 10 Years</span>
                            <br />
                            50% Tokens Locked for <span className="color-new">Metaverse, Gaming Rewards</span>
                            <br />
                            Strategic Burn <span className="color_contry"> as Per White Paper </span>
                        </p>
                    </div>

                    {/* <!--  <div className="row">
              <div className="col-md-6">
                 <br>

                    <div className="Heading_iu">
                       <h3 style="color:#00c194;font-size: 22px;">Allocation</h3>
                       <h3 style="color:#00c194;font-size: 22px;">Token Allocation %</h3>
                    </div>
                    <div className="Heading_iu">
                       <p>Founders</p>
                       <p>3.0%</p>
                    </div>

                    <div className="Heading_iu">
                       <p>Advisors and Dev Team</p>
                       <p>3.0%</p>
                    </div>

                    <div className="Heading_iu">
                       <p>Token Website Sale</p>
                       <p>0.5%</p>
                    </div>

                    <div className="Heading_iu">
                       <p>Privatesale</p>
                       <p>0.5%</p>
                    </div>

                    <div className="Heading_iu">
                       <p>IDO Sale</p>
                       <p>1.0%</p>
                    </div>

                    <div className="Heading_iu">
                       <p>Marketing and Acquisitions</p>
                       <p>7.0%</p>
                    </div>

                    <div className="Heading_iu">
                       <p>Metaverse and Gaming Development</p>
                       <p>10.0%</p>
                    </div>

                    <div className="Heading_iu">
                       <p>Metaverse and Eco System Maintainance</p>
                       <p>10.0%</p>
                    </div>

                    <div className="Heading_iu">
                       <p>Gaming anRewards</p>
                       <p>55.0%</p>
                    </div>

             </div>

           </div> --> */}
                </div>
            </div>
        </section>

        <section className="stat-sec-bg inves-sec position-relative z-in1" style={{ paddingBottom: '19px' }}>
            <div className="container">
                <div className="position-relative inves-pad">
                    <div className="row" style={{ display: 'none' }}>
                        <div className="col-md-4">
                            <div className="inves-below1">
                                <h5 className="text-primary heading_nf">Founder</h5>
                                <div className="inves-amount fw-bold"> </div>
                                <div className="inves-amount fw-bold">
                                    <span className="text-secondary ">3.0%</span>
                                </div>
                            </div>

                            <div className="inves-below3">
                                <h5 className="text-primary heading_nf">Token Website Sale</h5>
                                <div className="inves-amount fw-bold"> </div>
                                <div className="inves-amount fw-bold">
                                    <span className="text-secondary ">0.5%</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="inves-img text-center position-absolute wow fadeInUp" data-wow-delay="0.4s">
                                <div className="position-relative inves-glow-af">
                                    <img src="images/token1.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="inves-below2">
                                <h5 className="text-primary heading_nf"> Advisors and Dev Team</h5>
                                <div className="inves-amount fw-bold"> </div>
                                <div className="inves-amount fw-bold">
                                    <span className="text-secondary"> 3.0%</span>
                                </div>
                            </div>

                            <div className="inves-below4">
                                <h5 className="text-primary heading_nf">Privatesale</h5>
                                <div className="inves-amount fw-bold"> </div>
                                <div className="inves-amount fw-bold">
                                    <span className="text-secondary"> 0.5%</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="inves-list position-relative">
                                <ul className="list-unstyled">
                                    <li className="animation  fadeInLeft" data-wow-delay="0.5s">
                                        <div className="inves-top">
                                            <h5 className="mb-0"></h5>
                                            <h2 className="text-primary fw-bold mb-0"> </h2>
                                            <span className="text-secondary fw-bold"> </span>
                                        </div>
                                        <div className="inves-below">
                                            <h5 className="text-primary heading_nf">Total Supply</h5>
                                            <div className="inves-amount fw-bold"> </div>
                                            <div className="inves-amount fw-bold">
                                                <span className="text-secondary ">11,11,11,111 Tokens</span>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="animation  fadeInRight" data-wow-delay="0.5s">
                                        <div className="inves-top">
                                            <h5 className="mb-0"></h5>
                                            <h2 className="text-primary fw-bold mb-0"> </h2>
                                            <span className="text-secondary fw-bold"> </span>
                                        </div>
                                        <div className="inves-below">
                                            <h5 className="text-primary heading_nf"> Seed Sale</h5>
                                            <div className="inves-amount fw-bold"> </div>
                                            <div className="inves-amount fw-bold">
                                                <span className="text-secondary"> $ 0.1</span>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="animation  fadeInLeft" data-wow-delay="0.5s">
                                        <div className="inves-top">
                                            <h5 className="mb-0"></h5>
                                            <h2 className="text-primary fw-bold mb-0"> </h2>
                                            <span className="text-secondary fw-bold"></span>
                                        </div>
                                        <div className="inves-below">
                                            <h5 className="text-primary heading_nf">Public Sale</h5>
                                            <div className="inves-amount fw-bold"> </div>
                                            <div className="inves-amount fw-bold">
                                                <span className="text-secondary">0.12</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="animation  fadeInRight" data-wow-delay="0.5s">
                                        <div className="inves-top">
                                            <h5 className="mb-0"></h5>
                                            <h2 className="text-primary fw-bold mb-0"></h2>
                                            <span className="text-secondary fw-bold"></span>
                                        </div>
                                        <div className="inves-below">
                                            <h5 className="text-primary heading_nf">Private sale</h5>
                                            <div className="inves-amount fw-bold"></div>
                                            <div className="inves-amount fw-bold">
                                                <span className="text-secondary">$ 0.05</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="animation  fadeInLeft" data-wow-delay="0.5s">
                                        <div className="inves-top">
                                            <h5 className="mb-0"></h5>
                                            <h2 className="text-primary fw-bold mb-0"></h2>
                                            <span className="text-secondary fw-bold"></span>
                                        </div>
                                        <div className="inves-below">
                                            <h5 className="text-primary heading_nf">IDO 1</h5>
                                            <div className="inves-amount fw-bold"> </div>
                                            <div className="inves-amount fw-bold">
                                                <span className="text-secondary">$ 0.18</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="animation  fadeInRight" data-wow-delay="0.5s">
                                        <div className="inves-top">
                                            <h5 className="mb-0"></h5>
                                            <h2 className="text-primary fw-bold mb-0"> </h2>
                                            <span className="text-secondary fw-bold"> </span>
                                        </div>
                                        <div className="inves-below">
                                            <h5 className="text-primary heading_nf">IEO</h5>
                                            <div className="inves-amount fw-bold"> </div>
                                            <div className="inves-amount fw-bold">
                                                <span className="text-secondary">$ 0.2</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="fw-bold mb-0 text-box ab_fonts">Token Distribution and Allocation</h1>
                        </div>
                        <div className="col-md-12">
                            <img src="images/Token-Allocation.png" className='token_witdh_set' />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- <div className="col-12 dd">
        <div className="index-t wow fadeInUp" data-wow-delay="0.20s">
           
           <div className="inves">
              
              <div className="inves-amounts heading_nf">Listing </div>
              <div className="inves-amountr"><span>$ 0.25 - $0.30</span></div>
           </div>
        </div>
     </div> -->
     <!-- <div className="cal">
        <a href="javascript:openCalculator('4')">Calculate</a>
        </div> --> */}
        </section>

        <section class="inves-bg1">
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
                                                <img src="images/research1.png" class="img-fluid" />
                                            </div>
                                            <div class="">
                                                <i class="fa fa-angle-double-down imagess" aria-hidden="true"></i>
                                                {/* <!-- <img src="images/arrow.png"> --> */}
                                            </div>
                                        </center>
                                        <div class="faeture-cont ">
                                            <h3 class="text-secondary fw-bold">
                                                <span class="text-primary ft"></span> Research and Analysis
                                            </h3>
                                            <p class="text-center"> Q2 2022</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3">
                                    <div class="feature-block animation fadeInUp" data-wow-delay="0.5s">
                                        <center>
                                            <div class="feature-ico5 text-center stat-bg stat-bg1">
                                                <img src="images/nft2.png" class="img-fluid" />
                                            </div>
                                            <div class="">
                                                <i class="fa fa-angle-double-down imagess" aria-hidden="true"></i>
                                            </div>
                                        </center>
                                        <div class="faeture-cont">
                                            <h3 class="text-secondary fw-bold">
                                                <span class="text-primary ft"></span> Ideation and NFT Design{' '}
                                            </h3>
                                            <p class="text-center">Q3 2022</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3">
                                    <div class="feature-block animation fadeInUp" data-wow-delay="0.5s">
                                        <center>
                                            <div class="feature-ico5 text-center stat-bg stat-bg1">
                                                <img src="images/project2.png" class="img-fluid" />
                                            </div>
                                            <div class="">
                                                <i class="fa fa-angle-double-down imagess" aria-hidden="true"></i>
                                            </div>
                                        </center>
                                        <div class="faeture-cont">
                                            <h3 class="text-secondary fw-bold">
                                                <span class="text-primary ft"></span> Project Development
                                            </h3>
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
                                            <h3 class="text-secondary fw-bold">
                                                <span class="text-primary ft"></span> Whitepaper and Token Launch
                                            </h3>
                                            <p class="text-center">Q1 2023</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3">
                                    <div class="feature-block animation fadeInLeft" data-wow-delay="0.5s">
                                        <center>
                                            <div class="feature-ico5 text-center stat-bg stat-bg1">
                                                <img src="images/rocket.png" class="img-fluid" />
                                            </div>
                                            <div class="">
                                                <i class="fa fa-angle-double-down imagess" aria-hidden="true"></i>
                                            </div>
                                        </center>
                                        <div class="faeture-cont">
                                            <h3 class="text-secondary fw-bold">
                                                <span class="text-primary ft"></span> Project Global Launch
                                            </h3>
                                            <p class="text-center">Q1 2023</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3">
                                    <div class="feature-block animation fadeInUp" data-wow-delay="0.5s">
                                        <center>
                                            <div class="feature-ico5 text-center stat-bg stat-bg1">
                                                {/* <!-- <i class="fa fa-television img-fluid" aria-hidden="true"></i> --> */}
                                                <img src="images/ncc1.png" class="img-fluid" />
                                            </div>
                                            <div class="">
                                                <i class="fa fa-angle-double-down imagess" aria-hidden="true"></i>
                                            </div>
                                        </center>
                                        <div class="faeture-cont">
                                            <h3 class="text-secondary fw-bold">
                                                <span class="text-primary ft"></span> Dorado Community NFT Launch
                                            </h3>

                                            <p class="text-center">Q1 2023</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3">
                                    <div class="feature-block animation fadeInUp" data-wow-delay="0.5s">
                                        <center>
                                            <div class="feature-ico5 text-center stat-bg stat-bg1">
                                                {/* <!-- <i class="fa fa-envelope img-fluid" aria-hidden="true"></i> --> */}
                                                <img src="images/air.png" class="img-fluid" />
                                            </div>
                                            <div class="">
                                                <i class="fa fa-angle-double-down imagess" aria-hidden="true"></i>
                                            </div>
                                        </center>
                                        <div class="faeture-cont">
                                            <h3 class="text-secondary fw-bold">
                                                <span class="text-primary ft"></span> Dorado Community Token Airdrop
                                            </h3>
                                            <p class="text-center">Q1 2023</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3">
                                    <div class="feature-block animation fadeInRight" data-wow-delay="0.5s">
                                        <center>
                                            <div class="feature-ico5 text-center stat-bg stat-bg1">
                                                {/* <!-- <i class="fa fa-suitcase img-fluid" aria-hidden="true"></i> --> */}
                                                <img src="images/dex.png" class="img-fluid" />
                                            </div>

                                            <div class="">
                                                <i class="fa fa-angle-double-down imagess" aria-hidden="true"></i>
                                            </div>
                                        </center>
                                        <div class="faeture-cont">
                                            <h3 class="text-secondary fw-bold">
                                                <span class="text-primary ft"></span> Dorado Community Token on Dex
                                            </h3>
                                            <p class="text-center">Q2 2023</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3">
                                    <div class="feature-block animation fadeInLeft" data-wow-delay="0.5s">
                                        <center>
                                            <div class="feature-ico5 text-center stat-bg stat-bg1">
                                                {/* <!-- <i class="fa fa-users img-fluid" aria-hidden="true"></i> --> */}
                                                <img src="images/cex.png" class="img-fluid" />
                                            </div>
                                            <div class="">
                                                <i class="fa fa-angle-double-down imagess" aria-hidden="true"></i>
                                            </div>
                                        </center>
                                        <div class="faeture-cont">
                                            <h3 class="text-secondary fw-bold">
                                                <span class="text-primary ft"></span> Dorado Community Token on Cex{' '}
                                            </h3>
                                            <p class="text-center">Q2 2023</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3">
                                    <div class="feature-block animation fadeInUp" data-wow-delay="0.5s">
                                        <center>
                                            <div class="feature-ico5 text-center stat-bg stat-bg1">
                                                {/* <!-- <i class="fa fa-database img-fluid" aria-hidden="true"></i> --> */}
                                                <img src="images/project.png" class="img-fluid" />
                                            </div>
                                            <div class="">
                                                <i class="fa fa-angle-double-down imagess" aria-hidden="true"></i>
                                            </div>
                                        </center>
                                        <div class="faeture-cont">
                                            <h3 class="text-secondary fw-bold">
                                                <span class="text-primary ft"></span> Dorado Community Token Metaverse Launch{' '}
                                            </h3>
                                            <p class="text-center">Q3 2023</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3">
                                    <div class="feature-block animation fadeInUp" data-wow-delay="0.5s">
                                        <center>
                                            <div class="feature-ico5 text-center stat-bg stat-bg1">
                                                {/* <!-- <i class="fa fa-briefcase img-fluid" aria-hidden="true"></i> --> */}
                                                <img src="images/game1.png" class="img-fluid" />
                                            </div>
                                            <div class="">
                                                <i class="fa fa-angle-double-down imagess" aria-hidden="true"></i>
                                            </div>
                                        </center>
                                        <div class="faeture-cont">
                                            <h3 class="text-secondary fw-bold">
                                                <span class="text-primary ft"></span> Dorado Community Token Games Launch
                                            </h3>
                                            <p class="text-center">Q3 2023</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3">
                                    <div class="feature-block animation fadeInRight" data-wow-delay="0.5s">
                                        <center>
                                            <div class="feature-ico5 text-center stat-bg stat-bg1">
                                                {/* <!-- <i class="fa fa-futbol-o img-fluid" aria-hidden="true"></i> --> */}
                                                <img src="images/vr.png" class="img-fluid" />
                                            </div>
                                            <div class="">
                                                <i class="fa fa-angle-double-down imagess" aria-hidden="true"></i>
                                            </div>
                                        </center>
                                        <div class="faeture-cont">
                                            <h3 class="text-secondary fw-bold">
                                                <span class="text-primary ft"></span> Virtual Reality (VR) Device Launch
                                            </h3>
                                            <p class="text-center">Q4 2023</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3">
                                    <div class="feature-block animation fadeInLeft" data-wow-delay="0.5s">
                                        <center>
                                            <div class="feature-ico5 text-center stat-bg stat-bg1">
                                                {/* <!-- <i class="fa fa-bell-o img-fluid" aria-hidden="true"></i> --> */}
                                                <img src="images/opensea.png" class="img-fluid" />
                                            </div>
                                            <div class="">
                                                <i class="fa fa-angle-double-down imagess" aria-hidden="true"></i>
                                            </div>
                                        </center>
                                        <div class="faeture-cont">
                                            <h3 class="text-secondary fw-bold">
                                                <span class="text-primary ft"></span> NFTs Listing on OpenSea
                                            </h3>
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

        <section className="referral-bg position-relative ref-sec-af ref-pad" style={{ display: 'none' }}>
            <div className="position-relative z-in1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title text-center wow fadeInUp" data-wow-delay="0.4s">
                                <h1 className="fw-bold mb-0 text-box">Contact Us</h1>
                                <h2 className="text-white fw-bold">Contact Us</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="Contact_main">
                                <div className="block-text">
                                    <h5 className="fs-20" style={{ color: 'white' }}>
                                        Get In Touch
                                    </h5>
                                </div>
                                <div className="contact__form">
                                    <form action="">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form_box mb-2">
                                                    <input className="form-control" type="text" name="name" placeholder="Name" required="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form_box mb-2">
                                                    <input className="form-control" type="text" name="email" placeholder="Email" required="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form_box mb-1">
                                                    <input className="form-control" type="text" name="phone" placeholder="Phone" required="" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form_box pt-1">
                                                    <textarea
                                                        className="form-control"
                                                        name="message"
                                                        id="message"
                                                        cols="10"
                                                        rows="5"
                                                        placeholder=" message"
                                                        required=""
                                                        style={{ height: '120px' }}
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="quote_btn text_center mt-2">
                                                    <button type="submit" className="btn-action">
                                                        <span>SUBMIT YOUR MESSAGE</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <!-- <div className="col-md-1"></div> --> */}
                        <div className="col-md-6">
                            <img src="images/img.svg" width="100%" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="inves-bg position-relative stat-sec-bg ref-pad animation pd_Top38  fadeInLeft">
            <div className="position-relative z-in1">
                <div className="container">
                    <div className="Contact_main">
                        <div className="row">
                            <div className="col-md-2 wow  fadeInLeft" data-wow-delay="0.4s">
                                <div className="logo_img">
                                    <center>
                                        <img src="images/bnb1.png" className="img_bnb" width="50%" />
                                    </center>
                                    {/* <!--  <div className="text-center">
                          <img src="images/team.png" className="text-center1"><br>
                          <h2>"Every carbon removal project is unique, and buyers of carbon Credits have specific requirements, creating the need to match buyers and sellers based on unique parameters."</h2><br>
                          <br>
                          <p className="text-center">Johan Toll, Head of Nasdaq's Marketplace Services Platform, Nasdaq</p>
                          </div> --> */}
                                </div>
                            </div>

                            <div className="col-md-2 wow  fadeInLeft" data-wow-delay="0.4s">
                                <div className="logo_img">
                                    <center>
                                        <img src="images/metamask.png" className="img_bnb" width="50%" />
                                    </center>
                                </div>
                            </div>

                            <div className="col-md-2 wow  fadeInLeft" data-wow-delay="0.4s">
                                <div className="logo_img">
                                    <img src="images/pancakeswap.png" className="img_pan" width="100%" />
                                </div>
                            </div>

                            <div className="col-md-2 wow  fadeInRight" data-wow-delay="0.4s">
                                <div className="logo_img">
                                    <img src="images/certik.png" className="img_cer" width="100%" />
                                </div>
                            </div>
                            <div className="col-md-2 wow  fadeInLeft" data-wow-delay="0.4s">
                                <div className="logo_img">
                                    <img src="images/turst.png" className="img_turst" width="90%" />
                                </div>
                            </div>
                            {/* <div className="col-md-2 wow  fadeInRight"  data-wow-delay="0.4s">
              <div className="logo_img">
                <img src="images/Cointelegraph.png" className="img_bnb img_graph" width="100%" />
              </div>
            </div> */}

                            <div className="col-md-2 wow  fadeInRight" data-wow-delay="0.4s">
                                <div className="logo_img">
                                    <img src="images/coinmarket.png" className="img_coin" width="93%" />
                                </div>
                            </div>
                        </div>

                        {/* <div className="row">
            <div className="col-md-2 wow  fadeInLeft"  data-wow-delay="0.4s">
              <div className="logo_img">
                <img src="images/turst.png" className="img_turst" width="90%" />
              </div>
            </div>
          </div> */}
                    </div>
                </div>
            </div>
        </section>
        <Footer />
            <div class='scrolltop'>
            <div class='scroll icon'><i class="fa fa-rocket" aria-hidden="true"></i></div>
        </div>
    </div>
    )
}

export default Index_main
