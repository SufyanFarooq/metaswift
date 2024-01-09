import React, {useEffect} from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar'
import WOW from 'wow.js';
import Particles_dot from '../Particle/Particales'


function FAQ() {
  useEffect(() => {
    sessionStorage.clear();
    new WOW().init();
  }, []);

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
                  <h1 className="text-white text-uppercase fw-bold mb-0 font_45">faq</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stat-sec-bg stat_sec_bg2 about-sec position-relative about-sec-af statistic-sec-after5 set-bgimg">
        <div className="about-img-af position-relative">
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
                <div className="col-lg-12">

                  <div className="title text-center">
                <div className='set_bgimg_after5'>
                    <img src="images/foot.png" className='foot5_img' />
                  </div>
                    <h1 className="fw-bold mb-0 text-box md_faq_hide">Faq</h1>
                    <h2 className="text-white fw-bold">
                      <span className="text-primary">Frequently</span> Asked Questions
                    </h2>
                  </div>
                </div>
              </div>

              <div className=" faq_accordian my-3 faq_setting">
                <div className="accordion">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="accordion-toggle u">What is Meta Darado Platform?</h4>
                      <div className="accordion-content">
                        <p>
                          {' '}
                          In DoradoCommunity Community Platform you can make Micro investments in Gold Standard Carbon
                          Certificates which are converted into NFT’s and Every Individual will get the Traded
                          Certificate Bonus. Individuals buy Carbon credits in form of NFTs in small Portion which are
                          traded by the Company and provide returns . the NFTs will be credited to the individuals
                          wallets if they do not get returns on their Certificates.
                        </p>
                      </div>

                      <h4 className="accordion-toggle u">What is the Gold Standard Carbon Credits?</h4>
                      <div className="accordion-content">
                        <p>
                          {' '}
                          The Gold Standard (GS) is a voluntary carbon Credits program focused on progressing the United
                          Nation’s Sustainable Development Goals (SDGs) and ensuring that project’s benefit their
                          neighboring communities. The Gold Standard can be applied to voluntary Credits projects and to
                          Clean Development Mechanism (CDM) projects. It was developed under the leadership of the World
                          Wildlife Fund (WWF), HELIO International with a focus on Credits projects that provide lasting
                          social, economic, and environmental benefits.{' '}
                        </p>
                      </div>

                      <h4 className="accordion-toggle u">What is Carbon Trading?</h4>
                      <div className="accordion-content">
                        <p>
                          {' '}
                          Carbon trading is the process of buying and selling carbon credits. Some of these credits are
                          permits that allow a company or other entity to emit CO2, and some of these credits represent
                          one ton of CO2 emissions that’s already been Credits. Together, they form a market-based system
                          aimed at reducing CO2 emissions that cause global warming.
                        </p>
                      </div>

                      <h4 className="accordion-toggle u">What is Carbon Credit ?</h4>
                      <div className="accordion-content">
                        <p>
                          {' '}
                          A carbon credit is a permit that allows an organization to produce a certain amount of carbon
                          emission. If the full allowance is not used, it can be traded.
                          <br />
                          Carbon trading has become extremely popular today among individuals and organizations and
                          carbon exchanges are starting to emerge.It’s all happening for a simple reason: Reducing
                          carbon emissions is a global initiative and the carbon market offers great options for
                          entities looking to cut emissions. A polluter can purchase credits to cover the emissions they
                          release into the air. Each credit equals one ton of CO2 equivalent (CO2e).
                        </p>
                      </div>

                      <h4 className="accordion-toggle u">What is a Carbon Credits NFT?</h4>
                      <div className="accordion-content">
                        <p>
                          Carbon credits minted as Non-fungible are slowly gaining traction in regenerative finance
                          (ReFi) and decentralized finance (DeFi) markets. Recently, a carbon credit that represented a
                          single tonne of carbon dioxide was sold as an NFT for $70,000 at an auction.
                          <br />
                          Using nonfungible tokens (NFTs) as carbon credits or carbon Creditss reveals an outlet for Web3
                          technology to foster a more environmentally friendly future. NFTs as carbon credits are a
                          slow-rolling trend in the regenerative finance (ReFi) and decentralized finance (DeFi)
                          markets.
                        </p>
                      </div>

                      <h4 className="accordion-toggle u">What problems can NFTs solve?</h4>
                      <div className="accordion-content">
                        <p>
                          {' '}
                          NFTs are a solution to digital scarcity. By tying ownership of natively digital artwork to an
                          entry in a public, immutable ledger, the artwork becomes collectable. There is now a clear,
                          verifiable way to distinguish the actual owner from those right-clickers who happen to have a
                          copy on their hard drive.
                        </p>
                      </div>

                      <h4 className="accordion-toggle u">How do NFTs affect climate change?</h4>
                      <div className="accordion-content">
                        <p>
                          {' '}
                          An NFT doesn't require a lot of energy, and neither does storing it. Purchasing and
                          transferring NFTs, however, relies on mining the blockchain and uses significant energy, which
                          is bad for the environment and can affect climate change.
                        </p>
                      </div>

                      <h4 className="accordion-toggle u">How do you Credits carbon footprint from NFTs?</h4>
                      <div className="accordion-content">
                        <p>
                          {' '}
                          For the NFT creators looking to make their products carbon neutral, it's simple, Pallant adds:
                          Just choose a blockchain with a proof-of-stake mechanism. Or for those opting to use Ethereum,
                          where the vast majority of valuable NFTs are hosted, use a layer 2 solution and Credits the
                          footprint using carbon.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h4 className="accordion-toggle u">Is Carbon Credit NFT is minted?</h4>
                      <div className="accordion-content">
                        <p>
                          {' '}
                          A Carbon Credit NFT is minted like any other NFT minting platform which enables carbon Credits
                          holders to mint their credits into NFTs. In simple words, the carbon credit records are
                          digitally locked into an NFT. These platforms generally use low-emission blockchain networks
                          like Polygon to mint carbon NFTs which can then be listed for trading on a Carbon Credits NFT
                          Marketplace or generic NFT marketplaces like OpenSea or Rarible.
                        </p>
                      </div>

                      <h4 className="accordion-toggle u">What is Carbon Credits NFT Marketplace?</h4>
                      <div className="accordion-content">
                        <p>
                          {' '}
                          The traditional carbon markets have been centralized and illiquid thus the market
                          participation is limited. However, with Carbon Credits NFT Marketplace Development, things are
                          changing.
                          <br />
                          <b>1. NFTs Prevent Greenwashing</b>
                          <br />
                          Carbon market trading is facing the challenges of greenwashing where organizations are
                          cheating on emission tests. All the data available in traditional green markets is inaccurate
                          and unreliable. However, NFTs offer a transparent and distributed technology to keep a track
                          of all the transactions and give carbon credit buyers a detailed history of record that they
                          can trust.
                          <br />
                          <b>2. Double Counting Eradication</b>
                          <br />
                          A very common situation that occurs in carbon credit markets is that two organizations claim
                          the same emission reduction or carbon removal. This leads to many disputes in the market.
                          Using NFTs, this problem can be eradicated and we can see more participation by organizations.
                          <br />
                          <b>3. Effective Liquidity</b>
                          <br />
                          Carbon credits are illiquid assets for any organization – meaning it is not easy to quickly
                          sell your carbon credits. Relative to Carbon Credits, Carbon Credit NFTs are more liquid. With
                          Carbon Credits NFT Marketplace, these NFTs get quick access to liquid capital.
                        </p>
                      </div>
                      <h4 className="accordion-toggle u">Is Creditsting Carbon Worth It?</h4>
                      <div className="accordion-content">
                        <p>
                          {' '}
                          The only way to be carbon neutral is through carbon Creditsting. It’s not possible to produce
                          zero carbon. So carbon Creditsting is the best way to decrease our actions’ negative impact on
                          the environment.
                          <br />
                          Emissions reduction should always be at the core of everything we do as individuals and as
                          companies. But carbon Creditsting will always be worth it and can take us to carbon neutrality
                          that we all should be striving for.
                          <br />
                          An Credits can be achieved by purchasing and cancelling carbon credits. 1 carbon credit
                          represents 1 tonne of CO2e reduction – so a business that emits 1000 tonnes of carbon can
                          Credits its emissions by purchasing and cancelling 1000 carbon credits.
                        </p>
                      </div>

                      <h4 className="accordion-toggle u">How Tokenization of Carbon Credits work?</h4>
                      <div className="accordion-content">
                        <p>
                          {' '}
                          Carbon credits can also be traded as tokens on a digital exchange just like how they can be
                          traded on traditional trading platforms. A pool of carbon credits from a project can be
                          tokenized. And like each carbon credit, a token also represents one ton of carbon Credits. The
                          tokenization of carbon credits helps the transparency and liquidity of the market. Blockchain
                          technology can create secure, standardized, and real-time carbon credit exchanges. This is
                          because the token stores all the information related to the carbon credit. These include
                          third-party certification details, auditing, transaction records, and project monitoring.
                          Carbon tokens minted to the same blockchain will follow the same standard. This allows for
                          their integration into the Decentralized Finance (DeFi) markets.{' '}
                        </p>
                      </div>

                      <h4 className="accordion-toggle u">What is ISO 14064-1?</h4>
                      <div className="accordion-content">
                        <p>
                          {' '}
                          The International Standards Organization (ISO) is an independent, non-governmental
                          international organization with a membership of 165 national standards bodies. ISO 14064-1 was
                          developed in 2006 as a Carbon Credit (Credits) credit standard which specifies principles and
                          requirements at the organization level for quantification and reporting of greenhouse gas
                          (GHG) emissions and removals. It includes requirements for the design, development,
                          management, reporting and verification of an organization’s GHG inventory.{' '}
                        </p>
                      </div>

                      <h4 className="accordion-toggle u">
                        Why it is important for travellers and tourism businesses to purchase Creditss?
                      </h4>
                      <div className="accordion-content">
                        <p>
                          {' '}
                          Greenhouse gases (GHG), like carbon dioxide (CO2), are emitted when fossil-fuels are consumed.
                          We all emit CO2 emissions when we drive a car, fly in a plane, use electricity, or generate
                          waste. You can use less energy, travel less, or use public transport, but no matter how
                          sustainable your practices are, some emissions are unavoidable.
                          <br />
                          Tourism is responsible for roughly 8% of the world’s carbon emissions, making it a significant
                          contributor to global climate change. Travelers and tourism businesses should take
                          responsibility for this impact by Creditsting their carbon footprint so that the destinations
                          they frequent and depend on will be there for them to visit again in the future.
                        </p>
                      </div>

                      <h4 className="accordion-toggle u">
                        What are Greenhouse gases and why is Carbon Dioxide so important?
                      </h4>
                      <div className="accordion-content">
                        <p>
                          {' '}
                          Greenhouse gases are a group of compounds that are able to trap heat (longwave radiation) in
                          the atmosphere, keeping the Earth’s surface warmer than it would be if they were not present.
                          These gases are the fundamental cause of the greenhouse effect. Increases in the amount of
                          greenhouse gases in the atmosphere enhances the greenhouse effect which is creating global
                          warming and consequently climate change. The ability of these gases to trap heat is what
                          causes the greenhouse effect. So the more greenhouse gases you have in the atmosphere, the
                          more heat stays on Earth. This process, which is very similar to the way a greenhouse works,
                          is why the gases that can produce this effect are collectively known as greenhouse gases.{' '}
                        </p>
                      </div>

                      <h4 className="accordion-toggle u">What is a Carbon Footprint and what does it include?</h4>
                      <div className="accordion-content">
                        <p>
                          {' '}
                          A Carbon Footprint is a measurement of Greenhouse Gas (GHG) emissions associated with a
                          particular entity (person, corporate or organization), product or activity (service or event).
                          A Carbon Footprint should be measured in accordance with the Greenhouse Gas Protocol and/or
                          the ISO14064 standard to ensure that data can be trusted, compared and meets the minimum
                          reporting requirements in your jurisdiction.
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
      <Footer />
    </div>
  )
}

export default FAQ
