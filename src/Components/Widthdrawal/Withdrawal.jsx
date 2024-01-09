import React from "react";
import Sidebar from "../Navbar/Sidebar";
import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { loadWeb4 } from "../../api2.js";
import { API } from "../../Redux/API";
import Web3 from "web3";

import { Dna } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../Spinner/Spinner";
import WalletModal from "../WallletModal/WalletModal.jsx";

function Withdrawal() {
  const user = sessionStorage.getItem("user");
  let ress = JSON.parse(user);
  if (ress == undefined || ress == "" || ress == null) {
    window.location.href = "/login";
  }
  let uId = ress.uid_output;

  const [select, setSelect] = useState("");
  let [Amount, setAmount] = useState("0");
  const [loader, setloader] = useState(false);
  const [otp, setOTP] = useState("");
  const [otpvalid, setOTPValid] = useState("0");
  const [TotalWithdrawl, setTotalWithdrawl] = useState(0);
  const [Netbal, setNetBal] = useState(0);
  const [TokenAmount, setTokenAmount] = useState(0);
  const [waddress, setwaddress] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [Modaldata,setModalData]=useState(null)

  const handleOpenModal=()=>{
    setIsModalVisible(true)
    setModalData(waddress)
  }
  const handleCloseModal=()=>{
    setIsModalVisible(false)
    setModalData(null);
  }

  const handleSendOTP=()=>{
    SendOtp_API();
    handleCloseModal();
  }

  const SendOtp_API = async () => {
    try {
      if (waddress == "") {
        toast.error("Update your Withdrawal Address !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }
      if (Amount == "0" || Amount == "" || Amount == undefined) {
        toast.error("Please Enter Amount !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }
      // setOTPValid(1)
      let res = await API.post("SendOTPforWithdrawal", {
        uid: uId,
      });
      res = res.data.data;
      console.log("SendOtp_API", res);
      if (res.result == "Correct Email ID !!") {
        setOTPValid(1);
        toast.success("OTP Send Successfully !!");
      } else {
        toast.error(res.result);
      }
      //   setOTPValid(1)
    } catch (e) {
      console.log("Somthing Error in SendOtp_API", e);
    }
  };

  const hendleOTP = (event) => {
    // let value = event.target.value;
    const newValue = event.replace(/[^0-9]/gi, "");
    setOTP(newValue);
  };

  const getBetaWallet = async () => {
    try {
      let res = await API.get(`/DashboardDetails?uid=${uId}`);
      console.log("res", res);
      res = res.data.data[0];
      setTotalWithdrawl(res.Net_Balance);
      setNetBal(res.Net_Balance);
      setwaddress(res.btcaddress);

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
      let uid = uId; //Login User aId

      if (Amount == "0" || Amount == "" || Amount == undefined) {
        toast.error("Please Enter Amount !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      try {
        let responce = await API.post(`/Withdrawalnew`, {
          uid: uid,
          address: "",
          amount: Amount,
          tokenvalue: Amount,
          txn: "",
          type: Netbal,
          otp: otp,
        });

        console.log("responce", responce);

        responce = responce.data.data;
        if (responce == "SUCCESSFUL") {
          toast.success(responce);
          setOTPValid(0);
          window.location.reload();
        } else {
          toast.error(responce);
        }
        // window.location.reload();
        // toast.success("responce");
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
  };

  useEffect(() => {
    setTimeout(() => {
      getBetaWallet();
    });
  }, []);

  const handleInput = (event) => {
    event.target.value = event.target.value.replace(/[^0-9]/g, "").substring(0, 8);
    setAmount(event.target.value);
  };
  

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
                {" "}
                Withdrawal
              </span>
            </div>
            <div class="justify-content-center mt-2">
              <ol class="breadcrumb breadcrumb-style3">
                <li class="breadcrumb-item tx-15">
                  <a href="#">Withdrawal</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Withdrawal
                </li>
              </ol>
            </div>
          </div>
          {/* <!-- /breadcrumb --> */}

          <div class="col-12 d-flex justify-content-center py-5 ">
            <div class="col-md-6 col-lg-5 col-xxl-4 col-10 width-mg card1">
              <div
                class="d-flex flex-column align-items-center profile-border profile-login  py-4 shadow-withdraw"
                id="withdraw-inp"
              >
                <h2 class="h-color col-12 py-2 px-4 border_bottom">
                  {" "}
                  Withdrawal
                </h2>

                {/* <div class="col-11 mt-3 row align-items-center">
                  <p class="col-5 m-0 p-0">Total Withdrawal</p>
                  <input type="text" class="p-2 profile-border col-7" value={TotalWithdrawl} />
                </div> */}
                <div class="col-11 mt-3 row align-items-center">
                  <p class="col-5 m-0 p-0">Withdrawal Address</p>
                  <input
                    type="text"
                    class="p-2 profile-border col-7"
                    value={waddress}
                  />
                </div>
                <div class="col-11 mt-3 row align-items-center">
                  <p class="col-5 m-0 p-0">Wallet Net USDT Value</p>
                  <input
                    type="text"
                    class="p-2 profile-border col-7"
                    value={Netbal}
                  />
                </div>

                <div class="col-11 mt-3 row align-items-center">
                  <p class="col-5 m-0 p-0">Enter USD Amount</p>
                  <input
                    type="number"
                    class="p-2 profile-border col-7"
                    maxlength="10"
                    onChange={handleInput}
                  />
                </div>
                {otpvalid == "1" ? (
                  <div class="col-11 mt-3 row align-items-center">
                    <p class="col-5 m-0 p-0">OTP</p>
                    <input
                      type="text"
                      class="p-2 profile-border col-7"
                      maxlength="10"
                      value={otp}
                      onChange={(e) => hendleOTP(e.target.value)}
                    />
                  </div>
                ) : (
                  <></>
                )}
                {otpvalid == "0" ? (
                  // <button
                  //   class="col-5 mt-3 py-3 wdth_btn btn mb-3"
                  //   onClick={() => SendOtp_API()}
                  //   style={{ color: "#000" }}
                  // >
                  //   Send Otp
                  // </button>

                  <button
                    class="col-5 mt-3 py-3 wdth_btn btn mb-3"
                    onClick={ handleOpenModal}
                    style={{ color: "#000" }}
                  >
                    Proceed
                  </button>
                ) : (
                  <button
                    class="col-5 mt-3 py-3 wdth_btn btn mb-3"
                    onClick={() => {
                      handlerWithdrawl();
                    }}
                    style={{ color: "#000" }}
                  >
                    Withdrawal
                  </button>
                )}


              </div>
            </div>
          </div>
          {isModalVisible&&<WalletModal
            open={isModalVisible}
            data={Modaldata}
            onClose={handleCloseModal}
            sendOtp={handleSendOTP}
          />}
          {/* <!-- row closed --> */}
        </div>
        {/* <!-- /Container --> */}
      </div>
    </div>
  );
}

export default Withdrawal;
