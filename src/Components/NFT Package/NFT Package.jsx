import React from "react";
import Sidebar from "../Navbar/Sidebar";

function NFT_Package() {
  return (
    <div className="nft_theme">
      <Sidebar />
      <div class="horizontalMenucontainer">
        <a
          href="#top"
          id="back-to-top"
          class="back-to-top rounded-circle shadow"
        >
          <i class="angle fe fe-chevron-up"></i>
        </a>
        {/* <!-- Page -->  */}
        <div class="page">
          <div class="main-content app-content">
            {/* <!-- container --> */}
            <div class="main-container container-fluid">
              {/* <!-- breadcrumb --> */}
              <div class="breadcrumb-header justify-content-between">
                <div class="left-content">
                  <span class="main-content-title mg-b-0 mg-b-lg-1">
                    NFT Packages
                  </span>
                </div>
                <div class="justify-content-center mt-2">
                  <ol class="breadcrumb breadcrumb-style3">
                    <li class="breadcrumb-item tx-15">
                      <a href="#">NFT Packages</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      NFT Packages
                    </li>
                  </ol>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-4 col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-xl-12 col-lg-12 col-12">
                          <div class="mb-3 align-items-center">
                            <span class="tx-14">Package Name</span>
                          </div>
                        </div>
                        <div class="col-xl-12 col-lg-12">
                          <div class="d-block align-items-center mb-2">
                            <h5 class="mb-0 me-2 numberfont tx-23">$ 00</h5>
                          </div>
                          <div class="buy_btn">
                            <button type="button" class="button btn">
                              Buy
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /Container --> */}
          </div>

          {/* <!---footer----> */}
          <div class="main-footer">
            <div class="col-md-12 col-sm-12 text-center">
              <div class="container-fluid pd-t-0 ht-100p">
                {" "}
                Copyright © 2023{" "}
                <a href="#" class="tx-primary">
                  MetaSwift.ai
                </a>
                <a href="#"> </a> All rights reserved{" "}
              </div>
            </div>
          </div>
          {/* <!---end----> */}
        </div>
        {/* <script src="assets/plugins/jquery.min.js"></script>
        <script src="assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/plugins/perfect-scrollbar/perfect-scrollbar.min.js"></script>
        <script src="assets/plugins/perfect-scrollbar/p-scroll.js"></script>
        <script src="assets/plugins/side-menu/sidemenu.js"></script>
        <script src="assets/js/sticky.js"></script>
        <script src="assets/js/index-6.js"></script>
        <script src="assets/plugins/sidebar/sidebar.js"></script>
        <script src="assets/plugins/sidebar/sidebar-custom.js"></script>
        <script src="assets/js/custom-switcher.js"></script>
        <script src="assets/js/custom.js"></script>
        <div class="main-navbar-backdrop"></div>
        <script src="assets/switcher/js/switcher.js"></script> */}
      </div>
    </div>
  );
}

export default NFT_Package;
