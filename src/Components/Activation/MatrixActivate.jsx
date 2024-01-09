import React, { useState } from "react";
import Sidebar from "../Navbar/Sidebar";
import { useEffect } from "react";
import { API } from "../../Redux/API";

import { Dna } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gif from "../Spinner/loader.gif";
import { ResetTv } from "@mui/icons-material";

function MatrixActivate() {
  const user = sessionStorage.getItem("user");
  let ress = JSON.parse(user);
  if (ress == undefined || ress == "" || ress == null) {
    window.location.href = "/login";
  }
  let uId = ress.uid_output;

  const Package_Amount = sessionStorage.getItem("Package_Amount");

  const [select, setSelect] = useState("");
  //let [Package_Amount, setPackage_Amount] = useState("0");
  const [loader, setloader] = useState(false);

  const [otpvalid, setOTPValid] = useState("0");
  const [otp, setOTP] = useState("");
  const [Account, setAccount] = useState(null);
  const [MatrixBalance, setMatrixBalance] = useState(0);
  const [Matrixpackage, setMatrixpackage] = useState(0);
  const [MatrixPlanAmount, setMatrixPlanAmount] = useState(0);
  const [MatrixPlanName, setMatrixPlanName] = useState(0);
  const [Pack_Amount, setPackage_Amount] = useState(0);
  const [ActType, setActType] = useState(0);
  const [ActTypeDetails, setActTypeDetails] = useState("");
  const [ActivationType, setActivationType] = useState("");

  const getBetaWallet = async () => {
    try {
      const res = await API.get(`/DashboardDetails?uid=${uId}`);
      console.log("res--->", res);
      // sessionStorage.setItem("walletAddressDB",res.data.data[0].walletAddress);
      setMatrixBalance(res.data.data[0].NetMatrixFund);
      setMatrixpackage(res.data.data[0].Matrixpackage);
      setMatrixPlanAmount(res.data.data[0].MatrixPlanAmount);
      setMatrixPlanName(res.data.data[0].MatrixPlanName);

      // setLoading(false);
    } catch (e) {
      console.log("error", e);
      // setLoading(false);
    }
  };


  const CalculateAmount = async (Amount) => {
    setloader(true);
    try {
      console.log("MatrixPlanName", MatrixPlanAmount)
      setPackage_Amount(MatrixPlanAmount);      
      setloader(false);
    } catch (error) {
      console.log("error", error);
      setloader(false);
    }    
  };

  const hendleOTP = (event) => {
    // let value = event.target.value;
    const newValue = event.replace(/[^0-9]/gi, "");
    setOTP(newValue);
  };

  const SendOtp_API = async (value) => {
    try {
      setloader(true);
      if (Pack_Amount == "0" || Pack_Amount == "" || Pack_Amount == undefined) {
        toast.error("Please Select Package Amount !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }     
      if (parseFloat(Pack_Amount) > parseFloat(MatrixBalance) )
      {
        toast.error("Insufficient Matrix Wallet Balance !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }
     
      let res = await API.post("/SendMatrixOTPActivation", {
        uid: value,
      });
      res = res.data.data;
      if (res.result == "Correct Email ID !!") {
        toast.success("OTP Send Successfully !!");
        setOTPValid(1);
        setloader(false);
      }
      setloader(false);
    } catch (e) {
      console.log("Somthing Error in SendOtp_API", e);
    }
  };

  //handleActivationToken
  const handleActivation = async () => {
    try {
      setloader(true);
      let uid = uId; //Login User aId
      if (Pack_Amount == "0" || Pack_Amount == "" || Pack_Amount == undefined) {
        toast.error("Please Select Package Amount !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }     
      if (otpvalid == "0") {
        toast.error("Please Check OTP !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      let responce = await API.post(`/MatrixActivateUserbyFund`, {
        user_id: uid,
        referby: uid,
        amount: Pack_Amount,       
        tokenamount: Pack_Amount,
        BUSDAmount: Pack_Amount,
        ActivationType: ActivationType,        
        otp: otp,
      });

      console.log("responce", responce);
      responce = responce.data.data;
      if (responce == "successful") {
        toast.success("Successfuly Upgrade!!!", {
          className: "copied-message",
        });
        setloader(false);
        window.location.reload();
        return;
      } else {
        toast.error(responce, {
          className: "copied-message",
        });
        setloader(false);
        return;
      }
    } catch (error) {
      console.log("error", error);
      setloader(false);
    }
  };



  useEffect(() => {
    getBetaWallet();
  }, []);

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
        {/* <!-- Loader -->  */}
        {loader && <img src={gif} className="LoaderSpinner" />}
        {/* <!-- /Loader --> <!-- Page -->  */}
        <div class="page">
          <div class="layout-position-binder">
            {/* <!-- main-header -->  */}
          </div>

          <div class="main-content app-content">
            {/* <!-- container --> */}
            <div class="main-container container-fluid">
              {/* <!-- breadcrumb --> */}
              <div class="breadcrumb-header justify-content-between">
                <div class="left-content">
                  <span class="main-content-title mg-b-0 mg-b-lg-1">
                    Matrix Activate
                  </span>
                </div>
                <div class="justify-content-center mt-2">
                  <ol class="breadcrumb breadcrumb-style3">
                    <li class="breadcrumb-item tx-15">
                      <a href="#">Matrix Activation</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Matrix Activate
                    </li>
                  </ol>
                </div>
              </div>
              {/* <!-- /breadcrumb --> */}

              <div class="row" style={{ marginTop: "0rem" }}>
                <div class="col-md-3"></div>
                <div class="col-md-6 card1">
                  <div class="" role="document">
                    <div class="modal-content10">
                      <div class="" style={{ paddingBottom: "10px" }}>
                        <div class="avlbal">
                          <h3
                            id="exampleModal3Label2"
                            style={{ textAlign: "center" }}
                          >
                            Matrix Activate / Upgrade
                          </h3>
                          <div class="Model_text_inner activation_Item">
                            
                            <div class="rate_item">
                              <span>Matrix Fund Balance</span>
                              <input
                                type="text"
                                id="tokenbalance"
                                value={MatrixBalance}
                                BUSD
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="activation_modal">
                        <div class="popup_net">
                          {/* <span class="metamaskConnection text-center">Please Connect wallet Address!</span> */}

                          <div class="addNum">
                            <div class="trxnumber">
                              <input
                                type="text"
                                readonly=""
                                id="txtamount2"
                                value={Pack_Amount}
                                class="form5"
                              />
                              <span style={{ marginLeft: "10px" }}>
                                Package Amount
                              </span>
                            </div>

                            {otpvalid == "1" ? (
                              <div class="trxnumber">
                                <input
                                  type="text"
                                  id="txtTokenvalue2"
                                  class="form5"
                                  value={otp}
                                  onChange={(e) => hendleOTP(e.target.value)}
                                  placeholder="Enter OTP"
                                />
                                <span style={{ marginLeft: "10px" }}>OTP</span>
                              </div>
                            ) : (
                              <></>
                            )}

                            <div class="btn-list btn_set_item">
                              <a
                                href="javascript:void(0);"
                                onClick={() => {
                                  CalculateAmount({MatrixPlanAmount});
                                }}
                                class="btn btn-sm btn-primary"
                              >
                                {" "}
                                {MatrixPlanName}
                              </a>                            
                            </div>

                            <input
                              type="hidden"
                              id="amount"
                              name="name"
                              autocomplete="off"
                            />
                          </div>

                          <div class="row">
                            <div class="col-md-12">
                              {loader == true ? (
                                <gif />
                              ) : (
                                <>
                                  <div class="trxnumber">
                                    {otpvalid == "0" ? (
                                      <button
                                        class="col-5 mt-3 py-3 wdth_btn btn mb-3"
                                        style={{ color: "#000" }}
                                        onClick={() => SendOtp_API(uId)}
                                      >
                                        Send OTP
                                      </button>
                                    ) : (
                                      <a
                                        href="#"
                                        onClick={() => {
                                          handleActivation();
                                        }}
                                      >
                                        <div class="activate_btn">
                                          <h4>Upgrade</h4>
                                        </div>
                                      </a>
                                    )}
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3"></div>
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
                Copyright 2023{" "}
                <a href="#" class="tx-primary">
                  MetaSwift.ai
                </a>
                . <a href="#"> </a> All rights reserved{" "}
              </div>
            </div>
          </div>
          {/* // <!---end----> */}
        </div>
      </div>
    </div>
  );
}

export default MatrixActivate;