import React, { useEffect, useState } from "react";
import { API } from "../../Redux/API";
import Sidebar from "../Navbar/Sidebar";
import Table from "../Table/Table";
import Table_Buttons from "../Table_Buttons/Table_Button";
import { Select } from "antd";

function Matrix_Level_Income() {
  const user = sessionStorage.getItem("user");
  let ress = JSON.parse(user);
  if (ress == undefined || ress == "" || ress == null) {
    window.location.href = "/login";
  }
  let uId = ress.uid_output;
  // let uId = 778899

  const [userid, setUserId] = useState(0);
  const [status_val, setStatus] = useState("0");
  const [level_val, setLevel] = useState(0);
  const [referralApi, setreferralApi] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [listPerpage, setlistPerpage] = useState(10);

  const handleChange_status = (value) => {
    setStatus(value);
  };
  const handleChange_level = (value) => {
    setLevel(value);
  };
  const Binary_Income_Api = async () => {
    try {
      let responce = await API.get(
        `/GetMatrixIncome2?loginuid=${uId}&uid=${userid}&package=${status_val}&level=${level_val}`
      );
      responce = responce.data.data;
      console.log("Binary_Income_Api", responce);

      setreferralApi([]);

      let arr = [];
      responce.forEach((item, index) => {
        arr.push({
          sr: index + 1,
          uid: item.uid,
          user_id: item.fromid,
          netIncome: `$ ${item.income}`,
          date: `${item.edate1}`,
          package: item.remark,
          St: `${item.St} `,
          lvrl: `${item.level} `,
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
      { Header: "From Id", accessor: "user_id" },
      { Header: "Income", accessor: "netIncome" },
      { Header: "Level", accessor: "lvrl" },
      { Header: "Slot", accessor: "package" },
      { Header: "Date", accessor: "date" },
      { Header: "Status", accessor: "St" },
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
                Matrix Level Income
              </span>
            </div>
            <div class="justify-content-center mt-2">
              <ol class="breadcrumb breadcrumb-style3">
                <li class="breadcrumb-item tx-15">
                  <a href="#">All Income</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Matrix Level Income
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
              <div className="col-md-2">
                <label>Choose Slot</label>
                <Select
                  defaultValue=" All Slot"
                  id="position"
                  className="floating-input form-control select_bg"
                  data-val="true"
                  data-val-required="Level is required"
                  onChange={handleChange_status}
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
                  defaultValue=" All Level"
                  id="position"
                  className="floating-input form-control select_bg"
                  data-val="true"
                  data-val-required="Level is required"
                  onChange={handleChange_level}
                  options={[
                    {
                      value: "0",
                      label: "All Level",
                    },
                    {
                      value: "1",
                      label: "Level 1",
                    },
                    {
                      value: "2",
                      label: "Level 2",
                    },
                    {
                      value: "3",
                      label: "Level 3",
                    }
                    ,
                    {
                      value: "4",
                      label: "Level 4",
                    }
                    ,
                    {
                      value: "5",
                      label: "Level 5",
                    }
                    ,
                    {
                      value: "6",
                      label: "Level 6",
                    }
                    ,
                    {
                      value: "7",
                      label: "Level 7",
                    }
                    ,
                    {
                      value: "8",
                      label: "Level 8",
                    }
                    ,
                    {
                      value: "9",
                      label: "Level 9",
                    },
                    {
                      value: "10",
                      label: "Level 10",
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
                  onClick={() => Binary_Income_Api()}
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

export default Matrix_Level_Income;
