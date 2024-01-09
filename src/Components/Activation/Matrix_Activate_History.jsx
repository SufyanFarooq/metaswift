import React, { useEffect, useState } from "react";
import { API } from "../../Redux/API";
import Sidebar from "../Navbar/Sidebar";
import Table from "../Table/Table";
import Table_Buttons from "../Table_Buttons/Table_Button";

function Matrix_Activate_History(props) {
  const user = sessionStorage.getItem("user");
  let ress = JSON.parse(user);
  if (ress == undefined || ress == "" || ress == null) {
    window.location.href = "/login";
  }
  let uId = ress.uid_output;
  const [userid, setUserId] = useState(uId);
  const [toDate, setToDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [referralApi, setreferralApi] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [listPerpage, setlistPerpage] = useState(10);

  const Binary_Income = async () => {
    try {
      let responce = await API.post(`/upgradeHistoryReport`, {
        uid: userid,
      });
      responce = responce.data.data;
      console.log("res", responce);

      setreferralApi([]);

      let arr = [];
      responce.forEach((item, index) => {
        arr.push({
          sr: index + 1,
          user_id: item.uid,
          txn: item.pinnumber,
          remark: item.remark,
          type: item.amount,
          boosterstatus: item.boosterstatus,
          remaineday: item.remaineday,
          amount: `$ ${item.pinamount}`,
          on_amount: ` ${item.package} `,
          Total_Business: ` ${item.dd} `,
          // date: moment(item?.edate).format("DD/MM/YYYY h:m:s A")
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

  const Referash = () => {
    window.location.reload();
  };

  // useEffect(() => {
  //   window.location.reload();
  // }, []);

  const indexOfLastPost = currentPage * listPerpage;
  const indexOfFirstPage = indexOfLastPost - listPerpage;
  const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost);

  var [matching_income, set_matching_income] = new useState({
    cols: [
      { Header: "S.No", accessor: "sr" },
      { Header: "User Id", accessor: "user_id" },
      { Header: "Package", accessor: "on_amount" },
      //   {
      //     Header: "Txn",
      //     accessor: "txn",
      //     Cell: ({ cell }) => (
      //       <a
      //         href={`https://bscscan.com/tx/${cell.row.values.txn}`}
      //         target="_blank"
      //         rel="noopener noreferrer"
      //       >
      //         View Txn
      //       </a>
      //     ),
      //   },
      //{ Header: " Remark", accessor: "remark" },
      { Header: " Amount", accessor: "type" },
      { Header: "Date", accessor: "Total_Business" },
    ],
  });

  return (
    <div className="nft_theme">
      <Sidebar />
      <div class="horizontalMenucontainer">
        <a
          href="#top"
          id="back-to-top"
          class="back-to-top rounded-circle shadow"
        >
          <i class="angle fe fe-chevron-up"></i>
        </a>
        {/* <!-- Loader -->  */}
        <div id="global-loader" style={{ display: "none" }}>
          <img src="assets/img/loader.svg" class="loader-img" alt="Loader" />
        </div>
        {/* <!-- /Loader --> <!-- Page -->  */}
        <div class="page">
          <div class="layout-position-binder">
            {/* <!-- main-sidebar -->  */}
          </div>

          <div class="main-content app-content">
            {/* <!-- container --> */}
            <div class="main-container container-fluid">
              {/* <!-- breadcrumb --> */}
              <div class="breadcrumb-header justify-content-between">
                <div class="left-content">
                  <span class="main-content-title mg-b-0 mg-b-lg-1">
                    Matrix Activation History{" "}
                  </span>
                </div>
                <div class="justify-content-center mt-2">
                  <ol class="breadcrumb breadcrumb-style3">
                    <li class="breadcrumb-item tx-15">
                      <a href="#">Activate</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Matrix Activation History
                    </li>
                  </ol>
                </div>
              </div>
              {/* <!-- /breadcrumb --> */}

              {/* <!-- /breadcrumb --> */}

              <div class="row">
                <div class="col-xl-12">
                  <div class="card">
                    <div class="card-body">
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
                        <label>Position</label>
                        <select
                          id="position"
                          onChange={(e) => setPosition(e.target.value)}
                          class="floating-input form-control select_bg"
                          data-val="true"
                          data-val-required="Position is required"
                        >
                          <option value="Select Position">Select Position</option>
                          <option value="0">All</option>
                          <option value="1">Left</option>
                          <option value="2">Right</option>
                        </select>
                      </div>
                      <div class="col-md-2">
                        <label>Choose Status</label>
                        <select
                          id="status"
                          onChange={(e) => setStatus(e.target.value)}
                          class="floating-input form-control select_bg "
                          data-val="true"
                          data-val-required="Position is required"
                        >
                          <option value="">Select Status</option>
                          <option value="2">All</option>
                          <option value="1">Active</option>
                          <option value="0">In-Active</option>
                        </select>
                      </div> */}
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

          {/* <!---footer----> */}
          <div class="main-footer">
            <div class="col-md-12 col-sm-12 text-center">
              <div class="container-fluid pd-t-0 ht-100p">
                {" "}
                Copyright © 2023{" "}
                <a href="#" class="tx-primary">
                  MetaSwift.ai
                </a>
                . <a href="#"> </a> All rights reserved{" "}
              </div>
            </div>
          </div>
          {/* <!---end----> */}
        </div>
      </div>
    </div>
  );
}

export default Matrix_Activate_History;
