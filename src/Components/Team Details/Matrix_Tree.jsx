import React, { useEffect, useState } from "react";
import user3red from "./tree/default.png";
import tree_image_medium from "./tree/dow.png";

import Active from "./tree/green.png";
import { useNavigate } from "react-router-dom";
import tree_image_small from "./tree/download (2).png";
import { API } from "../../Redux/API";
import "./tree.css";
import Sidebar from "../Navbar/Sidebar";

let bol = true;

function Matrix_Tree() {
  const user = sessionStorage.getItem("user");
  let ress = JSON.parse(user);
  if (ress == undefined || ress == "" || ress == null) {
    window.location.href = "/login";
  }
  let uId = ress.uid_output;

  const [Idnumer, setIdnumer] = useState(uId);
  const [arrValue, setArrValue] = useState([]);
  const [getValue, setgetValue] = useState(1);
  const navigate = useNavigate();
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
      Downline: "",
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
      Downline: "",
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
      Downline: "",
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
      Downline: "",
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
      Downline: "",
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
      Downline: "",
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
      Downline: "",
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
      Downline: "",
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
      Downline: "",
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
      Downline: "",
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
      Downline: "",
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
      Downline: "",
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
      Downline: "",
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
      Downline: "",
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
      Downline: "",
    },
  ]);

  const referral_API = async () => {
    try {
      console.log("Search Res_API", getValue, Idnumer);
      if (!Idnumer) {
        return;
      }
      let responce = await API.post("/MatrixTreeUser", {
        uid: Idnumer,
        usersession: uId,
        package: getValue,
      });

      responce = responce.data.data[0];
      console.log("Search Res_API12", responce);
      if (responce === undefined) {
        let arr = [];
        setuserdata(arr);
      } else {
        let arr = [];
        responce.forEach(
          (item, index) => {
            // console.log("llll=>",item.package);
            arr.push({
              name: item.fname,
              id: item.uid,
              // registration_date: item.regidate,
              // status: item.Status,
              // total_left: item.totalleft,
              // total_left_active: item.totalleftActive,
              // left_business: item.lbv,
              package_amount: item.packageamount,
              Activation_date: item.activation_date,
              // package: item.package,
              // total_right: item.totalright,
              // total_right_active: item.totalrightActive,
              // right_business: item.rbv,
              Sponsor: item.sid,
              // date: item.package,
              // country: item.countryname,
              // today_left_business: item.TodayleftBusiness,
              // today_right_business: item.TodayRightBusiness,
              // left_carry_forward: item.carryleft,
              // right_carry_forward: item.carryright,
              Downline: item.downline,
            });
          }
          // console.log("Package",package);
        );
        console.log("responce 55", arr);
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

  const getIdArray = (arr) => {
    // console.log("arry",arr);
    setArrValue([...arrValue, arr]);
  };
  


  const prev_id = () => {
  
    if (arrValue.length == 1) {
      // console.log("arrValue",arrValue);
      arrValue.pop();
      arrValue.unshift(user);
      bol=true
    } else {
      let value=arrValue.splice(arrValue.length-2,1)
      console.log("value",value[0]);
      setIdnumer(value[0])

    }
  };

  useEffect(() => {
    referral_API();
    // let idinput = document.querySelector(".idinput");
    // idinput.value = Idnumer;
  }, [Idnumer, arrValue, getValue]);

  return (
    <div className="nft_theme">
      <Sidebar />
      <div className="main-content app-content">
        {/* <!-- container --> */}
        <div className="main-container container-fluid">
          {/* <!-- breadcrumb --> */}
          <div className="breadcrumb-header justify-content-between">
            <div className="left-content">
              <span className="main-content-title mg-b-0 mg-b-lg-1">
                Matrix Tree
              </span>
            </div>
            <div className="justify-content-center mt-2">
              <ol className="breadcrumb breadcrumb-style3">
                <li className="breadcrumb-item tx-15">
                  <a href="#">Team Details </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Matrix Tree
                </li>
              </ol>
            </div>
          </div>
          {/* <!-- /breadcrumb -->
            <!----Tree section start----> */}
          <div className="row">
            <div className="col-md-12">
              <div className="search-box">
                <form>
                  <div className=" d-flex  mod_form_wrapper">
                    <div className="col-md-12">
                      <button
                        type="button"
                        className={`btn-tree btn btn-sm topmargin ${
                          getValue == 1 ? "yellow-btn" : "green-btn"
                        }`}
                        onClick={() =>
                          // setIdnumer(uId), setgetValue(1), referral_API()
                          setgetValue(1)
                        }
                      >
                        $ 5
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        className={`btn-tree btn btn-sm topmargin ${
                          getValue == 2 ? "yellow-btn" : "green-btn"
                        }`}
                        onClick={() =>
                          // setIdnumer(uId), setgetValue(2), referral_API()
                          setgetValue(2)
                        }
                      >
                        $ 10
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        className={`btn-tree btn btn-sm topmargin ${
                          getValue == 3 ? "yellow-btn" : "green-btn"
                        }`}
                        onClick={() =>
                          // setIdnumer(uId), setgetValue(3), referral_API()
                          setgetValue(3)
                        }
                      >
                        $ 25
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        className={`btn-tree btn btn-sm topmargin ${
                          getValue == 4 ? "yellow-btn" : "green-btn"
                        }`}
                        onClick={() =>
                          // setIdnumer(uId), setgetValue(4), referral_API()
                          setgetValue(4)
                        }
                      >
                        $ 50
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        className={`btn-tree btn btn-sm topmargin ${
                          getValue == 5 ? "yellow-btn" : "green-btn"
                        }`}
                        onClick={() =>
                          // setIdnumer(uId), setgetValue(5), referral_API()
                          setgetValue(5)
                        }
                      >
                        $ 100
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        className={`btn-tree btn btn-sm topmargin ${
                          getValue == 6 ? "yellow-btn" : "green-btn"
                        }`}
                        onClick={() =>
                          // setIdnumer(uId), setgetValue(6), referral_API()
                          setgetValue(6)
                        }
                      >
                        $ 250
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        className={`btn-tree btn btn-sm topmargin ${
                          getValue == 7 ? "yellow-btn" : "green-btn"
                        }`}
                        onClick={() =>
                          // setIdnumer(uId), setgetValue(7), referral_API()
                          setgetValue(7)
                        }
                      >
                        $ 500
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        className={`btn-tree btn btn-sm topmargin ${
                          getValue == 8 ? "yellow-btn" : "green-btn"
                        }`}
                        onClick={() =>
                          // setIdnumer(uId), setgetValue(8), referral_API()
                          setgetValue(8)
                        }
                      >
                        $ 1000
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        className={`btn-tree btn btn-sm topmargin ${
                          getValue == 9 ? "yellow-btn" : "green-btn"
                        }`}
                        onClick={() =>
                          // setIdnumer(uId), setgetValue(9), referral_API()
                          setgetValue(9)
                        }
                      >
                        $ 2500
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        className={`btn-tree btn btn-sm topmargin ${
                          getValue == 10 ? "yellow-btn" : "green-btn"
                        }`}
                        onClick={() =>
                          // setIdnumer(uId), setgetValue(10), referral_API()
                          setgetValue(10)
                        }
                      >
                        $ 5000
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        className={`btn-tree btn btn-sm topmargin ${
                          getValue == 11 ? "yellow-btn" : "green-btn"
                        }`}
                        onClick={() =>
                          // setIdnumer(uId), setgetValue(11), referral_API()
                          setgetValue(11)
                        }
                      >
                        $ 10000
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        className={`btn-tree btn btn-sm topmargin ${
                          getValue == 12 ? "yellow-btn" : "green-btn"
                        }`}
                        onClick={() =>
                          // setIdnumer(uId), setgetValue(12), referral_API()
                          setgetValue(12)
                        }
                      >
                        $ 25000
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        className={`btn-tree btn btn-sm topmargin ${
                          getValue == 13 ? "yellow-btn" : "green-btn"
                        }`}
                        onClick={() =>
                          // setIdnumer(uId), setgetValue(13), referral_API()
                          setgetValue(13)
                        }
                      >
                        $ 50000
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* </di> */}
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div
                  id="tree"
                  className="treeview"
                  style={{ margin: "40px auto" }}
                >
                  <button className="btn btn-outline-info" onClick={prev_id}>
                    &#129192; Back
                  </button>

                  <div className="treemember hors_ip">
                    <div className="dropdown">
                      <button className="dropbtn">
                        <img
                          src={
                            userdata[0].package_amount > 0
                              ? Active
                              : userdata[0].id == ""
                              ? user3red
                              : user3red
                          }
                          onClick={() => (
                            // setIdnumer(userdata[0].id),  referral_API()
                            setIdnumer(userdata[0].id),
                            getIdArray(userdata[0].id)
                          )}
                          className="abc"
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
                            <tr className="fgtybmd">
                              <td className="table_heading">
                                Activation Date :
                              </td>
                              <td className="grtydfbc" colspan="3">
                                {userdata[0].Activation_date}
                              </td>
                            </tr>
                            <tr className="fgtybmd">
                              <td className="table_heading">Downline :</td>
                              <td className="grtydfbc" colspan="3">
                                {userdata[0].Downline}
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
                      style={{ width: "640px", height: "33px" }}
                    />
                  </div>

                  <div className="tree_row1">
                    <div className="row_22_child1">
                      <div className="dropdown">
                        <button className="dropbtn">
                          <img
                            src={
                              userdata[1].package_amount > 0
                                ? Active
                                : userdata[1].id == ""
                                ? user3red
                                : user3red
                            }
                            onClick={() => (
                              setIdnumer(userdata[1].id),
                              getIdArray(userdata[1].id)
                            )}
                            className="abc"
                          />
                        </button>
                        <div className="span" style={{ color: "#fff" }}>
                          {/* {userdata[1].name}  <br /> */}

                          {userdata[1].id}
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
                                  {userdata[1].Sponsor}
                                </td>
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">
                                  Activation Date :
                                </td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[1].Activation_date}
                                </td>{" "}
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">Downline :</td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[1].Downline}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="row_22_child1">
                      <div className="dropdown">
                        <button className="dropbtn">
                          <img
                            src={
                              userdata[2].package_amount > 0
                                ? Active
                                : userdata[2].id == ""
                                ? user3red
                                : user3red
                            }
                            onClick={() => (
                              setIdnumer(userdata[2].id),
                              getIdArray(userdata[2].id)
                            )}
                            className="abc"
                          />
                        </button>
                        <div className="span" style={{ color: "#fff" }}>
                          {/* {userdata[2].name}  <br /> */}

                          {userdata[2].id}
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
                                  {userdata[2].Sponsor}
                                </td>
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">
                                  Activation Date :
                                </td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[2].Activation_date}
                                </td>{" "}
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">Downline :</td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[2].Downline}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        {/* <div className="dropdown-content">
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
                        </div> */}
                      </div>
                    </div>

                    <div className="row_22_child1">
                      <div className="dropdown">
                        <button className="dropbtn">
                          <img
                            src={
                              userdata[3].package_amount > 0
                                ? Active
                                : userdata[3].id == ""
                                ? user3red
                                : user3red
                            }
                            onClick={() => (
                              setIdnumer(userdata[3].id),
                              getIdArray(userdata[3].id)
                            )}
                            className="abc"
                          />
                        </button>
                        <div className="span" style={{ color: "#fff" }}>
                          {/* {userdata[2].name}  <br /> */}

                          {userdata[3].id}
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
                                  {userdata[3].Sponsor}
                                </td>
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">
                                  Activation Date :
                                </td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[3].Activation_date}
                                </td>{" "}
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">Downline :</td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[3].Downline}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* <div className="dropdown-content">
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
                        </div> */}
                      </div>
                    </div>
                  </div>

                  <div className="tree_row1" style={{ height: "34px" }}>
                    <div className="row_22_child1" style={{ height: "34px" }}>
                      <img
                        src={tree_image_medium}
                        style={{ width: "253px", height: "32px" }}
                      />
                    </div>
                    <div className="row_22_child1" style={{ height: "34px" }}>
                      <img
                        src={tree_image_medium}
                        style={{ width: "253px", height: "32px" }}
                      />
                    </div>
                    <div className="row_22_child1" style={{ height: "34px" }}>
                      <img
                        src={tree_image_medium}
                        style={{ width: "253px", height: "32px" }}
                      />
                    </div>
                  </div>

                  <div className="tree_row2">
                    <div className="row_33_child">
                      <div className="dropdown">
                        <button className="dropbtn">
                          <img
                            src={
                              userdata[4].package_amount > 0
                                ? Active
                                : userdata[4].id == ""
                                ? user3red
                                : user3red
                            }
                            onClick={() => (
                              setIdnumer(userdata[4].id),
                              getIdArray(userdata[4].id)
                            )}
                            className="abc"
                          />
                        </button>
                        <div className="span" style={{ color: "#fff" }}>
                          {/* {userdata[4].name}  <br /> */}

                          {userdata[4].id}
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
                                  {userdata[4].Sponsor}
                                </td>
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">
                                  Activation Date :
                                </td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[4].Activation_date}
                                </td>{" "}
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">Downline :</td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[4].Downline}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* <div className="dropdown-content">
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
                        </div> */}
                      </div>
                    </div>
                    <div className="row_33_child">
                      <div className="dropdown">
                        <button className="dropbtn">
                          <img
                            src={
                              userdata[5].package_amount > 0
                                ? Active
                                : userdata[5].id == ""
                                ? user3red
                                : user3red
                            }
                            onClick={() => (
                              setIdnumer(userdata[5].id),
                              getIdArray(userdata[5].id)
                            )}
                            className="abc"
                          />
                        </button>

                        <div className="span" style={{ color: "#fff" }}>
                          {/* {userdata[5].name}  <br /> */}

                          {userdata[5].id}
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
                                  {userdata[5].Sponsor}
                                </td>
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">
                                  Activation Date :
                                </td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[5].Activation_date}
                                </td>{" "}
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">Downline :</td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[5].Downline}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* <div className="dropdown-content">
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
                        </div> */}
                      </div>
                    </div>
                    <div className="row_33_child">
                      <div className="dropdown">
                        <button className="dropbtn">
                          <img
                            src={
                              userdata[6].package_amount > 0
                                ? Active
                                : userdata[6].id == ""
                                ? user3red
                                : user3red
                            }
                            onClick={() => (
                              setIdnumer(userdata[6].id),
                              getIdArray(userdata[6].id)
                            )}
                            className="abc"
                          />
                        </button>
                        <div className="span" style={{ color: "#fff" }}>
                          {/* {userdata[6].name}  <br /> */}

                          {userdata[6].id}
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
                                  {userdata[6].Sponsor}
                                </td>
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">
                                  Activation Date :
                                </td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[6].Activation_date}
                                </td>{" "}
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">Downline :</td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[6].Downline}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* <div className="dropdown-content">
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
                        </div> */}
                      </div>
                    </div>
                    <div className="row_33_child">
                      <div className="dropdown">
                        <button className="dropbtn">
                          <img
                            src={
                              userdata[7].package_amount > 0
                                ? Active
                                : userdata[7].id == ""
                                ? user3red
                                : user3red
                            }
                            onClick={() => (
                              setIdnumer(userdata[7].id),
                              getIdArray(userdata[7].id)
                            )}
                            className="abc"
                          />
                        </button>
                        <div className="span" style={{ color: "#fff" }}>
                          {/* {userdata[3].name}  <br /> */}

                          {userdata[7].id}
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
                                  {userdata[7].Sponsor}
                                </td>
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">
                                  Activation Date :
                                </td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[7].Activation_date}
                                </td>{" "}
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">Downline :</td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[7].Downline}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* <div className="dropdown-content">
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
                        </div> */}
                      </div>
                    </div>
                    <div className="row_33_child">
                      <div className="dropdown">
                        <button className="dropbtn">
                          <img
                            src={
                              userdata[8].package_amount > 0
                                ? Active
                                : userdata[8].id == ""
                                ? user3red
                                : user3red
                            }
                            onClick={() => (
                              setIdnumer(userdata[8].id),
                              getIdArray(userdata[8].id)
                            )}
                            className="abc"
                          />
                        </button>
                        <div className="span" style={{ color: "#fff" }}>
                          {/* {userdata[4].name}  <br /> */}

                          {userdata[8].id}
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
                                  {userdata[8].Sponsor}
                                </td>
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">
                                  Activation Date :
                                </td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[8].Activation_date}
                                </td>{" "}
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">Downline :</td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[8].Downline}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* <div className="dropdown-content">
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
                        </div> */}
                      </div>
                    </div>
                    <div className="row_33_child">
                      <div className="dropdown">
                        <button className="dropbtn">
                          <img
                            src={
                              userdata[9].package_amount > 0
                                ? Active
                                : userdata[9].id == ""
                                ? user3red
                                : user3red
                            }
                            onClick={() => (
                              setIdnumer(userdata[9].id),
                              getIdArray(userdata[9].id)
                            )}
                            className="abc"
                          />
                        </button>
                        <div className="span" style={{ color: "#fff" }}>
                          {/* {userdata[3].name}  <br /> */}

                          {userdata[9].id}
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
                                  {userdata[9].Sponsor}
                                </td>
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">
                                  Activation Date :
                                </td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[9].Activation_date}
                                </td>{" "}
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">Downline :</td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[9].Downline}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* <div className="dropdown-content">
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
                        </div> */}
                      </div>
                    </div>
                    <div className="row_33_child">
                      <div className="dropdown">
                        <button className="dropbtn">
                          <img
                            src={
                              userdata[10].package_amount > 0
                                ? Active
                                : userdata[10].id == ""
                                ? user3red
                                : user3red
                            }
                            onClick={() => (
                              setIdnumer(userdata[10].id),
                              getIdArray(userdata[10].id)
                            )}
                            className="abc"
                          />
                        </button>
                        <div className="span" style={{ color: "#fff" }}>
                          {/* {userdata[4].name}  <br /> */}

                          {userdata[10].id}
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
                                  {userdata[10].Sponsor}
                                </td>
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">
                                  Activation Date :
                                </td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[10].Activation_date}
                                </td>{" "}
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">Downline :</td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[10].Downline}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* <div className="dropdown-content">
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
                        </div> */}
                      </div>
                    </div>
                    <div className="row_33_child">
                      <div className="dropdown">
                        <button className="dropbtn">
                          <img
                            src={
                              userdata[11].package_amount > 0
                                ? Active
                                : userdata[11].id == ""
                                ? user3red
                                : user3red
                            }
                            onClick={() => (
                              setIdnumer(userdata[11].id),
                              getIdArray(userdata[11].id)
                            )}
                            className="abc"
                          />
                        </button>

                        <div className="span" style={{ color: "#fff" }}>
                          {/* {userdata[5].name}  <br /> */}

                          {userdata[11].id}
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
                                  {userdata[11].Sponsor}
                                </td>
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">
                                  Activation Date :
                                </td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[11].Activation_date}
                                </td>{" "}
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">Downline :</td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[11].Downline}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* <div className="dropdown-content">
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
                        </div> */}
                      </div>
                    </div>
                    <div className="row_33_child">
                      <div className="dropdown">
                        <button className="dropbtn">
                          <img
                            src={
                              userdata[12].package_amount > 0
                                ? Active
                                : userdata[12].id == ""
                                ? user3red
                                : user3red
                            }
                            onClick={() => (
                              setIdnumer(userdata[12].id),
                              getIdArray(userdata[12].id)
                            )}
                            className="abc"
                          />
                        </button>
                        <div className="span" style={{ color: "#fff" }}>
                          {/* {userdata[6].name}  <br /> */}

                          {userdata[12].id}
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
                                  {userdata[12].Sponsor}
                                </td>
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">
                                  Activation Date :
                                </td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[12].Activation_date}
                                </td>{" "}
                              </tr>
                              <tr className="fgtybmd">
                                <td className="table_heading">Downline :</td>
                                <td className="grtydfbc" colspan="3">
                                  {userdata[12].Downline}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* <div className="dropdown-content">
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
                        </div> */}
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
      <div className="main-footer">
        <div className="col-md-12 col-sm-12 text-center">
          <div className="container-fluid pd-t-0 ht-100p">
            {" "}
            Copyright © 2023{" "}
            <a href="#" className="tx-primary">
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

export default Matrix_Tree;
