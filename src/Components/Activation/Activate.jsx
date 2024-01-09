import React, { useState } from "react";
import Sidebar from "../Navbar/Sidebar";
import { useEffect } from "react";
import { API } from "../../Redux/API";

import { Dna } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gif from "../Spinner/loader.gif";
import { ResetTv } from "@mui/icons-material";

function Activate() {
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

  const [otpvalid, setOTPValid] = useState("1");
  const [otp, setOTP] = useState("");
  const [Account, setAccount] = useState(null);
  const [AdminBalance, setAdminBalance] = useState(0);
  const [RapidBalance, setRapidBalance] = useState(0);
  const [AdminValue, setAdminValue] = useState(0);
  const [RapidValue, setRapidVaue] = useState(0);
  const [top_up, settop_up] = useState(0);
  const [IsUpgrade, setIsUpgrade] = useState(0);
  const [Pack_Amount, setPackage_Amount] = useState(0);
  const [ActType, setActType] = useState(0);
  const [ActTypeDetails, setActTypeDetails] = useState("");
  const [ActivationType, setActivationType] = useState("");

  const getBetaWallet = async () => {
    try {
      const res = await API.get(`/DashboardDetails?uid=${uId}`);
      console.log("res--->", res);
      // sessionStorage.setItem("walletAddressDB",res.data.data[0].walletAddress);
      settop_up(res.data.data[0].top_up);
      setIsUpgrade(res.data.data[0].package);
      setAdminBalance(res.data.data[0].Fund_Balance);
      setRapidBalance(res.data.data[0].RapidFundActivation);

      // setLoading(false);
    } catch (e) {
      console.log("error", e);
      // setLoading(false);
    }
  };

  const Reset = async () => {
    try {
      setActTypeDetails("");
      setActType(0);
      setPackage_Amount(0);
      setAdminValue(0);
      setRapidVaue(0);
      setActivationType(0);
    } catch (error) {
      console.log("error", error);
      setloader(false);
    }
  };

  const SetActivationType = async (Ac_type) => {
    try {
      setActType(Ac_type);

      if (Ac_type == "0") {
        setActTypeDetails("");
        setPackage_Amount(0);
        setAdminValue(0);
        setRapidVaue(0);
      } else if (Ac_type == "1") {
        setActTypeDetails("100 % Activation Wallet");
        setActivationType("100");
        setPackage_Amount(0);
        setAdminValue(0);
        setRapidVaue(0);
      } else if (Ac_type == "2") {
        setActTypeDetails("10 % Rapid Fund + 90 % Activation Wallet");
        setActivationType("10");
        setPackage_Amount(0);
        setAdminValue(0);
        setRapidVaue(0);
      }
    } catch (error) {
      console.log("error", error);
      setloader(false);
    }
  };

  const CalculateAmount = async (Amount) => {
    setloader(true);
    try {
      if (ActType == "0") {
        alert("Select Activation Type");
        setPackage_Amount(0);
        setAdminValue(0);
        setRapidVaue(0);
        window.location.reload();
        return;
      } else if (ActType == "1") {
        setPackage_Amount(Amount);
        setAdminValue(Amount);
        setRapidVaue(0);
      } else if (ActType == "2") {
        setPackage_Amount(Amount);
        setAdminValue(Amount * 0.9);
        setRapidVaue(Amount * 0.1);
      }

      setloader(false);
    } catch (error) {
      console.log("error", error);
      setloader(false);
    }
    // try {
    //   console.log("amount", Package_Amount);
    //   setloader(true);

    //   let address = WalletAddress; //Login User Address
    //   let uid = uId; //Login User aId

    //   if (
    //     Package_Amount == "0" ||
    //     Package_Amount == "" ||
    //     Package_Amount == undefined
    //   ) {
    //     toast.error("Please Select Package Amount !!!", {
    //       className: "copied-message",
    //     });
    //     setloader(false);
    //     return;
    //   }

    //   if (select == "") {
    //     toast.error("Please select Currency Type !!!", {
    //       className: "copied-message",
    //     });
    //     setloader(false);
    //     return;
    //   }

    //   if (parseInt(BUSDBal) < parseInt(Package_Amount)) {
    //     toast.error("Wallet balance insufficient !!!", {
    //       className: "copied-message",
    //     });
    //     setloader(false);
    //     return;
    //   }

    //   if (Account == undefined || Account == "") {
    //     toast.error("Please connect wallet !!!", {
    //       className: "copied-message",
    //     });
    //     setloader(false);
    //     return;
    //   }

    //   if (address.toUpperCase() != Account.toUpperCase()) {
    //     toast.error("Wallet address and login miss match", {
    //       className: "copied-message",
    //     });
    //     setloader(false);
    //     return;
    //   }

    //   // Check Activate Condition
    //   let responceEligible = await API.post(
    //     `/Check_Actiavte_Upgrade_Condition_BUSD`,
    //     {
    //       uid: uid,
    //       type: "Activate",
    //     }
    //   );

    //   responceEligible = responceEligible.data.data;
    //   if (responceEligible != "Success") {
    //     toast.error(responceEligible, {
    //       className: "copied-message",
    //     });
    //     setloader(false);
    //     window.web3 = new Web3(window.ethereum);
    //     return;
    //   }

    //   debugger;
    //   ///  BUSD Connectivity  //////
    //   let contract = await new window.web3.eth.Contract(
    //     contractAbiBUSD,
    //     contractAddressBUSD
    //   );

    //   let Amount = window.web3.utils.toWei(Package_Amount.toString());

    //   let token = await new window.web3.eth.Contract(
    //     contractAbiBUSDToken,
    //     contractAddressBUSDToken
    //   );
    //   let approveCall = await token.methods
    //     .approve(contractAddressBUSD, Amount.toString())
    //     .send({ from: Account });
    //   toast.success("Approved", {
    //     className: "copied-message",
    //   });
    //   setloader(true);

    //   let sellCall = await contract.methods
    //     .Activate(Amount.toString())
    //     .send({ from: Account });
    //   toast.success("Transaction Succesfull", {
    //     className: "copied-message",
    //   });
    //   sellCall = sellCall.transactionHash;

    //   console.log("trxResult", sellCall);

    //   if (sellCall != "" || sellCall != undefined || sellCall != null) {
    //     try {
    //       let responce = await API.post(`/busdActivation`, {
    //         uid: uid,
    //         walletAddress: Account,
    //         amount: Package_Amount,
    //         traxn: sellCall,
    //         busdValue: Package_Amount,
    //       });

    //       console.log("responce", responce);

    //       responce = responce.data.data;
    //       toast.success("Please Wait while transaction is processing...", {
    //         className: "copied-message",
    //       });
    //     } catch (e) {
    //       console.log("error", e);
    //       toast.error("Something went wrong ! ", {
    //         className: "copied-message",
    //       });
    //     }
    //   }
    //   console.log("Final Output:", sellCall, "\n");
    //   // toast.success("Transaction is complete");
    //   setTimeout(() => {
    //     setloader(false);
    //   }, 40000);
    // } catch (error) {
    //   console.log("error", error);
    //   setloader(false);
    // }
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
      if (ActType == "") {
        toast.error("Please select Activation Type !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }
      if (parseFloat(AdminValue) > parseFloat(AdminBalance)) {
        toast.error("Insufficient Activation Wallet Balance !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }
      if (parseFloat(RapidValue) > parseFloat(RapidBalance)) {
        toast.error("Insufficient Rapid Fund Balance !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }
      let res = await API.post("/SendOTPActivation", {
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
      if (ActType == "") {
        toast.error("Please select Activation Type !!!", {
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

      if (parseFloat(AdminValue) > parseFloat(AdminBalance)) {
        toast.error("Insufficient Activation Wallet Balance !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }
      if (parseFloat(RapidValue) > parseFloat(RapidBalance)) {
        toast.error("Insufficient Rapid Fund Balance !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      let responce = await API.post(`/ActivateUserbyFundnew`, {
        user_id: uid,
        referby: uid,
        amount: Pack_Amount,
        fundtype: "FUNDS",
        txn: "",
        tokenamount: RapidValue,
        BUSDAmount: AdminValue,
        ActivationType: ActivationType,
        RapidFundUser: RapidValue,
        otp: otp,
      });

      console.log("responce", responce);
      responce = responce.data.data;
      if (responce == "successfully activate !!") {
        toast.success("Successfuly Activated!!!", {
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

  //handleUpgradeToken
  const handleUpgrade = async () => {
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
      if (ActType == "") {
        toast.error("Please select Activation Type !!!", {
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
      

      if (parseFloat(AdminValue) > parseFloat(AdminBalance)) {
        toast.error("Insufficient Activation Wallet Balance !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }
      if (parseFloat(RapidValue) > parseFloat(RapidBalance)) {
        toast.error("Insufficient Rapid Fund Balance !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      let responce = await API.post(`/UpgrdeUserbyFundnew`, {
        user_id: uid,
        referby: uid,
        amount: Pack_Amount,
        fundtype: "FUNDS",
        txn: "",
        tokenamount: RapidValue,
        BUSDAmount: AdminValue,
        ActivationType: ActivationType,
        RapidFundUser: RapidValue,
        otp: otp,
      });

      console.log("responce", responce);
      responce = responce.data.data;
      if (responce == "successfully Upgrade !!") {
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
                    Activate
                  </span>
                </div>
                <div class="justify-content-center mt-2">
                  <ol class="breadcrumb breadcrumb-style3">
                    <li class="breadcrumb-item tx-15">
                      <a href="#">Activation</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Activate
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
                            Activate / Upgrade
                          </h3>
                          <div class="Model_text_inner activation_Item">
                            <div class="rate_item">
                              <span>Activation Wallet Balance</span>
                              <input
                                type="text"
                                id="tokenbalance"
                                value={AdminBalance}
                                BNB
                              />
                            </div>
                             {/* <div class="rate_item">
                              <span>Rapid Fund Balance</span>
                              <input
                                type="text"
                                id="tokenbalance"
                                value={RapidBalance}
                                BUSD
                              />
                            </div>*/}
                          </div>
                        </div>
                      </div>
                      <div class="activation_modal">
                        <div class="popup_net">
                          {/* <span class="metamaskConnection text-center">Please Connect wallet Address!</span> */}

                          <div class="addNum">
                            <div class="btn-list btn_set_item">
                              <a
                                href="javascript:void(0);"
                                onClick={() => {
                                  SetActivationType(1);
                                }}
                                class="btn btn-sm btn-primary"
                              >
                                Activation Wallet
                              </a>

                              {/* <a
                                href="javascript:void(0);"
                                onClick={() => {
                                  SetActivationType(2);
                                }}
                                class="btn btn-sm btn-primary"
                              >
                                Rapid Fund(10%)
                              </a>*/}
                            </div>
                            <div class="trxnumber">
                              <input
                                type="text"
                                readonly=""
                                id="txtactype"
                                value={ActTypeDetails}
                                class="form5"
                              />
                              <span style={{ marginLeft: "10px" }}>
                                Activation Type
                              </span>
                            </div>
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

                            <div class="trxnumber">
                              <input
                                type="text"
                                readonly=""
                                id="txtBNBalue"
                                class="form5"
                                value={AdminValue}
                              />
                              <span style={{ marginLeft: "10px" }}>
                                Activation Wallet
                              </span>
                            </div>

                            {/*<div class="trxnumber">
                              <input
                                type="text"
                                id="txtTokenvalue2"
                                class="form5"
                                value={RapidValue}
                              />
                              <span style={{ marginLeft: "10px" }}>
                                Rapid Fund Wallet
                              </span>
                            </div>*/}

                            {/*{otpvalid == "1" ? (
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
                            )}*/}

                            <div class="btn-list btn_set_item">
                              <a
                                href="javascript:void(0);"
                                onClick={() => {
                                  CalculateAmount(25);
                                }}
                                class="btn btn-sm btn-primary"
                              >
                                {" "}
                                25 $
                              </a>
                              <a
                                href="javascript:void(0);"
                                onClick={() => {
                                  CalculateAmount(50);
                                }}
                                class="btn btn-sm btn-primary"
                              >
                                {" "}
                                50 $
                              </a>

                              <a
                                href="javascript:void(0);"
                                onClick={() => {
                                  CalculateAmount(100);
                                }}
                                class="btn btn-sm btn-primary"
                              >
                                {" "}
                                100 $
                              </a>
                              <a
                                href="javascript:void(0);"
                                onClick={() => {
                                  CalculateAmount(250);
                                }}
                                class="btn btn-sm btn-primary"
                              >
                                {" "}
                                250 $
                              </a>
                              <a
                                href="javascript:void(0);"
                                onClick={() => {
                                  CalculateAmount(500);
                                }}
                                class="btn btn-sm btn-primary"
                              >
                                {" "}
                                500 $
                              </a>
                              <a
                                href="javascript:void(0);"
                                onClick={() => {
                                  CalculateAmount(1000);
                                }}
                                class="btn btn-sm btn-primary"
                              >
                                {" "}
                                1000 $
                              </a>
                              <a
                                href="javascript:void(0);"
                                onClick={() => {
                                  Reset();
                                }}
                                class="btn btn-sm btn-primary"
                              >
                                Reset
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
                                    ) : top_up == 0 ? (
                                      <a
                                        href="#"
                                        onClick={() => {
                                          handleActivation();
                                        }}
                                      >
                                        <div class="activate_btn">
                                          <h4>Activation</h4>
                                        </div>
                                      </a>
                                    ) : (
                                      <a
                                        href="#"
                                        onClick={() => {
                                          handleUpgrade();
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

export default Activate;
