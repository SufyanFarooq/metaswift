import React from "react";
import Sidebar from "../Navbar/Sidebar";

function Query() {
  return (
    <div className="nft_theme">
      <Sidebar />
      <div class="main-content app-content">
        {/* <!-- container --> */}
        <div class="main-container container-fluid">
          {/* <!-- breadcrumb --> */}
          <div class="breadcrumb-header justify-content-between">
            <div class="left-content">
              <span class="main-content-title mg-b-0 mg-b-lg-1">
                Raise A Query
              </span>
            </div>
            <div class="justify-content-center mt-2">
              <ol class="breadcrumb breadcrumb-style3">
                <li class="breadcrumb-item tx-15">
                  <a href="#">HelpDesk </a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Raise A Query
                </li>
              </ol>
            </div>
          </div>
          {/* <---breadcrumb Close---> */}

          <div className="container">
            <div className="row"></div>
          </div>

          {/* <!-- row closed --> */}
        </div>
        {/* <!-- /Container --> */}
      </div>

      {/* <!---footer----> */}
      <div class="main-footer">
                <div class="col-md-12 col-sm-12 text-center">
                    <div class="container-fluid pd-t-0 ht-100p">
                        {' '}
                        Copyright ©  2023{' '}
                        <a href="#" class="tx-primary">
                            MetaSwift.ai
                        </a>
                        <a href="#"> </a> All rights reserved{' '}
                    </div>
                </div>
            </div>
      {/* <!---end----> */}
    </div>
  );
}

export default Query;
