import React, { useEffect, useState } from "react";
import Sidebar from "../Navbar/Sidebar";
import { API } from "../../Redux/API";
import "./Profile.css";
import { toast } from "react-toastify";

function Profile() {
  const user = sessionStorage.getItem("user");
  let ress = JSON.parse(user);
  if (ress == undefined || ress == "" || ress == null) {
    window.location.href = "/login";
  }
  let uId = ress.uid_output;
  const [profile_data, setProfile] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [select, setSelect] = useState("");
  const [update, setUpdate] = useState("");
  const [otp, setOTP] = useState("");
  const [otpvalid, setOTPValid] = useState("0");
  const [wallet, setWallet] = useState("");
  const [Walletaddress, setWalletaddress] = useState("");
  const [country, setCountry] = useState([]);
  const [countryValue, setCountyValue] = useState("");
  // console.log("select", select);

  const hendleName = (event) => {
    let value = event.target.value;
    const newValue = value.replace(/[^A-Za-z]/g, "");
    setName(newValue);
  };

  const hendlePhone = (event) => {
    let value = event.target.value;
    const newValue = value.replace(/[^0-9]/gi, "");
    setPhone(newValue);
  };
  const hendleOTP = (event) => {
    // let value = event.target.value;
    const newValue = event.replace(/[^0-9]/gi, "");
    setOTP(newValue);
  };

  const handleWalletAddress = async (e) => {
    let value = e.target.value;
    setWalletaddress(value);
    // let res = await API.post("Valid_CheckWalletAddress", {
    //   uid: uId,
    //   walletaddress: value,
    // });

    // if (res.data.data == "Valid Address") {
    //   setWallet(value);
    // } else {
    //   setWallet(value);
    //   toast.error(res.data.data, {
    //     className: "copied-message",
    //   });
    // }
  };

  const SendOtp_API = async () => {
    try {
      if (name == "") {
        toast.error("Name Required !!!", {
          className: "copied-message",
        });

        return;
      }

      if (Walletaddress == "") {
        toast.error("Please Enter Wallet Address !!!", {
          className: "copied-message",
        });

        return;
      } else {
        let resulltt = await API.post("Valid_CheckWalletAddress", {
          uid: uId,
          walletaddress: Walletaddress,
        });

        if (resulltt.data.data != "Valid Address") {
          toast.error(resulltt.data.data, {
            className: "copied-message",
          });
          return;
        }
      }
      let res = await API.post("SendOTPProfile", {
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
    } catch (e) {
      console.log("Somthing Error in SendOtp_API", e);
    }
  };

  const profile_API = async () => {
    try {
      let res = await API.get(`/GetUserInformationUser?userId=${uId}`);
      res = res.data.data[0];
      console.log("profile", res);
      setProfile(res);
      setName(res.f_name);
      setEmail(res.email);
      setPhone(res.mobile);
      setWallet(res.Accountaddress);
      setUpdate(res.profileupdate);
      setCountyValue(res.countryid);
      setOTPValid("0");
    } catch (e) {
      console.log("Somthing Error in profile_API", e);
    }
  };

  const Country_Name = async () => {
    // console.log("countryValue", countryValue);
    if (countryValue != "") {
      try {
        let res = await API.get(`getCountry?id=${countryValue}`);
        res = res.data.data;
        console.log("Country_Name", res);
        setCountry(res);
      } catch (e) {
        console.log("Something Error in ", e);
      }
    }
  };

  const profile_Update_API = async () => {
    try {
      let res = await API.post(`/updateprofilenew`, {
        uid: uId,
        f_name: name,
        mobile: phone,
        accountaddress: Walletaddress,
        countryid: select,
        otp: otp,
      });
      res = res.data.data;
      setWallet(Walletaddress);
      console.log("profile_Update_API", res);
      if (res == "Update Successful") {
        toast.success(res);
        setOTPValid(0);
      } else {
        toast.error(res);
      }
    } catch (e) {
      console.log("Somthing Error in profile_Update_API", e);
    }
  };

  useEffect(() => {
    Country_Name();
    profile_API();
  }, [countryValue]);

  return (
    <div className="nft_theme">
      <Sidebar />
      <div className="main-content app-content">
        {/* <!-- container --> */}
        <div className="main-container container-fluid ng-scope">
          {/* <!-- breadcrumb --> */}
          <div className="breadcrumb-header justify-content-between">
            <div className="left-content">
              <span className="main-content-title mg-b-0 mg-b-lg-1">
                Edit Profile
              </span>
            </div>
            <div className="justify-content-center mt-2">
              <ol className="breadcrumb breadcrumb-style3">
                <li className="breadcrumb-item active" aria-current="page">
                  My Profile
                </li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 offset-md-3">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">My Profile</div>
                </div>
                <div className="profile_card_main">
                  <div className="MyProfile_card">
                    {/* <div className='userImg'>
                                            <img src="assets/img/users/user_icon.png" />
                                        </div> */}
                    <div className="userDetail modWidth">
                      <div className="col1">
                        <span>User ID</span>
                        <input
                          disabled="true"
                          style={{ color: "white" }}
                          type="number"
                          name="phone"
                          value={profile_data.uid}
                          placeholder="Enter UserId"
                          readOnly
                        />
                      </div>
                      <div className="col1">
                        <span>User Name</span>
                        <input
                          disabled="true"
                          style={{ color: "white" }}
                          type="text"
                          name="name"
                          value={name}
                          onChange={(e) => hendleName(e)}
                          placeholder="Enter User Name"
                          maxLength={25}
                        />
                      </div>
                      <div className="col1">
                        <span>Email ID</span>
                        <input
                          disabled="true"
                          style={{ color: "white" }}
                          type="email"
                          name="email"
                          value={email}
                          placeholder="Enter Email ID"
                          readOnly
                        />
                      </div>

                      {/* <div className='col1'>
                                                <span>Phone No</span>
                                                <input type="text" name="phone" value={phone} onChange={(e) => hendlePhone(e)} placeholder='Enter Phone Number' maxLength={10} />
                                            </div> */}
                      <div className="col1">
                        <span>USDT Address (BEP20)</span>
                        {wallet != "" ? (
                          <input
                            disabled="true"
                            style={{ color: "white" }}
                            type="text"
                            value={wallet}
                            placeholder="Enter USDT Address (BEP20)"
                          />
                        ) : (
                          <input
                            type="text"
                            maxLength={50}
                            value={Walletaddress}
                            onChange={(e) => {
                              handleWalletAddress(e);
                            }}
                            placeholder="Enter USDT Address (BEP20)"
                          />
                        )}
                      </div>
                      <div className="col1">
                        <span>Country</span>
                        {country.length === 1 ? (
                          <input
                            type="text"
                            name="address"
                            value={country[0].Countryname}
                            placeholder="Enter Wallet Address"
                            readOnly
                          />
                        ) : (
                          <input
                            type="text"
                            name="address"
                            value="INDIA"
                            placeholder="Enter Wallet Address"
                            readOnly
                          />
                          // <select
                          //     id="status"
                          //     onChange={(e) => setSelect(e.target.value)}
                          //     className="floating-input form-control select_bg"
                          //     data-val="true"
                          //     data-val-required="Position is required"
                          // >
                          //     {country.map((item, index) => (
                          //         <option key={item.id} value={item.id}>
                          //             {item.Countryname}
                          //         </option>
                          //     ))}
                          // </select>
                        )}
                      </div>

                      {otpvalid == "1" ? (
                        <div className="col1">
                          <span>OTP</span>
                          <input
                            type="text"
                            name="otp"
                            value={otp}
                            onChange={(e) => hendleOTP(e.target.value)}
                            placeholder="Enter OTP"
                          />
                        </div>
                      ) : (
                        <></>
                      )}

                      {otpvalid === "0" ? (
                        <button
                          className="col-5 mt-3 py-3 wdth_btn btn mb-3"
                          onClick={SendOtp_API}
                          style={{ color: "#000" }}
                        >
                          Send OTP
                        </button>
                      ) : (
                        <button
                          className="col-5 mt-3 py-3 wdth_btn btn mb-3"
                          onClick={profile_Update_API}
                          style={{ color: "#000" }}
                        >
                          Update
                        </button>
                      )}
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
      <div className="main-footer">
        <div className="col-md-12 col-sm-12 text-center">
          <div className="container-fluid pd-t-0 ht-100p">
            {" "}
            Copyright © 2023{" "}
            <a href="#" className="tx-primary">
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

export default Profile;
