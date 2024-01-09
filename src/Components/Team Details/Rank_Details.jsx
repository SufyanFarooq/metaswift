import React, { useEffect, useState } from "react";
import { API } from "../../Redux/API";
import Sidebar from "../Navbar/Sidebar";
import Table from "../Table/Table";
import Table_Buttons from "../Table_Buttons/Table_Button";

function Rank_Details() {
  const user = sessionStorage.getItem("user");
  let ress = JSON.parse(user);
  if (ress == undefined || ress == "" || ress == null) {
    window.location.href = "/login";
  }
  let uId = ress.uid_output;
  // let uId = 778899;
  const [userid, setUserId] = useState(uId);
  const [toDate, setToDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [status_val, setStatus] = useState("2");
  const [postion_val, setPosition] = useState("0");
  const [referralApi, setreferralApi] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [listPerpage, setlistPerpage] = useState(20);

  const Binary_Income = async () => {
    try {
      let responce = await API.post(`Get_rank_report`, {
        uid: userid,
      });
      console.log("res", responce);
      responce = responce.data.data;

      setreferralApi([]);

      let arr = [];
      responce.forEach((item, index) => {
        arr.push({
          // id	uid	SelfBusiness	TeamBusiness	TeamCount	TotalBusiness
          sr: item.id,
          uid: item.uid,
          Rank_name: item.Rank_name,
          Paid_Business: item.Paid_Business,
          Req_business: item.Req_business,
          rate: item.rr,
          Salery_Reward: item.Salery_Reward,
          Salery_week: item.Salery_week,
          Status_remark: item.Status_remark,
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
      { Header: "Ranks", accessor: "Rank_name" },
      { Header: "Qualification Volume", accessor: "Req_business" },
      { Header: "Paid Volume", accessor: "Paid_Business" },
      { Header: "Status", accessor: "Status_remark" },
      { Header: "Infinity Bonus", accessor: "rate" },
      { Header: "Salary Reward", accessor: "Salery_Reward" },
      { Header: "Salary Week", accessor: "Salery_week" },      
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
                Rank Details
              </span>
            </div>
            <div class="justify-content-center mt-2">
              <ol class="breadcrumb breadcrumb-style3">
                <li class="breadcrumb-item tx-15">
                  <a href="#">Team Details</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Rank Details
                </li>
              </ol>
            </div>
          </div>
          {/* <!-- /breadcrumb --> */}

          <div class="row">
            <div class="col-xl-12">
              <div class="card">
                <div class="card-body">
               {/*   <div class="row">
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
                          onClick={() => Binary_Income()}
                          class="btn btn-primary mt_5"
                        />
                      </div>
                    </div>
                  </div>
                  */} 
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

export default Rank_Details;
