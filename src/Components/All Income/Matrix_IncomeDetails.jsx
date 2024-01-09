import React, { useEffect, useState } from "react";
import { API } from "../../Redux/API";
import Sidebar from "../Navbar/Sidebar";
import Table from "../Table/Table";
import Table_Buttons from "../Table_Buttons/Table_Button";
import { Select } from "antd";

function Matrix_IncomeDetails() {
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
  const [packageAmount, setPackageAmount] = useState(0);
  const [referralApi, setreferralApi] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [listPerpage, setlistPerpage] = useState(10);

  const handleChange_package = (value) => {
    setPackageAmount(value);
  };

  const Binary_Income_Api = async () => {
    try {
      let responce = await API.get(`/AllIncomeReport?uid=${uId}`);
      responce = responce.data.data;
      console.log("Binary_Income_Api", responce);

      setreferralApi([]);

      let arr = [];
      responce.forEach((item, index) => {
        arr.push({
          sr: index + 1,
          uid: item.uid,
          directIncome: `$ ${item.directIncome}`,
          levelIncome: `$ ${item.levelIncome}`,
          totalIncome: `$ ${item.totalIncome}`,
          withdrawal: `$ ${item.withdrawal}`,
          upgrade: `$ ${item.upgrade}`
        });
      });

      setreferralApi(arr);
    } catch (e) {
      console.log("Something Error", e);
    }
  };
  useEffect(() => {
    Binary_Income_Api();
  }, []);

  const indexOfLastPost = currentPage * listPerpage;
  const indexOfFirstPage = indexOfLastPost - listPerpage;
  const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost);

  var [matching_income, set_matching_income] = new useState({
    cols: [
      { Header: "S.No", accessor: "sr" },
      { Header: "User Id", accessor: "uid" },
      { Header: "Matrix Direct Income", accessor: "directIncome" },
      { Header: "Matrix Level Income", accessor: "levelIncome" },
      { Header: "Total Income", accessor: "totalIncome" },
      { Header: "Withdrawal Wallet", accessor: "withdrawal" },
      { Header: "Upgrade Wallet", accessor: "upgrade" },
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
                Matrix Income Summary
              </span>
            </div>
            <div class="justify-content-center mt-2">
              <ol class="breadcrumb breadcrumb-style3">
                <li class="breadcrumb-item tx-15">
                  <a href="#">All Income</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                Matrix Income Summary
                </li>
              </ol>
            </div>
          </div>
          {/* <!-- /breadcrumb --> */}

          <div class="row">
            <div class="row mt-3">
              {/* <div class="col-md-3">
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
                      value: "25",
                      label: "25 USD",
                    },
                    {
                      value: "50",
                      label: "50 USD",
                    },
                    {
                      value: "100",
                      label: "100 USD",
                    },
                    {
                      value: "200",
                      label: "200 USD",
                    },
                    {
                      value: "500",
                      label: "500 USD",
                    },
                    {
                      value: "1000",
                      label: "1000 USD",
                    },
                  ]}
                />
              </div> */}
              {/* <div class="col-md-3">
                <label> From Date</label>
                <input
                  type="date"
                  name="from_date"
                  onChange={e => setToDate(e.target.value)}
                  id="from_date"
                  class="form-control"
                  placeholder="dd-mm-yyyy"
                />
              </div> */}
              {/* <div class="col-md-3">
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
              {/* <div class="col-md-3 mt-2">
                <div className="mtr_space"></div>
                <input
                  type="submit"
                  name="to_date"
                  value="Search"
                  onClick={() => Binary_Income_Api()}
                  class="btn btn-primary mt_5"
                />
              </div> */}
            </div>
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
              {" "}
              MetaSwift.ai
            </a>
            . <a href="#"> </a> All rights reserved{" "}
          </div>
        </div>
      </div>
      {/* <!---end----></div> */}
    </div>
  );
}

export default Matrix_IncomeDetails;