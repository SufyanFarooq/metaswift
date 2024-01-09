import React, { useState, useEffect } from "react";
import Sidebar from "../Navbar/Sidebar";

import { toast } from "react-toastify";
import { loadWeb4 } from "../../api2.js";
import { API } from "../../Redux/API";
import Web3 from "web3";
import { Dna } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../Spinner/Spinner";

function Reward_Withdrawal() {
  const user = sessionStorage.getItem("user");
  let ress = JSON.parse(user);
  if (ress == undefined || ress == "" || ress == null) {
    window.location.href = "/login";
  }
  let uId = ress.uid;

  let [Amount, setAmount] = useState("0");
  const [loader, setloader] = useState(false);
  const [connected, setconnected] = useState(
    "MetaMask is not connected..!..Wait..."
  );
  const [Account, setAccount] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [LiveRateBNB, setLiveRateBNB] = useState(0);
  const [LiveRateToken, setLiveRateToken] = useState(0);
  const [WalletAddress, setWalletAddress] = useState();
  const [NetStakeWallet, setNetStakeWallet] = useState(0);
  const [Boosterroiincome, setBoosterroiincome] = useState(0);
  const [directIncome, setDirectIncome] = useState(0);
  const [RoiIncome, setRoiIncome] = useState(0);
  const [BinaryIncome, setBinaryIncome] = useState(0);
  const [RewardIncome, setRewardIncome] = useState(0);

  const [TotalIncome, setTotalIncome] = useState(0);
  const [TotalWithdrawl, setTotalWithdrawl] = useState(0);
  const [Netbal, setNetBal] = useState(0);
  const [TokenAmount, setTokenAmount] = useState(0);

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

  const UsdToTokenLiveRateApi = async () => {
    let res = await API.get(`/convertUsdToBusd?amount=1`);
    console.log("UsdToTokenLiveRateApi", Number(res.data.data[0][0].busd));
    setLiveRateToken(Number(res.data.data[0][0].busd));
  };

  const getBetaWallet = async () => {
    try {
      let res = await API.get(`/DashboardDetails?uid=${uId}`);
      console.log("res", res);
      res = res.data.data[0];
      setWalletAddress(res.walletAddress);
      // setRoiIncome(res.roiincome)
      // setBoosterroiincome(res.Boosterroiincome)
      setRewardIncome(res.RewardTotal);
      setTotalIncome(res.RewardTotal);
      setTotalWithdrawl(res.RewardWithdrawal);
      setNetBal(res.RewardNet);

      // setLoading(false);
    } catch (e) {
      console.log("error", e);
      // setLoading(false);
    }
  };

  //handlerWithdrawl
  const handlerWithdrawl = async () => {
    try {
      setloader(true);

      let address = WalletAddress; //Login User Address
      let uid = uId; //Login User aId

      if (Amount == "0" || Amount == "" || Amount == undefined) {
        toast.error("Please Enter Amount !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      if (parseInt(Netbal) < parseInt(Amount)) {
        toast.error("Wallet balance insufficient !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      if (Account == undefined || Account == "") {
        toast.error("Please connect Metamask wallet !!!", {
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

      // let TokenAmount=(Amount/2) * LiveRateToken;
      let TokenAmount = Amount;
      try {
        let responce = await API.post(`/RewardWithdrawal`, {
          uid: uid,
          amount: Amount,
          token: TokenAmount,
        });

        console.log("responce", responce);

        responce = responce.data.data;
        toast.error(responce, {
          className: "copied-message",
        });
        // window.location.reload();
        // toast.success("responce");
      } catch (e) {
        console.log("error", e);

        toast.error("Something went wrong ! ", {
          className: "copied-message",
        });
        toast.error("Something went wrong ! ", {
          className: "copied-message",
        });
      }
    } catch (error) {
      console.log("error", error);

      setloader(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setAccount("");
      metamask();
      UsdToBnbLiveRateApi();
      UsdToTokenLiveRateApi();
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
              <span class="main-content-title mg-b-0 mg-b-lg-1">
                Reward Withdrawal
              </span>
            </div>
            <div class="justify-content-center mt-2">
              <ol class="breadcrumb breadcrumb-style3">
                <li class="breadcrumb-item tx-15">
                  <a href="#">Withdrawal</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Reward Withdrawal
                </li>
              </ol>
            </div>
          </div>
          {/* <!-- /breadcrumb --> */}

          <div class="col-12 d-flex justify-content-center py-5">
            <div class="col-md-6 col-lg-5 col-xxl-4 col-10 width-mg  card1">
              <div
                class="d-flex flex-column align-items-center profile-border profile-login  py-4 shadow-withdraw"
                id="withdraw-inp"
              >
                <h2 class="h-color col-12 py-2 px-4 border_bottom">
                  Reward Withdrawal
                </h2>
                {/* <h2 class="h-color col-12 py-2 px-4 border_bottom">Working Withdrawal</h2> */}
                {connected == "MetaMask is not connected..!..Wait..." ? (
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

                <div class="col-11 mt-3 row align-items-center">
                  <p class="col-5 m-0 p-0">Reward Income</p>
                  <input
                    type="text"
                    class="p-2 profile-border col-7"
                    value={RewardIncome}
                  />
                </div>
                <div class="col-11 mt-3 row align-items-center">
                  <p class="col-5 m-0 p-0">Total Income</p>
                  <input
                    type="text"
                    class="p-2 profile-border col-7"
                    value={TotalIncome}
                  />
                </div>
                <div class="col-11 mt-3 row align-items-center">
                  <p class="col-5 m-0 p-0">Total Withdrawal</p>
                  <input
                    type="text"
                    class="p-2 profile-border col-7"
                    value={TotalWithdrawl}
                  />
                </div>
                <div class="col-11 mt-3 row align-items-center">
                  <p class="col-5 m-0 p-0">Wallet Net BUSD Value</p>
                  <input
                    type="text"
                    class="p-2 profile-border col-7"
                    value={Netbal}
                  />
                </div>
                <div class="col-11 mt-3 row align-items-center">
                  <p class="col-5 m-0 p-0">Enter BUSD Amount</p>
                  <input
                    type="text"
                    class="p-2 profile-border col-7"
                    maxlength="10"
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                  />
                </div>
                {/* <div class="col-11 mt-3 row align-items-center">
                            <p class="col-5 m-0 p-0">Dorado Token</p>
                            <input type="text" class="p-2 profile-border col-7" readOnly value={(Amount/2) * LiveRateToken} />
                        </div>
                        <div class="col-11 mt-3 row align-items-center">
                            <p class="col-5 m-0 p-0">BNB</p>
                            <input type="text" class="p-2 profile-border col-7" readOnly value={(Amount/2) * LiveRateBNB} />
                        </div> */}

                {/* <button class="col-5 mt-3 py-3 wdth_btn btn mb-3" style={{color:"#000"}}
                        onClick={()=>{handlerWithdrawl()}}>Withdrawal</button> */}
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

export default Reward_Withdrawal;
