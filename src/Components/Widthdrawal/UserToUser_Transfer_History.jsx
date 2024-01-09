import React, { useEffect, useState } from "react";
import { API } from "../../Redux/API";
import Sidebar from "../Navbar/Sidebar";
import Table from "../Table/Table";
import Table_Buttons from "../Table_Buttons/Table_Button";

function UserToUser_Transfer_History() {
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
      let responce = await API.get(
        `/Get_UserToUserFundTransfer_history?uid=${userid}`
      );
      responce = responce.data.data;
      console.log("res------>", responce);

      setreferralApi([]);

      let arr = [];
      responce.forEach((item, index) => {
        arr.push({
          sr: index + 1,
          Fromid: item.touserid,
          add: `$ ${item.amount}`,
          edate: ` ${item.edate1} `,
          Remark: `${item.remark}`,
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
      { Header: "Receiver Id", accessor: "Fromid" },
      { Header: "Transfer Fund", accessor: "add" },
      { Header: "Date & Time", accessor: "edate" },
      { Header: "Remark", accessor: "Remark" },
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
                    User to User Fund Transfer
                  </span>
                </div>
                <div class="justify-content-center mt-2">
                  <ol class="breadcrumb breadcrumb-style3">
                    <li class="breadcrumb-item tx-15">
                      <a href="#">Transfer Fund</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      User to User Fund Transfer
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
                      {/* <div class="row mt-3">
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
                      </div> */}
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

export default UserToUser_Transfer_History;
