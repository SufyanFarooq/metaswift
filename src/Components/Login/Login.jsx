import React from "react";
import "./Login.css";
import { useEffect, useState } from "react";
import { API } from "../../Redux/API";
import { Link, useHistory, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const [userAddress, setuserAddress] = useState("");
  const [checkbox, setcheckbox] = useState(false);

  const handleChangeInput = (e) => {
    // let value=(e.target.value);
    // let value = e.target.value;
    //   console.log("value",value);
    const newValue = e.target.value.replace(/[^0-9]/gi, "");
    setInputValue(newValue);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    let res = await API.post(`/Userlogin_enc`, {
      uid: inputValue,
      password: password,
    });
    // console.log("account", account);
    console.log("relogin", res);
    if (res.data.data.result == "Successfull") {
      // sessionStorage.setItem('isAuthenticated', true)
      sessionStorage.setItem("user", JSON.stringify(res.data.data));
      
      toast.success("Login Successfully", {
        className: "copied-message",
      });
      Navigate("/dashboard");
      return true;
    } else {
      toast.error("User Id or Password Invalid ", {
        className: "copied-message",
      });
    }
  };

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  return (
    <div className="login_bg__">
      <div className="Login_page_seting">
        <div id="root">
          <div class="App">
            <div class="Toastify"></div>
            <div>
              <div id="reg-layout">
                <div class="Toastify">
                  <div class="container">
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
                                            class="banner-icon banner-icon-ios"
                                            src="/favicon.png"
                                            style={{
                                              display: "block",
                                              marginLeft: "auto",
                                              marginRight: "auto",
                                              width: "30%",
                                            }}
                                          />
                                        </a>
                                        <h2 style={{ textAlign: "center" }}>
                                          Sign in
                                        </h2>

                                        <form autocomplete="off" class="">
                                          <fieldset
                                            class="form-group"
                                            id="__BVID__16"
                                          >
                                            <div>
                                              <input
                                                type="text"
                                                placeholder="Enter User Id"
                                                required="required"
                                                onChange={handleChangeInput}
                                                value={inputValue}
                                                aria-required="true"
                                                class="form-control"
                                                title="Fill this field"
                                                id="__BVID__17"
                                                maxLength={6}
                                              />
                                            </div>
                                          </fieldset>
                                          <fieldset
                                            class="form-group"
                                            id="__BVID__16"
                                          >
                                            <div>
                                              <input
                                                type="password"
                                                placeholder="Enter Password "
                                                required="required"
                                                onChange={handleChangePassword}
                                                value={password}
                                                aria-required="true"
                                                class="form-control"
                                                title="Fill this field"
                                                id="__BVID__17"
                                                maxLength={20}
                                              />
                                            </div>
                                          </fieldset>

                                          <div className="form-inputs-checkbox">
                                            {/* <input
                                              className="checkbox checkbox-1"
                                              type="checkbox"
                                              name="phone"
                                              checked={checkbox}
                                              onChange={(e) => setcheckbox(e.target.checked)}
                                            /> */}
                                            <p className="checkbox-p">
                                              {/* Remember Me,{" "} */}
                                              <Link
                                                className="signup-link lable-ip"
                                                to="/Forget_Password"
                                              >
                                                Forgot Password?
                                              </Link>
                                            </p>
                                          </div>

                                          <div class="bt-padrao mt_4">
                                            <button
                                              type="button"
                                              onClick={() => handleLogin(true)}
                                              class="btn btn-outline-info"
                                           
                                            >
                                              Sign In
                                            </button>
                                          </div>
                                          <div class="row rowlogin" style={{"alignItems":"center"}}>
                                        <div class="col-md-6 sub-text">
                                          <div class="ms-3">
                                            <p 
                                            // class="text-light fw-500 ms-3 pt-2"
                                            className="lead text-light mb-3 pt-2"
                                            >
                                              Create Account
                                            </p>
                                          </div>
                                        </div>

                                        <div class="col-md-3">
                                          <a
                                            href="/Registration"
                                            type="button"
                                            class="btn btn-outline-info login_btn"
                                            style={{   
                                              //  "marginTop":"20px",
                                              "background": "#026d54 ",
                                              "color": "#fff"  , 
                                              // "textAlign":"left",
                                              // "marginRight":"3rem"
                                                
                                                                                }}
                                          >
                                            Sign Up
                                          </a>
                                        </div>
                                      </div>
                                          <div
                                            class="bt-padrao bt-borda mt-3"
                                            // style={{ display: "none" }}
                                          >
                                            <a href="/" class="" id="lg_ip">
                                              Home
                                            </a>
                                          </div>
                                        </form>
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
    </div>
  );
}

export default Login;
