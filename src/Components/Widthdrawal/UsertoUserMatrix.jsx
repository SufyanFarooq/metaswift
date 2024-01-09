import React, { useState, useEffect } from "react";
import Sidebar from "../Navbar/Sidebar.jsx";

import { toast } from "react-toastify";
import { loadWeb4 } from "../../api2.js";
import { API } from "../../Redux/API.js";
import Table from "../Table/Table";
import Table_Buttons from "../Table_Buttons/Table_Button";
import Web3 from "web3";
import { Dna } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../Spinner/Spinner.jsx";

function UserToUserMatrix() {
  const user = sessionStorage.getItem("user");
  let ress = JSON.parse(user);
  if (ress == undefined || ress == "" || ress == null) {
    window.location.href = "/login";
  }
  let uId = ress.uid_output;

  const [loader, setloader] = useState(false);
  const [WalletAddress, setWalletAddress] = useState();
  const [RoiIncome, setRoiIncome] = useState(0);
  const [otpvalid, setOTPValid] = useState("0");
  const [otp, setOTP] = useState("");
  const [amountData, setAmountData] = useState("");
  const [TransId, setTransId] = useState("");
  const [TransIdName, setTransIdName] = useState("");
  const [Report, setReport] = useState(1);
  const [userid, setUserId] = useState(uId);
  const [referralApi, setreferralApi] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [listPerpage, setlistPerpage] = useState(10);

  const [referralApi1, setreferralApi1] = useState([]);
  const [currentPage1, setcurrentPage1] = useState(1);
  const [listPerpage1, setlistPerpage1] = useState(10);

  const getBetaWallet = async () => {
    try {
      let res = await API.get(`/DashboardDetails?uid=${uId}`);
      console.log("res", res);
      res = res.data.data[0];
      setRoiIncome(res.Totalmatrix_Balance);
    } catch (e) {
      console.log("error", e);
      // setLoading(false);
    }
  };

  const Hendle_Id = async (event) => {
    const newValue = event.replace(/[^0-9]/gi, "");
    setTransId(newValue);

    let res1 = await API.post("/Valid_CheckUserId", {
      uid: newValue,
    });
    res1 = res1.data.data;
    if (newValue == "") {
      setTransIdName("Invalid Id");
    } else if (res1 != "wrongid") {
      setTransIdName(" (" + res1 + ")");
    } else {
      setTransIdName("Invalid Id");
    }
  };

    
  const handleInput = (event) => {
    event.target.value = event.target.value.replace(/[^0-9]/g, "").substring(0, 8);
    setAmountData(event.target.value);
  };

  const hendleOTP = (event) => {
    // let value = event.target.value;
    const newValue = event.replace(/[^0-9]/gi, "");
    setOTP(newValue);
  };

  const SendOtp_API = async (value) => {
    console.log("SendOtp_API", value);
    try {
      let res1 = await API.post("/Valid_CheckUserId", {
        uid: TransId,
      });
      res1 = res1.data.data;
      console.log("validId?", res);
      if (res1 == "wrongid") {
        toast.success("Enter Correct Id !!");
        setTransId(0);
        return;
      }

      let res = await API.post("/SendOTPformatrixwallettransfer", {
        uid: value,
      });
      res = res.data.data;
      console.log("SendOtp_API", res);
      if (res.result == "Correct Email ID !!") {
        toast.success("OTP Send Successfully !!");
        setOTPValid(1);
      }
    } catch (e) {
      console.log("Somthing Error in SendOtp_API", e);
    }
  };

  //handlerWithdrawl
  const UserToUser_API = async () => {
    console.log("UserToUser_API===>", uId, TransId);
    try {
      setloader(true);
      let uid = uId; //Login User aId
      if (TransId == "" || TransId.length < 6) {
        toast.error("Transfer Id Invalid !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }
      if (amountData == "0" || amountData == "" || amountData == undefined) {
        toast.error("Please Enter Amount !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      // if (otpvalid == "0") {
      //   toast.error("Please Check OTP !!!", {
      //     className: "copied-message",
      //   });
      //   setloader(false);
      //   return;
      // }

      try {
        let responce = await API.post(`/UserToUserMatrxiFundTransfer`, {
          uid: uid,
          pswddd: "",
          touser_id: TransId,
          amount: amountData,
          otp: otp,
        });

        console.log("responce", responce);

        responce = responce.data.data;

        if (responce == "SUCCESSFUL") {
          toast("Fund Transfer Successfully", {
            className: "copied-message",
          });
          window.location.reload();
        } else {
          toast(responce, {
            className: "copied-message",
          });
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
  };

  useEffect(() => {
    setTimeout(() => {
      getBetaWallet();
    });
  }, []);

  const Binary_Income = async () => {
    try {
      let responce = await API.get(
        `/MarixWalletstatementUser_New?uid=${userid}&type=1`
      );
      responce = responce.data.data;
      console.log("res---->", responce);

      setreferralApi([]);

      let arr = [];
      responce.forEach((item, index) => {
        arr.push({
          sr: index + 1,
          user_id: item.Fromid,
          amount: `$ ${item.DeductFund}`,
          edate: ` ${item.edate1} `,
          remark: item.Remark,
        });
      });

      setreferralApi(arr);
    } catch (e) {
      console.log("Something Error", e);
    }
  };

  const Received_history = async () => {
    try {
      let responce = await API.get(
        `/MarixWalletstatementUser_New?uid=${userid}&type=2`
      );
      responce = responce.data.data;
      console.log("res111", responce);

      setreferralApi1([]);

      let arr = [];
      responce.forEach((item, index) => {
        arr.push({
          sr: index + 1,
          user_id: item.Fromid,
          amount: `$ ${item.AddFund}`,
          edate: ` ${item.edate1} `,
          remark: item.Remark,
        });
      });

      setreferralApi1(arr);
    } catch (e) {
      console.log("Something Error", e);
    }
  };

  useEffect(() => {
    Binary_Income();
    Received_history();
  }, []);

  const indexOfLastPost = currentPage * listPerpage;
  const indexOfFirstPage = indexOfLastPost - listPerpage;
  const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost);

  var [matching_income, set_matching_income] = new useState({
    cols: [
      { Header: "S.No", accessor: "sr" },
      { Header: "Transfer To", accessor: "user_id" },
      { Header: "Transfer Fund", accessor: "amount" },
      { Header: "Date & Time", accessor: "edate" },
      { Header: "Remark", accessor: "remark" },
    ],
  });

  const indexOfLastPost1 = currentPage1 * listPerpage1;
  const indexOfFirstPage1 = indexOfLastPost1 - listPerpage1;
  const currentPost1 = referralApi1.slice(indexOfFirstPage1, indexOfLastPost1);

  var [matching_income1, set_matching_income1] = new useState({
    cols: [
      { Header: "S.No", accessor: "sr" },
      { Header: "Received From", accessor: "user_id" },
      { Header: "Received Fund", accessor: "amount" },
      { Header: "Date & Time", accessor: "edate" },
      { Header: "Remark", accessor: "remark" },
    ],
  });

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
                Transfer Matrix Fund
              </span>
            </div>
            <div class="justify-content-center mt-2">
              <ol class="breadcrumb breadcrumb-style3">
                <li class="breadcrumb-item tx-15">
                  <a href="#">Tranfer Fund</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Transfer Matrix Fund
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
                  Transfer Matrix Fund
                </h2>

                <div class="col-11 mt-3 row align-items-center">
                  <p class="col-5 m-0 p-0">Available Balance</p>
                  <input
                    type="text"
                    class="p-2 profile-border col-7"
                    value={RoiIncome}
                  />
                </div>
                <div class="col-11 mt-3 row align-items-center">
                  <p class="col-5 m-0 p-0">Enter Transfer Id</p>
                  <input
                    // readOnly="true"
                    type="text"
                    class="p-2 profile-border col-7"
                    value={TransId}
                    onChange={(e) => Hendle_Id(e.target.value)}
                  />
                </div>
                {TransIdName == "Invalid Id" ? (
                  <h4 style={{ color: "red" }}>{TransIdName}</h4>
                ) : (
                  <h4 style={{ color: "green" }}>{TransIdName}</h4>
                )}
                <div class="col-11 mt-3 row align-items-center">
                  <p class="col-5 m-0 p-0">Enter Amount</p>
                  <input
                    type="number"
                    class="p-2 profile-border col-7"
                    value={amountData}
                    onChange={handleInput}
                  />
                </div>
                {otpvalid == "1" ? (
                  <div class="col-11 mt-3 row align-items-center">
                    <p class="col-5 m-0 p-0">OTP</p>
                    <input
                      type="text"
                      class="p-2 profile-border col-7"
                      value={otp}
                      onChange={(e) => hendleOTP(e.target.value)}
                      placeholder="Enter OTP"
                    />
                  </div>
                ) : (
                  <></>
                )}

                {otpvalid == "0" ? (
                  <button
                    class="col-5 mt-3 py-3 wdth_btn btn mb-3"
                    style={{ color: "#000" }}
                    onClick={() => SendOtp_API(uId)}
                  >
                    Send OTP
                  </button>
                ) : (
                  <button
                    class="col-5 mt-3 py-3 wdth_btn btn mb-3"
                    style={{ color: "#000" }}
                    onClick={() => UserToUser_API()}
                  >
                    Transfer Fund
                  </button>
                )}
              </div>
            </div>
          </div>
          <div class="btn-list btn_set_item">
            <a
              href="javascript:void(0);"
              onClick={() => {
                setReport(1);
              }}
              class="btn btn-sm btn-primary"
            >
              Transfer History
            </a>

            <a
              href="javascript:void(0);"
              onClick={() => {
                setReport(2);
              }}
              class="btn btn-sm btn-primary"
            >
              Received History
            </a>
          </div>

          {Report == 1 ? (
            <div className="row">
              <div className="breadcrumb-header justify-content-between">
                <div className="left-content">
                  <span className="main-content-title mg-b-0 mg-b-lg-1">
                    Matrix Fund Transfer History
                  </span>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body">
                    <div class="row">
                      <div class="row mt-3">
                        <div class="col-md-2">
                          <label> User Id</label>
                          <input
                            type="text"
                            name="from_date"
                            id="uid"
                            onChange={(e) => setUserId(e.target.value)}
                            class="form-control"
                            placeholder="Enter User Id"
                            value={userid}
                          />
                        </div>

                        <div class="col-md-2 mt-2">
                          <div className="mtr_space"></div>
                          <input
                            type="submit"
                            name="to_date"
                            value="Search"
                            onClick={() => Binary_Income()}
                            class="btn btn-primary mt_5"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <div
                        id="myAssets_wrapper"
                        className="dataTables_wrapper dt-bootstrap5 no-footer"
                      >
                        <div className="row">
                          <div className="col-sm-12">
                            <Table
                              data={[...currentPost]}
                              columns={matching_income.cols}
                            />
                            <Table_Buttons
                              indexOfFirstPage={indexOfFirstPage}
                              indexOfLastPost={indexOfLastPost}
                              setcurrentPage={setcurrentPage}
                              currentPage={currentPage}
                              totalData={referralApi.length}
                              listPerpage={listPerpage}
                              handleRowsPerPageChange={setlistPerpage}
                            />
                          </div>
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="breadcrumb-header justify-content-between">
                <div className="left-content">
                  <span className="main-content-title mg-b-0 mg-b-lg-1">
                    Received Matrix Fund History
                  </span>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body">
                    <div class="row">
                      <div class="row mt-3">
                        <div class="col-md-2">
                          <label> User Id</label>
                          <input
                            type="text"
                            name="from_date"
                            id="uid"
                            onChange={(e) => setUserId(e.target.value)}
                            class="form-control"
                            placeholder="Enter User Id"
                            value={userid}
                          />
                        </div>

                        <div class="col-md-2 mt-2">
                          <div className="mtr_space"></div>
                          <input
                            type="submit"
                            name="to_date"
                            value="Search"
                            onClick={() => Received_history()}
                            class="btn btn-primary mt_5"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <div
                        id="myAssets_wrapper"
                        className="dataTables_wrapper dt-bootstrap5 no-footer"
                      >
                        <div className="row">
                          <div className="col-sm-12">
                            <Table
                              data={[...currentPost1]}
                              columns={matching_income1.cols}
                            />
                            <Table_Buttons
                              indexOfFirstPage={indexOfFirstPage1}
                              indexOfLastPost={indexOfLastPost1}
                              setcurrentPage={setcurrentPage1}
                              currentPage={currentPage1}
                              totalData={referralApi1.length}
                              listPerpage={listPerpage1}
                              handleRowsPerPageChange={setlistPerpage1}
                            />
                          </div>
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* <!-- row closed --> */}
        </div>
        {/* <!-- /Container --> */}
      </div>
    </div>
  );
}

export default UserToUserMatrix;
