import React from 'react'

function Footer() {
  return (
    <div>
      <footer class="stat-sec-bg footer-bg py-lg-3 py-2">
        <div class="position-relative z-in1">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="copy d-lg-flex justify-content-between align-items-center">
                  <div class="col-lg-2">
                    <div class="foot-logo">
                      <a href="/">
                        <img
                          src="images/logotop68b3.png?ver=1"
                          class="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div class="col-lg-2">
                    <ul
                      className="mb_00"
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        listStyle: "none",
                        PADDINGTOP: "14PX",
                      }}
                    >
                      <li>
                        <a
                          href="https://www.facebook.com/dorado.community"
                          target="_blank"
                        >
                          <i
                            class="ri-facebook-line img_fa"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/communitydorado"
                          target="_blank"
                        >
                          <i
                            class="ri-twitter-line img_fa"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/community_dorado/"
                          target="_blank"
                        >
                          <i
                            class="ri-instagram-line img_fa"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://t.me/doradocommunity" target="_blank">
                          <i
                            class="ri-send-plane-fill img_fa"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://discord.com/invite/SnDwfk6w"
                          target="_blank"
                        >
                          <i
                            class="ri-discord-fill img_fa"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-4">
                    <div class="foot-link">
                      <h6 class="text-white mb-0 fw-medium fb wdth420">
                        Crafted With{" "}
                        <i class="fa fa-heart fa_icon" aria-hidden="true"></i>{" "}
                        <a href="index.html">MetaSwift.ai </a>. All rights are
                        reserved.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer