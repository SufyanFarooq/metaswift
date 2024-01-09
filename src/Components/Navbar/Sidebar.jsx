import React, { useState } from "react";
import "./Navbar.css";
import id_green from "./img/green.png";
import id_red from "./img/red.png";
import { API } from "../../Redux/API";

function Sidebar() {
  const [click, setClick] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [packegeid, setpackegeid] = useState(0);
  const user = sessionStorage.getItem("user");
  let ress = JSON.parse(user);
  // console.log("ress", ress);
  let uId = ress.uid_output;
  // let uId = 778899

  const dashbord = async () => {
    let res = await API.get(`/getDashboardValues?id=${uId}`);
    res = res.data.data[0];
    setpackegeid(res.package);
  };

  return (
    <div>
      <a
        className="btn "
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        <i className="header-icon fe fe-align-left"></i>
        {"  "}
        <span style={{ fontSize: "16px", padding: "0 10px" }}>Menu</span>
      </a>
      <a href="/Dashboard">
        <img
          src="/favicon.png"
          className="mobile-logo dark-logo-1 main_logo"
          alt="logo"
        />
      </a>
      {/* <button
        className="navbar-toggler navresponsive-toggler d-lg-none ms-auto collapsed"
        style={{ float: 'right' }}
        type="button"
        data-bs-toggle="collapse"
        onClick={() => setClick(!click)}
        data-bs-target="#navbarSupportedContent-4"
        aria-controls="navbarSupportedContent-4"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon fe fe-more-vertical"></span>
      </button> */}

      {click && (
        <ul className="nav nav-item header-icons navbar-nav-right ms-auto">
          <li className="dropdown main-profile-menu nav-item">
            <a
              className="breadcrumb-item tx-15"
              href=""
              data-bs-toggle="dropdown"
            >
              <h6 className="probileseix m-0">
                <span style={{ color: "black" }} className="me-1">
                  {" "}
                  ID:-
                </span>
                {packegeid > 0 ? (
                  <>
                    <img src={id_green} width="13%" />
                  </>
                ) : (
                  <>
                    <img src={id_red} width="13%" />
                  </>
                )}
                &nbsp;
                <span style={{ color: "black" }}>{user}</span>
              </h6>
              <img width="15%" src="assets/img/user_pic.png" /> &nbsp;User ID :{" "}
              {uId} <br />
              Have a nice day at work !
            </a>
            <ul className="dropdown-menu charno">
              <li>
                <a className="dropdown-item" href="/profile">
                  <i className="fe fe-user"></i>Profile
                </a>
                <a className="dropdown-item" href="/">
                  <i className="fe fe-power"></i>Log Out
                </a>
              </li>
            </ul>
          </li>
        </ul>
      )}
      {/* <div className="mb-0 navbar navbar-expand-lg  responsive-navbar navbar-dark p-0"> */}
      {/* <div className="collapse navbar-collapse" > */}
      <ul className="nav nav-item header-icons mere_sarkar navbar-nav-right ms-auto mt-1">
        <li className="dropdown main-profile-menu nav-item">
          <a
            className="breadcrumb-item tx-15"
            href=""
            data-bs-toggle="dropdown"
          >
            <img width="15%" src="assets/img/user_pic.png" />
            <span className="user"> &nbsp;User ID : {uId}</span> <br />
            <span className="nice">Have a nice day at work ! </span>
          </a>
          {/* <ul className="dropdown-menu Profile-logout">
            <li>
            <a className="dropdown-item" href="/profile">
                <i className="fe fe-user"></i>Profile
              </a>            
            </li>
          </ul> */}
        </li>
      </ul>
      {/* </div> */}
      {/* // </div> */}

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        style={{ background: "var(--main-gradient-bg)" }}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <img
            src="/favicon.png"
            className="mobile-logo dark-logo-1"
            style={{ width: "50%", marginLeft: "25%", marginTop: "5px" }}
            alt="logo"
          />
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <hr />
        <div className="offcanvas-body">
          <div className="dropdown mt-3">
            <li className="slide">
              <a
                className="side-menu__item side-menu__item "
                type="button"
                href="/Dashboard"
                // id="dropdownMenuButton"
                // onClick={() =>
                //   openDropdown === "dropdown1"
                //     ? setOpenDropdown(null)
                //     : setOpenDropdown("dropdown1")
                //   }
                style={{ fontSize: "16px", color: "var(--primary05)" }}
              >
                <span style={{ marginRight: "20px" }}>
                  <svg
                    className="ionicon side-menu__icon"
                    viewBox="0 0 512 512"
                  >
                    <title>Home</title>
                    <path
                      d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></path>
                    <path
                      d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></path>
                  </svg>
                </span>
                Dashboard
              </a>
              {/* {openDropdown === "dropdown1" ? (
                < >
                  <li>
                    <a className="slide-item" href="/Dashboard">
                      {' '}
                      Dashboard{' '}
                    </a>
                  </li>
                </>
              ): null} */}
            </li>

            <li className="slide">
              <a
                className="side-menu__item dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                onClick={() =>
                  openDropdown === "dropdown17"
                    ? setOpenDropdown(null)
                    : setOpenDropdown("dropdown17")
                }
                style={{ fontSize: "16px", color: "var(--primary05)" }}
              >
                <span style={{ marginRight: "20px" }}>
                  <svg
                    className="ionicon side-menu__icon"
                    viewBox="0 0 512 512"
                  >
                    <title>Change Password</title>
                    <circle
                      cx="256"
                      cy="184"
                      r="120"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                    <circle
                      cx="344"
                      cy="328"
                      r="120"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                    <circle
                      cx="168"
                      cy="328"
                      r="120"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                  </svg>
                </span>
                Profile
              </a>
              {openDropdown === "dropdown17" ? (
                <>
                  <li>
                    <a className="slide-item" href="/profile">
                      {" "}
                      Edit Profile{" "}
                    </a>{" "}
                  </li>
                  {/* <li>
                    <a className="slide-item" href="/Transaction_Password">
                      {" "}
                      Change Transaction Password{" "}
                    </a>{" "}
                  </li> */}
                  <li>
                    <a className="slide-item" href="/Change_Password">
                      {" "}
                      Change Password
                    </a>
                  </li>
                </>
              ) : null}
            </li>

            {/* <li
              className="side-item side-item-category side-menu__label"
              style={{ padding: '10px 0px', fontSize: '16px', color: 'var(--primary05)' }}
            >
              NFT Activate
            </li> */}
            {/* <li className="slide">
              <a
                className="side-menu__item dropdown-toggle side-menu__item "
                type="button"
                id="dropdownMenuButton"
                onClick={() =>
                  openDropdown === "dropdown2"
                    ? setOpenDropdown(null)
                    : setOpenDropdown("dropdown2")
                }
                style={{ fontSize: '16px', color: 'var(--primary05)' }}
              >
                <span style={{ marginRight: '20px' }}>
                  <svg className="ionicon side-menu__icon" viewBox="0 0 512 512">
                    <title>NFT Package</title>
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M336 320H32L184 48l152 272zM265.32 194.51A144 144 0 11192 320"
                    ></path>
                  </svg>
                </span>
                NFT Package
              </a>
              {openDropdown === "dropdown2" ? (
                < >
                   <li>
                    <a className="slide-item" href="/My_Carbon_nfts">
                      {' '}
                     Mint NFTs{' '}
                    </a>
                  </li>
                  <li>
                    <a className="slide-item" href="/Activate">
                      {' '}
                     Activation
                    </a>
                  </li>

                  <li>
                    <a className="slide-item" href="/NFT_History">
                      {' '}
                     NFT History{' '}
                    </a>
                  </li>
                  
                </>
               ) : null}

            </li> */}

            {/* <li
              className="side-item side-item-category"
              style={{ padding: '10px 0px', fontSize: '16px', color: 'var(--primary05)' }}
            >
              Staking
            </li> */}
            {/* <li className="slide">
              <a
                className="side-menu__item dropdown-toggle"
                style={{ fontSize: '16px', color: 'var(--primary05)' }}
                type="button"
                id="dropdownMenuButton"
                onClick={() =>
                  openDropdown === "dropdown7"
                    ? setOpenDropdown(null)
                    : setOpenDropdown("dropdown7")
                }

              >
                <span style={{ marginRight: '20px' }}>
                  <svg className="ionicon side-menu__icon" viewBox="0 0 512 512">
                    <title> Staking</title>
                    <circle
                      cx="256"
                      cy="184"
                      r="120"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                    <circle
                      cx="344"
                      cy="328"
                      r="120"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                    <circle
                      cx="168"
                      cy="328"
                      r="120"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                  </svg>
                </span>
                Staking
              </a>
              {openDropdown === "dropdown7" ? (
                <>
                 <li>
                    <a className="slide-item" href="/Staking_Actvation">
                      {' '}
                      Staking Actvation
                    </a>
                  </li> 
                  <li>
                    <a className="slide-item" href="/Staking_history">
                      {' '}
                      Staking History
                    </a>
                  </li>
                  <li>
                    <a className="slide-item" href="/Level_Income">
                      {' '}
                      Level Income
                    </a>
                  </li> 
                  <li>
                    <a className="slide-item" href="/Staking_Claim_History">
                      {' '}
                     Staking Claim History 
                    </a>
                  </li>
                 
                </>
             ) : null}
            </li> */}

            {/* <li
              className="side-item side-item-category"
              style={{ padding: '10px 0px', fontSize: '16px', color: 'var(--primary05)' }}
            >
             Team Details
            </li> */}
            <li
              className="slide"
              style={{ marginTop: "5px", color: "var(--primary05)" }}
            >
              <a
                className="side-menu__item dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                style={{ fontSize: "16px" }}
                onClick={() =>
                  openDropdown === "dropdown5"
                    ? setOpenDropdown(null)
                    : setOpenDropdown("dropdown5")
                }
              >
                <span style={{ marginRight: "20px" }}>
                  <svg
                    className="ionicon side-menu__icon"
                    viewBox="0 0 512 512"
                  >
                    <title>Team Details</title>
                    <rect
                      x="64"
                      y="64"
                      width="80"
                      height="80"
                      rx="40"
                      ry="40"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    ></rect>
                    <rect
                      x="216"
                      y="64"
                      width="80"
                      height="80"
                      rx="40"
                      ry="40"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    ></rect>
                    <rect
                      x="368"
                      y="64"
                      width="80"
                      height="80"
                      rx="40"
                      ry="40"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    ></rect>
                    <rect
                      x="64"
                      y="216"
                      width="80"
                      height="80"
                      rx="40"
                      ry="40"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    ></rect>
                    <rect
                      x="216"
                      y="216"
                      width="80"
                      height="80"
                      rx="40"
                      ry="40"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    ></rect>
                    <rect
                      x="368"
                      y="216"
                      width="80"
                      height="80"
                      rx="40"
                      ry="40"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    ></rect>
                    <rect
                      x="64"
                      y="368"
                      width="80"
                      height="80"
                      rx="40"
                      ry="40"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    ></rect>
                    <rect
                      x="216"
                      y="368"
                      width="80"
                      height="80"
                      rx="40"
                      ry="40"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    ></rect>
                    <rect
                      x="368"
                      y="368"
                      width="80"
                      height="80"
                      rx="40"
                      ry="40"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    ></rect>
                  </svg>
                </span>
                Team Details
              </a>
              {openDropdown === "dropdown5" ? (
                <>
                  <li>
                    <a className="slide-item" href="/My_Team">
                      My Team
                    </a>
                  </li>
                  <li>
                    <a className="slide-item" href="/My_Referral">
                      My Referral
                    </a>
                  </li>

                  <li>
                    <a className="slide-item" href="/Level_Details">
                      Level Details
                    </a>
                  </li>
                  <li>
                    <a className="slide-item" href="/Matrix_downline">
                      Matrix Downline
                    </a>
                  </li>
                  <li>
                    <a className="slide-item" href="/Matrix_Tree">
                      Matrix Tree
                    </a>
                  </li>
                  <li>
                    <a className="slide-item" href="/Direct_Leg_Business">
                      Direct Leg Business
                    </a>
                  </li>
                  <li>
                    <a className="slide-item" href="/Rank_Details">
                      Rank Details
                    </a>
                  </li>
                </>
              ) : null}
            </li>

            <li className="slide">
              <a
                className="side-menu__item dropdown-toggle"
                style={{ fontSize: "16px", color: "var(--primary05)" }}
                type="button"
                id="dropdownMenuButton"
                onClick={() =>
                  openDropdown === "dropdown16"
                    ? setOpenDropdown(null)
                    : setOpenDropdown("dropdown16")
                }
              >
                <span style={{ marginRight: "20px" }}>
                  <svg
                    className="ionicon side-menu__icon"
                    viewBox="0 0 512 512"
                  >
                    <title> Activation </title>
                    <circle
                      cx="256"
                      cy="184"
                      r="120"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                    <circle
                      cx="344"
                      cy="328"
                      r="120"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                    <circle
                      cx="168"
                      cy="328"
                      r="120"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                  </svg>
                </span>
                Activation
              </a>
              {openDropdown === "dropdown16" ? (
                <>
                  <li>
                    <a className="slide-item" href="/Activate">
                      Activation
                    </a>
                  </li>

                  <li>
                    <a className="slide-item" href="/Activation_History">
                      Activation History
                    </a>
                  </li>
                  {/* <li>
                    <a className="slide-item" href="/MatrixActivate">
                      Matrix Activation
                    </a>
                  </li> */}
                  <li>
                    <a className="slide-item" href="/Matrix_Activate_History">
                      Matrix Activation History
                    </a>
                  </li>
                </>
              ) : null}
            </li>
            <li className="slide">
              <a
                className="side-menu__item dropdown-toggle"
                style={{ fontSize: "16px", color: "var(--primary05)" }}
                type="button"
                id="dropdownMenuButton"
                onClick={() =>
                  openDropdown === "dropdown4"
                    ? setOpenDropdown(null)
                    : setOpenDropdown("dropdown4")
                }
              >
                <span style={{ marginRight: "20px" }}>
                  <svg
                    className="ionicon side-menu__icon"
                    viewBox="0 0 512 512"
                  >
                    <title> All Income</title>
                    <circle
                      cx="256"
                      cy="184"
                      r="120"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                    <circle
                      cx="344"
                      cy="328"
                      r="120"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                    <circle
                      cx="168"
                      cy="328"
                      r="120"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                  </svg>
                </span>
                All Income
              </a>
              {openDropdown === "dropdown4" ? (
                <>
                  {/* <li>
                    <a className="slide-item" href="/Sign_Up_Bonus">
                      {' '}
                      Free Sign Up Bonus
                    </a>
                  </li> */}
                  {/* <li>
                    <a className="slide-item" href="/Referral_Bonus">
                      {" "}
                      Referral Sign Up Rapid Fund
                    </a>
                  </li> */}
                  <li>
                    <a className="slide-item" href="/Global_Single_Leg_Income">
                      {" "}
                      Global Single Leg Income
                    </a>
                  </li>
                  <li>
                    <a className="slide-item" href="/Refund_Income">
                      {" "}
                      Direct Income
                    </a>
                  </li>
                  <li>
                    <a className="slide-item" href="/Infinity_Bonus">
                      {" "}
                      Infinity Bonus
                    </a>
                  </li>
                  <li>
                    <a className="slide-item" href="/Weekly_Salary">
                      {" "}
                      Weekly Salary
                    </a>
                  </li>
                  {/* <li>
                    <a className="slide-item" href="/SingleLeg_Income">
                      {" "}
                      Single Leg Income
                    </a>
                  </li> */}
                  <li>
                    <a className="slide-item" href="/CTO_Income">
                      {" "}
                      Global Turnover Income
                    </a>
                  </li>
                  <li>
                    <a className="slide-item" href="/Matrix_Referral_Income">
                      {" "}
                      Matrix Referral Income
                    </a>
                  </li>
                  <li>
                    <a className="slide-item" href="/Matrix_Level_Income">
                      {" "}
                      Matrix Level Income
                    </a>
                  </li>
                  <li>
                    <a className="slide-item" href="/Matrix_IncomeDetails">
                      Matrix Income Summary
                    </a>
                  </li>
                  <li>
                    <a className="slide-item" href="/Pool_Income">
                     Pool Income
                    </a>
                  </li>
                </>
              ) : null}
            </li>
            <li className="slide">
              <a
                className="side-menu__item dropdown-toggle"
                style={{ fontSize: "16px", color: "var(--primary05)" }}
                type="button"
                id="dropdownMenuButton"
                onClick={() =>
                  openDropdown === "dropdown2"
                    ? setOpenDropdown(null)
                    : setOpenDropdown("dropdown2")
                }
              >
                <span style={{ marginRight: "20px" }}>
                  <svg
                    className="ionicon side-menu__icon"
                    viewBox="0 0 512 512"
                  >
                    <title> Rapid Fund</title>
                    <circle
                      cx="256"
                      cy="184"
                      r="120"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                    <circle
                      cx="344"
                      cy="328"
                      r="120"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                    <circle
                      cx="168"
                      cy="328"
                      r="120"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                  </svg>
                </span>
                Transfer Fund
              </a>
              {openDropdown === "dropdown2" ? (
                <>
                  {/* <li>
                    <a className="slide-item" href="/Trading_Withdrawal">
                      {" "}
                      Transfer Rapid Fund
                    </a>
                  </li> */}
                  {/* <li>
                    <a className="slide-item" href="/Reward_Withdrawal_History">
                      {" "}
                      Received Rapid Fund
                    </a>
                  </li> */}
                  {/* <li>
                    <a className="slide-item" href="/Trading_Withdrawal_History">
                      {" "}
                      Transfer Rapid Fund History
                    </a>
                  </li> */}
                  <li>
                    <a className="slide-item" href="/UserToUser_transfer">
                      {" "}
                      Transfer Activation Fund
                    </a>
                  </li>
                  {/* <li>
                    <a className="slide-item" href="/UserToUser_Transfer_History">
                      {" "}
                      User To User Fund Transfer History
                    </a>
                  </li> */}
                  {/* 
                  <li>
                    <a
                      className="slide-item"
                      href="/Receive_Admin_Fund_History"
                    >
                      {" "}
                      Received Activation Fund
                    </a>
                  </li> */}

                  <li>
                    <a className="slide-item" href="/UserToUserMatrix">
                      {" "}
                      Transfer Matrix Fund
                    </a>
                  </li>
                  {/* <li>
                    <a className="slide-item" href="/IncomeToMatrixHistory">
                      {" "}
                      Received Matrix Fund
                    </a>
                  </li> */}
                  <li>
                    <a className="slide-item" href="/IncomeToMatrix">
                      {" "}
                      Convert Income Fund To Matrix Fund
                    </a>
                  </li>
                  <li>
                    <a className="slide-item" href="/IncomeToActivation">
                      {" "}
                      Convert Income Fund To Activation Fund
                    </a>
                  </li>
                  {/* <li>
                    <a className="slide-item" href="/IncomeToActivationHistory">
                      {" "}
                      Activation Fund Convert History
                    </a>
                  </li> */}
                </>
              ) : null}
            </li>

            {/* <li
              className="side-item side-item-category"
              style={{ padding: '10px 0px', fontSize: '16px', color: 'var(--primary05)' }}
            >
            Withdrawal
            </li> */}

            {/* <li className="slide">
              <a
                className="side-menu__item dropdown-toggle"
                style={{ fontSize: "16px", color: "var(--primary05)" }}
                type="button"
                id="dropdownMenuButton"
                onClick={() =>
                  openDropdown === "dropdownFund"
                    ? setOpenDropdown(null)
                    : setOpenDropdown("dropdownFund")
                }
              >
                <span style={{ marginRight: "20px" }}>
                  <svg
                    className="ionicon side-menu__icon"
                    viewBox="0 0 512 512"
                  >
                    <title>Deposit Fund</title>
                    <circle
                      cx="256"
                      cy="184"
                      r="120"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                    <circle
                      cx="344"
                      cy="328"
                      r="120"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                    <circle
                      cx="168"
                      cy="328"
                      r="120"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                  </svg>
                </span>
                Deposit Fund
              </a>
              {openDropdown === "dropdownFund" ? (
                <>
                  <li>
                    <a className="slide-item" href="/DepositeCoin">
                      {" "}
                      Deposit Fund
                    </a>
                  </li>
                  <li>
                    <a className="slide-item" href="/DepositeCoinHistory">
                      {" "}
                      Deposit Fund History
                    </a>
                  </li>
                </>
              ) : null}
            </li> */}
            <li className="slide">
              <a
                className="side-menu__item dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                onClick={() =>
                  openDropdown === "dropdown3"
                    ? setOpenDropdown(null)
                    : setOpenDropdown("dropdown3")
                }
                style={{ fontSize: "16px", color: "var(--primary05)" }}
              >
                <span style={{ marginRight: "20px" }}>
                  <svg
                    className="ionicon side-menu__icon"
                    viewBox="0 0 512 512"
                  >
                    {" "}
                    <title>Withdrawal</title>
                    <rect
                      x="128"
                      y="128"
                      width="336"
                      height="336"
                      rx="57"
                      ry="57"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></rect>
                    <path
                      d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></path>{" "}
                  </svg>
                </span>
                Withdrawal
              </a>
              {openDropdown === "dropdown3" ? (
                <>
                  <li>
                    <a className="slide-item" href="/Working_Withdrawal">
                      {" "}
                      Withdrawal{" "}
                    </a>{" "}
                  </li>
                  <li>
                    <a className="slide-item" href="/Withdrawal_History">
                      {" "}
                      Withdrawal History
                    </a>
                  </li>
                </>
              ) : null}
            </li>

            {/* <li
              className="side-item side-item-category"
              style={{ padding: '10px 0px', fontSize: '16px', color: 'var(--primary05)' }}
            >
            Award
            </li> */}
            {/* <li className="slide">
              <a
                className="side-menu__item dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                onClick={() =>
                  openDropdown === "dropdown8"
                    ? setOpenDropdown(null)
                    : setOpenDropdown("dropdown8")
                }
                style={{ fontSize: '16px', color: 'var(--primary05)' }}
              >
                <span style={{ marginRight: '20px' }}>
                  <svg className="ionicon side-menu__icon" viewBox="0 0 512 512">
                    <title>Rewards</title>
                    <circle
                      cx="256"
                      cy="184"
                      r="120"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                    <circle
                      cx="344"
                      cy="328"
                      r="120"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                    <circle
                      cx="168"
                      cy="328"
                      r="120"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                  </svg>
                </span>
                Awards
                </a>
              {openDropdown === "dropdown8" ? (
                <>
                  <li>
                    <a className="slide-item" href="/Rewards">
                      {' '}
                      Rewards{' '}
                    </a>{' '}
                  </li>
                  { <li>
                    <a className="slide-item" href="/Achiever">
                      {' '}
                     Achiever
                    </a>
                  </li> }
                </>
              ) : null}
            </li> */}

            {/* <li
              className="side-item side-item-category"
              style={{ padding: '10px 0px', fontSize: '16px', color: 'var(--primary05)' }}
            >
            Address
            </li> */}
            {/* <li
              className="slide"
              style={{ marginTop: "5px", color: "var(--primary05)" }}
            >
              <a
                className="side-menu__item dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                style={{ fontSize: "16px" }}
                onClick={() =>
                  openDropdown === "dropdown6"
                    ? setOpenDropdown(null)
                    : setOpenDropdown("dropdown6")
                }
              >
                <span style={{ marginRight: "20px" }}>
                  <svg
                    className="ionicon side-menu__icon"
                    viewBox="0 0 512 512"
                  >
                    <title>Address</title>
                    <rect
                      x="64"
                      y="64"
                      width="80"
                      height="80"
                      rx="40"
                      ry="40"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    ></rect>
                    <rect
                      x="216"
                      y="64"
                      width="80"
                      height="80"
                      rx="40"
                      ry="40"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    ></rect>
                    <rect
                      x="368"
                      y="64"
                      width="80"
                      height="80"
                      rx="40"
                      ry="40"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    ></rect>
                    <rect
                      x="64"
                      y="216"
                      width="80"
                      height="80"
                      rx="40"
                      ry="40"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    ></rect>
                    <rect
                      x="216"
                      y="216"
                      width="80"
                      height="80"
                      rx="40"
                      ry="40"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    ></rect>
                    <rect
                      x="368"
                      y="216"
                      width="80"
                      height="80"
                      rx="40"
                      ry="40"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    ></rect>
                    <rect
                      x="64"
                      y="368"
                      width="80"
                      height="80"
                      rx="40"
                      ry="40"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    ></rect>
                    <rect
                      x="216"
                      y="368"
                      width="80"
                      height="80"
                      rx="40"
                      ry="40"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    ></rect>
                    <rect
                      x="368"
                      y="368"
                      width="80"
                      height="80"
                      rx="40"
                      ry="40"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    ></rect>
                  </svg>
                </span>
                Address
              </a>
              {openDropdown === "dropdown6" ? (
                <>
                  <li>
                    <a className="slide-item" href="/Self_Address">
                      Self Address
                    </a>
                  </li>
                  <li>
                    <a className="slide-item" href="/NFT_Address">
                      Contract Address
                    </a>
                  </li>
                </>
              ) : null}
            </li> */}

            <li className="slide">
              <a
                className="side-menu__item dropdown-toggle"
                style={{ fontSize: "16px", color: "var(--primary05)" }}
                type="button"
                id="dropdownMenuButton"
                onClick={() =>
                  openDropdown === "dropdownFund"
                    ? setOpenDropdown(null)
                    : setOpenDropdown("dropdownFund")
                }
              >
                <span style={{ marginRight: "20px" }}>
                  <svg
                    className="ionicon side-menu__icon"
                    viewBox="0 0 512 512"
                  >
                    <title>Deposit Fund</title>
                    <circle
                      cx="256"
                      cy="184"
                      r="120"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                    <circle
                      cx="344"
                      cy="328"
                      r="120"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                    <circle
                      cx="168"
                      cy="328"
                      r="120"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                  </svg>
                </span>
                Deposit Fund
              </a>
              {openDropdown === "dropdownFund" ? (
                <>
                  <li>
                    <a className="slide-item" href="/DepositBNB">
                      {" "}
                      Deposit USDT (BEP20)
                    </a>
                  </li>
                  <li>
                    <a className="slide-item" href="/Deposit">
                      {" "}
                      Deposit USDT (MATIC20)
                    </a>
                  </li>
                  <li>
                    <a className="slide-item" href="/DepositHistory">
                      {" "}
                      Deposit Fund History
                    </a>
                  </li>

                  {/* <li>
                    <a className="slide-item" href="/DepositeCoin">
                      {" "}
                      Deposit Fund
                    </a>
                  </li>
                  <li>
                    <a className="slide-item" href="/DepositeCoinHistory">
                      {" "}
                      Deposit Fund History
                    </a>
                  </li> */}
                </>
              ) : null}
            </li>
            <li className="slide">
              <a
                className="side-menu__item dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                onClick={() =>
                  openDropdown === "dropdown10"
                    ? setOpenDropdown(null)
                    : setOpenDropdown("dropdown10")
                }
                style={{ fontSize: "16px", color: "var(--primary05)" }}
              >
                <span style={{ marginRight: "20px" }}>
                  <svg
                    className="ionicon side-menu__icon"
                    viewBox="0 0 512 512"
                  >
                    <title>HelpDesk</title>
                    <circle
                      cx="256"
                      cy="184"
                      r="120"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                    <circle
                      cx="344"
                      cy="328"
                      r="120"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                    <circle
                      cx="168"
                      cy="328"
                      r="120"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                  </svg>
                </span>
                HelpDesk
              </a>
              {openDropdown === "dropdown10" ? (
                <>
                  <li>
                    <a
                      className="slide-item"
                      target="_blank"
                      href="https://t.me/Metaswift_support"
                    >
                      {" "}
                      Raise A Query{" "}
                    </a>{" "}
                  </li>
                  {/* <li>
                    <a className="slide-item" href="/Query">
                      {" "}
                      Raise A Query{" "}
                    </a>{" "}
                  </li> */}
                  {/* <li>
                    <a className="slide-item" href="/Achiever">
                      {' '}
                     Achiever
                    </a>
                  </li> */}
                </>
              ) : null}
            </li>

            <a
              className="side-menu__label"
              href="/"
              style={{
                fontSize: "16px",
                color: "var(--primary05)",
                padding: "5px 0px",
                fontWeight: "600",
              }}
            >
              <span style={{ marginRight: "20px" }}>
                {" "}
                <svg className="ionicon side-menu__icon" viewBox="0 0 512 512">
                  <title>Logout</title>
                  <rect
                    x="128"
                    y="128"
                    width="336"
                    height="336"
                    rx="57"
                    ry="57"
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="32"
                  ></rect>
                  <path
                    d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  ></path>
                </svg>
              </span>
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
