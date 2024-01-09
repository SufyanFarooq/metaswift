import React, { useMemo } from "react";
import "./Registration.css";
import Select from "react-select";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as yup from "yup";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { yupResolver } from "@hookform/resolvers/yup";
// import Spinner from '../Components/Spinner/Spinner'
import { loadWeb4 } from "../../api2.js";
import { API } from "../../Redux/API";
import Web3 from "web3";
import Spinner from "../Spinner/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gif from "../Spinner/loader.gif";

function Registration() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [id, setId] = useState(searchParams.get("referrallink"));
  const [loader, setloader] = useState(false);
  const navigate = useNavigate();
  let history = useNavigate();
  const [checkbox, setcheckbox] = useState(false);
  const [userId, setuserId] = useState(null);
  const [email, setEmail] = useState("");
  const [mobile, setmobile] = useState("");
  const [isemailValid, setIsemailValid] = useState(true);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [RefID, setRefID] = useState(searchParams.get("referrallink"));
  const [status, setStatus] = useState(false);
  const [fname, setfname] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");

  const [spinnerload, setspinnerload] = useState(false);

  let uid = "";

  const getresponseId = async (e) => {
    let value = e.target.value;
    //   console.log("value",value);
    const newValue = value.replace(/[^0-9]/gi, "");
    setRefID(newValue);
    let res = await API.get(`/checkSponser?id=${newValue}`);
    console.log("check", res);
    if (res.data.data.length) {
      let { f_name } = res.data.data[0];
      setuserId(f_name);
    } else {
      setuserId("Wrong Sponsor Id");
    }
  };

  const getsponsorDetails = async () => {
    let res = await API.get(`/checkSponser?id=${RefID}`);
    if (res.data.data.length) {
      let { f_name } = res.data.data[0];
      setuserId(f_name);
    } else {
      setuserId("Wrong Sponsor Id");
    }
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);

    // Use a regular expression to validate the email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsemailValid(emailPattern.test(emailValue));
  };

  const handleChangeMobileno = async (e) => {
    let value = e.target.value;
    const newValue = value.replace(/[^0-9]/gi, "");
    setmobile(newValue);
  };

  const checkUserName = async (e) => {
    let { value } = e.target;

    const newValue = value.replace(/[^A-Za-z]/g, "");

    if (newValue == "") {
      setfname("");
    } else {
      setfname(newValue);
    }
  };
  const handleChange = async (e) => {
    let value = e.target.value;
    setPassword(value);
  };
  // console.log("password",password);
  const handleChangeCon = async (e) => {
    let value = e.target.value;

    setConPassword(value);
  };

  let countryName = selectedCountry.label;
  let countryvalue = selectedCountry.value;

  useEffect(() => {
    sessionStorage.clear();
    if (RefID != null && RefID != undefined && RefID != "") {
      getsponsorDetails();
    }

    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("data",data)
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
        // setcountryValue()
      });
  }, []);

  const onSubmitHandler = async () => {
    // setspinnerload(true);
    console.log("password", password);

    try {
      if (fname == "") {
        toast.error("Please enter Name !!");
        // setspinnerload(false);
      } else if (email == "") {
        toast.error("Please enter Email");
        // setspinnerload(false);
      } else if (isemailValid === false) {
        toast.error("Please enter Valid Email");
        // setspinnerload(false);
      } else if (password == "" || password.length < 6) {
        toast.error("Pssword length min 6 Required !!");
        // setspinnerload(false);
      } else if (password != conPassword) {
        toast.error("Confirm Password MissMatched !!");
        // setspinnerload(false);
      } else if (checkbox == false) {
        toast.error("Please select Terms & condition !!");
        // setspinnerload(false);
      } else if (mobile == "") {
        toast.error("Enter Mobile No. !!");
        // setspinnerload(false);
      } else if (mobile.length < 6) {
        toast.error("Enter Minimum 6 digit Mobile No. !!");
        // setspinnerload(false);
      } else if (mobile.length > 15) {
        toast.error("Enter Maximum 15 digit Mobile No. !!");
        // setspinnerload(false);
      } else {
        // console.log("password",password);

        // let res = await API.post("/registration", {
        //   sid: RefID,
        //   f_name: fname,
        //   email: email,
        //   psw: password,
        //   mob: mobile,
        //   position: 1,
        //   countryname: countryName,
        //   countryvalue: countryvalue,
        // });
        let res = await API.post("/Directregistration", {
          sid: RefID,
          f_name: fname,          
          email: email,
          psw: password,
          mob: mobile,          
          countryname: countryName,
          countryvalue: countryvalue,
        });
        console.log("res-->>>", res.data.data.result);
        if (res.data.data.result == "Successfull") {
          toast.success(`Successfull`);
          uid = res.data.data.uid_output;
          // history(`/VarifyOTP/${uid}`);
          toast.success(res.data.data.result);
                  history(`/welComePage/${uid}`);
        } else {
          toast.error(`${res.data.data.result}`);
          setspinnerload(false);
          // setSendOTP(false);
        }
      }
      // setspinnerload(false)
    } catch (error) {
      console.log("API ERROR", error);
    }
  };

  return (
    <div className="login_bg__">
      <div className="registration_setting">
        <div id="root">
          <div class="App">
            <div class="Toastify"></div>
            <div>
              <div id="reg-layout">
                <div class="Toastify"></div>
                <div class="container">
                  {loader && <img src={gif} className="LoaderSpinner" />}
                  <div class="row">
                    <div class="col-md-11">
                      <div class="row bx_hover">
                        <div class="col-md-4"></div>
                        <div class="col-md-5">
                          <div class="box-default">
                            <div class="page-login">
                              <div class="box-conteudo">
                                <div class="box-login">
                                  <div class="box-log-form">
                                    <div class="inner-block">
                                      <a href="/">
                                        <img
                                          class="banner-icon banner-icon-ios heading"
                                          src="favicon.png"
                                          style={{
                                            display: "block",
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                            width: "30%",
                                          }}
                                        />
                                      </a>
                                      <h2
                                        style={{
                                          textAlign: "center",
                                        }}
                                      >
                                        Register
                                      </h2>
                                      <form>
                                        <div class="row">
                                          <div class="col-md-6">
                                            <div
                                              className="fld_set"
                                              id="__BVID__16"
                                            >
                                              <div>
                                                <input
                                                  type="text"
                                                  placeholder="Sponsor Id"
                                                  required="required"
                                                  aria-required="true"
                                                  class="form-control"
                                                  title="Fill this field"
                                                  id="__BVID__17"
                                                  // {...register('sid', { required: true })}
                                                  value={RefID}
                                                  maxLength={6}
                                                  onChange={(e) => {
                                                    getresponseId(e);
                                                  }}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div class="col-md-6">
                                            <div
                                              className="fld_set"
                                              id="__BVID__16"
                                            >
                                              <div>
                                                <input
                                                  type="text"
                                                  placeholder="Sponsor Name"
                                                  // maxLength={6}
                                                  value={userId}
                                                  //  disabled={true}
                                                  class="form-control"
                                                  title="Fill this field"
                                                  id="__BVID__17"
                                                  // onChange={(e) => {
                                                  //    setId(e.target.value);
                                                  // }}
                                                />
                                              </div>
                                            </div>
                                          </div>

                                          <div class="col-md-6">
                                            <div
                                              className="fld_set"
                                              id="__BVID__16"
                                            >
                                              <div>
                                                <input
                                                  type="text"
                                                  placeholder="Name"
                                                  required="required"
                                                  aria-required="true"
                                                  maxLength={25}
                                                  class="form-control"
                                                  title="Fill this field"
                                                  id="__BVID__17"
                                                  value={fname}
                                                  onChange={(e) => {
                                                    checkUserName(e);
                                                  }}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div class="col-md-6">
                                            <div
                                              className="fld_set"
                                              id="__BVID__16"
                                            >
                                              <div>
                                                <input
                                                  type="email"
                                                  placeholder="Email"
                                                  value={email}
                                                  onChange={handleEmailChange}
                                                  required="required"
                                                  maxLength={50}
                                                  aria-required="true"
                                                  class="form-control"
                                                  title="Fill this field"
                                                  id="__BVID__17"
                                                />
                                                {!isemailValid && (
                                                  <p style={{ color: "red" }}>
                                                    Invalid email address
                                                  </p>
                                                )}
                                              </div>
                                            </div>
                                          </div>
                                          {/* <div class="col-md-6">
                                            <select
                                              // id="position"
                                              onChange={(e) => handleSelect(e.target.value)}
                                              value={select}
                                              class="form-control"
                                              // title="Fill this field"
                                              // id="__BVID__17"
                                             
                                            >
                                              <option value="">Select Position</option>
                                              <option value="1">Left</option>
                                              <option value="2">Right</option>


                                            </select>
                                          
                                          </div> */}
                                          <div class="col-md-6">
                                            <div
                                              className="fld_set"
                                              id="__BVID__16"
                                            >
                                              <div>
                                                <input
                                                  type="password"
                                                  placeholder="Password"
                                                  required="required"
                                                  aria-required="true"
                                                  maxLength={20}
                                                  class="form-control"
                                                  title="Fill this field"
                                                  id="__BVID__17"
                                                  value={password}
                                                  onChange={(e) =>
                                                    handleChange(e)
                                                  }
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div class="col-md-6">
                                            <div
                                              className="fld_set"
                                              id="__BVID__16"
                                            >
                                              <div>
                                                <input
                                                  type="password"
                                                  value={conPassword}
                                                  onChange={(e) =>
                                                    handleChangeCon(e)
                                                  }
                                                  maxLength={20}
                                                  placeholder="Confirm Password"
                                                  required="required"
                                                  aria-required="true"
                                                  class="form-control"
                                                  title="Fill this field"
                                                  id="__BVID__17"
                                                />
                                              </div>
                                            </div>
                                          </div>

                                          <div class="col-md-6">
                                            <div
                                              className="fld_set"
                                              id="__BVID__16"
                                            >
                                              <div>
                                                <Select
                                                  styles={{ width: "100%" }}
                                                  id="countries"
                                                  options={countries}
                                                  value={selectedCountry}
                                                  onChange={(selectedOption) =>
                                                    setSelectedCountry(
                                                      selectedOption
                                                    )
                                                  }
                                                />
                                              </div>
                                            </div>
                                          </div>

                                          <div class="col-md-6">
                                            <div
                                              className="fld_set"
                                              id="__BVID__16"
                                            >
                                              <div>
                                                <input
                                                  type="text"
                                                  placeholder="Mobile No."
                                                  required="required"
                                                  aria-required="true"
                                                  class="form-control"
                                                  title="Fill this field"
                                                  id="__BVID__17"
                                                  value={mobile}
                                                  minLength={6}
                                                  maxLength={15}
                                                  onChange={(e) => {
                                                    handleChangeMobileno(e);
                                                  }}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="row">
                                          <div className="col-md-12">
                                            <div
                                              className="form-inputs-checkbox"
                                              style={{
                                                display: "flex",
                                                alignItems: "center",
                                              }}
                                            >
                                              <input
                                                className="checkbox"
                                                type="checkbox"
                                                checked={checkbox}
                                                onChange={(e) =>
                                                  setcheckbox(e.target.checked)
                                                }
                                                // name="phone"
                                                required
                                              />
                                              <p
                                                className="checkbox-p"
                                                style={{ marginLeft: "10px" }}
                                              >
                                                I agree all{" "}
                                                <a
                                                  target="_blank"
                                                  className="login-link"
                                                  href="/termsconditions"
                                                >
                                                   Terms & Conditions
                                                </a>
                                              </p>
                                            </div>
                                            <br />
                                          </div>
                                        </div>
                                      </form>

                                      <div class="col-md-12">
                                        <div class="bt-padrao">
                                          <button
                                            //  className="nav-btn nav-btn-1 active-btn-header signin-btnn"
                                            class="btn btn-outline-info btn1"
                                            // type="submit"
                                            value="Sign Up"
                                            // disabled={!checkbox || spinnerload}
                                            onClick={() => onSubmitHandler()}
                                          >
                                            {/* {spinnerload ? (
                                                  <>
                                                    <div
                                                      className="spinner-border"
                                                      role="status"
                                                    >
                                                      <span className="visually-hidden">
                                                        Loading...
                                                      </span>
                                                    </div>
                                                  </>
                                                ) : ( */}
                                            Sign Up
                                            {/* )} */}
                                          </button>
                                        </div>
                                        <br />
                                      </div>
                                      <div class="row rowlogin">
                                        <div class="col-md-8 sub-text">
                                          <div class="">
                                            <p class="sub-txt mb-3 pt-2">
                                              Do you already have an account?
                                            </p>
                                          </div>
                                        </div>

                                        <div class="col-md-4">
                                          <a
                                            href="/Login"
                                            type="button"
                                            class="btn btn-outline-info login_btn"
                                          >
                                            Login
                                          </a>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="col-md-12">
                                          <div class="bt-padrao">
                                            <a
                                              href="/"
                                              type="button"
                                              class="btn btn-outline-info login_btn"
                                            >
                                              Home
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      {/* </form> */}

                                      {/* <button onClick={Registraton()}>SignUp</button> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
