import React, { useEffect, useState } from "react";
import { API } from "../../Redux/API";
import Sidebar from "../Navbar/Sidebar";
import Table from "../Table/Table";
import Table_Buttons from "../Table_Buttons/Table_Button";
import { toast } from "react-toastify";

function Staking_Claim_History() {
  const user = sessionStorage.getItem("user");
  let ress = JSON.parse(user);
  if (ress == undefined || ress == "" || ress == null) {
    window.location.href = "/login";
  }
  let uId = ress.uid;
  const [userid, setUserId] = useState(uId);
  const [toDate, setToDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [referralApi, setreferralApi] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [listPerpage, setlistPerpage] = useState(10);

  const Claim_API = async (userid, id) => {
    console.log("123", userid, id);
    try {
      let res = await API.post("/UserClaimToken", {
        uid: userid,
        rowid: id,
      });
      res = res.data.data;
      if (res == "Successfull Token Claimed.") {
        toast.success(res);
      } else {
        toast(res);
      }
      console.log("Claim_API", res);
    } catch (e) {
      console.log("Something error in Claimed API", e);
    }
  };

  const Roi_Income = async () => {
    try {
      let responce = await API.post("/stakingHistory", {
        uid: userid,
        fromDate: fromDate,
        toDate: toDate,
      });
      responce = responce.data.data[0];
      console.log("res", responce);

      setreferralApi([]);

      let arr = [];
      responce.forEach((item, index) => {
        arr.push({
          sr: index + 1,
          user_id: item.uid,
          // from_id: item.user_id,
          date: `${item.edate}`,
          on_amount: `  ${item.coin} `,
          days: `${item.days} `,
          Remark: item.remark,
          edate: item.edate,
          paiddate: item.babydogePaidDate,
          paidstatus: item.isClaim,
          status:
            item.drdPaidStatus == "1" ? (
              <span>Claimed</span>
            ) : item.isClaim == "1" ? (
              <>
                <span>Pending</span>
              </>
            ) : (
              <button
                onClick={() => Claim_API(item.uid, item.id)}
                className="btn btn-success"
              >
                Claim
              </button>
            ),
          drdtxn: item.drdTxn,
          babydogetxn: item.babydogeTxn,
          over_date: item.over_date,
          totalpaycoin: item.totalpaycoin,
          totalbabydoge: item.totalbabydoge,
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
      { Header: "User Id", accessor: "user_id" },
      { Header: "Staking Dorado Amount", accessor: "on_amount" },
      { Header: "Staking Days", accessor: "days" },
      { Header: "Start Date & Time", accessor: "edate" },
      { Header: "End Date & Time", accessor: "over_date" },
      { Header: "Claim DRD Amount", accessor: "totalpaycoin" },
      { Header: "Claim Baby Doge", accessor: "totalbabydoge" },
      { Header: "Paid Date & Time", accessor: "paiddate" },
      {
        Header: "DRD TXN",
        accessor: "drdtxn",
        Cell: ({ cell }) => (
          <a
            href={`https://bscscan.com/tx/${cell.row.values.drdtxn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Txn
          </a>
        ),
      },
      {
        Header: "Baby Doge TXN",
        accessor: "babydogetxn",
        Cell: ({ cell }) => (
          <a
            href={`https://bscscan.com/tx/${cell.row.values.babydogetxn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Txn
          </a>
        ),
      },
      {
        Header: "Action",
        accessor: "status",

        //         Cell: ({ cell }) => (
        //           cell.row.value.status == "Claimed" || cell.row.value.status=="Claim"?
        // <>{cell.row.value.status}</>  :<>Pending</>      ),
      },
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
                Staking Claim History
              </span>
            </div>
            <div class="justify-content-center mt-2">
              <ol class="breadcrumb breadcrumb-style3">
                <li class="breadcrumb-item tx-15">
                  <a href="#">Staking</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Staking Claim History
                </li>
              </ol>
            </div>
          </div>
          {/* <!-- /breadcrumb --> */}

          <div class="row">
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

export default Staking_Claim_History;
