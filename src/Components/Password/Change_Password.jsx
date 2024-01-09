import React from "react";
import Sidebar from "../Navbar/Sidebar";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API } from "../../Redux/API";
import { Dna } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../Spinner/Spinner";

function Change_Password() {
  const user = sessionStorage.getItem("user");
  let ress = JSON.parse(user);
  if (ress == undefined || ress == "" || ress == null) {
    window.location.href = "/login";
  }
  let uId = ress.uid_output;

  const [loader, setloader] = useState(false);
  const [OldPassword, setOldPassword] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfiemPassword] = useState("");
  const [otp, setOTP] = useState("");
  const [otpvalid, setOTPValid] = useState("0");

  const SendOtp_API = async () => {
    try {
      // setOTPValid(1)
      // if (OldPassword == "") {
      //     toast.error("Please Enter Old Password !!!", {
      //         className: 'copied-message',
      //     });
      //     setloader(false);
      //     return;
      // }
      if (NewPassword == "" || NewPassword.length < 6) {
        toast.error("Password minimum length 6 !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }
      if (NewPassword !== confirmPassword) {
        toast.error("Confirm Password not matched !!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      let res = await API.post("SendOTPforChangePassword", {
        uid: uId,
      });
      res = res.data.data;
      console.log("SendOtp_API", res);
      if (res.result == "Correct Email ID !!") {
        toast.success("OTP Send Successfully !!");
        setOTPValid(1);
      } else {
        toast.error(res.result);
      }
    } catch (e) {
      console.log("Somthing Error in SendOtp_API", e);
    }
  };

  const hendleOTP = (event) => {
    // let value = event.target.value;
    const newValue = event.replace(/[^0-9]/gi, "");
    setOTP(newValue);
  };

  //handlerWithdrawl
  const handlerWithdrawl = async () => {
    try {
      setloader(true);

      let uid = uId; //Login User aId
      if (NewPassword !== confirmPassword) {
        toast.error("Confirm Password not matched !!");
      } else {
        try {
          let responce = await API.post(`/ChangePasswordnew`, {
            uid: uid,
            password: NewPassword,
            otp: otp,
          });

          console.log("responce", responce);

          responce = responce.data.data;
          if (responce == "Update Successfull") {
            toast.success("Update Successful", {
              className: "copied-message",
            });
            setOTPValid(0);
          } else {
            toast.error(responce, {
              className: "copied-message",
            });
          }
        } catch (e) {
          console.log("error", e);

          toast.error("Something went wrong ! ", {
            className: "copied-message",
          });
          toast.error("Something went wrong ! ", {
            className: "copied-message",
          });
        }
      }
    } catch (error) {
      console.log("error", error);

      setloader(false);
    }
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
                Change Password
              </span>
            </div>
            <div class="justify-content-center mt-2">
              <ol class="breadcrumb breadcrumb-style3">
                <li class="breadcrumb-item tx-15">
                  <a href="#">Change Password</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Change Password
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
                  Change Password
                </h2>

                <div class="col-11 mt-3 row align-items-center">
                  <p class="col-5 m-0 p-0">User ID</p>
                  <input
                    type="text"
                    class="p-2 profile-border col-7"
                    value={uId}
                    readOnly
                  />
                </div>

                {/* <div class="col-11 mt-3 row align-items-center">
                                    <p class="col-5 m-0 p-0">Old Password</p>
                                    <input type="password" class="p-2 profile-border col-7" value={OldPassword}
                                        onChange={(e) => { setOldPassword(e.target.value) }} />
                                </div> */}
                <div class="col-11 mt-3 row align-items-center">
                  <p class="col-5 m-0 p-0">New Password</p>
                  <input
                    maxlength={8}
                    type="password"
                    class="p-2 profile-border col-7"
                    value={NewPassword}
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                    }}
                  />
                </div>
                <div class="col-11 mt-3 row align-items-center">
                  <p class="col-5 m-0 p-0">Confirm Password</p>
                  <input
                  maxlength={8}
                    type="password"
                    class="p-2 profile-border col-7"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfiemPassword(e.target.value);
                    }}
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
                  <button
                    class="col-5 mt-3 py-3 wdth_btn btn mb-3"
                    onClick={() => SendOtp_API()}
                    style={{ color: "#000" }}
                  >
                    Send OTP
                  </button>
                ) : (
                  <button
                    class="col-5 mt-3 py-3 wdth_btn btn mb-3"
                    onClick={() => {
                      handlerWithdrawl();
                    }}
                    style={{ color: "#000" }}
                  >
                    Update
                  </button>
                )}
              </div>
            </div>
          </div>
          {/* <!-- row closed --> */}
        </div>
        {/* <!-- /Container --> */}
      </div>
    </div>
  );
}

export default Change_Password;
