import React, { useEffect, useState } from "react";
import { API } from "../../Redux/API";
import Sidebar from "../Navbar/Sidebar";
import Table from "../Table/Table";
import Table_Buttons from "../Table_Buttons/Table_Button";
import { Select } from "antd";
import Loader from "../Loader/Loader";

function Level_Details() {
  const user = sessionStorage.getItem("user");
  let ress = JSON.parse(user);
  if (ress == undefined || ress == "" || ress == null) {
    window.location.href = "/login";
  }
  let uId = ress.uid_output;
  const [userid, setUserId] = useState(0);
  const [toDate, setToDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [status_val, setStatus] = useState(2);
  const [postion_val, setPosition] = useState(0);
  const [package_val, setPackage] = useState(0);
  const [referralApi, setreferralApi] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [listPerpage, setlistPerpage] = useState(50);
  const [totalCount, settotalCount] = useState(50);
  const [spinner, setspinner] = useState(false);




  const handleChange_status = (value) => {
    // console.log(`handleChange_status ${value}`);
    setStatus(value);
  };

  const handleChange_package = (value) => {
    // console.log(`handleChange_status ${value}`);
    setPackage(value);
  };

  const handleChange_Position = (value) => {
    setPosition(value);
  };

  console.log("currentPage", currentPage);
  const Binary_Income = async () => {
    try {
      setspinner(true)
      let responce = await API.post("/levelDetails2", {
        loginuid: uId,
        uid: userid,
        level: postion_val,
        status: status_val,
        type: 1,
        package: package_val        
      });
      console.log("Binary_Income", responce);
      settotalCount(responce.data.data.recordCount);
      responce = responce.data.data;

      // setreferralApi([]);

      let arr = [];
      responce.forEach((item, index) => {
        arr.push({
          sr: item.row,
          user_id: item.uid,
          sid: item.sid,
          f_name: item.f_name,
          package: `${item.packagename1}`,
          date: `${item.date1}`,
          level: `${item.Leveltype}`,
          tt: ` ${item.top_update1} `,
          status: `${item.st}`,
          // date: moment(item?.edate).format("DD/MM/YYYY h:m:s A")
        });
      });

      setreferralApi([...arr]);
      setspinner(false)

    } catch (e) {
      console.log("Something Error", e);
      setspinner(false)

    }
  };

  useEffect(() => {
    Binary_Income();
  }, [currentPage]);

  const indexOfLastPost = currentPage * listPerpage;
  const indexOfFirstPage = indexOfLastPost - listPerpage;
  const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost);
  console.log("currentPost",currentPost);
  // setcurrentPost(referralApi.slice(indexOfFirstPage, indexOfLastPost));

  var [matching_income, set_matching_income] = new useState({
    cols: [
      { Header: "S.No", accessor: "sr" },
      { Header: "Sponsor Id", accessor: "sid" },
      { Header: "Team Id", accessor: "user_id" },
      { Header: "Name", accessor: "f_name" },
      { Header: "Reg. Date & Time", accessor: "date" },
      { Header: "Level", accessor: "level" },
      { Header: "Status", accessor: "status" },
      { Header: "Package", accessor: "package" },
      { Header: "Activation Date & Time ", accessor: "tt" },
    ],
  });
  console.log("list Per", listPerpage);
  return (
    <div className="nft_theme">
        {
              spinner && <Loader/>
            }
      <Sidebar />
      <div class="main-content app-content">
        {/* <!-- container --> */}
        <div class="main-container container-fluid">
          {/* <!-- breadcrumb --> */}
          <div class="breadcrumb-header justify-content-between">
            <div class="left-content">
              <span class="main-content-title mg-b-0 mg-b-lg-1">
                Level Details{" "}
              </span>
            </div>
            <div class="justify-content-center mt-2">
              <ol class="breadcrumb breadcrumb-style3">
                <li class="breadcrumb-item tx-15">
                  <a href="#">Team Details</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Level Details
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
                <label>Choose Level</label>
                <Select
                  defaultValue=" All Level"
                  id="position"
                  className="floating-input form-control select_bg"
                  data-val="true"
                  data-val-required="Level is required"
                  onChange={handleChange_Position}
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
                    },
                    {
                      value: "11",
                      label: "11",
                    },
                    {
                      value: "12",
                      label: "12",
                    },
                    {
                      value: "13",
                      label: "13",
                    },
                    {
                      value: "14",
                      label: "14",
                    },
                    {
                      value: "15",
                      label: "15",
                    },
                    {
                      value: "16",
                      label: "16",
                    },
                    {
                      value: "17",
                      label: "17",
                    },
                    {
                      value: "18",
                      label: "18",
                    },
                    {
                      value: "19",
                      label: "19",
                    },
                    {
                      value: "20",
                      label: "20",
                    },
                  ]}
                />
              </div>

              <div className="col-md-2">
                <label>Choose Status</label>
                <Select
                  defaultValue=" All status"
                  id="position"
                  className="floating-input form-control select_bg"
                  data-val="true"
                  data-val-required="Position is required"
                  onChange={handleChange_status}
                  options={[
                    {
                      value: "2",
                      label: "All",
                    },
                    {
                      value: "1",
                      label: "Active",
                    },
                    {
                      value: "0",
                      label: "In-Active",
                    },
                  ]}
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
                      value: "1",
                      label: "25 USD",
                    },
                    {
                      value: "2",
                      label: "50 USD",
                    },
                    {
                      value: "3",
                      label: "100 USD",
                    },
                    {
                      value: "4",
                      label: "200 USD",
                    },
                    {
                      value: "5",
                      label: "500 USD",
                    },
                    {
                      value: "6",
                      label: "1000 USD",
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
                  onClick={() => Binary_Income()}
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
                            data={[...referralApi]}
                            columns={matching_income.cols}
                          />
                          <Table_Buttons
                            indexOfFirstPage={indexOfFirstPage}
                            indexOfLastPost={indexOfLastPost}
                            setcurrentPage={setcurrentPage}
                            currentPage={currentPage}
                            totalData={totalCount}
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

export default Level_Details;
