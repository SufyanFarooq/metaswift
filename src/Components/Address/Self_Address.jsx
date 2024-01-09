import React, { useEffect, useState } from "react";
import Sidebar from "../Navbar/Sidebar";
import {
  SnippetsOutlined,
  ShareAltOutlined,
  WhatsAppOutlined,
  TwitterOutlined,
  SendOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import "./Self_Address.css";
import { API } from "../../Redux/API";

function Self_Address() {
  const user = sessionStorage.getItem("user");
  let ress = JSON.parse(user);
  if (ress == undefined || ress == "" || ress == null) {
    window.location.href = "/login";
  }
  let uId = ress.uid;

  const [wallet, setwallet] = useState("");
  const DashboardAPI = async () => {
    try {
      let res = await API.get(`/DashboardDetails?uid=${uId}`);
      res = res.data.data[0];
      console.log("res", res);
      setwallet(res.walletAddress);
    } catch (e) {
      console.log("Error While Fatch Dashboard API", e);
    }
  };

  useEffect(() => {
    DashboardAPI();
  }, []);

  function myFunction1() {
    var copyText = document.getElementById("myInput1");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
  }
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
                My Wallet Address
              </span>
            </div>
            <div class="justify-content-center mt-2">
              <ol class="breadcrumb breadcrumb-style3">
                <li class="breadcrumb-item tx-15">
                  <a href="#">Address </a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  My Wallet Address
                </li>
              </ol>
            </div>
          </div>
          {/* <!-- /breadcrumb --> */}

          <div class="col-xl-7 col-sm-7 address_self">
            <div class="card address_card">
              <div class="card-body min_height">
                <div class="row">
                  <div class="col-xl-10 col-lg-10 col-10">
                    <div class="mb-3 d-flex align-items-center">
                      <span class="tx-14">
                        Wallet Address :{" "}
                        <a
                          href={`https://bscscan.com/address/${wallet}`}
                          class="Txn_here"
                          target="_blank"
                        >
                          {wallet}
                        </a>{" "}
                      </span>
                      {/* <div class="mb-3 d-flex align-items-center">
                        <span class="tx-14"> Wallet Address :{" "}</span>

                      </div>
                      <div class="d-block align-items-center mb-2">
                        <div class="form-group">
                          {' '}
                          <div class="input-group mb-0">
                            <input
                              type="text"
                              id="myInput1"
                              class="form-control txt_scrl"
                              value={`https://tronscan.io/#/contract/undefined`}
                            />
                          </div>
                          <br />
                          <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <span text="button" onClick={myFunction1} class="input-group-text">
                              <SnippetsOutlined />
                            </span>
                           
                          </div>
                        </div>

                      </div> */}
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
  );
}

export default Self_Address;
