import React, { useEffect, useState } from "react";
import { API } from "../../Redux/API";
import Sidebar from "../Navbar/Sidebar";
import Table from "../Table/Table";
import Table_Buttons from "../Table_Buttons/Table_Button";

function DepositeHistory() {
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
      let responce = await API.post("Deposite_FundByContractHistory", {
        uid: uId,
      });
      console.log("res------>", responce.data.data);
      responce = responce.data.data;
      console.log("res------>", responce);

      setreferralApi([]);

      let arr = [];
      responce.forEach((item, index) => {
        arr.push({
          sr: index + 1,
          uid: item.uid,
          usd: item.usd,
          Date: item.edate,
          CoinType: item.CoinType,
          admin_status: item.admin_status,
          transactionHash: (
            <a
              href={
                item.CoinType === "BNB"
                  ? `https://bscscan.com/tx/${item.txn}`
                  : `https://polygonscan.com/tx/${item.txn}`
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              View Txn
            </a>
          ),
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

  const indexOfLastPost = currentPage * listPerpage;
  const indexOfFirstPage = indexOfLastPost - listPerpage;
  const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost);

  var [matching_income, set_matching_income] = new useState({
    cols: [
      { Header: "S.No", accessor: "sr" },
      { Header: "User Id", accessor: "uid" },
      { Header: "Amount", accessor: "usd" },
      { Header: "Date", accessor: "Date" },
      { Header: "Txn Hash", accessor: "transactionHash" },
      { Header: "Payment Type", accessor: "CoinType" },
      { Header: "Status", accessor: "admin_status" },
    ],
  });

  return (
    <div className="nft_theme">
      <Sidebar />
      <div className="horizontalMenucontainer">
        <a
          href="#top"
          id="back-to-top"
          className="back-to-top rounded-circle shadow"
        >
          <i className="angle fe fe-chevron-up"></i>
        </a>
        {/* <!-- Loader -->  */}
        <div id="global-loader" style={{ display: "none" }}>
          <img
            src="assets/img/loader.svg"
            className="loader-img"
            alt="Loader"
          />
        </div>
        {/* <!-- /Loader -->
         <!-- Page -->  */}
        <div className="page">
          <div className="layout-position-binder">
            {/* <!-- main-sidebar -->  */}
          </div>

          <div className="main-content app-content">
            {/* <!-- container --> */}
            <div className="main-container container-fluid">
              {/* <!-- breadcrumb --> */}
              <div className="breadcrumb-header justify-content-between">
                <div className="left-content">
                  <span className="main-content-title mg-b-0 mg-b-lg-1">
                    Deposit Fund History
                  </span>
                </div>
                <div className="justify-content-center mt-2">
                  <ol className="breadcrumb breadcrumb-style3">
                    <li className="breadcrumb-item tx-15">
                      <a href="#">Deposit Fund</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Deposit Fund History
                    </li>
                  </ol>
                </div>
              </div>
              {/* <!-- /breadcrumb --> */}

              {/* <!-- /breadcrumb --> */}

              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body">
                      {/* <div className="row mt-3">
                        <div className="col-md-2">
                          <label> User Id</label>
                          <input
                            type="text"
                            name="from_date"
                            id="uid"
                            onChange={(e) => setUserId(e.target.value)}
                            className="form-control"
                            placeholder="Enter User Id"
                          />
                        </div>                        
                        <div className="col-md-2 mt-2">
                          <div className="mtr_space"></div>
                          <input
                            type="submit"
                            name="to_date"
                            value="Search"
                            onClick={() => Binary_Income()}
                            className="btn btn-primary mt_5"
                          />
                        </div>
                      </div> */}
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
            {/* <!-- Container --> */}
          </div>

          {/* <!---footer----> */}
          <div className="main-footer">
            <div className="col-md-12 col-sm-12 text-center">
              <div className="container-fluid pd-t-0 ht-100p">
                {" "}
                Copyright © 2023{" "}
                <a href="#0" className="tx-primary">
                  metaswift.ai
                </a>
                All rights reserved{" "}
              </div>
            </div>
          </div>
          {/* <!---end----> */}
        </div>
      </div>
    </div>
  );
}

export default DepositeHistory;
