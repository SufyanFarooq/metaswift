import React from "react";
import "../Login/Login.css";
import { useState } from "react";
import { API } from "../../Redux/API";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ForgetPassword() {
  const [inputValue, setInputValue] = useState("");
  const Navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleLogin = async () => {
    let res = await API.post(`/forgetpassword`, {
      uid: inputValue,
    });
    console.log("relogin", res);
    if (res.data.data == "Correct User ID !!") {
      toast.success("Password Send Successfully !!");
      Navigate("/Login");
      return true;
    } else {
      toast.error("User Id Invalid", {
        className: "copied-message",
      });
    }
  };

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
                                            src="favicon.png"
                                            style={{
                                              display: "block",
                                              marginLeft: "auto",
                                              marginRight: "auto",
                                              width: "30%",
                                            }}
                                          />
                                        </a>
                                        <h2 style={{ textAlign: "center" }}>
                                          Forget Password
                                        </h2>

                                        <form autocomplete="off" class="">
                                          <fieldset
                                            class="form-group"
                                            id="__BVID__16"
                                          >
                                            <div>
                                              <input
                                                maxLength={8}
                                                type="text"
                                                placeholder="Enter User Id"
                                                required="required"
                                                onChange={handleChangeInput}
                                                value={inputValue}
                                                aria-required="true"
                                                class="form-control"
                                                title="Fill this field"
                                                id="__BVID__17"
                                              />
                                            </div>
                                          </fieldset>
                                          <fieldset
                                            class="form-group"
                                            id="__BVID__16"
                                          >
                                            {/* <div>
                                              <input
                                                type="text"
                                                placeholder="Enter Password "
                                                required="required"
                                                onChange={handleChangePassword}
                                                value={password}
                                                aria-required="true"
                                                class="form-control"
                                                title="Fill this field"
                                                id="__BVID__17"
                                              />
                                            </div> */}
                                          </fieldset>

                                          <div class="bt-padrao mt_4">
                                            <button
                                              // disabled
                                              type="button"
                                              onClick={() => handleLogin(true)}
                                              class="btn btn-outline-info"
                                            >
                                              Recover Password
                                            </button>
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

export default ForgetPassword;
