import React, { useEffect, useState } from "react";
import user3red from "./tree/default.png";
import tree_image_medium from "./tree/treeimg1.png";
import Default from "./tree/green.png";
import tree_image_large from "./tree/treeimg2.png";
import Active from "./tree/green.png";
import Active1 from "./tree/green.png";
import Active2 from "./tree/green.png";
import Active3 from "./tree/green.png";
import Active4 from "./tree/green.png";
import Active5 from "./tree/green.png";
import tree_image_small from "./tree/treeimg.png";
import { API } from "../../Redux/API";
import "./tree.css";
import Sidebar from "../Navbar/Sidebar";

let bol = true;

function Genealogy_View() {
  const user = sessionStorage.getItem("user");
  let ress = JSON.parse(user);
  if (ress == undefined || ress == "" || ress == null) {
    window.location.href = "/login";
  }
  let uId = ress.uid;

  const [Idnumer, setIdnumer] = useState(uId);
  const [arrValue, setArrValue] = useState([]);
  const [getValue, setgetValue] = useState("");

  console.log("Search getValue", getValue);

  const [userdata, setuserdata] = useState([
    {
      name: "",
      id: "",
      registration_date: "",
      status: "",
      total_left: "",
      total_left_active: "",
      left_business: "",
      package_amount: "",
      Activation_date: "",
      package: "",
      total_right: "",
      total_right_active: "0",
      right_business: "",
      Sponsor: "",
    },
    {
      name: "",
      id: "",
      registration_date: "",
      status: "",
      total_left: "",
      total_left_active: "",
      left_business: "",
      package_amount: "",
      Activation_date: "",
      package: "",
      total_right: "",
      total_right_active: "",
      right_business: "",
      Sponsor: "",
    },
    {
      name: "",
      id: "",
      registration_date: "",
      status: "",
      total_left: "",
      total_left_active: "",
      left_business: "",
      package_amount: "",
      Activation_date: "",
      package: "",
      total_right: "",
      total_right_active: "",
      right_business: "",
      Sponsor: "",
    },
    {
      name: "",
      id: "",
      registration_date: "",
      status: "",
      total_left: "",
      total_left_active: "",
      left_business: "",
      package_amount: "",
      Activation_date: "",
      package: "",
      total_right: "",
      total_right_active: "",
      right_business: "",
      Sponsor: "",
    },
    {
      name: "",
      id: "",
      registration_date: "",
      status: "",
      total_left: "",
      total_left_active: "",
      left_business: "",
      package_amount: "",
      Activation_date: "",
      package: "",
      total_right: "",
      total_right_active: "",
      right_business: "",
      Sponsor: "",
    },
    {
      name: "",
      id: "",
      registration_date: "",
      status: "",
      total_left: "",
      total_left_active: "",
      left_business: "",
      package_amount: "",
      Activation_date: "",
      package: "",
      total_right: "",
      total_right_active: "",
      right_business: "",
      Sponsor: "",
    },
    {
      name: "",
      id: "",
      registration_date: "",
      status: "",
      total_left: "",
      total_left_active: "",
      left_business: "",
      package_amount: "",
      Activation_date: "",
      package: "",
      total_right: "",
      total_right_active: "",
      right_business: "",
      Sponsor: "",
    },
    {
      name: "",
      id: "",
      registration_date: "",
      status: "",
      total_left: "",
      total_left_active: "",
      left_business: "",
      package_amount: "",
      Activation_date: "",
      package: "",
      total_right: "",
      total_right_active: "",
      right_business: "",
      Sponsor: "",
    },
    {
      name: "",
      id: "",
      registration_date: "",
      status: "",
      total_left: "",
      total_left_active: "",
      left_business: "",
      package_amount: "",
      Activation_date: "",
      package: "",
      total_right: "",
      total_right_active: "",
      right_business: "",
      Sponsor: "",
    },
    {
      name: "",
      id: "",
      registration_date: "",
      status: "",
      total_left: "",
      total_left_active: "",
      left_business: "",
      package_amount: "",
      Activation_date: "",
      package: "",
      total_right: "",
      total_right_active: "",
      right_business: "",
      Sponsor: "",
    },
    {
      name: "",
      id: "",
      registration_date: "",
      status: "",
      total_left: "",
      total_left_active: "",
      left_business: "",
      package_amount: "",
      Activation_date: "",
      package: "",
      total_right: "",
      total_right_active: "",
      right_business: "",
      Sponsor: "",
    },
    {
      name: "",
      id: "",
      registration_date: "",
      status: "",
      total_left: "",
      total_left_active: "",
      left_business: "",
      package_amount: "",
      Activation_date: "",
      package: "",
      total_right: "",
      total_right_active: "",
      right_business: "",
      Sponsor: "",
    },
    {
      name: "",
      id: "",
      registration_date: "",
      status: "",
      total_left: "",
      total_left_active: "",
      left_business: "",
      package_amount: "",
      Activation_date: "",
      package: "",
      total_right: "",
      total_right_active: "",
      right_business: "",
      Sponsor: "",
    },
    {
      name: "",
      id: "",
      registration_date: "",
      status: "",
      total_left: "",
      total_left_active: "",
      left_business: "",
      package_amount: "",
      Activation_date: "",
      package: "",
      total_right: "",
      total_right_active: "",
      right_business: "",
      Sponsor: "",
    },
    {
      name: "",
      id: "",
      registration_date: "",
      status: "",
      total_left: "",
      total_left_active: "",
      left_business: "",
      package_amount: "",
      Activation_date: "",
      package: "",
      total_right: "",
      total_right_active: "",
      right_business: "",
      Sponsor: "",
    },
  ]);

  const referral_API = async () => {
    try {
      console.log("Search Idnumer", Idnumer);
      let responce = await API.post("/MatchingTree", {
        uid: Idnumer,
      });

      responce = responce.data.data.records[0];
      console.log("Search Res_API", responce);
      if (responce == undefined) {
      } else {
        let arr = [];
        responce.forEach(
          (item, index) => {
            // console.log("llll=>",item.package);
            arr.push({
              name: item.fname,
              id: item.uid,
              registration_date: item.regidate,
              status: item.Status,
              total_left: item.totalleft,
              total_left_active: item.totalleftActive,
              left_business: item.lbv,
              package_amount: item.packageamount,
              Activation_date: item.activationdate,
              package: item.package,
              total_right: item.totalright,
              total_right_active: item.totalrightActive,
              right_business: item.rbv,
              Sponsor: item.sid,
              date: item.package,
              country: item.countryname,
              today_left_business: item.TodayleftBusiness,
              today_right_business: item.TodayRightBusiness,
              left_carry_forward: item.carryleft,
              right_carry_forward: item.carryright,
            });
          }
          // console.log("Package",package);
        );
        console.log("responce", arr);
        setuserdata(arr);
        if (bol) {
          setArrValue([...arrValue, arr[0].id]);
          bol = false;
        }
      }
    } catch (e) {
      console.log("Error While calling Referrer API", e);
    }
  };

  //   useEffect(() => {
  //     referral_API()
  //     let idinput = document.querySelector('.idinput')
  //     idinput.value = Idnumer;

  // }, [Idnumer])

  function addValue(value) {
    setArrValue([...arrValue, value]);
  }
  console.log("what is arrValue", arrValue);

  var a;
  function popoutvalue() {
    if (arrValue.length == 1) {
      arrValue.pop();
      arrValue.unshift(user);
    } else {
      a = arrValue.splice(arrValue.length - 2, 1);
      setIdnumer(a[0]);
    }
  }

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
                My Genealogy View{" "}
              </span>
            </div>
            <div class="justify-content-center mt-2">
              <ol class="breadcrumb breadcrumb-style3">
                <li class="breadcrumb-item tx-15">
                  <a href="#">Team Details </a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  My Genealogy View
                </li>
              </ol>
            </div>
          </div>
          {/* <!-- /breadcrumb -->
            <!----Tree section start----> */}
          <div class="row">
            <div class="col-md-6 offset-md-3">
              <div class="search-box">
                <form>
                  <div class="form-wrapper tree_input">
                    <input
                      type="text"
                      className="input_fld idinput"
                      onChange={(e) => setgetValue(e.target.value)}
                    />

                    <button
                      type="button"
                      className="btn-tree btn btn-sm topmargin submit_btn"
                      onClick={() => (setIdnumer(getValue), addValue(getValue))}
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm topmargin"
                      onClick={popoutvalue}
                    >
                      Go Back
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-12">
              <div class="tree_icon">
                <div class="tree_name">
                  <img
                    src="assets/img/tree/green.png"
                    width="40px"
                    height="40px"
                  />
                  Active
                </div>
                {/* <div class="tree_name">
                  <img src="assets/img/tree/package/300_icon.png" width="40px" height="40px" />
                  $300
                </div>
                <div class="tree_name">
                  <img src="assets/img/tree/package/500_icon.png" width="40px" height="40px" />
                  $500
                </div>
                <div class="tree_name">
                  <img src="assets/img/tree/package/1000_icon.png" width="40px" height="40px" />
                  $1000
                </div>
                <div class="tree_name">
                  <img src="assets/img/tree/package/3000_icon.png" width="40px" height="40px" />
                  $3000
                </div>
                <div class="tree_name">
                  <img src="assets/img/tree/package/5000_icon.png" width="40px" height="40px" />
                  $5000
                </div> */}
                <div class="tree_name">
                  <img
                    src="assets/img/tree/black.png"
                    width="40px"
                    height="40px"
                  />
                  Not Registered
                </div>
                {/* <div class="tree_name">
                  <img src="assets/img/tree/package/inactive.png" width="40px" height="40px" />
                  Inactive
                </div> */}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div
                  id="tree"
                  className="treeview"
                  style={{ margin: "40px auto" }}
                >
                  <div className="treemember hors_ip">
                    <div className="dropdown">
                      <button className="dropbtn">
                        <img
                          src={
                            userdata[0].package_amount == 100
                              ? Active
                              : userdata[0].package_amount == 300
                              ? Active1
                              : userdata[0].package_amount == 500
                              ? Active2
                              : userdata[0].package_amount == 1000
                              ? Active3
                              : userdata[0].package_amount == 3000
                              ? Active4
                              : userdata[0].package_amount == 5000
                              ? Active5
                              : userdata[0].id == ""
                              ? Default
                              : user3red
                          }
                          onClick={() => (
                            setIdnumer(userdata[0].id), addValue(userdata[0].id)
                          )}
                          className="abc"
                          onclick="Image_Click(364734)"
                        />
                      </button>

                      <div className="span" style={{ color: "#fff" }}>
                        {/* {userdata[0].name}  <br /> */}

                        {userdata[0].id}
                      </div>
                      <div className="dropdown-content ">
                        <table
                          className="tables dropdown_width"
                          cellpadding="0px"
                          cellspacing="0px"
                        >
                          <tbody>
                            <tr className="fgtybmd">
                              <td className="table_heading">Sponsor :</td>
                              <td className="grtydfbc" colspan="3">
                                {userdata[0].Sponsor}
                              </td>
                            </tr>
                            <tr>
                              <td className="table_heading">
                                Registration&nbsp;Date :
                              </td>
                              <td className="grtydfbc">
                                {userdata[0].registration_date}
                              </td>
                              <td className="table_heading">
                                Activation &nbsp;Date :
                              </td>
                              <td className="grtydfbc">
                                {userdata[0].Activation_date}
                              </td>
                            </tr>
                            <tr>
                              <td className="table_heading">Status :</td>
                              <td className="grtydfbc">{userdata[0].status}</td>
                              <td className="table_heading">Package :</td>
                              <td className="grtydfbc">{userdata[0].date}</td>
                            </tr>
                            <tr>
                              <td className="table_heading">Total Left :</td>
                              <td className="grtydfbc">
                                {userdata[0].total_left}
                              </td>
                              <td className="table_heading">Total Right :</td>
                              <td className="grtydfbc">
                                {userdata[0].total_right}
                              </td>
                            </tr>
                            <tr>
                              <td className="table_heading">
                                Total Left Active :
                              </td>
                              <td className="grtydfbc">
                                {userdata[0].total_left_active}
                              </td>
                              <td className="table_heading">
                                Total Right Active :
                              </td>
                              <td className="grtydfbc">
                                {userdata[0].total_right_active}
                              </td>
                            </tr>
                            <tr>
                              <td className="table_heading">
                                Total Left Business :
                              </td>
                              <td className="grtydfbc">
                                {userdata[0].left_business}
                              </td>
                              <td className="table_heading">
                                Total Right Business :
                              </td>
                              <td className="grtydfbc">
                                {userdata[0].right_business}
                              </td>
                            </tr>
                            <tr>
                              <td className="table_heading">
                                Today Left Business :
                              </td>
                              <td className="grtydfbc">
                                {userdata[0].today_left_business}
                              </td>
                              <td className="table_heading">
                                Today Right Business :
                              </td>
                              <td className="grtydfbc">
                                {userdata[0].today_right_business}
                              </td>
                            </tr>

                            <tr>
                              <td className="table_heading">
                                Package Amount :
                              </td>
                              <td className="grtydfbc">
                                $ {userdata[0].package_amount}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="connecter1">
                    <img
                      src={tree_image_small}
                      style={{ width: "480px", height: "33px" }}
                    />
                  </div>

                  <div className="tree_row">
                    <div className="row_2_child">
                      <div className="dropdown">
                        <button className="dropbtn">
                          <img
                            src={
                              userdata[1].package_amount == 100
                                ? Active
                                : userdata[1].package_amount == 300
                                ? Active1
                                : userdata[1].package_amount == 500
                                ? Active2
                                : userdata[1].package_amount == 1000
                                ? Active3
                                : userdata[1].package_amount == 3000
                                ? Active4
                                : userdata[1].package_amount == 5000
                                ? Active5
                                : userdata[1].id == ""
                                ? Default
                                : user3red
                            }
                            onClick={() => (
                              setIdnumer(userdata[1].id),
                              addValue(userdata[1].id)
                            )}
                            className="abc"
                            onclick="Image_Click()"
                          />
                        </button>
                        <div className="span" style={{ color: "#fff" }}>
                          {/* {userdata[1].name}  <br /> */}

                          {userdata[1].id}
                        </div>
                        <div className="dropdown-content">
                          <table
                            className="tables dropdown_width"
                            cellpadding="0px"
                            cellspacing="0px"
                          >
                            <tbody>
                              <tr className="fgtybmd">
                                <td className="table_heading">Sponsor :</td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[1].Sponsor}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Registration&nbsp;Date :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[1].registration_date}
                                </td>
                                <td className="table_heading">
                                  Activation &nbsp;Date :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[1].Activation_date}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">Status :</td>
                                <td className="grtydfbc">
                                  {userdata[1].status}
                                </td>
                                <td className="table_heading">Package :</td>
                                <td className="grtydfbc">{userdata[1].date}</td>
                              </tr>
                              <tr>
                                <td className="table_heading">Total Left :</td>
                                <td className="grtydfbc">
                                  {userdata[1].total_left}
                                </td>
                                <td className="table_heading">Total Right :</td>
                                <td className="grtydfbc">
                                  {userdata[1].total_right}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Total Left Active :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[1].total_left_active}
                                </td>
                                <td className="table_heading">
                                  Total Right Active :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[1].total_right_active}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Total Left Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[1].left_business}
                                </td>
                                <td className="table_heading">
                                  Total Right Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[1].right_business}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Today Left Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[1].today_left_business}
                                </td>
                                <td className="table_heading">
                                  Today Right Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[1].today_right_business}
                                </td>
                              </tr>

                              <tr>
                                <td className="table_heading">
                                  Package Amount :
                                </td>
                                <td className="grtydfbc">
                                  $ {userdata[1].package_amount}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="row_2_child">
                      <div className="dropdown">
                        <button className="dropbtn">
                          <img
                            src={
                              userdata[2].package_amount == 100
                                ? Active
                                : userdata[2].package_amount == 300
                                ? Active1
                                : userdata[2].package_amount == 500
                                ? Active2
                                : userdata[2].package_amount == 1000
                                ? Active3
                                : userdata[2].package_amount == 3000
                                ? Active4
                                : userdata[2].package_amount == 5000
                                ? Active5
                                : userdata[2].id == ""
                                ? Default
                                : user3red
                            }
                            onClick={() => (
                              setIdnumer(userdata[2].id),
                              addValue(userdata[2].id)
                            )}
                            className="abc"
                            onclick="Image_Click()"
                          />
                        </button>
                        <div className="span" style={{ color: "#fff" }}>
                          {/* {userdata[2].name}  <br /> */}

                          {userdata[2].id}
                        </div>
                        <div className="dropdown-content">
                          <table
                            className="tables dropdown_width"
                            cellpadding="0px"
                            cellspacing="0px"
                          >
                            <tbody>
                              <tr className="fgtybmd">
                                <td className="table_heading">Sponsor :</td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[2].Sponsor}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Registration&nbsp;Date :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[2].registration_date}
                                </td>
                                <td className="table_heading">
                                  Activation &nbsp;Date :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[2].Activation_date}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">Status :</td>
                                <td className="grtydfbc">
                                  {userdata[2].status}
                                </td>
                                <td className="table_heading">Package :</td>
                                <td className="grtydfbc">{userdata[2].date}</td>
                              </tr>
                              <tr>
                                <td className="table_heading">Total Left :</td>
                                <td className="grtydfbc">
                                  {userdata[2].total_left}
                                </td>
                                <td className="table_heading">Total Right :</td>
                                <td className="grtydfbc">
                                  {userdata[2].total_right}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Total Left Active :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[2].total_left_active}
                                </td>
                                <td className="table_heading">
                                  Total Right Active :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[2].total_right_active}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Total Left Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[2].left_business}
                                </td>
                                <td className="table_heading">
                                  Total Right Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[2].right_business}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Today Left Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[2].today_left_business}
                                </td>
                                <td className="table_heading">
                                  Today Right Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[2].today_right_business}
                                </td>
                              </tr>

                              <tr>
                                <td className="table_heading">
                                  Package Amount :
                                </td>
                                <td className="grtydfbc">
                                  $ {userdata[2].package_amount}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tree_row" style={{ height: "34px" }}>
                    <div className="row_2_child" style={{ height: "34px" }}>
                      <img
                        src={tree_image_medium}
                        style={{ width: "253px", height: "32px" }}
                      />
                    </div>
                    <div className="row_2_child" style={{ height: "34px" }}>
                      <img
                        src={tree_image_medium}
                        style={{ width: "253px", height: "32px" }}
                      />
                    </div>
                  </div>

                  <div className="tree_row">
                    <div className="row_3_child">
                      <div className="dropdown">
                        <button className="dropbtn">
                          <img
                            src={
                              userdata[3].package_amount == 100
                                ? Active
                                : userdata[3].package_amount == 300
                                ? Active1
                                : userdata[3].package_amount == 500
                                ? Active2
                                : userdata[3].package_amount == 1000
                                ? Active3
                                : userdata[3].package_amount == 3000
                                ? Active4
                                : userdata[3].package_amount == 5000
                                ? Active5
                                : userdata[3].id == ""
                                ? Default
                                : user3red
                            }
                            onClick={() => (
                              setIdnumer(userdata[3].id),
                              addValue(userdata[3].id)
                            )}
                            className="abc"
                            onclick="Image_Click()"
                          />
                        </button>
                        <div className="span" style={{ color: "#fff" }}>
                          {/* {userdata[3].name}  <br /> */}

                          {userdata[3].id}
                        </div>
                        <div className="dropdown-content">
                          <table
                            className="tables dropdown_width"
                            cellpadding="0px"
                            cellspacing="0px"
                          >
                            <tbody>
                              <tr
                                className="fgtybmd"
                                style={{ display: "none" }}
                              >
                                <td className="table_heading">Sponser Name:</td>
                                <td colspan="3"></td>
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">Sponsor :</td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[3].Sponsor}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Registration&nbsp;Date :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[3].registration_date}
                                </td>
                                <td className="table_heading">
                                  Activation &nbsp;Date :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[3].Activation_date}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">Status :</td>
                                <td className="grtydfbc">
                                  {userdata[3].status}
                                </td>
                                <td className="table_heading">Package :</td>
                                <td className="grtydfbc">{userdata[3].date}</td>
                              </tr>
                              <tr>
                                <td className="table_heading">Total Left :</td>
                                <td className="grtydfbc">
                                  {userdata[3].total_left}
                                </td>
                                <td className="table_heading">Total Right :</td>
                                <td className="grtydfbc">
                                  {userdata[3].total_right}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Total Left Active :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[3].total_left_active}
                                </td>
                                <td className="table_heading">
                                  Total Right Active :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[3].total_right_active}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Total Left Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[3].left_business}
                                </td>
                                <td className="table_heading">
                                  Total Right Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[3].right_business}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Today Left Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[3].today_left_business}
                                </td>
                                <td className="table_heading">
                                  Today Right Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[3].today_right_business}
                                </td>
                              </tr>

                              <tr>
                                <td className="table_heading">
                                  Package Amount :
                                </td>
                                <td className="grtydfbc">
                                  $ {userdata[3].package_amount}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="row_3_child">
                      <div className="dropdown">
                        <button className="dropbtn">
                          <img
                            src={
                              userdata[4].package_amount == 100
                                ? Active
                                : userdata[4].package_amount == 300
                                ? Active1
                                : userdata[4].package_amount == 500
                                ? Active2
                                : userdata[4].package_amount == 1000
                                ? Active3
                                : userdata[4].package_amount == 3000
                                ? Active4
                                : userdata[4].package_amount == 5000
                                ? Active5
                                : userdata[4].id == ""
                                ? Default
                                : user3red
                            }
                            onClick={() => (
                              setIdnumer(userdata[4].id),
                              addValue(userdata[4].id)
                            )}
                            className="abc"
                            onclick="Image_Click()"
                          />
                        </button>
                        <div className="span" style={{ color: "#fff" }}>
                          {/* {userdata[4].name}  <br /> */}

                          {userdata[4].id}
                        </div>
                        <div className="dropdown-content">
                          <table
                            className="tables dropdown_width"
                            cellpadding="0px"
                            cellspacing="0px"
                          >
                            <tbody>
                              <tr
                                className="fgtybmd"
                                style={{ display: "none" }}
                              >
                                <td className="table_heading">Sponser Name:</td>
                                <td colspan="3"></td>
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">Sponsor :</td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[4].Sponsor}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Registration&nbsp;Date :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[4].registration_date}
                                </td>
                                <td className="table_heading">
                                  Activation &nbsp;Date :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[4].Activation_date}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">Status :</td>
                                <td className="grtydfbc">
                                  {userdata[4].status}
                                </td>
                                <td className="table_heading">Package :</td>
                                <td className="grtydfbc">{userdata[4].date}</td>
                              </tr>
                              <tr>
                                <td className="table_heading">Total Left :</td>
                                <td className="grtydfbc">
                                  {userdata[4].total_left}
                                </td>
                                <td className="table_heading">Total Right :</td>
                                <td className="grtydfbc">
                                  {userdata[4].total_right}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Total Left Active :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[4].total_left_active}
                                </td>
                                <td className="table_heading">
                                  Total Right Active :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[4].total_right_active}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Total Left Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[4].left_business}
                                </td>
                                <td className="table_heading">
                                  Total Right Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[4].right_business}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Today Left Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[4].today_left_business}
                                </td>
                                <td className="table_heading">
                                  Today Right Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[4].today_right_business}
                                </td>
                              </tr>

                              <tr>
                                <td className="table_heading">
                                  Package Amount :
                                </td>
                                <td className="grtydfbc">
                                  $ {userdata[4].package_amount}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="row_3_child">
                      <div className="dropdown">
                        <button className="dropbtn">
                          <img
                            src={
                              userdata[5].package_amount == 100
                                ? Active
                                : userdata[5].package_amount == 300
                                ? Active1
                                : userdata[5].package_amount == 500
                                ? Active2
                                : userdata[5].package_amount == 1000
                                ? Active3
                                : userdata[5].package_amount == 3000
                                ? Active4
                                : userdata[5].package_amount == 5000
                                ? Active5
                                : userdata[5].id == ""
                                ? Default
                                : user3red
                            }
                            onClick={() => (
                              setIdnumer(userdata[5].id),
                              addValue(userdata[5].id)
                            )}
                            className="abc"
                            onclick="Image_Click()"
                          />
                        </button>

                        <div className="span" style={{ color: "#fff" }}>
                          {/* {userdata[5].name}  <br /> */}

                          {userdata[5].id}
                        </div>
                        <div className="dropdown-content">
                          <table
                            className="tables dropdown_width"
                            cellpadding="0px"
                            cellspacing="0px"
                          >
                            <tbody>
                              <tr
                                className="fgtybmd"
                                style={{ display: "none" }}
                              >
                                <td className="table_heading">Sponser Name:</td>
                                <td colspan="3"></td>
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">Sponsor :</td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[5].Sponsor}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Registration&nbsp;Date :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[5].registration_date}
                                </td>
                                <td className="table_heading">
                                  Activation &nbsp;Date :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[5].Activation_date}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">Status :</td>
                                <td className="grtydfbc">
                                  {userdata[5].status}
                                </td>
                                <td className="table_heading">Package :</td>
                                <td className="grtydfbc">{userdata[5].date}</td>
                              </tr>
                              <tr>
                                <td className="table_heading">Total Left :</td>
                                <td className="grtydfbc">
                                  {userdata[5].total_left}
                                </td>
                                <td className="table_heading">Total Right :</td>
                                <td className="grtydfbc">
                                  {userdata[5].total_right}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Total Left Active :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[5].total_left_active}
                                </td>
                                <td className="table_heading">
                                  Total Right Active :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[5].total_right_active}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Total Left Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[5].left_business}
                                </td>
                                <td className="table_heading">
                                  Total Right Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[5].right_business}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Today Left Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[5].today_left_business}
                                </td>
                                <td className="table_heading">
                                  Today Right Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[5].today_right_business}
                                </td>
                              </tr>

                              <tr>
                                <td className="table_heading">
                                  Package Amount :
                                </td>
                                <td className="grtydfbc">
                                  $ {userdata[5].package_amount}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="row_3_child">
                      <div className="dropdown">
                        <button className="dropbtn">
                          <img
                            src={
                              userdata[6].package_amount == 100
                                ? Active
                                : userdata[6].package_amount == 300
                                ? Active1
                                : userdata[6].package_amount == 500
                                ? Active2
                                : userdata[6].package_amount == 1000
                                ? Active3
                                : userdata[6].package_amount == 3000
                                ? Active4
                                : userdata[6].package_amount == 5000
                                ? Active5
                                : userdata[6].id == ""
                                ? Default
                                : user3red
                            }
                            onClick={() => (
                              setIdnumer(userdata[6].id),
                              addValue(userdata[6].id)
                            )}
                            className="abc"
                            onclick="Image_Click()"
                          />
                        </button>
                        <div className="span" style={{ color: "#fff" }}>
                          {/* {userdata[6].name}  <br /> */}

                          {userdata[6].id}
                        </div>
                        <div className="dropdown-content">
                          <table
                            className="tables dropdown_width"
                            cellpadding="0px"
                            cellspacing="0px"
                          >
                            <tbody>
                              <tr
                                className="fgtybmd"
                                style={{ display: "none" }}
                              >
                                <td className="table_heading">Sponser Name:</td>
                                <td colspan="3"></td>
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">Sponsor :</td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[6].Sponsor}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Registration&nbsp;Date :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[6].registration_date}
                                </td>
                                <td className="table_heading">
                                  Activation &nbsp;Date :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[6].Activation_date}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">Status :</td>
                                <td className="grtydfbc">
                                  {userdata[6].status}
                                </td>
                                <td className="table_heading">Package :</td>
                                <td className="grtydfbc">{userdata[6].date}</td>
                              </tr>
                              <tr>
                                <td className="table_heading">Total Left :</td>
                                <td className="grtydfbc">
                                  {userdata[6].total_left}
                                </td>
                                <td className="table_heading">Total Right :</td>
                                <td className="grtydfbc">
                                  {userdata[6].total_right}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Total Left Active :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[6].total_left_active}
                                </td>
                                <td className="table_heading">
                                  Total Right Active :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[6].total_right_active}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Total Left Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[6].left_business}
                                </td>
                                <td className="table_heading">
                                  Total Right Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[6].right_business}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Today Left Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[6].today_left_business}
                                </td>
                                <td className="table_heading">
                                  Today Right Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[6].today_right_business}
                                </td>
                              </tr>

                              <tr>
                                <td className="table_heading">
                                  Package Amount :
                                </td>
                                <td className="grtydfbc">
                                  $ {userdata[6].package_amount}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tree_row" style={{ height: "27px" }}>
                    <div className="row_3_child" style={{ height: "27px" }}>
                      <img
                        src={tree_image_large}
                        style={{ width: "129px", height: "27px" }}
                      />
                    </div>
                    <div className="row_3_child" style={{ height: "27px" }}>
                      <img
                        src={tree_image_large}
                        style={{ width: "129px", height: "27px" }}
                      />
                    </div>
                    <div className="row_3_child" style={{ height: "27px" }}>
                      <img
                        src={tree_image_large}
                        style={{ width: "129px", height: "27px" }}
                      />
                    </div>
                    <div className="row_3_child" style={{ height: "27px" }}>
                      <img
                        src={tree_image_large}
                        style={{ width: "129px", height: "27px" }}
                      />
                    </div>
                  </div>
                  <div className="tree_row">
                    <div className="row_4_child">
                      <div className="dropdown">
                        <button className="dropbtn">
                          <img
                            src={
                              userdata[7].package_amount == 100
                                ? Active
                                : userdata[7].package_amount == 300
                                ? Active1
                                : userdata[7].package_amount == 500
                                ? Active2
                                : userdata[7].package_amount == 1000
                                ? Active3
                                : userdata[7].package_amount == 3000
                                ? Active4
                                : userdata[7].package_amount == 5000
                                ? Active5
                                : userdata[7].id == ""
                                ? Default
                                : user3red
                            }
                            onClick={() => (
                              setIdnumer(userdata[7].id),
                              addValue(userdata[7].id)
                            )}
                            className="abc"
                            onclick="Image_Click()"
                          />
                        </button>
                        <div className="span" style={{ color: "#fff" }}>
                          {/* {userdata[7].name}  <br /> */}

                          {userdata[7].id}
                        </div>
                        <div className="dropdown-content">
                          <table
                            className="tables dropdown_width"
                            cellpadding="0px"
                            cellspacing="0px"
                          >
                            <tbody>
                              <tr
                                className="fgtybmd"
                                style={{ display: "none" }}
                              >
                                <td className="table_heading">Sponser Name:</td>
                                <td colspan="3"></td>
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">Sponsor :</td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[7].Sponsor}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Registration&nbsp;Date :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[7].registration_date}
                                </td>
                                <td className="table_heading">
                                  Activation &nbsp;Date :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[7].Activation_date}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">Status :</td>
                                <td className="grtydfbc">
                                  {userdata[7].status}
                                </td>
                                <td className="table_heading">Package :</td>
                                <td className="grtydfbc">{userdata[7].date}</td>
                              </tr>
                              <tr>
                                <td className="table_heading">Total Left :</td>
                                <td className="grtydfbc">
                                  {userdata[7].total_left}
                                </td>
                                <td className="table_heading">Total Right :</td>
                                <td className="grtydfbc">
                                  {userdata[7].total_right}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Total Left Active :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[7].total_left_active}
                                </td>
                                <td className="table_heading">
                                  Total Right Active :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[7].total_right_active}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Total Left Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[7].left_business}
                                </td>
                                <td className="table_heading">
                                  Total Right Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[7].right_business}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Today Left Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[7].today_left_business}
                                </td>
                                <td className="table_heading">
                                  Today Right Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[7].today_right_business}
                                </td>
                              </tr>

                              {/* <tr>
                                                                <td className="table_heading">Left Carry Forward :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[7].left_carry_forward}

                                                                </td>
                                                                <td className="table_heading">Right Carry Forward :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[7].right_carry_forward}

                                                                </td>
                                                            </tr> */}
                              <tr>
                                <td className="table_heading">
                                  Package Amount :
                                </td>
                                <td className="grtydfbc">
                                  $ {userdata[7].package_amount}
                                </td>
                                {/* <td className="table_heading">Country :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[7].country}

                                                                </td> */}
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="row_4_child">
                      <div className="dropdown">
                        <button className="dropbtn">
                          <img
                            src={
                              userdata[8].package_amount == 100
                                ? Active
                                : userdata[8].package_amount == 300
                                ? Active1
                                : userdata[8].package_amount == 500
                                ? Active2
                                : userdata[8].package_amount == 1000
                                ? Active3
                                : userdata[8].package_amount == 3000
                                ? Active4
                                : userdata[8].package_amount == 5000
                                ? Active5
                                : userdata[8].id == ""
                                ? Default
                                : user3red
                            }
                            onClick={() => (
                              setIdnumer(userdata[8].id),
                              addValue(userdata[8].id)
                            )}
                            className="abc"
                            onclick="Image_Click()"
                          />
                        </button>
                        <div className="span" style={{ color: "#fff" }}>
                          {/* {userdata[8].name}  <br /> */}

                          {userdata[8].id}
                        </div>
                        <div className="dropdown-content">
                          <table
                            className="tables dropdown_width"
                            cellpadding="0px"
                            cellspacing="0px"
                          >
                            <tbody>
                              <tr
                                className="fgtybmd"
                                style={{ display: "none" }}
                              >
                                <td className="table_heading">Sponser Name:</td>
                                <td colspan="3"></td>
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">Sponsor :</td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[8].Sponsor}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Registration&nbsp;Date :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[8].registration_date}
                                </td>
                                <td className="table_heading">
                                  Activation &nbsp;Date :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[8].Activation_date}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">Status :</td>
                                <td className="grtydfbc">
                                  {userdata[8].status}
                                </td>
                                <td className="table_heading">Package :</td>
                                <td className="grtydfbc">{userdata[8].date}</td>
                              </tr>
                              <tr>
                                <td className="table_heading">Total Left :</td>
                                <td className="grtydfbc">
                                  {userdata[8].total_left}
                                </td>
                                <td className="table_heading">Total Right :</td>
                                <td className="grtydfbc">
                                  {userdata[8].total_right}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Total Left Active :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[8].total_left_active}
                                </td>
                                <td className="table_heading">
                                  Total Right Active :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[8].total_right_active}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Total Left Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[8].left_business}
                                </td>
                                <td className="table_heading">
                                  Total Right Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[8].right_business}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Today Left Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[8].today_left_business}
                                </td>
                                <td className="table_heading">
                                  Today Right Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[8].today_right_business}
                                </td>
                              </tr>
                              {/* <tr>
                                                                <td className="table_heading">Left Carry Forward :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[8].left_carry_forward}

                                                                </td>
                                                                <td className="table_heading">Right Carry Forward :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[8].right_carry_forward}

                                                                </td>
                                                            </tr> */}
                              <tr>
                                <td className="table_heading">
                                  Package Amount :
                                </td>
                                <td className="grtydfbc">
                                  $ {userdata[8].package_amount}
                                </td>
                                {/* <td className="table_heading">Country :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[8].country}

                                                                </td> */}
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="row_4_child">
                      <div className="dropdown">
                        <button className="dropbtn">
                          <img
                            src={
                              userdata[9].package_amount == 100
                                ? Active
                                : userdata[9].package_amount == 300
                                ? Active1
                                : userdata[9].package_amount == 500
                                ? Active2
                                : userdata[9].package_amount == 1000
                                ? Active3
                                : userdata[9].package_amount == 3000
                                ? Active4
                                : userdata[9].package_amount == 5000
                                ? Active5
                                : userdata[9].id == ""
                                ? Default
                                : user3red
                            }
                            onClick={() => (
                              setIdnumer(userdata[9].id),
                              addValue(userdata[9].id)
                            )}
                            className="abc"
                            onclick="Image_Click()"
                          />
                        </button>
                        <div className="span" style={{ color: "#fff" }}>
                          {/* {userdata[9].name}  <br /> */}

                          {userdata[9].id}
                        </div>
                        <div className="dropdown-content">
                          <table
                            className="tables dropdown_width"
                            cellpadding="0px"
                            cellspacing="0px"
                          >
                            <tbody>
                              <tr
                                className="fgtybmd"
                                style={{ display: "none" }}
                              >
                                <td className="table_heading">Sponser Name:</td>
                                <td colspan="3"></td>
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">Sponsor :</td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[9].Sponsor}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Registration&nbsp;Date :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[9].registration_date}
                                </td>
                                <td className="table_heading">
                                  Activation &nbsp;Date :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[9].Activation_date}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">Status :</td>
                                <td className="grtydfbc">
                                  {userdata[9].status}
                                </td>
                                <td className="table_heading">Package :</td>
                                <td className="grtydfbc">{userdata[9].date}</td>
                              </tr>
                              <tr>
                                <td className="table_heading">Total Left :</td>
                                <td className="grtydfbc">
                                  {userdata[9].total_left}
                                </td>
                                <td className="table_heading">Total Right :</td>
                                <td className="grtydfbc">
                                  {userdata[9].total_right}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Total Left Active :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[9].total_left_active}
                                </td>
                                <td className="table_heading">
                                  Total Right Active :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[9].total_right_active}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Total Left Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[9].left_business}
                                </td>
                                <td className="table_heading">
                                  Total Right Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[9].right_business}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Today Left Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[9].today_left_business}
                                </td>
                                <td className="table_heading">
                                  Today Right Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[9].today_right_business}
                                </td>
                              </tr>
                              {/* <tr>
                                                                <td className="table_heading">Left Carry Forward :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[9].left_carry_forward}

                                                                </td>
                                                                <td className="table_heading">Right Carry Forward :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[9].right_carry_forward}

                                                                </td>
                                                            </tr> */}
                              <tr>
                                <td className="table_heading">
                                  Package Amount :
                                </td>
                                <td className="grtydfbc">
                                  $ {userdata[9].package_amount}
                                </td>
                                {/* <td className="table_heading">Country :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[9].country}

                                                                </td> */}
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="row_4_child">
                      <div className="dropdown">
                        <button className="dropbtn">
                          <img
                            src={
                              userdata[10].package_amount == 100
                                ? Active
                                : userdata[10].package_amount == 300
                                ? Active1
                                : userdata[10].package_amount == 500
                                ? Active2
                                : userdata[10].package_amount == 1000
                                ? Active3
                                : userdata[10].package_amount == 3000
                                ? Active4
                                : userdata[10].package_amount == 5000
                                ? Active5
                                : userdata[10].id == ""
                                ? Default
                                : user3red
                            }
                            onClick={() => (
                              setIdnumer(userdata[10].id),
                              addValue(userdata[10].id)
                            )}
                            className="abc"
                            onclick="Image_Click()"
                          />
                        </button>
                        <div className="span" style={{ color: "#fff" }}>
                          {/* {userdata[10].name}  <br /> */}

                          {userdata[10].id}
                        </div>
                        <div className="dropdown-content">
                          <table
                            className="tables dropdown_width"
                            cellpadding="0px"
                            cellspacing="0px"
                          >
                            <tbody>
                              <tr
                                className="fgtybmd"
                                style={{ display: "none" }}
                              >
                                <td className="table_heading">Sponser Name:</td>
                                <td colspan="3"></td>
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">Sponsor :</td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[10].Sponsor}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Registration&nbsp;Date :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[10].registration_date}
                                </td>
                                <td className="table_heading">
                                  Activation &nbsp;Date :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[10].Activation_date}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">Status :</td>
                                <td className="grtydfbc">
                                  {userdata[10].status}
                                </td>
                                <td className="table_heading">Package :</td>
                                <td className="grtydfbc">
                                  {userdata[10].date}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">Total Left :</td>
                                <td className="grtydfbc">
                                  {userdata[10].total_left}
                                </td>
                                <td className="table_heading">Total Right :</td>
                                <td className="grtydfbc">
                                  {userdata[10].total_right}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Total Left Active :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[10].total_left_active}
                                </td>
                                <td className="table_heading">
                                  Total Right Active :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[10].total_right_active}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Total Left Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[10].left_business}
                                </td>
                                <td className="table_heading">
                                  Total Right Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[10].right_business}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Today Left Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[10].today_left_business}
                                </td>
                                <td className="table_heading">
                                  Today Right Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[10].today_right_business}
                                </td>
                              </tr>
                              {/* <tr>
                                                                <td className="table_heading">Left Carry Forward :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[10].left_carry_forward}

                                                                </td>
                                                                <td className="table_heading">Right Carry Forward :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[10].right_carry_forward}

                                                                </td>
                                                            </tr> */}
                              <tr>
                                <td className="table_heading">
                                  Package Amount :
                                </td>
                                <td className="grtydfbc">
                                  $ {userdata[10].package_amount}
                                </td>
                                {/* <td className="table_heading">Country :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[10].country}

                                                                </td> */}
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="row_4_child">
                      <div className="dropdown">
                        <button className="dropbtn">
                          <img
                            src={
                              userdata[11].package_amount == 100
                                ? Active
                                : userdata[11].package_amount == 300
                                ? Active1
                                : userdata[11].package_amount == 500
                                ? Active2
                                : userdata[11].package_amount == 1000
                                ? Active3
                                : userdata[11].package_amount == 3000
                                ? Active4
                                : userdata[11].package_amount == 5000
                                ? Active5
                                : userdata[11].id == ""
                                ? Default
                                : user3red
                            }
                            onClick={() => (
                              setIdnumer(userdata[11].id),
                              addValue(userdata[11].id)
                            )}
                            className="abc"
                            onclick="Image_Click()"
                          />
                        </button>
                        <div className="span" style={{ color: "#fff" }}>
                          {/* {userdata[11].name}  <br /> */}

                          {userdata[11].id}
                        </div>
                        <div className="dropdown-content">
                          <table
                            className="tables dropdown_width"
                            cellpadding="0px"
                            cellspacing="0px"
                          >
                            <tbody>
                              <tr
                                className="fgtybmd"
                                style={{ display: "none" }}
                              >
                                <td className="table_heading">Sponser Name:</td>
                                <td colspan="3"></td>
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">Sponsor :</td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[11].Sponsor}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Registration&nbsp;Date :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[11].registration_date}
                                </td>
                                <td className="table_heading">
                                  Activation &nbsp;Date :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[11].Activation_date}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">Status :</td>
                                <td className="grtydfbc">
                                  {userdata[11].status}
                                </td>
                                <td className="table_heading">Package :</td>
                                <td className="grtydfbc">
                                  {userdata[11].date}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">Total Left :</td>
                                <td className="grtydfbc">
                                  {userdata[11].total_left}
                                </td>
                                <td className="table_heading">Total Right :</td>
                                <td className="grtydfbc">
                                  {userdata[11].total_right}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Total Left Active :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[11].total_left_active}
                                </td>
                                <td className="table_heading">
                                  Total Right Active :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[11].total_right_active}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Total Left Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[11].left_business}
                                </td>
                                <td className="table_heading">
                                  Total Right Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[11].right_business}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Today Left Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[11].today_left_business}
                                </td>
                                <td className="table_heading">
                                  Today Right Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[11].today_right_business}
                                </td>
                              </tr>
                              {/* <tr>
                                                                <td className="table_heading">Left Carry Forward :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[11].left_carry_forward}

                                                                </td>
                                                                <td className="table_heading">Right Carry Forward :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[11].right_carry_forward}

                                                                </td>
                                                            </tr> */}
                              <tr>
                                <td className="table_heading">
                                  Package Amount :
                                </td>
                                <td className="grtydfbc">
                                  $ {userdata[11].package_amount}
                                </td>
                                {/* <td className="table_heading">Country :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[11].country}

                                                                </td> */}
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="row_4_child">
                      <div className="dropdown">
                        <button className="dropbtn">
                          <img
                            src={
                              userdata[12].package_amount == 100
                                ? Active
                                : userdata[12].package_amount == 300
                                ? Active1
                                : userdata[12].package_amount == 500
                                ? Active2
                                : userdata[12].package_amount == 1000
                                ? Active3
                                : userdata[12].package_amount == 3000
                                ? Active4
                                : userdata[12].package_amount == 5000
                                ? Active5
                                : userdata[12].id == ""
                                ? Default
                                : user3red
                            }
                            onClick={() => (
                              setIdnumer(userdata[12].id),
                              addValue(userdata[12].id)
                            )}
                            className="abc"
                            onclick="Image_Click()"
                          />
                        </button>
                        <div className="span" style={{ color: "#fff" }}>
                          {/* {userdata[12].name}  <br /> */}

                          {userdata[12].id}
                        </div>
                        <div className="dropdown-content">
                          <table
                            className="tables dropdown_width"
                            cellpadding="0px"
                            cellspacing="0px"
                          >
                            <tbody>
                              <tr
                                className="fgtybmd"
                                style={{ display: "none" }}
                              >
                                <td className="table_heading">Sponser Name:</td>
                                <td colspan="3"></td>
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">Sponsor :</td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[12].Sponsor}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Registration&nbsp;Date :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[12].registration_date}
                                </td>
                                <td className="table_heading">
                                  Activation &nbsp;Date :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[12].Activation_date}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">Status :</td>
                                <td className="grtydfbc">
                                  {userdata[12].status}
                                </td>
                                <td className="table_heading">Package :</td>
                                <td className="grtydfbc">
                                  {userdata[12].date}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">Total Left :</td>
                                <td className="grtydfbc">
                                  {userdata[12].total_left}
                                </td>
                                <td className="table_heading">Total Right :</td>
                                <td className="grtydfbc">
                                  {userdata[12].total_right}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Total Left Active :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[12].total_left_active}
                                </td>
                                <td className="table_heading">
                                  Total Right Active :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[12].total_right_active}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Total Left Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[12].left_business}
                                </td>
                                <td className="table_heading">
                                  Total Right Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[12].right_business}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Today Left Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[12].today_left_business}
                                </td>
                                <td className="table_heading">
                                  Today Right Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[12].today_right_business}
                                </td>
                              </tr>
                              {/* <tr>
                                                                <td className="table_heading">Left Carry Forward :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[12].left_carry_forward}

                                                                </td>
                                                                <td className="table_heading">Right Carry Forward :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[12].right_carry_forward}

                                                                </td>
                                                            </tr> */}
                              <tr>
                                <td className="table_heading">
                                  Package Amount :
                                </td>
                                <td className="grtydfbc">
                                  $ {userdata[12].package_amount}
                                </td>
                                {/* <td className="table_heading">Country :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[12].country}

                                                                </td> */}
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="row_4_child">
                      <div className="dropdown">
                        <button className="dropbtn">
                          <img
                            src={
                              userdata[13].package_amount == 100
                                ? Active
                                : userdata[13].package_amount == 300
                                ? Active1
                                : userdata[13].package_amount == 500
                                ? Active2
                                : userdata[13].package_amount == 1000
                                ? Active3
                                : userdata[13].package_amount == 3000
                                ? Active4
                                : userdata[13].package_amount == 5000
                                ? Active5
                                : userdata[13].id == ""
                                ? Default
                                : user3red
                            }
                            onClick={() => (
                              setIdnumer(userdata[13].id),
                              addValue(userdata[13].id)
                            )}
                            className="abc"
                            onclick="Image_Click()"
                          />
                        </button>
                        <div className="span" style={{ color: "#fff" }}>
                          {/* {userdata[13].name}  <br /> */}

                          {userdata[13].id}
                        </div>
                        <div className="dropdown-content">
                          <table
                            className="tables dropdown_width"
                            cellpadding="0px"
                            cellspacing="0px"
                          >
                            <tbody>
                              <tr
                                className="fgtybmd"
                                style={{ display: "none" }}
                              >
                                <td className="table_heading">Sponser Name:</td>
                                <td colspan="3"></td>
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">Sponsor :</td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[13].Sponsor}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Registration&nbsp;Date :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[13].registration_date}
                                </td>
                                <td className="table_heading">
                                  Activation &nbsp;Date :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[13].Activation_date}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">Status :</td>
                                <td className="grtydfbc">
                                  {userdata[13].status}
                                </td>
                                <td className="table_heading">Package :</td>
                                <td className="grtydfbc">
                                  {userdata[13].date}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">Total Left :</td>
                                <td className="grtydfbc">
                                  {userdata[13].total_left}
                                </td>
                                <td className="table_heading">Total Right :</td>
                                <td className="grtydfbc">
                                  {userdata[13].total_right}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Total Left Active :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[13].total_left_active}
                                </td>
                                <td className="table_heading">
                                  Total Right Active :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[13].total_right_active}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Total Left Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[13].left_business}
                                </td>
                                <td className="table_heading">
                                  Total Right Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[13].right_business}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Today Left Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[13].today_left_business}
                                </td>
                                <td className="table_heading">
                                  Today Right Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[13].today_right_business}
                                </td>
                              </tr>
                              {/* <tr>
                                                                <td className="table_heading">Left Carry Forward :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[13].left_carry_forward}

                                                                </td>
                                                                <td className="table_heading">Right Carry Forward :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[13].right_carry_forward}

                                                                </td>
                                                            </tr> */}
                              <tr>
                                <td className="table_heading">
                                  Package Amount :
                                </td>
                                <td className="grtydfbc">
                                  $ {userdata[13].package_amount}
                                </td>
                                {/* <td className="table_heading">Country :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[13].country}

                                                                </td> */}
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="row_4_child">
                      <div className="dropdown">
                        <button className="dropbtn">
                          <img
                            src={
                              userdata[14].package_amount == 100
                                ? Active
                                : userdata[14].package_amount == 300
                                ? Active1
                                : userdata[14].package_amount == 500
                                ? Active2
                                : userdata[14].package_amount == 1000
                                ? Active3
                                : userdata[14].package_amount == 3000
                                ? Active4
                                : userdata[14].package_amount == 5000
                                ? Active5
                                : userdata[14].id == ""
                                ? Default
                                : user3red
                            }
                            onClick={() => (
                              setIdnumer(userdata[14].id),
                              addValue(userdata[14].id)
                            )}
                            className="abc"
                            onclick="Image_Click()"
                          />
                        </button>
                        <div className="span" style={{ color: "#fff" }}>
                          {/* {userdata[14].name}  <br /> */}

                          {userdata[14].id}
                        </div>
                        <div className="dropdown-content">
                          <table
                            className="tables dropdown_width"
                            cellpadding="0px"
                            cellspacing="0px"
                          >
                            <tbody>
                              <tr
                                className="fgtybmd"
                                style={{ display: "none" }}
                              >
                                <td className="table_heading">Sponser Name:</td>
                                <td colspan="3"></td>
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">Sponsor :</td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[14].Sponsor}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Registration&nbsp;Date :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[14].registration_date}
                                </td>
                                <td className="table_heading">
                                  Activation &nbsp;Date :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[14].Activation_date}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">Status :</td>
                                <td className="grtydfbc">
                                  {userdata[14].status}
                                </td>
                                <td className="table_heading">Package :</td>
                                <td className="grtydfbc">
                                  {userdata[14].date}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">Total Left :</td>
                                <td className="grtydfbc">
                                  {userdata[14].total_left}
                                </td>
                                <td className="table_heading">Total Right :</td>
                                <td className="grtydfbc">
                                  {userdata[14].total_right}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Total Left Active :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[14].total_left_active}
                                </td>
                                <td className="table_heading">
                                  Total Right Active :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[14].total_right_active}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Total Left Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[14].left_business}
                                </td>
                                <td className="table_heading">
                                  Total Right Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[14].right_business}
                                </td>
                              </tr>
                              <tr>
                                <td className="table_heading">
                                  Today Left Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[14].today_left_business}
                                </td>
                                <td className="table_heading">
                                  Today Right Business :
                                </td>
                                <td className="grtydfbc">
                                  {userdata[14].today_right_business}
                                </td>
                              </tr>
                              {/* <tr>
                                                                <td className="table_heading">Left Carry Forward :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[14].left_carry_forward}

                                                                </td>
                                                                <td className="table_heading">Right Carry Forward :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[14].right_carry_forward}

                                                                </td>
                                                            </tr> */}
                              <tr>
                                <td className="table_heading">
                                  Package Amount :
                                </td>
                                <td className="grtydfbc">
                                  $ {userdata[14].package_amount}
                                </td>
                                {/* <td className="table_heading">Country :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[14].country}

                                                                </td> */}
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!----Tree section end----> */}
        </div>
        {/* <!-- /Container --> */}
      </div>

      {/* // <!---footer----> */}
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
      {/* // <!---end----></div> */}
    </div>
  );
}

export default Genealogy_View;
