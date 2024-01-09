import React, { useEffect, useState } from "react";
import { SnippetsOutlined } from "@ant-design/icons";
import { API } from "../../Redux/API";
import Sidebar from "../Navbar/Sidebar";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";

function Dashboard() {
  const [time, settime] = useState("96");
  const [time_upgrade, settime_upgrade] = useState("96");
  const [Days_here, setDays_here] = useState(0);
  const [Hours_here, setHours_here] = useState(0);
  const [Munits_here, setMunits_here] = useState(0);
  const [Seconds, setSeconds] = useState(0);
  const [dash, setDash] = useState("");
  const [Days_here_upgrade, setDays_here_upgrade] = useState(0);
  const [Hours_here_upgrade, setHours_here_upgrade] = useState(0);
  const [Munits_here_upgrade, setMunits_here_upgrade] = useState(0);
  const [Seconds_upgrade, setSeconds_upgrade] = useState(0);
  const [booster_timer, setbooster_timer] = useState(0);

  function myFunction2() {
    var copyText = document.getElementById("myInput2");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    // navigator.clipboard.writeText(copyText.value);
    copy(copyText.value);
    toast.success("Copied", {
      className: "copied-message",
    });
  }
  function myFunction1() {
    var copyText = document.getElementById("myInput1");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    // navigator.clipboard.writeText(copyText.value);
    copy(copyText.value);
    toast.success("Copied", {
      className: "copied-message",
    });
  }

  const user = sessionStorage.getItem("user");
  let ress = JSON.parse(user);
  if (ress == undefined || ress == "" || ress == null) {
    window.location.href = "/login";
  }
  let uId = ress.uid_output;

  // let uId = 778899

  const DashboardAPI = async () => {
    try {
      //https://rahul-matrix-api.nakshtech.info/DashboardDetails?uid=111213
      let res = await API.get(`/DashboardDetails?uid=${uId}`);
      console.log("dashboard_res", res.data.data[0]);
      res = res.data.data[0];
      setDash(res);

      sessionStorage.setItem("ID", res.WorkingIncome);
      sessionStorage.setItem("None_ID", res.roitotalIncome);

      settime(res.RapidIncome30daysTimer);
      settime_upgrade(res.Bonus96hoursTimerupgrade);
      sessionStorage.setItem("Timer1", res.RapidIncome30daysTimer);
      sessionStorage.setItem("Timer2", res.Bonus96hoursTimerupgrade);
      setbooster_timer(res.RapidIncome30daysTimer);

      sessionStorage.setItem("MyBoosterTimer", res.RapidIncome30daysTimer);
      sessionStorage.setItem("MyPackage", res.package);
    } catch (e) {
      console.log("Error While Fatch Dashboard API", e);
    }
  };

  const DashboardAPI_timer1 = async () => {
    try {
      let MyBoosterTimer = sessionStorage.getItem("MyBoosterTimer");
      let MyPackage = sessionStorage.getItem("MyPackage");

      console.log("MyBoosterTimer", MyBoosterTimer);
      console.log("MyPackage", MyPackage);

      if (MyPackage > 0 && MyBoosterTimer == "") {
        let res = await API.get(`/DashboardDetails?uid=${uId}`);
        // ${uId}`)
        console.log("dashboard res", res);
        res = res.data.data[0];
        //console.log("res", res);

        sessionStorage.setItem("Timer1", res.Bonus96hoursTimer);

        //  sessionStorage.setItem("Timer2", res.Bonus96hoursTimerupgrade);
      }
    } catch (e) {
      console.log("Error While Fatch Dashboard API", e);
    }
  };

  const [MatrixInvestment, setMatrixInvestment] = useState([]);
  const MatrixInvestment_Api = async () => {
    try {
      let responce = await API.get(`/GetMatrixInvestmnentAPI?uid=${uId}`);
      responce = responce.data.data;
      setMatrixInvestment([]);
      let arr = [];
      responce.forEach((item, index) => {
        arr.push({
          PlanName: item.PlanName,
          Status: item.Status,
        });
      });
      setMatrixInvestment(arr);

      console.log("MatrixInvestment_Api", arr);
    } catch (e) {
      console.log("Something Error", e);
    }
  };

  const [CountrywiseData, setCountrywiseData] = useState([]);
  const CountrywiseData_Api = async () => {
    try {
      let responce = await API.get(`/GetCountrywiseDataAPI?uid=${uId}`);
      responce = responce.data.data;
      setCountrywiseData([]);
      let arr = [];
      responce.forEach((item, index) => {
        arr.push({
          CountryName: item.CountryName,
          Countt: item.Countt,
          iso: item.iso,
          Amount: item.Amount,
          Percentage: item.Percentage,
        });
      });
      setCountrywiseData(arr);

      console.log("CountrywiseData_Api", arr);
    } catch (e) {
      console.log("Something Error", e);
    }
  };

  const [MatrixLvl, setMatrixLvl] = useState([]);
  const MatrixLvlData_Api = async () => {
    try {
      let responce = await API.get(`/getincomelevelwise?uid=${uId}`);

      responce = responce.data.data;
      setMatrixLvl([]);
      let arr = [];
      responce.forEach((item, index) => {
        arr.push({
          level: item.level,
          income: item.income,
          status: item.status,
        });
      });
      setMatrixLvl(arr);

      console.log("CountrywiseData_Api", arr);
    } catch (e) {
      console.log("Something Error", e);
    }
  };

  const handleShare = (platform) => {
    // Define the base share link
    let baseShareLink = "https://metaswift.ai/registration?referrallink=";

    // Generate the complete share link
    let shareLink = `${baseShareLink}${uId}`;

    // Define the share URL based on the platform
    let shareUrl = "";
    //

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          shareLink
        )}`;
        break;
      case "instagram":
        shareUrl = "https://www.instagram.com/";
        // Example: window.open('https://www.instagram.com/', '_blank');
        break;
      case "telegram":
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(
          shareLink
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          shareLink
        )}`;
        break;
      case "whatsapp":
        shareUrl = `https://web.whatsapp.com/`;
        break;
      default:
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank");
    }
  };

  // const Timer1 = sessionStorage.getItem("Timer1");
  // console.log("tttrrrrr=>",Timer1)

  // const [timeLeft, setTimeLeft] = useState(Timer1);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

  // const formatTime = (time) => {
  //   const hours = Math.floor(time / 3600);
  //   const minutes = Math.floor((time % 3600) / 60);
  //   const seconds = time % 60;

  //   return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  // };

  const Timer1 = sessionStorage.getItem("Timer1");
  const timer = async () => {
    try {
      console.log("Timer1--->", Timer1);

      var currentDateTime = new Date();
      let resultInSeconds = currentDateTime.getTime() / 1000;
      let topupInSeconds = new Date(Timer1).getTime() / 1000;
      let Time_here = topupInSeconds - resultInSeconds;
      let TimeFinal = parseInt(Time_here);
      if (TimeFinal <= 0 || Timer1 == "" || Timer1 == "Stop 30 days Timer") {
        setDays_here(0);
        setHours_here(0);

        setMunits_here(0);
        setSeconds(0);
      } else {
        let days = parseInt(TimeFinal / 86400);
        setDays_here(days);
        TimeFinal = TimeFinal % 86400;
        let hours = parseInt(TimeFinal / 3600);
        setHours_here(hours);
        TimeFinal %= 3600;
        let munites = parseInt(TimeFinal / 60);
        setMunits_here(munites);
        TimeFinal %= 60;
        let second_here = parseInt(TimeFinal);
        setSeconds(second_here);
      }
    } catch (e) {
      console.log("Error While Timer", e);
    }
  };

  const Timer2 = sessionStorage.getItem("Timer2");
  const timer2 = async () => {
    try {
      // console.log("Timeree",Timer1);

      var currentDateTime = new Date();
      let resultInSeconds = currentDateTime.getTime() / 1000;
      let topupInSeconds = new Date(Timer2).getTime() / 1000;
      let Time_here = topupInSeconds - resultInSeconds;
      let TimeFinal = parseInt(Time_here);
      if (TimeFinal <= 0 || Timer2 == "") {
        setDays_here_upgrade(0);
        setHours_here_upgrade(0);
        setMunits_here_upgrade(0);
        setSeconds_upgrade(0);
      } else {
        let days = parseInt(TimeFinal / 86400);
        setDays_here_upgrade(days);
        TimeFinal = TimeFinal % 86400;
        let hours = parseInt(TimeFinal / 3600);
        setHours_here_upgrade(hours);
        TimeFinal %= 3600;
        let munites = parseInt(TimeFinal / 60);
        setMunits_here_upgrade(munites);
        TimeFinal %= 60;
        let second_here = parseInt(TimeFinal);
        setSeconds_upgrade(second_here);
      }
    } catch (e) {
      console.log("Error While Timer", e);
    }
  };

  useEffect(() => {
    setInterval(() => {
      timer();
      timer2();

      DashboardAPI_timer1();
    }, 1000);

    MatrixInvestment_Api();
    CountrywiseData_Api();
    MatrixLvlData_Api();
  }, []);

  const IDHERE = sessionStorage.getItem("ID");
  let [earning, setearning] = new useState({
    series: [IDHERE],
    options: {
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "60%",
            colors: "#293450",
          },
          track: {
            show: true,
            startAngle: undefined,
            endAngle: undefined,
            background: "#000",
            strokeWidth: "90%",
            opacity: 0.1,
            margin: 5,
          },
          dataLabels: {
            name: {
              offsetY: 0,
              color: "#fff",
              fontSize: "1.5rem",
            },
            value: {
              show: false,
            },
          },
        },
      },
      fill: {
        type: "solid",
      },
      colors: ["#ffffff"],
      stroke: {
        dashArray: 4,
      },
      labels: [IDHERE],
    },
  });

  const IDHERE_id = sessionStorage.getItem("None_ID");
  let [earning_id, setearning_id] = new useState({
    series: [IDHERE_id],
    options: {
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "60%",
            colors: "#293450",
          },
          track: {
            show: true,
            startAngle: undefined,
            endAngle: undefined,
            background: "#000",
            strokeWidth: "90%",
            opacity: 0.1,
            margin: 5,
          },
          dataLabels: {
            name: {
              offsetY: 0,
              color: "#fff",
              fontSize: "1.5rem",
            },
            value: {
              show: false,
            },
          },
        },
      },
      fill: {
        type: "solid",
      },
      colors: ["#ffffff"],
      stroke: {
        dashArray: 4,
      },
      labels: [IDHERE_id],
    },
  });

  useEffect(() => {
    DashboardAPI();
    // DashboardAPI_timer1();
  }, []);

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="nft_theme">
      {/* <N />
<main> */}
      <Sidebar />
      <div class="main-content app-content">
        <a
          href="#top"
          id="back-to-top"
          class="back-to-top rounded-circle shadow"
        >
          <img src="images/robot_icon.png" />
        </a>
        {/* <!-- container --> */}
        <div class="main-container container-fluid">
          {/* <!-- breadcrumb --> */}
          <div class="breadcrumb-header justify-content-between">
            <div class="left-content">
              <span class="main-content-title mg-b-0 mg-b-lg-1 h3">
                DASHBOARD
              </span>
            </div>
            {/* <div class="justify-content-center mt-2">
              <ol class="breadcrumb breadcrumb-style3">
                <li class="breadcrumb-item tx-15">
                  <a href="#">Dashboard</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Dashboard
                </li>
              </ol>
            </div> */}
          </div>
          {/* <!-- /breadcrumb --> */}
          {/* NEW DESGIN START */}
          <div className="row">
            <div class="col-md-4">
              <div className="row">
                <div className="col-md-12">
                  <div class="card h-100">
                    <div class="card-body">
                      <div class="bg-label-primary rounded-3 text-center mb-3">
                        <div className="row">
                          <div
                            className="col-md-6"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            {!imageLoaded && (
                              <div
                                style={{
                                  width: "140px",
                                  height: "140px",
                                  background: "transparent",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                Loading...
                              </div>
                            )}
                            <img
                              class="img-fluid"
                              src={`images/${dash.RankName}.png`}
                              alt="Card Img"
                              width="140"
                              onLoad={handleImageLoad}
                              style={{
                                display: imageLoaded ? "block" : "none",
                              }}
                            />
                          </div>
                          <div className="col-md-6">
                            <div className="mainss">
                              <div class="text-center">
                                {/* <div class="avatar flex-shrink-0 me-2">
                              <span class="avatar-initial rounded bg-label-primary">
                                <i class="fa fa-calendar-check ti-md"></i>
                              </span>
                            </div> */}
                                <div className="text-center ">
                                  <h4
                                    class="mb-0 text-nowrap"
                                    style={{ fontWeight: "600" }}
                                  >
                                    ${dash.TotalInvest}
                                  </h4>
                                  <h6 className="userskilTit d-flex justify-content-center">
                                    MY PACKAGE
                                  </h6>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-12">
                                  {/* <a href="/Activate">
                                    {parseInt(dash.top_up) == 1 ? (
                                      <button class="btn btn-primary w-100 text-uppercase">
                                        Upgrade
                                      </button>
                                    ) : (
                                      <button class="btn btn-primary w-100 text-uppercase">
                                        Activate
                                      </button>
                                    )}
                                  </a> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <h4 class="mb-2 pb-1 fontss">Booster Time</h4>
                      <p class="small1">
                        {Timer1 == "Booster Achieved" ? (
                          <h5
                            class="mb-0 me-2 numberfont  tx-23 "
                            style={{
                              color: "rgb(247 246 109)",
                              marginLeft: "58%",
                              fontSize: "30px",
                              display: "contents",
                            }}
                          >
                            Booster Qualified
                          </h5>
                        ) : Timer1 == "Time is over" ? (
                          <h5
                            class="mb-0 me-2 numberfont  tx-23 "
                            style={{
                              color: "rgb(247 246 109)",
                              marginLeft: "58%",
                              fontSize: "30px",
                              display: "contents",
                            }}
                          >
                            Time is over
                          </h5>
                        ) : (
                          <h5
                            class="mb-0 me-2 numberfont  tx-23 "
                            style={{
                              color: "rgb(247 246 109)",
                              marginLeft: "58%",
                              fontSize: "30px",
                              display: "contents",
                            }}
                          >
                            {" "}
                            {`${Days_here || 0}d ${Hours_here || 0}h ${
                              Munits_here || 0
                            }m ${Seconds || 0}s`}
                          </h5>
                        )}
                      </p>
                      <div className="d-flex">
                        {parseInt(dash.refferalCount) >= 1 ? (
                          <p className="green1">
                            <span>1</span>
                          </p>
                        ) : (
                          <p className="purple1">
                            <span>1</span>
                          </p>
                        )}
                        {parseInt(dash.refferalCount) >= 2 ? (
                          <p className="green1">
                            <span>2</span>
                          </p>
                        ) : (
                          <p className="purple1">
                            <span>2</span>
                          </p>
                        )}
                        {parseInt(dash.refferalCount) >= 3 ? (
                          <p className="green1">
                            <span>3</span>
                          </p>
                        ) : (
                          <p className="purple1">
                            <span>3</span>
                          </p>
                        )}
                        {parseInt(dash.refferalCount) >= 4 ? (
                          <p className="green1">
                            <span>4</span>
                          </p>
                        ) : (
                          <p className="purple1">
                            <span>4</span>
                          </p>
                        )}
                        {parseInt(dash.refferalCount) >= 5 ? (
                          <p className="green1">
                            <span>5</span>
                          </p>
                        ) : (
                          <p className="purple1">
                            <span>5</span>
                          </p>
                        )}
                      </div> */}
                      <div class="row g-3">
                        <div class="col-12">
                          <div class="userskil">
                            <div class="userskilTit">
                              <span>COMPLETED</span>
                              <span>TOTAL</span>
                            </div>
                            <div
                              class="userskilOne"
                              style={{
                                backgroundcolor: "rgba(255, 255, 255, 0.46)",
                              }}
                            >
                              <div
                                class="userskilFill text-white"
                                style={{
                                  opacity: "0.9",
                                  backgroundcolor: "transparent",
                                  width: "100%",
                                }}
                              >
                                <span class="text-white">
                                  {dash.TotalLeg} out of {dash.TotalTarget}
                                </span>
                              </div>
                            </div>
                            <div class="LegOneSkill">
                              <h6 className="userskilTit">LEG 1</h6>
                              <div class="LegOneSkillProgress">
                                <div
                                  class="userskilOne"
                                  style={{
                                    backgroundcolor:
                                      "rgba(255, 255, 255, 0.46)",
                                  }}
                                >
                                  <div
                                    class="userskilFill text-white"
                                    style={{ opacity: "1", width: "100%" }}
                                  >
                                    <span class="text-white">
                                      {dash.TotalLeg1}{" "}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="LegOneSkill">
                              <h6 className="userskilTit">LEG 2</h6>
                              <div class="LegOneSkillProgress">
                                <div class="userskilOne">
                                  <div
                                    class="userskilFill text-white "
                                    style={{ opacity: "1", width: "100%" }}
                                  >
                                    <span class="">{dash.TotalLeg2}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="LegOneSkill">
                              <h6 className="userskilTit">OTHERS</h6>
                              <div class="LegOneSkillProgress">
                                <div class="userskilOne">
                                  <div
                                    class="userskilFill text-white "
                                    style={{ opacity: "1", width: "100%" }}
                                  >
                                    <span
                                      class=""
                                      style={{ color: "rgb(255, 255, 255)" }}
                                    >
                                      {dash.TotalLeg3}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6">
                  <div class="card">
                    <div class="card-header">
                      <div class="d-flex justify-content-between">
                        <small class="d-block mb-1 colors card-heading">
                          My Referral
                        </small>
                        {/* <p class="card-text text-success">+18.2%</p> */}
                        <i className="fa fa-renren ims"></i>
                      </div>
                      {/* <h4 class="card-title mb-1">$42.5k</h4> */}
                      {/* Total: {dash.TotalDirect} <br />
                          Active: {dash.TotalDirectActive}
                          <br />
                          InActive: {dash.TotalDirectInactive} */}
                      <div class="row">
                        <div class="col-4">
                          {/* <div class="d-flex gap-2 align-items-center mb-2">
                          <span class="badge bg-label-info p-1 rounded"><i class="ti ti-shopping-cart ti-xs"></i></span>
                          <p class="mb-0">Order</p>
                        </div> */}
                          <h5 class="mb-0 pt-1 text-nowrap">
                            {dash.TotalDirect}
                          </h5>
                          <small class="text-muted1">Total</small>
                        </div>
                        <div class="col-4">
                          <div class="divider divider-vertical">
                            {/* <div class="divider-text">
                            <span class="badge-divider-bg bg-label-secondary">VS</span>
                          </div> */}
                          </div>
                        </div>
                        <div class="col-4 text-end">
                          {/* <div class="d-flex gap-2 justify-content-end align-items-center mb-2">
                          <p class="mb-0">Visits</p>
                          <span class="badge bg-label-primary p-1 rounded"><i class="ti ti-link ti-xs"></i></span>
                        </div> */}
                          <h5 class="mb-0 pt-1 text-nowrap ms-lg-n3 ms-xl-0">
                            {dash.TotalDirectActive}
                          </h5>
                          <small class="text-muted1">Active</small>
                        </div>
                      </div>
                      <div class="w3-light-grey">
                        <div
                          style={{
                            background: "#4CAF50",
                            height: "11px",
                            width: `${
                              (dash.TotalDirectActive * 100) / dash.TotalDirect
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="card">
                    <div class="card-header">
                      <div class="d-flex justify-content-between">
                        <small class="d-block mb-1 colors card-heading">
                          My Team
                        </small>
                        <i className="fa fa-users ims"></i>
                        {/* <p class="card-text text-success">+18.2%</p> */}
                      </div>
                      {/* <h4 class="card-title mb-1">$42.5k</h4> */}

                      <div class="row">
                        <div class="col-4">
                          {/* <div class="d-flex gap-2 align-items-center mb-2">
                          <span class="badge bg-label-info p-1 rounded"><i class="ti ti-shopping-cart ti-xs"></i></span>
                          <p class="mb-0">Order</p>
                        </div> */}
                          <h5 class="mb-0 pt-1 text-nowrap">
                            {dash.Totalteam}
                          </h5>
                          <small class="text-muted1">Total</small>
                        </div>
                        <div class="col-4">
                          <div class="divider divider-vertical">
                            {/* <div class="divider-text">
                            <span class="badge-divider-bg bg-label-secondary">VS</span>
                          </div> */}
                          </div>
                        </div>
                        <div class="col-4 text-end">
                          {/* <div class="d-flex gap-2 justify-content-end align-items-center mb-2">
                          <p class="mb-0">Visits</p>
                          <span class="badge bg-label-primary p-1 rounded"><i class="ti ti-link ti-xs"></i></span>
                        </div> */}
                          <h5 class="mb-0 pt-1 text-nowrap ms-lg-n3 ms-xl-0">
                            {dash.TotalTeamActive}
                          </h5>
                          <small class="text-muted1">Active</small>
                        </div>
                      </div>
                      <div class="w3-light-grey">
                        <div
                          style={{
                            background: "#4CAF50",
                            height: "11px",
                            width: `${
                              (dash.TotalTeamActive * 100) / dash.Totalteam
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="card">
                    <div class="card-header">
                      <div class="d-flex justify-content-between">
                        <small class="d-block mb-1 colors card-heading">
                          Team Business
                        </small>
                        <i className="fa fa-tachometer ims"></i>
                        {/* <p class="card-text text-success">+18.2%</p> */}
                      </div>
                      {/* <h4 class="card-title mb-1">$42.5k</h4> */}
                      {/* Total: {dash.TotalDirect} <br />
                          Active: {dash.TotalDirectActive}
                          <br />
                          InActive: {dash.TotalDirectInactive} */}
                      <div class="row">
                        <div class="col-4">
                          {/* <div class="d-flex gap-2 align-items-center mb-2">
                          <span class="badge bg-label-info p-1 rounded"><i class="ti ti-shopping-cart ti-xs"></i></span>
                          <p class="mb-0">Order</p>
                        </div> */}
                          <h5 class="mb-0 pt-1 text-nowrap">
                            {dash.TeamBusinessTotal}
                          </h5>
                          <small class="text-muted1">Total</small>
                        </div>
                        <div class="col-4">
                          <div class="divider divider-vertical">
                            {/* <div class="divider-text">
                            <span class="badge-divider-bg bg-label-secondary">VS</span>
                          </div> */}
                          </div>
                        </div>
                        <div class="col-4 text-end">
                          {/* <div class="d-flex gap-2 justify-content-end align-items-center mb-2">
                          <p class="mb-0">Visits</p>
                          <span class="badge bg-label-primary p-1 rounded"><i class="ti ti-link ti-xs"></i></span>
                        </div> */}
                          <h5 class="mb-0 pt-1 text-nowrap ms-lg-n3 ms-xl-0">
                            {dash.TeamBusinessToday}
                          </h5>
                          <small class="text-muted1">Today</small>
                        </div>
                      </div>
                      <div class="w3-light-grey">
                        <div
                          style={{
                            background: "#4CAF50",
                            height: "11px",
                            width: `${
                              (dash.TeamBusinessToday * 100) /
                              dash.TeamBusinessTotal
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="card">
                    <div class="card-header">
                      <div class="d-flex justify-content-between">
                        <small class="d-block mb-1 colors card-heading">
                          Matrix Team
                        </small>
                        <i className="fa fa-briefcase ims"></i>
                        {/* <p class="card-text text-success">+18.2%</p> */}
                      </div>
                      {/* <h4 class="card-title mb-1">$42.5k</h4> */}

                      <div class="row">
                        <div class="col-4">
                          {/* <div class="d-flex gap-2 align-items-center mb-2">
                          <span class="badge bg-label-info p-1 rounded"><i class="ti ti-shopping-cart ti-xs"></i></span>
                          <p class="mb-0">Order</p>
                        </div> */}
                          <h5 class="mb-0 pt-1 text-nowrap">
                            {dash.MatrixDownline}
                          </h5>
                          <small class="text-muted1">Total</small>
                        </div>
                        <div class="col-4">
                          <div class="divider divider-vertical">
                            {/* <div class="divider-text">
                            <span class="badge-divider-bg bg-label-secondary">VS</span>
                          </div> */}
                          </div>
                        </div>
                        <div class="col-4 text-end">
                          <h5 class="mb-0 pt-1 text-nowrap ms-lg-n3 ms-xl-0">
                            {dash.MatrixDownlineTD}
                          </h5>
                          <small class="text-muted1">Today</small>
                          {/* <div class="d-flex gap-2 justify-content-end align-items-center mb-2">
                          <p class="mb-0">Visits</p>
                          <span class="badge bg-label-primary p-1 rounded"><i class="ti ti-link ti-xs"></i></span>
                        </div> */}
                          {/* <h5 class="mb-0 pt-1 text-nowrap ms-lg-n3 ms-xl-0">
                            {dash.TotalTeamActive}
                          </h5>
                          <small class="text-muted1">Active</small> */}
                        </div>
                      </div>
                      <div class="w3-light-grey">
                        <div
                          style={{
                            background: "#4CAF50",
                            height: "11px",
                            width: `${
                              (dash.MatrixDownlineTD * 100) /
                              dash.MatrixDownline
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex justify-content-between">
                        <div class="d-flex flex-col">
                          <div class="card-title mb-auto">
                            <h5 class="mb-1 text-nowrap">
                              <h4 class="mb-2 fontss card-title card-heading">
                                Booster Time
                              </h4>
                              <p class="small1">
                                {Timer1 == "Booster Achieved" ? (
                                  <h5
                                    class="mb-0 me-2 numberfont  tx-23 "
                                    style={{
                                      color: "rgb(247 246 109)",
                                      marginLeft: "58%",
                                      fontSize: "30px",
                                      display: "contents",
                                    }}
                                  >
                                    Booster Qualified
                                  </h5>
                                ) : Timer1 == "Time is over" ? (
                                  <h5
                                    class="mb-0 me-2 numberfont  tx-23 "
                                    style={{
                                      color: "rgb(247 246 109)",
                                      marginLeft: "58%",
                                      fontSize: "30px",
                                      display: "contents",
                                    }}
                                  >
                                    Time is over
                                  </h5>
                                ) : (
                                  <h5
                                    class="mb-0 me-2 numberfont  tx-23 "
                                    style={{
                                      color: "rgb(247 246 109)",
                                      marginLeft: "58%",
                                      fontSize: "30px",
                                      display: "contents",
                                    }}
                                  >
                                    {" "}
                                    {`${Days_here || 0}d ${Hours_here || 0}h ${
                                      Munits_here || 0
                                    }m ${Seconds || 0}s`}
                                  </h5>
                                )}
                              </p>
                              <div className="d-flex">
                                {parseInt(dash.refferalCount) >= 1 ? (
                                  <p className="green1">
                                    <span>1</span>
                                  </p>
                                ) : (
                                  <p className="purple1">
                                    <span>1</span>
                                  </p>
                                )}
                                {parseInt(dash.refferalCount) >= 2 ? (
                                  <p className="green1">
                                    <span>2</span>
                                  </p>
                                ) : (
                                  <p className="purple1">
                                    <span>2</span>
                                  </p>
                                )}
                                {parseInt(dash.refferalCount) >= 3 ? (
                                  <p className="green1">
                                    <span>3</span>
                                  </p>
                                ) : (
                                  <p className="purple1">
                                    <span>3</span>
                                  </p>
                                )}
                                {parseInt(dash.refferalCount) >= 4 ? (
                                  <p className="green1">
                                    <span>4</span>
                                  </p>
                                ) : (
                                  <p className="purple1">
                                    <span>4</span>
                                  </p>
                                )}
                                {parseInt(dash.refferalCount) >= 5 ? (
                                  <p className="green1">
                                    <span>5</span>
                                  </p>
                                ) : (
                                  <p className="purple1">
                                    <span>5</span>
                                  </p>
                                )}
                              </div>
                              {/* You have earned a total {dash.TotalIncome}$
                              <br />
                              out of {dash.MaxIncome} $. */}
                            </h5>
                            {/* <small className="small1">
                              {" "}
                              ({dash.EarnPer} % out of your total{" "}
                              {dash.CapingPer} % of your investment)
                            </small> */}
                          </div>
                          <br></br>
                          <br></br>
                          {/* <div class="chart-statistics">
                            <h3 class="card-title mb-1">4,350</h3>
                            <small class="text-success text-nowrap fw-medium small1">
                              <i class="ti ti-chevron-up me-1"></i> 15.8%
                            </small>
                          </div> */}

                          {/* <div className="Pricewidget_img">
                            <div className="priceChart">
                              <span>$ {dash.TotalIncome}</span>
                              <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="">
                        <div class="">
                          <div class="card-title mb-auto">
                            <h5 class="mb-2 text-nowrap card-title card-heading">
                              Affiliate Link
                            </h5>
                            <div class="chart-statistics">
                              <div className="d-flex justify-content-between">
                                <div class="inputsssss mb-0">
                                  <input
                                    type="text"
                                    id="myInput1"
                                    class="form-control txt_scrl"
                                    value={`https://metaswift.ai/registration?referrallink=${uId}`}
                                  />
                                </div>
                                <div
                                  style={{
                                    MarginTop: "10px",
                                  }}
                                >
                                  <span
                                    text="button"
                                    onClick={myFunction1}
                                    class="input-group-text p0"
                                  >
                                    <SnippetsOutlined />
                                  </span>
                                  {/* <button
                                  id="show"
                                  class="input-group-text"
                                  onClick={() => setShow(!show)}
                                >
                                  <ShareAltOutlined />
                                </button> */}
                                  {/* {show && (
                                  <div class="" style={{ display: "contents" }}>
                                    <a
                                      class="input-group-text"
                                      href="https://whatsapp.com/"
                                    >
                                      <WhatsAppOutlined />
                                    </a>
                                    <a
                                      class="input-group-text"
                                      href="https://twitter.com/"
                                    >
                                      <TwitterOutlined />
                                    </a>
                                    <a
                                      class="input-group-text"
                                      href="https://telegram.org/"
                                    >
                                      <SendOutlined />
                                    </a>
                                    <a
                                      class="input-group-text"
                                      href="https://signal.org/download/"
                                    >
                                      <WechatOutlined />
                                    </a>
                                  </div>
                                )} */}
                                </div>
                              </div>
                              <div className="mb-4">
                                <i
                                  className="text-white fa fa-facebook iconss"
                                  onClick={() => handleShare("facebook")}
                                ></i>
                                <i
                                  className="text-white fa fa-instagram iconss"
                                  onClick={() => handleShare("instagram")}
                                ></i>
                                <i
                                  className="text-white fa fa-telegram iconss"
                                  onClick={() => handleShare("telegram")}
                                ></i>
                                {/* <i className="fa fa-youtube iconss" onClick={() => handleShare('youtube')}></i> */}
                                <i
                                  className="text-white fa fa-twitter iconss"
                                  onClick={() => handleShare("twitter")}
                                ></i>
                                {/* <i
                                  className="text-white fa fa-whatsapp iconss"
                                  onClick={() => handleShare("whatsapp")}
                                ></i> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              {/* <div className="col-md-3">
                <div class="card">
                  <div class="card-header">
                    <div class="d-flex justify-content-between">
                      <small class="d-block mb-1 colors card-heading">
                        Rapid Fund Wallet
                      </small>
                    </div>
                    <div class="row">
                      <div class="col-4">
                        <h5 class="mb-0 pt-1 text-nowrap">
                          {dash.RapidFundReceived}
                        </h5>
                        <small class="text-muted1">Total</small>
                      </div>
                      <div class="col-4 text-center">
                        <h5 class="mb-0 pt-1 text-nowrap">
                          {dash.UsedRapidFund}
                        </h5>
                        <small class="text-muted1">Used</small>
                      </div>
                      <div class="col-4 text-end">
                        <h5 class="mb-0 pt-1 text-nowrap">
                          {dash.NetRapidFund}
                        </h5>
                        <small class="text-muted1">Balance</small>
                      </div>
                    </div>
                    <div class="w3-light-grey">
                      <div
                        style={{
                          background: "#4CAF50",
                          height: "11px",
                          width: `${
                            (dash.UsedRapidFund * 100) / dash.RapidFundReceived
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="col-md-4">
                <div class="card">
                  <div class="card-header">
                    <div class="d-flex justify-content-between">
                      <small class="d-block mb-1 colors card-heading">
                        Activation Wallet
                      </small>
                    </div>
                    <div class="row g-3">
                      <div class="col-4">
                        <h5 class="mb-0 pt-1 text-nowrap">
                          {dash.TotalActivationFund}
                        </h5>
                        <small class="text-muted1">Total</small>
                      </div>
                      <div class="col-4 text-center">
                        <h5 class="mb-0 pt-1 text-nowrap">
                          {dash.UsedActivationFund}
                        </h5>
                        <small class="text-muted1">Used</small>
                      </div>
                      <div class="col-4 text-end">
                        <h5 class="mb-0 pt-1 text-nowrap">
                          {dash.NetActivationFund}
                        </h5>
                        <small class="text-muted1">Balance</small>
                      </div>
                    </div>
                    <div class="w3-light-grey">
                      <div
                        style={{
                          background: "#4CAF50",
                          height: "11px",
                          width: `${
                            (dash.UsedActivationFund * 100) /
                            dash.TotalActivationFund
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div class="card">
                  <div class="card-header">
                    <div class="d-flex justify-content-between">
                      <small class="d-block mb-1 colors card-heading">
                        Matrix Upgrade Wallet
                      </small>
                    </div>
                    <div class="row">
                      <div class="col-4">
                        <h5 class="mb-0 pt-1 text-nowrap">
                          {dash.TotalMatrixFund}
                        </h5>
                        <small class="text-muted1">Total</small>
                      </div>
                      <div class="col-4 text-center">
                        <h5 class="mb-0 pt-1 text-nowrap">
                          {dash.UsedMatrixFund}
                        </h5>
                        <small class="text-muted1">Used</small>
                      </div>
                      <div class="col-4 text-end">
                        <h5 class="mb-0 pt-1 text-nowrap">
                          {dash.NetMatrixFund}
                        </h5>
                        <small class="text-muted1">Balance</small>
                      </div>
                    </div>
                    <div class="w3-light-grey">
                      <div
                        style={{
                          background: "#4CAF50",
                          height: "11px",
                          width: `${
                            (dash.UsedMatrixFund * 100) / dash.TotalMatrixFund
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div class="card">
                  <div class="card-header">
                    <div class="d-flex justify-content-between">
                      <small class=" d-block mb-1 colors card-heading">
                        Income Fund
                      </small>
                    </div>
                    <div class="row">
                      <div class="col-4">
                        <h5 class="mb-0 pt-1 text-nowrap">
                          {dash.TotalIncomeFund}
                        </h5>
                        <small class="text-muted1">Total</small>
                      </div>
                      <div class="col-4 text-center">
                        <h5 class="mb-0 pt-1 text-nowrap">
                          {dash.UsedIncomeFund}
                        </h5>
                        <small class="text-muted1">Used</small>
                      </div>
                      <div class="col-4 text-end">
                        <h5 class="mb-0 pt-1 text-nowrap">
                          {dash.NetIncomeFund}
                        </h5>
                        <small class="text-muted1">Balance</small>
                      </div>
                    </div>
                    <div class="w3-light-grey">
                      <div
                        style={{
                          background: "#4CAF50",
                          height: "11px",
                          width: `${
                            (dash.UsedIncomeFund * 100) / dash.TotalIncomeFund
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-2">
              <div class="card h-100">
                <div class="card-body">
                  <div class=" row">
                    <div class="col-md-8">
                      <div class="card-title mb-0">
                        <h5 class="card-title mb-0">EARNING REPORTS</h5>
                        {/* <small class="text-muted small1">
                          Weekly Earnings Overview
                        </small> */}
                      </div>
                      <div>
                        <h1>$ {dash.TotalIncome}</h1>
                        {/* <h6 className="bgs">
                          <span className="bgss">+4.6%</span>
                        </h6> */}
                        {/* <p>You informed of this week compared to last week</p> */}
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="achiver">
                        <h5 class="card-title mb-0">SALARY ACHIEVEMENT</h5>
                        <h1>$ {dash.Total_salery}</h1>
                      </div>

                      {/* <img src="images/chart.png" /> */}
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-md-12">
                      <div className="mainss">
                        <div className="">
                          <div class="d-flex gap-2 align-items-center">
                            <div class="badge rounded bg-label-primary  mts">
                              <i class="fa fa-dollar ti-sm"></i>
                            </div>
                            <h6 class="mb-0 ">EARNINGS</h6>
                          </div>
                          <div>
                            <h4>$ {dash.TotalIncome}</h4>
                          </div>
                          <div class="w3-light-grey">
                            <div class="w3-green"></div>
                          </div>
                        </div>
                        <div className="">
                          <div class="d-flex gap-2 align-items-center">
                            <div class="badge rounded bg-label-primary  mts">
                              <i class="fa fa-dollar ti-sm"></i>
                            </div>
                            <h6 class="mb-0 text-uppercase">Withdrawal</h6>
                          </div>
                          <div>
                            <h4>$ {dash.WithDrawal_Amount}</h4>
                          </div>
                          <div class="w3-light-grey">
                            <div class="w3-green"></div>
                          </div>
                        </div>
                        <div className="">
                          <div class="d-flex gap-2 align-items-center">
                            <div class="badge rounded bg-label-primary  mts">
                              <i class="fa fa-dollar ti-sm"></i>
                            </div>
                            <h6 class="mb-0 text-uppercase">Used Income</h6>
                          </div>
                          <div>
                            <h4>$ {dash.UsedIncomeFundNoWithdrawal}</h4>
                          </div>
                          <div class="w3-light-grey">
                            <div class="w3-green"></div>
                          </div>
                        </div>
                        <div className="">
                          <div class="d-flex gap-2 align-items-center">
                            <div class="badge rounded bg-label-primary  mts">
                              <i class="fa fa-dollar ti-sm"></i>
                            </div>
                            <h6 class="mb-0 text-uppercase">Balance</h6>
                          </div>
                          <div>
                            <h4>$ {dash.Net_Balance}</h4>
                          </div>
                          <div class="w3-light-grey">
                            <div class="w3-green"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-2">
              <div class="card h-100">
                <div class="card-body">
                  <div class=" row">
                    <div class="col-md-6">
                      <div class="card-title mb-0">
                        <h5 class="card-title mb-0">MATRIX SUMMARY</h5>
                        {/* <small class="text-muted small1">Last 7 Days</small> */}
                      </div>
                      <div>
                        <h1>$ {dash.Matrix_Invest}</h1>
                        {/* <h6 className="bgs">
                          <span className="bgss">+4.6%</span>
                        </h6> */}
                        {/* <p>Total Investments</p> */}
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="">
                            <div class="d-flex gap-2 align-items-center">
                              {parseInt(dash.M_Status1) == 1 ? (
                                <div class="badge rounded bg-label-primary mts">
                                  $5
                                </div>
                              ) : (
                                <div class="badge rounded bg-label-primary1 mts">
                                  $5
                                </div>
                              )}
                              <h6 class="mb-0 ">${dash.MatrixIncome1}</h6>
                            </div>
                            <div>{/* <h4>$545.69</h4> */}</div>
                          </div>
                          <div className="">
                            <div class="d-flex gap-2 align-items-center">
                              {parseInt(dash.M_Status2) == 1 ? (
                                <div class="badge rounded bg-label-primary mts">
                                  $10
                                </div>
                              ) : (
                                <div class="badge rounded bg-label-primary1 mts">
                                  $10
                                </div>
                              )}
                              <h6 class="mb-0 ">${dash.MatrixIncome2}</h6>
                            </div>
                            <div>{/* <h4>$545.69</h4> */}</div>
                          </div>
                          <div className="">
                            <div class="d-flex gap-2 align-items-center">
                              {parseInt(dash.M_Status3) == 1 ? (
                                <div class="badge rounded bg-label-primary mts">
                                  $25
                                </div>
                              ) : (
                                <div class="badge rounded bg-label-primary1 mts">
                                  $25
                                </div>
                              )}
                              <h6 class="mb-0 ">${dash.MatrixIncome3}</h6>
                            </div>
                            <div>{/* <h4>$545.69</h4> */}</div>
                          </div>
                          <div className="">
                            <div class="d-flex gap-2 align-items-center">
                              {parseInt(dash.M_Status4) == 1 ? (
                                <div class="badge rounded bg-label-primary mts">
                                  $50
                                </div>
                              ) : (
                                <div class="badge rounded bg-label-primary1 mts">
                                  $50
                                </div>
                              )}
                              <h6 class="mb-0 ">${dash.MatrixIncome4}</h6>
                            </div>
                            {/* <div>
                          <h4>$545.69</h4>
                          </div> */}
                          </div>
                          <div className="">
                            <div class="d-flex gap-2 align-items-center">
                              {parseInt(dash.M_Status5) == 1 ? (
                                <div class="badge rounded bg-label-primary mts">
                                  $100
                                </div>
                              ) : (
                                <div class="badge rounded bg-label-primary1 mts">
                                  $100
                                </div>
                              )}
                              <h6 class="mb-0 ">${dash.MatrixIncome5}</h6>
                            </div>
                          </div>
                          <div className="">
                            <div class="d-flex gap-2 align-items-center">
                              {parseInt(dash.M_Status6) == 1 ? (
                                <div class="badge rounded bg-label-primary mts">
                                  $250
                                </div>
                              ) : (
                                <div class="badge rounded bg-label-primary1 mts">
                                  $250
                                </div>
                              )}
                              <h6 class="mb-0 ">${dash.MatrixIncome6}</h6>
                            </div>
                          </div>
                          <div className="">
                            <div class="d-flex gap-2 align-items-center">
                              {parseInt(dash.M_Status7) == 1 ? (
                                <div class="badge rounded bg-label-primary mts">
                                  $500
                                </div>
                              ) : (
                                <div class="badge rounded bg-label-primary1 mts">
                                  $500
                                </div>
                              )}
                              <h6 class="mb-0 ">${dash.MatrixIncome7}</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="">
                            <div class="d-flex gap-2 align-items-center">
                              {parseInt(dash.M_Status8) == 1 ? (
                                <div class="badge rounded bg-label-primary mts">
                                  $1000
                                </div>
                              ) : (
                                <div class="badge rounded bg-label-primary1 mts">
                                  $1000
                                </div>
                              )}
                              <h6 class="mb-0 ">${dash.MatrixIncome8}</h6>
                            </div>
                          </div>
                          <div className="">
                            <div class="d-flex gap-2 align-items-center">
                              {parseInt(dash.M_Status9) == 1 ? (
                                <div class="badge rounded bg-label-primary mts">
                                  $2500
                                </div>
                              ) : (
                                <div class="badge rounded bg-label-primary1 mts">
                                  $2500
                                </div>
                              )}
                              <h6 class="mb-0 ">${dash.MatrixIncome9}</h6>
                            </div>
                          </div>
                          <div className="">
                            <div class="d-flex gap-2 align-items-center">
                              {parseInt(dash.M_Status10) == 1 ? (
                                <div class="badge rounded bg-label-primary mts">
                                  $5000
                                </div>
                              ) : (
                                <div class="badge rounded bg-label-primary1 mts">
                                  $5000
                                </div>
                              )}
                              <h6 class="mb-0 ">${dash.MatrixIncome10}</h6>
                            </div>
                          </div>
                          <div className="">
                            <div class="d-flex gap-2 align-items-center">
                              {parseInt(dash.M_Status11) == 1 ? (
                                <div class="badge rounded bg-label-primary mts">
                                  $10000
                                </div>
                              ) : (
                                <div class="badge rounded bg-label-primary1 mts">
                                  $10000
                                </div>
                              )}
                              <h6 class="mb-0 ">${dash.MatrixIncome11}</h6>
                            </div>
                          </div>
                          <div className="">
                            <div class="d-flex gap-2 align-items-center">
                              {parseInt(dash.M_Status12) == 1 ? (
                                <div class="badge rounded bg-label-primary mts">
                                  $25000
                                </div>
                              ) : (
                                <div class="badge rounded bg-label-primary1 mts">
                                  $25000
                                </div>
                              )}
                              <h6 class="mb-0 ">${dash.MatrixIncome12}</h6>
                            </div>
                          </div>
                          <div className="">
                            <div class="d-flex gap-2 align-items-center">
                              {parseInt(dash.M_Status13) == 1 ? (
                                <div class="badge rounded bg-label-primary mts">
                                  $50000
                                </div>
                              ) : (
                                <div class="badge rounded bg-label-primary1 mts">
                                  $50000
                                </div>
                              )}
                              <h6 class="mb-0 ">${dash.MatrixIncome13}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div className="bgbk">
                        <h1 className="imgsss">${dash.MatrixIncomeT}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-2">
            </div> */}
            <div className="col-md-4">
              <div class="card">
                <div class="card-header d-flex justify-content-between">
                  <div class="card-title mb-0">
                    <h5 class="card-title m-0 me-2">MY TEAM</h5>
                    {/* <small class="text-muted">Monthly Sales Overview</small> */}
                  </div>
                </div>

                <div
                  class="card-body"
                  style={{ overflowX: "auto", height: "438px" }}
                >
                  <table className="maintable">
                    <tr>
                      <th></th>
                      <th className="text-white text-uppercase">Country</th>
                      <th className="text-white text-uppercase">Team Count</th>
                      {/* <th className="text-white text-uppercase">Volume</th>
                      <th className="text-white text-uppercase">Percentage</th> */}
                    </tr>
                  </table>
                  <ul class="p-0 m-0">
                    {CountrywiseData &&
                      CountrywiseData.map((item, i) => (
                        <li class="d-flex align-items-center mb-4">
                          <img
                            src={`https://gold-obvious-sparrow-517.mypinata.cloud/ipfs/QmW84WEsurTru38ccZG83BwYvrCC7LZaa1U68Lru9zWLLW/${item.iso}.png`}
                            alt="User"
                            class="rounded-circle me-3"
                          />

                          <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div class="me-2">
                              <div class="d-flex align-items-center">
                                <span
                                  class="mb-0 me-1"
                                  style={{ fontSize: "18px" }}
                                >
                                  {item.CountryName}
                                </span>
                              </div>
                              {/* <small class="text-muted"></small> */}
                            </div>
                            <div class="user-progress ms-auto">
                              <p class="text-success fw-medium mb-0 d-flex justify-content-center gap-1">
                                {item.Countt}
                              </p>
                            </div>
                            {/* <div class="user-progress">
                              <p class="text-success fw-medium mb-0 d-flex justify-content-center gap-1">
                                ${item.Amount}
                              </p>
                            </div>
                            <div class="user-progress">
                              <p class="text-success fw-medium mb-0 d-flex justify-content-center gap-1">
                                {item.Percentage} %
                              </p>
                            </div> */}
                          </div>
                        </li>
                      ))}
                    {/* <li class="d-flex align-items-center mb-4">
                      <img
                        src="images/br.svg"
                        alt="User"
                        class="rounded-circle me-3"
                      />
                      <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div class="me-2">
                          <div class="d-flex align-items-center">
                            <h6 class="mb-0 me-1">$2,415k</h6>
                          </div>
                          <small class="text-muted">Brazil</small>
                        </div>
                        <div class="user-progress">
                          <p class="text-danger fw-medium mb-0 d-flex justify-content-center gap-1">
                            <i class="fa fa-angle-down p-1"></i>
                            6.2%
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="d-flex align-items-center mb-4">
                      <img
                        src="images/in.svg"
                        alt="User"
                        class="rounded-circle me-3"
                      />
                      <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div class="me-2">
                          <div class="d-flex align-items-center">
                            <h6 class="mb-0 me-1">$865k</h6>
                          </div>
                          <small class="text-muted">India</small>
                        </div>
                        <div class="user-progress">
                          <p class="text-success fw-medium mb-0 d-flex align-items-center gap-1">
                            <i class="fa fa-angle-up p-1"></i>
                            12.4%
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="d-flex align-items-center mb-4">
                      <img
                        src="images/au.svg"
                        alt="User"
                        class="rounded-circle me-3"
                      />
                      <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div class="me-2">
                          <div class="d-flex align-items-center">
                            <h6 class="mb-0 me-1">$745k</h6>
                          </div>
                          <small class="text-muted">Australia</small>
                        </div>
                        <div class="user-progress">
                          <p class="text-danger fw-medium mb-0 d-flex justify-content-center gap-1">
                            <i class="fa fa-angle-down p-1"></i>
                            11.9%
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="d-flex align-items-center mb-4">
                      <img
                        src="images/fr.svg"
                        alt="User"
                        class="rounded-circle me-3"
                      />
                      <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div class="me-2">
                          <div class="d-flex align-items-center">
                            <h6 class="mb-0 me-1">$45</h6>
                          </div>
                          <small class="text-muted">France</small>
                        </div>
                        <div class="user-progress">
                          <p class="text-success fw-medium mb-0 d-flex justify-content-center gap-1">
                            <i class="fa fa-angle-up p-1"></i>
                            16.2%
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="d-flex align-items-center">
                      <img
                        src="images/cn.svg"
                        alt="User"
                        class="rounded-circle me-3"
                      />
                      <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div class="me-2">
                          <div class="d-flex align-items-center">
                            <h6 class="mb-0 me-1">$12k</h6>
                          </div>
                          <small class="text-muted">China</small>
                        </div>
                        <div class="user-progress">
                          <p class="text-success fw-medium mb-0 d-flex justify-content-center gap-1">
                            <i class="fa fa-angle-up p-1"></i>
                            14.8%
                          </p>
                        </div>
                      </div>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            {/* {MatrixInvestment &} */}
            <div className="col-md-4">
              <div class="card">
                <div class="card-header d-flex justify-content-between">
                  <div class="card-title mb-0">
                    <h5 class="card-title m-0 me-2">Matrix Level Income</h5>
                    {/* <small class="text-muted">Average 72% Completed</small> */}
                  </div>
                </div>

                <div
                  class="card-body"
                  style={{ overflowX: "auto", height: "438px" }}
                >
                  <div class="p-0 m-0">
                    {MatrixLvl &&
                      MatrixLvl.map((item, i) => (
                        <div className="row">
                          <div class="col-md-4 pb-1">
                            <div class="w-50 align-items-center me-3">
                              <h6 class="mb-0">Level {item.level}</h6>
                            </div>
                          </div>
                          <div class="col-md-4 pb-1">
                            <div class="w-50 align-items-center me-3">
                              <h6 class="mb-0">{item.income}</h6>
                            </div>
                          </div>
                          <div class="col-md-4 pb-1">
                            <div class="align-items-left">
                              <span class="text-muted">
                                {item.status == "Release" ? (
                                  <button className="btn btn-primary ">
                                    RELEASE
                                  </button>
                                ) : (
                                  <button className="btn btn-danger2">
                                    HOLD
                                  </button>
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    {/* <li class="mb-3 pb-1 d-flex">
                      <div class="d-flex w-50 align-items-center me-3">
                        <img
                          src="images/figma-logo.png"
                          alt="figma-logo"
                          class="me-3"
                        />
                        <div>
                          <h6 class="mb-0">Figma</h6>
                          <small class="text-muted">App UI Kit</small>
                        </div>
                      </div>
                      <div class="d-flex flex-grow-1 align-items-center">
                        <div class="progress w-100 me-3">
                          <div id="myBar" class="w3-container w3-green"></div>
                        </div>
                        <span class="text-muted">86%</span>
                      </div>
                    </li>
                    <li class="mb-3 pb-1 d-flex">
                      <div class="d-flex w-50 align-items-center me-3">
                        <img
                          src="images/vue-logo.png"
                          alt="vue-logo"
                          class="me-3"
                        />
                        <div>
                          <h6 class="mb-0">VueJs</h6>
                          <small class="text-muted">Calendar App</small>
                        </div>
                      </div>
                      <div class="d-flex flex-grow-1 align-items-center">
                        <div class="progress w-100 me-3">
                          <div id="myBar" class="w3-container w3-green"></div>
                        </div>
                        <span class="text-muted">90%</span>
                      </div>
                    </li>
                    <li class="mb-3 pb-1 d-flex">
                      <div class="d-flex w-50 align-items-center me-3">
                        <img
                          src="images/react-logo.png"
                          alt="react-logo"
                          class="me-3"
                        />
                        <div>
                          <h6 class="mb-0">React</h6>
                          <small class="text-muted">Dashboard</small>
                        </div>
                      </div>
                      <div class="d-flex flex-grow-1 align-items-center">
                        <div class="progress w-100 me-3">
                          <div id="myBar" class="w3-container w3-green"></div>
                        </div>
                        <span class="text-muted">37%</span>
                      </div>
                    </li>
                    <li class="mb-3 pb-1 d-flex">
                      <div class="d-flex w-50 align-items-center me-3">
                        <img
                          src="images/bootstrap-logo.png"
                          alt="bootstrap-logo"
                          class="me-3"
                        />
                        <div>
                          <h6 class="mb-0">Bootstrap</h6>
                          <small class="text-muted">Website</small>
                        </div>
                      </div>
                      <div class="d-flex flex-grow-1 align-items-center">
                        <div class="progress w-100 me-3">
                          <div id="myBar" class="w3-container w3-green"></div>
                        </div>
                        <span class="text-muted">22%</span>
                      </div>
                    </li>
                    <li class="d-flex">
                      <div class="d-flex w-50 align-items-center me-3">
                        <img
                          src="images/sketch-logo.png"
                          alt="sketch-logo"
                          class="me-3"
                        />
                        <div>
                          <h6 class="mb-0">Sketch</h6>
                          <small class="text-muted">Website Design</small>
                        </div>
                      </div>
                      <div class="d-flex flex-grow-1 align-items-center">
                        <div class="progress w-100 me-3">
                          <div id="myBar" class="w3-container w3-green"></div>
                        </div>
                        <span class="text-muted">29%</span>
                      </div>
                    </li> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-2">
            </div> */}
            <div className="col-md-4">
              <div class="card">
                <div class="card-header d-flex align-items-center justify-content-between">
                  <h5 class="card-title m-0 me-2">Income Summary</h5>
                </div>
                <div
                  class="card-body"
                  style={{ overflowX: "auto", height: "438px" }}
                >
                  <ul class="p-0 m-0">
                    {/* <li class="d-flex mb-3 pb-1">
                      <div class="circle-small">
                        <div class="text">$ {dash.directbonusfund}</div>
                        <svg>
                          <circle class="bg" cx="40" cy="40" r="37"></circle>
                          <circle
                            class="progress one"
                            cx="40"
                            cy="40"
                            r="37"
                          ></circle>
                        </svg>
                      </div>

                      <div class="row w-100 align-items-center">
                        <div class="col-9">
                          <div class="me-2">
                            <h6 class="mb-2 fontss text-uppercase">
                              Referral Sign Up Rapid
                            </h6>
                          </div>
                        </div>
                        <div class="col-3 text-end">
                          <button
                            type="button"
                            class="btn btn-sm btn-icon btn-label-secondary waves-effect"
                          >
                            <i class="ti ti-chevron-right scaleX-n1-rtl"></i>
                          </button>
                        </div>
                      </div>
                      <div class="resize-triggers">
                        <div class="expand-trigger">
                          <div></div>
                        </div>
                        <div class="contract-trigger"></div>
                      </div>
                    </li> */}
                    <li class="d-flex mb-3 pb-1">
                      <div class="circle-small">
                        <div class="text">$ {dash.singlelegincome}</div>
                        <svg>
                          <circle class="bg" cx="40" cy="40" r="37"></circle>
                          <circle
                            class="progress two"
                            cx="40"
                            cy="40"
                            r="37"
                          ></circle>
                        </svg>
                      </div>

                      <div class="row w-100 align-items-center">
                        <div class="col-9">
                          <div class="me-2">
                            <h6 class="mb-2 fontss text-uppercase">
                              Global Single Leg Income
                            </h6>
                          </div>
                        </div>
                        <div class="col-3 text-end">
                          <button
                            type="button"
                            class="btn btn-sm btn-icon btn-label-secondary waves-effect"
                          >
                            <i class="ti ti-chevron-right scaleX-n1-rtl"></i>
                          </button>
                        </div>
                      </div>
                      <div class="resize-triggers">
                        <div class="expand-trigger">
                          <div></div>
                        </div>
                        <div class="contract-trigger"></div>
                      </div>
                    </li>
                    <li class="d-flex mb-3 pb-1">
                      <div class="circle-small">
                        <div class="text">$ {dash.refund_income}</div>
                        <svg>
                          <circle class="bg" cx="40" cy="40" r="37"></circle>
                          <circle
                            class="progress one"
                            cx="40"
                            cy="40"
                            r="37"
                          ></circle>
                        </svg>
                      </div>
                      <div class="row w-100 align-items-center">
                        <div class="col-9">
                          <div class="me-2">
                            <h6 class="mb-2 fontss text-uppercase">
                              Direct Income
                            </h6>
                          </div>
                        </div>
                        <div class="col-3 text-end">
                          <button
                            type="button"
                            class="btn btn-sm btn-icon btn-label-secondary waves-effect"
                          >
                            <i class="ti ti-chevron-right scaleX-n1-rtl"></i>
                          </button>
                        </div>
                      </div>
                      <div class="resize-triggers">
                        <div class="expand-trigger">
                          <div></div>
                        </div>
                        <div class="contract-trigger"></div>
                      </div>
                    </li>
                    <li class="d-flex mb-3 pb-1">
                      <div class="circle-small">
                        <div class="text">$ {dash.DiffrencialIncome}</div>
                        <svg>
                          <circle class="bg" cx="40" cy="40" r="37"></circle>
                          <circle
                            class="progress two"
                            cx="40"
                            cy="40"
                            r="37"
                          ></circle>
                        </svg>
                      </div>

                      <div class="row w-100 align-items-center">
                        <div class="col-9">
                          <div class="me-2">
                            <h6 class="mb-2 fontss text-uppercase">
                              Infinity Income
                            </h6>
                          </div>
                        </div>
                        <div class="col-3 text-end">
                          <button
                            type="button"
                            class="btn btn-sm btn-icon btn-label-secondary waves-effect"
                          >
                            <i class="ti ti-chevron-right scaleX-n1-rtl"></i>
                          </button>
                        </div>
                      </div>
                      <div class="resize-triggers">
                        <div class="expand-trigger">
                          <div></div>
                        </div>
                        <div class="contract-trigger"></div>
                      </div>
                    </li>
                    <li class="d-flex mb-3 pb-1">
                      <div class="circle-small">
                        <div class="text">$ {dash.saleryincome}</div>
                        <svg>
                          <circle class="bg" cx="40" cy="40" r="37"></circle>
                          <circle
                            class="progress two"
                            cx="40"
                            cy="40"
                            r="37"
                          ></circle>
                        </svg>
                      </div>

                      <div class="row w-100 align-items-center">
                        <div class="col-9">
                          <div class="me-2">
                            <h6 class="mb-2 fontss text-uppercase">
                              Weekly Salary Income
                            </h6>
                          </div>
                        </div>
                        <div class="col-3 text-end">
                          <button
                            type="button"
                            class="btn btn-sm btn-icon btn-label-secondary waves-effect"
                          >
                            <i class="ti ti-chevron-right scaleX-n1-rtl"></i>
                          </button>
                        </div>
                      </div>
                      <div class="resize-triggers">
                        <div class="expand-trigger">
                          <div></div>
                        </div>
                        <div class="contract-trigger"></div>
                      </div>
                    </li>
                    <li class="d-flex mb-3 pb-1">
                      <div class="circle-small">
                        <div class="text">$ {dash.cto_income}</div>
                        <svg>
                          <circle class="bg" cx="40" cy="40" r="37"></circle>
                          <circle
                            class="progress two"
                            cx="40"
                            cy="40"
                            r="37"
                          ></circle>
                        </svg>
                      </div>

                      <div class="row w-100 align-items-center">
                        <div class="col-9">
                          <div class="me-2">
                            <h6 class="mb-2 fontss text-uppercase">
                              Global Turnover Income
                            </h6>
                          </div>
                        </div>
                        <div class="col-3 text-end">
                          <button
                            type="button"
                            class="btn btn-sm btn-icon btn-label-secondary waves-effect"
                          >
                            <i class="ti ti-chevron-right scaleX-n1-rtl"></i>
                          </button>
                        </div>
                      </div>
                      <div class="resize-triggers">
                        <div class="expand-trigger">
                          <div></div>
                        </div>
                        <div class="contract-trigger"></div>
                      </div>
                    </li>

                    <li class="d-flex mb-3 pb-1">
                      <div class="circle-small">
                        <div class="text">$ {dash.pool_income}</div>
                        <svg>
                          <circle class="bg" cx="40" cy="40" r="37"></circle>
                          <circle
                            class="progress two"
                            cx="40"
                            cy="40"
                            r="37"
                          ></circle>
                        </svg>
                      </div>

                      <div class="row w-100 align-items-center">
                        <div class="col-9">
                          <div class="me-2">
                            <h6 class="mb-2 fontss text-uppercase">
                              Pool Income
                            </h6>
                          </div>
                        </div>
                        <div class="col-3 text-end">
                          <button
                            type="button"
                            class="btn btn-sm btn-icon btn-label-secondary waves-effect"
                          >
                            <i class="ti ti-chevron-right scaleX-n1-rtl"></i>
                          </button>
                        </div>
                      </div>
                      <div class="resize-triggers">
                        <div class="expand-trigger">
                          <div></div>
                        </div>
                        <div class="contract-trigger"></div>
                      </div>
                    </li>

                    <li class="d-flex mb-3 pb-1">
                      <div class="circle-small">
                        <div class="text">$ {dash.direct_matrix_income}</div>
                        <svg>
                          <circle class="bg" cx="40" cy="40" r="37"></circle>
                          <circle
                            class="progress one"
                            cx="40"
                            cy="40"
                            r="37"
                          ></circle>
                        </svg>
                      </div>

                      <div class="row w-100 align-items-center">
                        <div class="col-9">
                          <div class="me-2">
                            <h6 class="mb-2 fontss text-uppercase">
                              Matrix Referral
                            </h6>
                          </div>
                        </div>
                        <div class="col-3 text-end">
                          <button
                            type="button"
                            class="btn btn-sm btn-icon btn-label-secondary waves-effect"
                          >
                            <i class="ti ti-chevron-right scaleX-n1-rtl"></i>
                          </button>
                        </div>
                      </div>
                      <div class="resize-triggers">
                        <div class="expand-trigger">
                          <div></div>
                        </div>
                        <div class="contract-trigger"></div>
                      </div>
                    </li>
                    <li class="d-flex mb-3 pb-1">
                      <div class="circle-small">
                        <div class="text">$ {dash.matrixincome}</div>
                        <svg>
                          <circle class="bg" cx="40" cy="40" r="37"></circle>
                          <circle
                            class="progress one"
                            cx="40"
                            cy="40"
                            r="37"
                          ></circle>
                        </svg>
                      </div>

                      <div class="row w-100 align-items-center">
                        <div class="col-9">
                          <div class="me-2">
                            <h6 class="mb-2 fontss text-uppercase">
                              Matrix Level Income
                            </h6>
                          </div>
                        </div>
                        <div class="col-3 text-end">
                          <button
                            type="button"
                            class="btn btn-sm btn-icon btn-label-secondary waves-effect"
                          >
                            <i class="ti ti-chevron-right scaleX-n1-rtl"></i>
                          </button>
                        </div>
                      </div>
                      <div class="resize-triggers">
                        <div class="expand-trigger">
                          <div></div>
                        </div>
                        <div class="contract-trigger"></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* NEW DESGIN ENDS */}
        </div>
        {/* <!-- /Container --> */}
      </div>

      {/* </main> */}
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

export default Dashboard;
