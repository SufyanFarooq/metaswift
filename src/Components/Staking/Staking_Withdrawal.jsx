import React from "react";
import Sidebar from "../Navbar/Sidebar";

function Staking_Withdrawal() {
  const user = sessionStorage.getItem("user");
  let ress = JSON.parse(user);
  let uId = ress.uid;
  return (
    <div>
      <Sidebar />
      <div class="main-content app-content">
        {/* <!-- container --> */}
        <div class="main-container container-fluid">
          <div class="col-12 d-flex justify-content-center py-5 ">
            <div class="col-md-6 col-lg-5 col-xxl-4 col-10 width-mg card1">
              <div
                class="d-flex flex-column align-items-center profile-border profile-login  py-4 shadow-withdraw"
                id="withdraw-inp"
              >
                <h2 class="h-color col-12 py-2 px-4 border_bottom">
                  Staking_Withdrawal
                </h2>
                <div class="col-11 mt-3 row align-items-center">
                  <p class="col-5 m-0 p-0">Wallet Net USD Value</p>
                  <input
                    type="text"
                    class="p-2 profile-border col-7"
                    value="0"
                  />
                </div>
                <div class="col-11 mt-3 row align-items-center">
                  <p class="col-5 m-0 p-0">Enter BUSD Amount</p>
                  <input
                    type="text"
                    class="p-2 profile-border col-7"
                    maxlength="10"
                    value=""
                  />
                </div>
                <div class="col-11 mt-3 row align-items-center">
                  <p class="col-5 m-0 p-0">Dorado Amount</p>
                  <input
                    type="text"
                    class="p-2 profile-border col-7"
                    value="0"
                  />
                </div>
                <button
                  class="col-5 mt-3 py-3 bg-success btn mb-3"
                  style={{ color: "#000" }}
                >
                  Withdrawal
                </button>
              </div>
            </div>
          </div>
          {/* <!-- row closed --> */}
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
  );
}

export default Staking_Withdrawal;
