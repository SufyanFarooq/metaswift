import React, { useState } from "react";
import Sidebar from "../Navbar/Sidebar";
import { useEffect } from "react";
import { API } from "../../Redux/API";
import Web3 from "web3";

import { Dna } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gif from "../Spinner/loader.gif";

function Staking_Actvation() {
  const user = sessionStorage.getItem("user");
  let ress = JSON.parse(user);
  if (ress == undefined || ress == "" || ress == null) {
    window.location.href = "/login";
  }
  let uId = ress.uid;

  const [select, setSelect] = useState("");
  let [Package_Amount, setPackage_Amount] = useState("0");
  const [loader, setloader] = useState(false);
  const [connected, setconnected] = useState(
    "Wallet is not connected..!..Wait..."
  );
  const [Account, setAccount] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [TokenBal, setTokenBal] = useState(0);
  const [BUSDBal, setBUSDBal] = useState(0);
  const [BNBBal, setBNBBal] = useState(0);
  const [LiveRateBNB, setLiveRateBNB] = useState(0);
  const [LiveRateToken, setLiveRateToken] = useState(0);
  const [WalletAddress, setWalletAddress] = useState();
  const [IsUpgrade, setIsUpgrade] = useState(0);
  const [NetStakeWallet, setNetStakeWallet] = useState(0);
  const [Token20, setToken20] = useState(0);
  const [Token100, setToken100] = useState(0);
  const [rate, setrate] = useState(0);
  const [LiveRateDoradoToken, setLiveRateDoradoToken] = useState(0);

  const metamask = async () => {
    let isConnected = false;
    try {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        isConnected = true;
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        isConnected = true;
      } else {
        isConnected = false;
      }
      if (isConnected === true) {
        const web3 = window.web3;
        let accounts = await web3.eth.getAccounts();
        if (Account !== accounts[0]) {
          setAccount(accounts[0]);
          setconnected("Wallet is connected");
        }

        let chain = await web3.eth.getChainId();
        setChainId(chain);
        if (chain === 56) {
          // handleLogin2(accounts[0]);
        }
        window.ethereum.on("accountsChanged", async function (accounts) {
          if (Account !== accounts[0]) {
            setAccount(accounts[0]);
          }

          let chain = await web3.eth.getChainId();
          setChainId(chain);
          if (chain === 56) {
          }
        });
      }
    } catch (error) {
      console.log("error message", error.message);
    }
  };

  const UsdToBnbLiveRateApi = async () => {
    let res = await API.get(`/convertUsdToBnb?amount=1`);
    console.log("UsdToBnbLiveRateApi", Number(res.data.data[0][0].bnb));
    setLiveRateBNB(Number(res.data.data[0][0].bnb));
  };

  // Live Baby Doge Token
  const UsdToTokenLiveRateApi = async () => {
    let res = await API.get(`/Live_Rate_BabyDoge`);
    console.log("UsdToTokenLiveRateApi", res.data.data[0].usdperunit);
    setLiveRateToken(Number(res.data.data[0].usdperunit));
  };

  const [liveRateUSD, setLiveRateUSD] = useState("");
  // Live Dorado Token
  const UsdToDoradoTokenLiveRateApi = async () => {
    let res = await API.get(`/convertUsdToBusd?amount=1`);
    console.log("UsdToDoradoTokenLiveRateApi", res.data.data[0][0].busd);
    console.log("TokenToUSD", 1 / parseFloat(res.data.data[0][0].busd));
    setLiveRateDoradoToken(Number(res.data.data[0][0].busd));
    setLiveRateUSD(1 / parseFloat(res.data.data[0][0].busd));
  };
  let data = parseFloat(liveRateUSD);

  const getBetaWallet = async () => {
    try {
      const res = await API.get(`/DashboardDetails?uid=${uId}`);
      console.log("walletAddress db ", res.data.data[0].walletAddress);
      setWalletAddress(res.data.data[0].walletAddress);

      setIsUpgrade(res.data.data[0].package);
      //
      setNetStakeWallet(res.data.data[0].netStakingWallet);

      // setLoading(false);
    } catch (e) {
      console.log("error", e);
      // setLoading(false);
    }
  };

  const setSelectToken = async (value) => {
    setToken20(0);
    setToken100(0);
    setPackage_Amount(0);
    if (value == "") {
      setSelect("");
    } else if (value == "0") {
      setSelect("0");
      setrate("20");
    } else if (value == "1") {
      setSelect("1");
      setrate("40");
    } else if (value == "2") {
      setSelect("2");
      setrate("80");
    }
  };

  // console.log("Package_Amount====>", Package_Amount);

  const [errorMessage, setErrorMessage] = useState("");
  const setEnterPackageAmount = async (value) => {
    // if(Package_Amount == 10){
    setPackage_Amount(value);
    // }
    // else{

    // }
    let Doradovalue = value;

    //  toast.error(value);
    //  if(Package_Amount > 10){
    if (select == "") {
      toast.error("Select Staking Days", {
        className: "copied-message",
      });
      setPackage_Amount(0);
      setToken20(0);
      setToken100(0);
    } else if (select == "0") {
      value = (1 / LiveRateToken) * value * 2;
      let value20 = parseInt(value) * 0.2;
      let value100 = parseInt(value); //+parseInt(value20);
      setToken20(parseInt(Doradovalue) + parseInt(Doradovalue) * 0.2);
      setToken100(value100);
    } else if (select == "1") {
      value = (1 / LiveRateToken) * value * 5;
      let value20 = parseInt(value) * 0.4;
      let value100 = parseInt(value); //+parseInt(value20);
      setToken20(parseInt(Doradovalue) + parseInt(Doradovalue) * 0.4);
      setToken100(value100);
    } else if (select == "2") {
      value = (1 / LiveRateToken) * value * 10;
      let value20 = parseInt(value) * 0.8;
      let value100 = parseInt(value); //+parseInt(value20);
      setToken20(parseInt(Doradovalue) + parseInt(Doradovalue) * 0.8);
      setToken100(value100);
    }
    // }
    // else{
    //   setErrorMessage('10 minimum DRD Tokens and Multiple of 10 DRD Tokens Required to Receive Staking Benefits');
    // }
  };

  const handleReset = async () => {
    setToken20(0);
    setToken100(0);
    setPackage_Amount(0);
  };

  //handleStake
  const handleStake = async () => {
    if (Package_Amount >= 1) {
      try {
        console.log("amount", Package_Amount);

        setloader(true);

        let address = WalletAddress; //Login User Address
        let uid = uId; //Login User aId

        if (
          Package_Amount == "0" ||
          Package_Amount == "" ||
          Package_Amount == undefined
        ) {
          toast.error("Please Enter Token Amount !!!", {
            className: "copied-message",
          });
          setloader(false);
          return;
        }

        if (select == "") {
          toast.error("Please Select Staking Days !!!", {
            className: "copied-message",
          });
          setloader(false);
          return;
        }

        if (parseInt(NetStakeWallet) < parseInt(Package_Amount)) {
          toast.error("Stake Wallet balance insufficient !!!", {
            className: "copied-message",
          });
          setloader(false);
          return;
        }

        if (Account == undefined || Account == "") {
          toast.error("Please connect wallet !!!", {
            className: "copied-message",
          });

          setloader(false);
          return;
        }

        if (address.toUpperCase() != Account.toUpperCase()) {
          toast.error("Wallet address and login miss match", {
            className: "copied-message",
          });

          setloader(false);
          return;
        }

        // Check_Staking_Condition
        let responceEligible = await API.post(`/Check_Staking_Condition`, {
          uid: uid,
        });
        console.log("responceEligible", responceEligible);

        responceEligible = responceEligible.data.data;
        if (responceEligible != "Success") {
          toast.error(responceEligible, {
            className: "copied-message",
          });
          setloader(false);
          return;
        }

        try {
          let responce = await API.post(`/staking`, {
            uid: uid,
            token: Package_Amount,
            days: select == "0" ? "30" : select == "1" ? "60" : "120",
          });

          console.log("responce", responce);

          responce = responce.data.data;
          if (responce == "successfully !!") {
            toast.success("Stake Activation Successfull ", {
              className: "copied-message",
            });
            window.location.reload();
          } else {
            toast.error(responce, {
              className: "copied-message",
            });
            window.location.reload();
          }
        } catch (e) {
          console.log("error", e);

          toast.error("Something went wrong ! ", {
            className: "copied-message",
          });
        }
      } catch (error) {
        console.log("error", error);

        setloader(false);
      }
    } else {
      toast.error(
        "1 minimum DRD Tokens and Multiple of 1 DRD Tokens Required to Receive Staking Benefits",
        {
          className: "copied-message",
        }
      );
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setAccount("");
      metamask();
      // LiveContractBalance();
      UsdToBnbLiveRateApi();
      UsdToTokenLiveRateApi();
      getBetaWallet();
      UsdToDoradoTokenLiveRateApi();
    });
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
                    Staking
                  </span>
                </div>
                <div class="justify-content-center mt-2">
                  <ol class="breadcrumb breadcrumb-style3">
                    <li class="breadcrumb-item tx-15">
                      <a href="#">Staking</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Staking
                    </li>
                  </ol>
                </div>
              </div>
              {/* <!-- /breadcrumb --> */}

              <div class="row" style={{ marginTop: "0rem" }}>
                <div class="col-md-4"></div>
                <div class="col-md-4 card1">
                  <div class="" role="document">
                    <div class="modal-content10">
                      <div class="" style={{ paddingBottom: "10px" }}>
                        <div class="avlbal">
                          <h2
                            id="exampleModal3Label2"
                            style={{ textAlign: "center" }}
                          >
                            Stake and Get Great Rewards
                          </h2>

                          <div class="Model_text_inner staking_Item">
                            <div className="rate_item">
                              {/* <div class="rate_item">
                                                <span>Baby Doge Live Rate : </span>
                                                <span type="text" id="" >{LiveRateToken} DRD Token
                                                 / {LiveRateBNB} BNB
                                                 </span>
                                            </div> */}
                              <div class="rate_item">
                                <span>1 BUSD : </span>
                                <span type="text" id="">
                                  {LiveRateDoradoToken} DRD
                                  {/* / {LiveRateBNB} BNB */}
                                </span>
                              </div>
                              <div class="rate_item">
                                <span>1 Dorado : </span>
                                <span type="text" id="">
                                  {data.toFixed(4)} BUSD
                                  {/* / {LiveRateBNB} BNB */}
                                </span>
                              </div>
                              {/* <div class="rate_item">
                                                <span>DRD Available</span>
                                                <input type="text" id="txtchangevalue" value={TokenBal}  radonly=""/>
                                            </div>  */}
                              <div class="rate_item">
                                <span>Stake My DRD</span>
                                <input
                                  type="text"
                                  id="txtchangevalue"
                                  value={NetStakeWallet}
                                  radonly=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="activation_modal">
                        <div class="popup_net">
                          {connected ==
                          "Wallet is not connected..!..Wait..." ? (
                            <p className="peera2" style={{ color: "red" }}>
                              {connected}
                            </p>
                          ) : connected == "Wallet is locked" ? (
                            <p className="peera2" style={{ color: "red" }}>
                              {connected}
                            </p>
                          ) : (
                            <p className="peera2" style={{ color: "green" }}>
                              {connected}
                            </p>
                          )}
                          <div class="set_column staking_mx_wdth cstm_cheveron">
                            <label>Select Staking Days </label>
                            <span></span>
                            <select
                              id="status"
                              onChange={(e) => setSelectToken(e.target.value)}
                              class="floating-input form-control select_bg"
                              data-val="true"
                              data-val-required="Position is required"
                            >
                              <option value="">Select Days</option>
                              <option value="0">30 Days</option>
                              <option value="1">60 Days</option>
                              <option value="2">120 Days</option>
                            </select>
                          </div>
                          <div class="addNum">
                            <div class="trxnumber">
                              <input
                                type="text"
                                id="txtamount2"
                                class="form5"
                                onChange={(e) => {
                                  setEnterPackageAmount(e.target.value);
                                }}
                                value={Package_Amount}
                              />
                              {/* {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} */}
                              <span style={{ marginLeft: "10px" }}>
                                Dorado Token
                              </span>
                            </div>
                            <div class="trxnumber">
                              <input
                                type="text"
                                readonly=""
                                id=""
                                value={Token20}
                                class="form5"
                              />

                              <span style={{ marginLeft: "10px" }}>
                                {" "}
                                {rate} % Extra DRD
                              </span>
                            </div>
                            <div class="trxnumber">
                              <input
                                type="text"
                                readonly=""
                                id=""
                                class="form5"
                                value={Token100}
                              />
                              <span style={{ marginLeft: "10px" }}>
                                Baby Doge Reward
                              </span>
                            </div>
                            <div class="btn-list btn_set_item">
                              <a
                                href="javascript:void(0);"
                                class="btn btn-sm bdr_reset_btn"
                                onClick={() => {
                                  handleReset();
                                }}
                              >
                                Reset
                              </a>
                            </div>
                            <input
                              type="hidden"
                              id="packageamount"
                              name="name"
                              autocomplete="off"
                            />
                          </div>
                          <div class="row">
                            <div class="col-md-12">
                              <a
                                href="#"
                                onClick={() => {
                                  handleStake();
                                }}
                              >
                                <div class="activate_btn bdr_reset_btn">
                                  <img
                                    src="Assetshome/img/favicon/favicon-32x32.png"
                                    class="img-fluid"
                                  />
                                  <h4>Activation</h4>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4"></div>
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
      </div>
    </div>
  );
}

export default Staking_Actvation;
