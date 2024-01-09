import React, { useEffect, useState } from "react";
import { API } from "../../Redux/API";
import Sidebar from "../Navbar/Sidebar";
import Table from "../Table/Table";
import Table_Buttons from "../Table_Buttons/Table_Button";

function Receive_Admin_Fund_History() {
  const user = sessionStorage.getItem("user");
  let ress = JSON.parse(user);
  if (ress == undefined || ress == "" || ress == null) {
    window.location.href = "/login";
  }
  let uId = ress.uid_output;
  // uId = 0;
  const [userid, setUserId] = useState(uId);
  const [toDate, setToDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [referralApi, setreferralApi] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [listPerpage, setlistPerpage] = useState(10);

  
  const Roi_Income = async () => {
    try {
      let responce = await API.get(
        `activationfundreceivedHistoryUser?uid=${userid}`
      );
      responce = responce.data.data;
      console.log("res", responce);

      setreferralApi([]);

      let arr = [];
      responce.forEach((item, index) => {
        arr.push({
          sr: index + 1,
          uid: item.uid,
          amount: item.amount,
          dd: item.dd,
          remark: item.remark,
        });
      });

      setreferralApi(arr);
    } catch (e) {
      console.log("Something Error", e);
    }
  };
  useEffect(() => {
    Roi_Income();
  }, []);

  const indexOfLastPost = currentPage * listPerpage;
  const indexOfFirstPage = indexOfLastPost - listPerpage;
  const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost);

  var [matching_income, set_matching_income] = new useState({
    cols: [
      { Header: "S.No", accessor: "sr" },
      { Header: "User Id", accessor: "uid" },
      { Header: "Amount", accessor: "amount" },
      // { Header: 'Admin Charge ', accessor: 'admincharge' },
      // { Header: 'BUSD', accessor: 'token' },
      // { Header: 'Txn', accessor: 'txn' ,Cell: ({ cell }) => (
      //   <a href={`https://bscscan.com/tx/${cell.row.values.txn}`} target="_blank" rel="noopener noreferrer">
      //     View Txn
      //   </a>
      // ),},
      { Header: " Date & Time", accessor: "dd" },
      { Header: " Remark", accessor: "remark" },
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
                Received Admin Fund History
              </span>
            </div>
            <div class="justify-content-center mt-2">
              <ol class="breadcrumb breadcrumb-style3">
                <li class="breadcrumb-item tx-15">
                  <a href="#">Transfer Fund</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Received Admin Fund History
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

                      <div class="col-md-2 mt-2">
                        <div className="mtr_space"></div>
                        <input
                          type="submit"
                          name="to_date"
                          value="Search"
                          onClick={() => Roi_Income()}
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

export default Receive_Admin_Fund_History;
