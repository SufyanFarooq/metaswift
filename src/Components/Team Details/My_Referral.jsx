import React, { useEffect, useState } from "react";
import { API } from "../../Redux/API";
import Sidebar from "../Navbar/Sidebar";
import Table from "../Table/Table";
import Table_Buttons from "../Table_Buttons/Table_Button";
import { Select } from "antd";

function My_Referral() {
  const user = sessionStorage.getItem("user");
  let ress = JSON.parse(user);
  if (ress == undefined || ress == "" || ress == null) {
    window.location.href = "/login";
  }
  let uId = ress.uid_output;
  // let uId = 778899
  const [userid, setUserId] = useState(0);
  const [toDate, setToDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [status_val, setStatus] = useState("2");
  const [postion_val, setPosition] = useState("");
  const [referralApi, setreferralApi] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [listPerpage, setlistPerpage] = useState(10);

  const handleChange_status = (value) => {
    // console.log(`handleChange_status ${value}`);
    setStatus(value);
  };

  const handleChange_package = (value) => {
    // console.log(`handleChange_status ${value}`);
    setPosition(value);
  };
  const Binary_Income = async () => {
    try {
      let responce = await API.get(
        `GetMyReferral2?loginuid=${uId}&Sid=${userid}&top_up=${status_val}&position=${postion_val}`
      );
      responce = responce.data.data;
      console.log("Binary_Income", responce);

      setreferralApi([]);

      let arr = [];
      responce.forEach((item, index) => {
        arr.push({
          sr: index + 1,
          user_id: item.uid,
          name: item.f_name,
          Package: item.packagename,
          date: `${item.edate1}`,
          top_update: `${item.top_update1}`,
          Status: `${item.st} `,
          level: ` ${item.pos} `,
          mobile: `${item.mobile}`,
          CountryName: `${item.CountryName}`
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
      { Header: "User Id", accessor: "user_id" },
      { Header: "Name", accessor: "name" },
      { Header: "Mobile No.", accessor : "mobile"},
      { Header: "Country", accessor : "CountryName"},      
      { Header: "Reg. Date & Time", accessor: "date" },
      { Header: "Status", accessor: "Status" },
      { Header: "Package", accessor: "Package" },
      { Header: "Activation Date & Time", accessor: "top_update" },
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
                My Referrals
              </span>
            </div>
            <div class="justify-content-center mt-2">
              <ol class="breadcrumb breadcrumb-style3">
                <li class="breadcrumb-item tx-15">
                  <a href="#">Team Details</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  My Referrals
                </li>
              </ol>
            </div>
          </div>
          {/* <!-- /breadcrumb --> */}

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
              {/* <div class="col-md-2">
                <label> From Date</label>
                <input
                  type="date"
                  name="from_date"
                  onChange={e => setToDate(e.target.value)}
                  id="from_date"
                  class="form-control"
                  placeholder="dd-mm-yyyy"
                />
              </div>
              <div class="col-md-2">
                <label> To Date</label>
                <input
                  type="date"
                  placeholder="dd-mm-yyyy"
                  onChange={e => setFromDate(e.target.value)}
                  name="to_date"
                  id="to_date"
                  class="form-control"
                />
              </div> */}
              {/* <div class="col-md-2">
                <label>Position</label>
                <select
                  id="position"
                  onChange={e => setPosition(e.target.value)}
                  class="floating-input form-control select_bg"
                  data-val="true"
                  data-val-required="Position is required"
                >
                  <option value="Select Position">Select Position</option>
                  <option value="0">All</option>
                  <option value="1">Left</option>
                  <option value="2">Right</option>
                </select>
              </div> */}
              <div className="col-md-2">
                <label>Choose Package</label>
                <Select
                  defaultValue=" All"
                  id="pack"
                  className="floating-input form-control select_bg"
                  data-val="true"
                  data-val-required="Package is required"
                  onChange={handleChange_package}
                  options={[
                    {
                      value: "0",
                      label: "All",
                    },
                    {
                      value: "1",
                      label: "25 USD",
                    },
                    {
                      value: "2",
                      label: "50 USD",
                    },
                    {
                      value: "3",
                      label: "100 USD",
                    },
                    {
                      value: "4",
                      label: "200 USD",
                    },
                    {
                      value: "5",
                      label: "500 USD",
                    },
                    {
                      value: "6",
                      label: "1000 USD",
                    },
                  ]}
                />
              </div>
              <div className="col-md-2">
                <label>Choose Status</label>
                <Select
                  defaultValue=" Select status"
                  id="position"
                  className="floating-input form-control select_bg"
                  data-val="true"
                  data-val-required="Position is required"
                  onChange={handleChange_status}
                  options={[
                    {
                      value: "2",
                      label: "All",
                    },
                    {
                      value: "1",
                      label: "Active",
                    },
                    {
                      value: "0",
                      label: "In-Active",
                    },
                  ]}
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
            {/* <br />
<br /> */}

            <div class="col-xl-12">
              <div class="card">
                <div class="card-body">
                  <div class="table-responsive">
                    <div
                      id="myAssets_wrapper"
                      class="dataTables_wrapper dt-bootstrap5 no-footer"
                    >
                      <div class="row">
                        <div class="col-sm-12">
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

export default My_Referral;
