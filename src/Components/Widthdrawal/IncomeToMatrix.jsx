import React, { useState, useEffect } from "react";
import Sidebar from "../Navbar/Sidebar.jsx";

import { toast } from "react-toastify";
import { API } from "../../Redux/API.js";
import Table from "../Table/Table";
import Table_Buttons from "../Table_Buttons/Table_Button";

function IncomeToMatrix() {
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
  const [TDSAmount, setTDSAmount] = useState(0);
  const [Netamount, setNetamount] = useState(0);
  const [TransId, setTransId] = useState(uId);

  const [userid, setUserId] = useState(uId);
  const [referralApi, setreferralApi] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [listPerpage, setlistPerpage] = useState(10);

  const getBetaWallet = async () => {
    try {
      let res = await API.get(`/DashboardDetails?uid=${uId}`);
      console.log("res", res);
      res = res.data.data[0];
      setRoiIncome(res.Net_Balance);
    } catch (e) {
      console.log("error", e);
      // setLoading(false);
    }
  };

  const Hendle_Id = (event) => {
    const newValue = event.replace(/[^0-9]/gi, "");
    setTransId(newValue);
    // CheckUserId(event)
  };

  const Hendle_Amount = (event) => {
    event = event.replace(/[^0-9]/g, "").substring(0, 8);
    setAmountData(event);
    setTDSAmount(parseFloat(event) * 0.1);
    setNetamount(parseFloat(event) - parseFloat(event) * 0.1);
    // CheckUserId(event)
  };

  const hendleOTP = (event) => {
    // let value = event.target.value;
    const newValue = event.replace(/[^0-9]/gi, "");
    setOTP(newValue);
  };

  const SendOtp_API = async (value) => {
    console.log("SendOtp_API", value);
    try {
      // let res1 = await API.post("/Valid_CheckUserId", {
      //   uid: TransId,
      // });
      // res1 = res1.data.data;
      // console.log("validId?", res);
      // if (res1 == "wrongid") {
      //   toast.success("Enter Correct Id !!");
      //   setTransId(0);
      //   return;
      // }

      let res = await API.post("/SendOTPformatrixwallet", {
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
        let responce = await API.post(`/Incomefund_Converto_matrixwalletnew`, {
          uid: uid,
          pswddd: "",
          touser_id: TransId,
          amount: amountData,
          otp: otp,
        });

        console.log("responce-->", responce);

        responce = responce.data.data;

        if (responce == "SUCCESSFUL") {
          toast("Icome Fund To Matrix Fund Convert Successfully", {
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
      console.log("res---->", userid);
      let responce = await API.get(
        `/MarixWalletstatementUser_New?uid=${userid}&type=3`
      );
      console.log("res---->", responce);
      responce = responce.data.data;

      setreferralApi([]);

      let arr = [];
      responce.forEach((item, index) => {
        arr.push({
          sr: index + 1,
          user_id: item.uid,
          amount: `$ ${item.AddFund}`,
          edate: ` ${item.edate1} `,
          remark: item.Remark,
          tds: `$ ${item.tds}`,
          netamount: `$ ${item.netamount}`,
        });
      });

      setreferralApi(arr);
    } catch (e) {
      console.log("Something Error", e);
    }
  };
  useEffect(() => {
    Binary_Income();
  }, []);

  const indexOfLastPost = currentPage * listPerpage;
  const indexOfFirstPage = indexOfLastPost - listPerpage;
  const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost);

  var [matching_income, set_matching_income] = new useState({
    cols: [
      { Header: "S.No", accessor: "sr" },
      { Header: "Receiver Id", accessor: "user_id" },
      { Header: "Convert Fund", accessor: "amount" },
      { Header: "Deduction", accessor: "tds" },
      { Header: "Net Fund", accessor: "netamount" },
      { Header: "Date & Time", accessor: "edate" },
      { Header: "Remark", accessor: "remark" },
    ],
  });

  return (
    <div className="nft_theme">
      <Sidebar />
      <div className="main-content app-content">
        {/* <!-- container --> */}
        <div className="main-container container-fluid">
          {/* <!-- breadcrumb --> */}
          <div className="breadcrumb-header justify-content-between">
            <div className="left-content">
              <span className="main-content-title mg-b-0 mg-b-lg-1">
                Convert Income Fund To Matrix Fund
              </span>
            </div>
            <div className="justify-content-center mt-2">
              <ol className="breadcrumb breadcrumb-style3">
                <li className="breadcrumb-item tx-15">
                  <a href="#">Tranfer Fund</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Convert Income Fund To Matrix Fund
                </li>
              </ol>
            </div>
          </div>
          {/* <!-- /breadcrumb --> */}

          <div className="col-12 d-flex justify-content-center py-5">
            <div className="col-md-6 col-lg-5 col-xxl-4 col-10 width-mg  card1">
              <div
                className="d-flex flex-column align-items-center profile-border profile-login  py-4 shadow-withdraw"
                id="withdraw-inp"
              >
                <h2 className="h-color col-12 py-2 px-4 border_bottom">
                  Convert Income Fund To Matrix Fund
                </h2>

                <div className="col-11 mt-3 row align-items-center">
                  <p className="col-5 m-0 p-0">Available Balance</p>
                  <input
                    type="text"
                    className="p-2 profile-border col-7"
                    value={RoiIncome}
                  />
                </div>
                <div className="col-11 mt-3 row align-items-center">
                  <p className="col-5 m-0 p-0">Enter Transfer Id</p>
                  <input
                    readOnly="true"
                    type="text"
                    className="p-2 profile-border col-7"
                    value={TransId}
                    onChange={(e) => Hendle_Id(e.target.value)}
                  />
                </div>
                <div className="col-11 mt-3 row align-items-center">
                  <p className="col-5 m-0 p-0">Enter Amount</p>
                  <input
                    type="number"
                    className="p-2 profile-border col-7"
                    value={amountData}
                    onChange={(e) => Hendle_Amount(e.target.value)}
                  />
                </div>
                <div className="col-11 mt-3 row align-items-center">
                  <p className="col-5 m-0 p-0">Deduction</p>
                  <input
                    type="number"
                    className="p-2 profile-border col-7"
                    value={TDSAmount}
                  />
                </div>
                <div className="col-11 mt-3 row align-items-center">
                  <p className="col-5 m-0 p-0">Net Amount</p>
                  <input
                    type="number"
                    className="p-2 profile-border col-7"
                    value={Netamount}
                  />
                </div>
                {otpvalid == "1" ? (
                  <div className="col-11 mt-3 row align-items-center">
                    <p className="col-5 m-0 p-0">OTP</p>
                    <input
                      type="text"
                      className="p-2 profile-border col-7"
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
                    className="col-5 mt-3 py-3 wdth_btn btn mb-3"
                    style={{ color: "#000" }}
                    onClick={() => SendOtp_API(uId)}
                  >
                    Send OTP
                  </button>
                ) : (
                  <button
                    className="col-5 mt-3 py-3 wdth_btn btn mb-3"
                    style={{ color: "#000" }}
                    onClick={() => UserToUser_API()}
                  >
                    Transfer Fund
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="breadcrumb-header justify-content-between">
            <div className="left-content">
              <span className="main-content-title mg-b-0 mg-b-lg-1">
                Convert Income Fund To Matrix Fund History
              </span>
            </div>
          </div>
          <div className="row">
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
          {/* <!-- row closed --> */}
        </div>
        {/* <!-- /Container --> */}
      </div>
    </div>
  );
}

export default IncomeToMatrix;
