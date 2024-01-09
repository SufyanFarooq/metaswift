import React, { useEffect, useState } from "react";
import { API } from "../../Redux/API";
import Sidebar from "../Navbar/Sidebar";
import Table from "../Table/Table";
import Table_Buttons from "../Table_Buttons/Table_Button";

function Withdrawal_History() {
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

  const Withdrawal_History = async () => {
    try {
      let responce = await API.get(`/Withdrawalhistory?uid=${userid}`);
      responce = responce.data.data;
      console.log("res", responce);

      setreferralApi([]);

      let arr = [];
      responce.forEach((item, index) => {
        arr.push({
          sr: index + 1,
          Request_amount: `$ ${item.Request_amount}`,
          txn: item.txn,
          uid: item.uid,
          admincharge: `$ ${item.admincharge}`,
          date: `${item.rdate}`,
          on_amount: `${item.amount} DRD`,
          amountusd: `$ ${item.amountusd} `,
          admin_status1 : item.admin_status1
          // date: moment(item?.edate).format("DD/MM/YYYY h:m:s A")
        });
      });

      setreferralApi(arr);
    } catch (e) {
      console.log("Something Error", e);
    }
  };
  useEffect(() => {
    Withdrawal_History();
  }, []);

  const indexOfLastPost = currentPage * listPerpage;
  const indexOfFirstPage = indexOfLastPost - listPerpage;
  const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost);

  var [matching_income, set_matching_income] = new useState({
    cols: [
      { Header: "S.No", accessor: "sr" },
      { Header: "User Id", accessor: "uid" },
      { Header: "Request Amount", accessor: "Request_amount" },
      { Header: 'Admin Charge', accessor: 'admincharge' },
      { Header: "Amount", accessor: "amountusd" },
      // { Header: ' Value', accessor: 'on_amount' },
      {
        Header: "Txn",
        accessor: "txn",
        Cell: ({ cell }) => (
          <a
            href={`https://bscscan.com/tx/${cell.row.values.txn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Txn
          </a>
        ),
      },
      { Header: " Date & Time", accessor: "date" },
      // { Header: "Remark", accessor: "admin_status1" },
      
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
                Withdrawal History
              </span>
            </div>
            <div class="justify-content-center mt-2">
              <ol class="breadcrumb breadcrumb-style3">
                <li class="breadcrumb-item tx-15">
                  <a href="#">Withdrawal</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Withdrawal History
                </li>
              </ol>
            </div>
          </div>
          {/* <!-- /breadcrumb --> */}

          <div class="row">
            <div class="row mt-3">
              <div class="col-md-3">
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
              {/* <div class="col-md-3">
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
              <div class="col-md-3">
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
              <div class="col-md-3 mt-2">
                <div className="mtr_space"></div>
                <input
                  type="submit"
                  name="to_date"
                  value="Search"
                  onClick={() => Withdrawal_History()}
                  class="btn btn-primary mt_5"
                />
              </div>
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
        </div>
        {/* <!-- /Container --> */}
      </div>

      {/* <!---footer----> */}
      <div class="main-footer">
        <div class="container-fluid pd-t-0 ht-100p">
          {" "}
          Copyright © 2023{" "}
          <a href="#" class="tx-primary">
            MetaSwift.ai
          </a>
          <a href="#"> </a> All rights reserved{" "}
        </div>
      </div>
      {/* <!---end----></div> */}
    </div>
  );
}

export default Withdrawal_History;
