import React from "react";

function Navbar() {
  return (
    <div>
      {/* <!-- Top Bar Start --> */}
      <div class="topbar">
        {/* <!-- LOGO --> */}
        <div class="topbar-left">
          <div class="text-center">
            <a href="/" class="logo">
              <img
                src="assets/images/logo.png"
                width="90px"
                style={{ maxWidth: "100%" }}
              />{" "}
            </a>
          </div>
        </div>
        {/* <!-- Button mobile view to collapse sidebar menu --> */}
        <div class="navbar navbar-default" role="navigation">
          <div class="container">
            <div class="">
              <div class="pull-left">
                <button
                  class="button-menu-mobile open-left"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExample"
                  aria-controls="offcanvasExample"
                >
                  <i class="fa fa-bars"></i>
                </button>

                <div
                  class="offcanvas offcanvas-start"
                  tabIndex="-1"
                  id="offcanvasExample"
                  aria-labelledby="offcanvasExampleLabel"
                >
                  <div class="offcanvas-body pp-ip-pro">
                    <div class="topbar-left-1">
                      <div class="text-center">
                        <a href="/" class="logo">
                          <img
                            src="assets/images/logo.png"
                            width="90px"
                            style={{ maxWidth: "100%" }}
                          />{" "}
                        </a>
                      </div>
                    </div>
                    <div class="left side-menu">
                      <div class="slimScrollDiv">
                        <div class="sidebar-inner slimscrollleft">
                          <div class="user-details">
                            <div class="pull-left">
                              <img
                                src="assets/images/avatar-1.jpg"
                                alt=""
                                class="thumb-md img-circle"
                              />
                            </div>
                            <div class="user-info">
                              <div class="dropdown">
                                <a
                                  href="#"
                                  class="dropdown-toggle"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <label id="lblname">Admin</label>
                                  {/* <span class="caret"></span> */}
                                </a>
                                <ul class="dropdown-menu">
                                  <li>
                                    <a href="/Bizalom/Adminlogout">
                                      <i class="md md-settings-power"></i>{" "}
                                      Logout
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <p class="text-muted m-0">Administrator</p>
                            </div>
                          </div>
                          {/* <!--- Divider --> */}
                          <div id="sidebar-menu">
                            <ul
                              class="accordion accordion-flush"
                              id="accordionFlushExample"
                            >
                              <li class="active">
                                <a href="/" class="waves-effect ">
                                  <i class="md md-account-box"></i>Dashboard
                                </a>{" "}
                              </li>

                              <li class="has_sub">
                                <a
                                  class="waves-effect "
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#flush-collapseOne"
                                  aria-expanded="false"
                                  aria-controls="flush-collapseOne"
                                >
                                  <i class="md md-account-box"></i>
                                  <span>Member</span>
                                  {/* <span class="pull-right">
                        <i class="md md-add"></i>
                      </span> */}
                                </a>
                                <div
                                  id="flush-collapseOne"
                                  class="list-unstyled collapse"
                                  aria-labelledby="flush-headingOne"
                                  data-bs-parent="#accordionFlushExample"
                                >
                                  <li>
                                    <a
                                      class="waves-effect waves-effect-1"
                                      href="/All_member"
                                    >
                                      All Member
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="waves-effect waves-effect-1"
                                      href="/Stop_start_reg_roi"
                                    >
                                      Stop/Start Registration ROI
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="waves-effect waves-effect-1"
                                      href="/Stop_start_activation_roi"
                                    >
                                      Stop/Start Activation ROI
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="waves-effect waves-effect-1"
                                      href="/Add_power_leg"
                                    >
                                      Add Power Leg
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="waves-effect waves-effect-1"
                                      href="/Bulk_registration"
                                    >
                                      Bulk Registration
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="waves-effect waves-effect-1"
                                      href="/Activation_history"
                                    >
                                      Activation History
                                    </a>
                                  </li>
                                </div>
                              </li>
                              <li class="has_sub">
                                <a
                                  class="waves-effect"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#flush-collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="flush-collapseTwo"
                                >
                                  <i class="md md-account-box"></i>
                                  <span>All Reward</span>
                                  {/* <span class="pull-right">
                        <i class="md md-add"></i>
                      </span> */}
                                </a>

                                <div
                                  id="flush-collapseTwo"
                                  class="accordion-collapse collapse"
                                  aria-labelledby="flush-headingTwo"
                                  data-bs-parent="#accordionFlushExample"
                                >
                                  <div class="accordion-body">
                                    {" "}
                                    <li>
                                      <a
                                        class="waves-effect waves-effect-1"
                                        href="/Registration_direct_reward"
                                      >
                                        Registration Direct Reward
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        class="waves-effect waves-effect-1"
                                        href="/Registration_quartaly_reward"
                                      >
                                        Registration Quartaly Reward
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        class="waves-effect waves-effect-1"
                                        href="/Daily_yield_reward"
                                      >
                                        Daily Yield Reward
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        class="waves-effect waves-effect-1"
                                        href="/Direct_referral_reward"
                                      >
                                        Direct Referral Reward
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        class="waves-effect waves-effect-1"
                                        href="/Augumented_reward"
                                      >
                                        Augumented Reward
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        class="waves-effect waves-effect-1"
                                        href="/Auto_club_reward"
                                      >
                                        Auto Club Reward
                                      </a>
                                    </li>
                                  </div>
                                </div>
                              </li>
                              <li class="has_sub">
                                <a
                                  class="waves-effect"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#flush-collapseThree"
                                  aria-expanded="false"
                                  aria-controls="flush-collapseThree"
                                >
                                  <i class="md md-account-box"></i>
                                  <span>Team Reports</span>
                                  {/* <span class="pull-right">
                        <i class="md md-add"></i>
                      </span> */}
                                </a>

                                <div
                                  id="flush-collapseThree"
                                  class="accordion-collapse collapse"
                                  aria-labelledby="flush-headingThree"
                                  data-bs-parent="#accordionFlushExample"
                                >
                                  <div class="accordion-body">
                                    <li>
                                      <a
                                        class="waves-effect waves-effect-1"
                                        href="/Downline_team"
                                      >
                                        Downline Team
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        class="waves-effect waves-effect-1"
                                        href="/Direct_team"
                                      >
                                        Direct Team
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        class="waves-effect waves-effect-1"
                                        href="/Level_detail"
                                      >
                                        Level Details
                                      </a>
                                    </li>
                                  </div>
                                </div>
                              </li>
                              <li class="has_sub">
                                <a
                                  class="waves-effect"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#flush-collapsefour"
                                  aria-expanded="false"
                                  aria-controls="flush-collapsefour"
                                >
                                  <i class="md md-account-box"></i>
                                  <span>Withdrawal</span>
                                  {/* <span class="pull-right">
                      <i class="md md-add"></i>
                    </span> */}
                                </a>

                                <div
                                  id="flush-collapsefour"
                                  class="accordion-collapse collapse"
                                  aria-labelledby="flush-headingfour"
                                  data-bs-parent="#accordionFlushExample"
                                >
                                  <div class="accordion-body">
                                    {" "}
                                    <li>
                                      <a
                                        class="waves-effect waves-effect-1"
                                        href="/Withdrawal_history"
                                      >
                                        Withdrawal History
                                      </a>
                                    </li>
                                  </div>
                                </div>
                              </li>
                              <li class="has_sub">
                                <a
                                  class="waves-effect"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#flush-collapsefive"
                                  aria-expanded="false"
                                  aria-controls="flush-collapsefive"
                                >
                                  <i class="md md-account-box"></i>
                                  <span>Sub Admin</span>
                                  {/* <span class="pull-right">
                      <i class="md md-add"></i>
                    </span> */}
                                </a>

                                <div
                                  id="flush-collapsefive"
                                  class="accordion-collapse collapse"
                                  aria-labelledby="flush-headingfive"
                                  data-bs-parent="#accordionFlushExample"
                                >
                                  <div class="accordion-body">
                                    <li>
                                      <a
                                        class="waves-effect waves-effect-1"
                                        href="/Manage_subadmin"
                                      >
                                        Manage SubAdmin
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        class="waves-effect waves-effect-1"
                                        href="/Subadmin_rights"
                                      >
                                        SubAdmin Rights
                                      </a>
                                    </li>
                                  </div>
                                </div>
                              </li>
                            </ul>
                            <div class="clearfix"></div>
                            <div class="clearfix"></div>
                          </div>
                        </div>
                        <div
                          class="slimScrollBar"
                          style={{
                            background: "rgb(122, 134, 143)",
                            width: "5px",
                            position: "absolute",
                            top: "0px",
                            opacity: "0.4",
                            display: "none",
                            borderRadius: "7px",
                            zIndex: "99",
                            right: "1px",
                            height: "1305px",
                            visibility: "visible",
                          }}
                        ></div>
                        <div
                          class="slimScrollRail"
                          style={{
                            width: "5px",
                            height: "100%",
                            position: "absolute",
                            top: "0px",
                            display: "none",
                            borderadius: "7px",
                            background: "rgb(51, 51, 51)",
                            opacity: "0.2",
                            zIndex: "90",
                            right: "1px",
                          }}
                        ></div>
                      </div>
                      {/* <!-- Left Sidebar End --> */}
                    </div>
                  </div>
                </div>
                {/* <button type="button" ref={drawerRef} openDrawer={openDrawer} class="button-menu-mobile open-left">
                  <i class="fa fa-bars"></i>
                </button> */}
                <span class="clearfix"></span>
              </div>
              <ul class="nav navbar-nav navbar-right pull-right">
                {/* <li class="hidden-xs">
                  <a href="#" id="btn-fullscreen" class="waves-effect">
                    <i class="md md-crop-free"></i>
                  </a>
                </li> */}
                <li class="dropdown pp-pro">
                  <a
                    href="#"
                    class="dropdown-toggle profile"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
                    <img
                      src="assets/images/avatar-1.jpg"
                      alt="user-img"
                      class="img-circle"
                    />
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="#">
                        <i class="md md-settings-power"></i> Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* <!--/.nav-collapse --> */}
          </div>
        </div>
      </div>
      {/* <!-- Top Bar End --> */}
    </div>
  );
}

export default Navbar;
