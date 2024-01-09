import React, { useEffect, useState } from "react";
import { API } from "../../Redux/API";
import Sidebar from "../Navbar/Sidebar";
import Table from "../Table/Table";
import Table_Buttons from "../Table_Buttons/Table_Button";
import Position from "rsuite/esm/Overlay/Position";
import { Select } from "antd";

function My_Team() {
  const user = sessionStorage.getItem("user");
  let ress = JSON.parse(user);
  if (ress == undefined || ress == "" || ress == null) {
    window.location.href = "/login";
  }
  let uId = ress.uid_output;

  const [userid, setUserId] = useState(0);
  const [username, setUserName] = useState("");
  const [toDate, setToDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [rank_val, setrank_val] = useState("0");

  const [status_val, setStatus] = useState("2");
  const [postion_val, setPosition] = useState("0");
  const [referralApi, setreferralApi] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [listPerpage, setlistPerpage] = useState(10);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleChange_status = (value) => {
    setStatus(value);
  };

  const handleChange_Rank = (value) => {
    setrank_val(value);
  };

  const handleChange_package = (value) => {
    setPosition(value);
  };

  const Binary_Income = async () => {
    try {
      console.log("fromDate-->", selectedCountry);


      let responce = await API.post(`MyTeam_New2`, {
        loginuid : uId,
        uid: userid,
        level: 0,
        status: status_val,
        type: 1,
        position: postion_val,
        rank: rank_val,
        fromdate: fromDate,
        todate: toDate,
        username: username,
        countryid: selectedCountry||0,
      });
      // let responce = await API.get(
      //   `MyTeam_New?uid=${userid}&level=0&status=${status_val}&type=1&position=${postion_val}`
      // );
      console.log("Binary_Income-->1", responce);
      responce = responce.data.data;
      console.log("Binary_Income-->2", responce);

      setreferralApi([]);

      let arr = [];
      responce.forEach((item, index) => {
        arr.push({
          sr: index + 1,
          user_id: item.uid,
          sid: item.sponid,
          name: item.f_name,
          Package: item.packagename1,
          date: `${item.regi_date}`,
          on_amount: `  ${item.top_update1} `,
          income_usd: `$ ${item.netincome} `,
          Status: `  ${item.st} `,
          level: ` ${item.pos} `,
          CountryName: `${item.CountryName}`,
          Rank_name: `${item.Rank_name}`,
        });
      });

      setreferralApi(arr);
    } catch (e) {
      console.log("Something Error", e);
    }
  };

  async function CountryList(){
    try{
      let res=await API.get('getCountry?id=0')
      console.log("country",res.data)
      setCountries(res.data.data)

    }catch(e){
      console.log("Country API",e)
    }
  }
  useEffect(() => {
    Binary_Income();
      CountryList();
  }, []);

  const indexOfLastPost = currentPage * listPerpage;
  const indexOfFirstPage = indexOfLastPost - listPerpage;
  const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost);

  var [matching_income, set_matching_income] = new useState({
    cols: [
      { Header: "S.No", accessor: "sr" },
      { Header: "Sponsor Id", accessor: "sid" },
      { Header: "User Id", accessor: "user_id" },
      { Header: "Name", accessor: "name" },
      { Header: "Rank", accessor: "Rank_name" },
      { Header: "Country", accessor: "CountryName" },
      { Header: "Reg. Date & Time", accessor: "date" },
      // { Header: 'Position', accessor: 'level' },
      { Header: "Status", accessor: "Status" },
      { Header: "Package", accessor: "Package" },
      { Header: "Activation Date & Time", accessor: "on_amount" },
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
              <span class="main-content-title mg-b-0 mg-b-lg-1">My Team</span>
            </div>
            <div class="justify-content-center mt-2">
              <ol class="breadcrumb breadcrumb-style3">
                <li class="breadcrumb-item tx-15">
                  <a href="#">Team Details</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  My Team
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
                        maxLength={8}
                          type="text"
                          name="from_date"
                          id="uid"
                          onChange={(e) => setUserId(e.target.value)}
                          class="form-control"
                          placeholder="Enter User Id"
                          value={userid}
                        />
                      </div>
                      <div class="col-md-2">
                        <label> User Name</label>
                        <input
                        maxLength={8}
                          type="text"
                          name="from_date"
                          id="uid"
                          onChange={(e) => setUserName(e.target.value)}
                          class="form-control"
                          placeholder="Enter User Name"
                          value={username}
                        />
                      </div>
                      <div class="col-md-2">
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
                      <div className="col-md-2">
                        <label>Choose Status</label>
                        <Select
                          defaultValue=" All"
                          id="fdfd"
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
                        <label>Choose Rank</label>
                        <Select
                          defaultValue=" All"
                          id="fdfd"
                          className="floating-input form-control select_bg"
                          data-val="true"
                          data-val-required="Rank is required"
                          onChange={handleChange_Rank}
                          options={[
                            { value: "0", label: "All" },
                            { value: "1", label: "M1" },
                            { value: "2", label: "M2" },
                            { value: "3", label: "M3" },
                            { value: "4", label: "M4" },
                            { value: "5", label: "M5" },
                            { value: "6", label: "M6" },
                            { value: "7", label: "M7" },
                            { value: "8", label: "M8" },
                            { value: "9", label: "M9" },
                            { value: "10", label: "M10" },
                            { value: "11", label: "M11" },
                            { value: "12", label: "M12" },
                          ]}
                        />
                      </div>
                      <div className="col-md-2">
                        <label>Choose Country</label>
                        <Select
                          defaultValue=" All"
                          id="fdfd"
                          className="floating-input form-control select_bg"
                          data-val="true"
                          data-val-required="Rank is required"
                          onChange={(selectedOption) =>
                            setSelectedCountry(selectedOption)
                          }
                          options={countries.map(country => ({ value: country.id, label: country.Countryname }))}
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
                  <div class="table-responsive">
                    <div
                      id="myAssets_wrapper"
                      class="dataTables_wrapper dt-bootstrap5 no-footer"
                    >
                      <div class="row">
                        <div class="col-sm-12">
                          <br />

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

export default My_Team;
