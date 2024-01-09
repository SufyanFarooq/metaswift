import React, { useEffect, useState } from "react";
import { API } from "../../Redux/API";
import Sidebar from "../Navbar/Sidebar";
import Table from "../Table/Table";
import Table_Buttons from "../Table_Buttons/Table_Button";
import { Select } from "antd";

function Matrix_downline() {
  const user = sessionStorage.getItem("user");
  let ress = JSON.parse(user);
  if (ress == undefined || ress == "" || ress == null) {
    window.location.href = "/login";
  }
  let uId = ress.uid_output;

  const [userid, setUserId] = useState(0);
  const [toDate, setToDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [status_val, setStatus] = useState("0");
  const [postion_val, setPosition] = useState("0");
  const [referralApi, setreferralApi] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [listPerpage, setlistPerpage] = useState(10);

  const handleChange_status = (value) => {
    setStatus(value);
  };

  const handleChange_package = (value) => {
    setPosition(value);
  };

  const Binary_Income = async () => {
    try {
      let responce = await API.get(
        `MatrixDownline2?loginuid=${uId}&uid=${userid}&level=${status_val}&package=${postion_val}`
      );
      responce = responce.data.data;
      console.log("Binary_Income", responce);

      setreferralApi([]);

      let arr = [];
      responce.forEach((item, index) => {
        arr.push({
          sr: index + 1,
          user_id: item.uid,
          f_name: item.f_name,
          Package: item.packagename,
          level: item.levelcount,
          date: `${item.edate1}`,
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
      { Header: "Name", accessor: "f_name" },
      { Header: "Slot", accessor: "Package" },
      { Header: "Level", accessor: "level" },
      { Header: "Date & Time", accessor: "date" },
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
                Matrix Downline
              </span>
            </div>
            <div class="justify-content-center mt-2">
              <ol class="breadcrumb breadcrumb-style3">
                <li class="breadcrumb-item tx-15">
                  <a href="#">Team Details</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Matrix Downline
                </li>
              </ol>
            </div>
          </div>
          {/* <!-- /breadcrumb --> */}

          <div class="row">
            <div class="col-xl-12">
              <div class="card">
                <div class="card-body">
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
                  onChange={(e) => setToDate(e.target.value)}
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
                  onChange={(e) => setFromDate(e.target.value)}
                  name="to_date"
                  id="to_date"
                  class="form-control"
                />
              </div> */}
                      {/* <div class="col-md-2">
                        <label>Package</label>
                        <select
                          id="position"
                          onSelect={(e) => setPosition(e.target.value)}
                          class="floating-input form-control select_bg"
                        >
                          <option value="0">All Package</option>
                          <option value="1">$5</option>
                          <option value="2">$10</option>
                          <option value="3">$25</option>
                          <option value="4">$50</option>
                          <option value="5">$100</option>
                          <option value="6">$250</option>
                          <option value="7">$500</option>
                          <option value="8">$1000</option>
                          <option value="9">$2500</option>
                          <option value="10">$5000</option>
                          <option value="11">$10000</option>
                          <option value="12">$25000</option>
                          <option value="13">$50000</option>
                        </select>
                      </div> */}
                      {/* <div class="col-md-2">
                        <label>Choose Level</label>
                        <select
                          id="status"
                          onSelect={(e) => setStatus(e.target.value)}
                          class="floating-input form-control select_bg"
                        >
                          <option value="0">All</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                      </div> */}
                      <div className="col-md-2">
                        <label>Choose Slot</label>
                        <Select
                          defaultValue=" Select Slot"
                          id="position"
                          className="floating-input form-control select_bg"
                          data-val="true"
                          data-val-required="Level is required"
                          onChange={handleChange_package}
                          options={[
                            {
                              value: "0",
                              label: "All Slot",
                            },
                            {
                              value: "1",
                              label: "$5",
                            },
                            {
                              value: "2",
                              label: "$10",
                            },
                            {
                              value: "3",
                              label: "$25",
                            },
                            {
                              value: "4",
                              label: "$50",
                            },
                            {
                              value: "5",
                              label: "$100",
                            },
                            {
                              value: "6",
                              label: "$250",
                            },
                            {
                              value: "7",
                              label: "$500",
                            },
                            {
                              value: "8",
                              label: "$1000",
                            },
                            {
                              value: "9",
                              label: "$2500",
                            },
                            {
                              value: "10",
                              label: "$5000",
                            },
                            {
                              value: "11",
                              label: "$10000",
                            },
                            {
                              value: "12",
                              label: "$25000",
                            },
                            {
                              value: "13",
                              label: "$50000",
                            },
                          ]}
                        />
                      </div>
                      <div className="col-md-2">
                        <label>Choose Level</label>
                        <Select
                          defaultValue=" Select Level"
                          id="position"
                          className="floating-input form-control select_bg"
                          data-val="true"
                          data-val-required="Level is required"
                          onChange={handleChange_status}
                          options={[
                            {
                              value: "0",
                              label: "All",
                            },
                            {
                              value: "1",
                              label: "1",
                            },
                            {
                              value: "2",
                              label: "2",
                            },
                            {
                              value: "3",
                              label: "3",
                            },
                            {
                              value: "4",
                              label: "4",
                            },
                            {
                              value: "5",
                              label: "5",
                            },
                            {
                              value: "6",
                              label: "6",
                            },
                            {
                              value: "7",
                              label: "7",
                            },
                            {
                              value: "8",
                              label: "8",
                            },
                            {
                              value: "9",
                              label: "9",
                            },
                            {
                              value: "10",
                              label: "10",
                            }
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
                  </div>
                  <div class="table-responsive">
                    <div
                      id="myAssets_wrapper"
                      class="dataTables_wrapper dt-bootstrap5 no-footer"
                    >
                      <div class="row">
                        <div class="col-sm-12">
                          <br />

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

export default Matrix_downline;
