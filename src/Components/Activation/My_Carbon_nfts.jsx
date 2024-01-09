import React from "react";
import Sidebar from "../Navbar/Sidebar";
import { useState, useEffect } from "react";
import { useHistory, useNavigate } from "react-router-dom";

import { API } from "../../Redux/API";

function My_Carbon_nfts() {
  const [PackageAmount, setPackageAmount] = useState();
  const [IsUpgrade, setIsUpgrade] = useState(0);
  const [CurrentPackage, setCurrentPackage] = useState(0);

  const Navigate = useNavigate();

  const user = sessionStorage.getItem("user");
  let ress = JSON.parse(user);
  if (ress == undefined || ress == "" || ress == null) {
    window.location.href = "/login";
  }
  let uId = ress.uid;

  const getBetaWallet = async () => {
    try {
      const res = await API.get(`/DashboardDetails?uid=${uId}`);
      console.log("walletAddress db ", res.data.data[0].walletAddress);
      //setWalletAddress(res.data.data[0].walletAddress);

      console.log("res", res);
      setIsUpgrade(res.data.data[0].package);
      setCurrentPackage(res.data.data[0].package);

      // setLoading(false);
    } catch (e) {
      console.log("error", e);
      // setLoading(false);
    }
  };

  const handleNftPackage = async (value) => {
    setPackageAmount(value);
    sessionStorage.setItem("Package_Amount", value);
    Navigate("/Activate");
  };

  useEffect(() => {
    setTimeout(() => {
      getBetaWallet();
    });
  }, []);

  return (
    <div className="nft_theme">
      <Sidebar />
      <div class="main-content app-content">
        {/* <!-- container --> */}
        <div class="main-container container-fluid">
          {/* <!-- breadcrumb --> */}
          <div class="breadcrumb-header justify-content-between">
            <div class="left-content">
              <span class="main-content-title mg-b-0 mg-b-lg-1">Mint NFTs</span>
            </div>
            <div class="justify-content-center mt-2">
              <ol class="breadcrumb breadcrumb-style3">
                <li class="breadcrumb-item tx-15">
                  <a href="#">Activate </a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Mint NFTs
                </li>
              </ol>
            </div>
          </div>
          {/* <!-- /breadcrumb --> */}
          <div class="row">
            <div class="col-sm-4">
              <div className="dorado__document">
                <div class="card">
                  <div class="card-body">
                    <div className="drd__row">
                      <div className="drd_column">
                        <div className="drd_package">
                          <img src="images/package/2mt.jpg" />
                        </div>
                        <div className="drd_package">
                          <img src="images/package/2mt_back.jpg" />
                        </div>
                      </div>
                      {CurrentPackage >= 0 && CurrentPackage <= 100 ? (
                        <div className="drd_btns">
                          <a
                            href="#"
                            onClick={() => {
                              handleNftPackage(100);
                            }}
                          >
                            {IsUpgrade == "0" ? "Activate" : "Upgrade"}
                          </a>
                        </div>
                      ) : (
                        <div className="drd_btns notapplicable">
                          <a href="#">Unavailable</a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div className="dorado__document">
                <div class="card">
                  <div class="card-body">
                    <div className="drd__row">
                      <div className="drd_column">
                        <div className="drd_package">
                          <img src="images/package/6mt.jpg" />
                        </div>
                        <div className="drd_package">
                          <img src="images/package/6mt_back.jpg" />
                        </div>
                      </div>
                      {(CurrentPackage >= 0 || CurrentPackage >= 100) &&
                      CurrentPackage <= 300 ? (
                        <div className="drd_btns">
                          <a
                            href="#"
                            onClick={() => {
                              handleNftPackage(300);
                            }}
                          >
                            {IsUpgrade == "0" ? "Activate" : "Upgrade"}
                          </a>
                        </div>
                      ) : (
                        <div className="drd_btns notapplicable">
                          <a href="#">Unavailable</a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div className="dorado__document">
                <div class="card">
                  <div class="card-body">
                    <div className="drd__row">
                      <div className="drd_column">
                        <div className="drd_package">
                          <img src="images/package/10mt.jpg" />
                        </div>
                        <div className="drd_package">
                          <img src="images/package/10mt_back.jpg" />
                        </div>
                      </div>
                      {(CurrentPackage >= 0 ||
                        CurrentPackage >= 100 ||
                        CurrentPackage >= 300) &&
                      CurrentPackage <= 500 ? (
                        <div className="drd_btns">
                          <a
                            href="#"
                            onClick={() => {
                              handleNftPackage(500);
                            }}
                          >
                            {IsUpgrade == "0" ? "Activate" : "Upgrade"}
                          </a>
                        </div>
                      ) : (
                        <div className="drd_btns notapplicable">
                          <a href="#">Unavailable</a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-4">
              <div className="dorado__document">
                <div class="card">
                  <div class="card-body">
                    <div className="drd__row">
                      <div className="drd_column">
                        <div className="drd_package">
                          <img src="images/package/20mt.jpg" />
                        </div>
                        <div className="drd_package">
                          <img src="images/package/20mt_back.jpg" />
                        </div>
                      </div>
                      {(CurrentPackage >= 0 ||
                        CurrentPackage >= 100 ||
                        CurrentPackage >= 300 ||
                        CurrentPackage >= 500) &&
                      CurrentPackage <= 1000 ? (
                        <div className="drd_btns">
                          <a
                            href="#"
                            onClick={() => {
                              handleNftPackage(1000);
                            }}
                          >
                            {IsUpgrade == "0" ? "Activate" : "Upgrade"}
                          </a>
                        </div>
                      ) : (
                        <div className="drd_btns notapplicable">
                          <a href="#">Unavailable</a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div className="dorado__document">
                <div class="card">
                  <div class="card-body">
                    <div className="drd__row">
                      <div className="drd_column">
                        <div className="drd_package">
                          <img src="images/package/60mt.jpg" />
                        </div>
                        <div className="drd_package">
                          <img src="images/package/60mt_back.jpg" />
                        </div>
                      </div>
                      {(CurrentPackage >= 0 ||
                        CurrentPackage >= 100 ||
                        CurrentPackage >= 300 ||
                        CurrentPackage >= 500 ||
                        CurrentPackage >= 1000) &&
                      CurrentPackage <= 3000 ? (
                        <div className="drd_btns">
                          <a
                            href="#"
                            onClick={() => {
                              handleNftPackage(3000);
                            }}
                          >
                            {IsUpgrade == "0" ? "Activate" : "Upgrade"}
                          </a>
                        </div>
                      ) : (
                        <div className="drd_btns notapplicable">
                          <a href="#">Unavailable</a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div className="dorado__document">
                <div class="card">
                  <div class="card-body">
                    <div className="drd__row">
                      <div className="drd_column">
                        <div className="drd_package">
                          <img src="images/package/100mt.jpg" />
                        </div>
                        <div className="drd_package">
                          <img src="images/package/100mt_back.jpg" />
                        </div>
                      </div>
                      {(CurrentPackage >= 0 ||
                        CurrentPackage >= 100 ||
                        CurrentPackage >= 300 ||
                        CurrentPackage >= 500 ||
                        CurrentPackage >= 1000 ||
                        CurrentPackage >= 3000) &&
                      CurrentPackage <= 5000 ? (
                        <div className="drd_btns">
                          <a
                            href="#"
                            onClick={() => {
                              handleNftPackage(5000);
                            }}
                          >
                            {IsUpgrade == "0" ? "Activate" : "Upgrade"}
                          </a>
                        </div>
                      ) : (
                        <div className="drd_btns notapplicable">
                          <a href="#">Unavailable</a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
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

export default My_Carbon_nfts;
