import React, { useState, useEffect } from 'react'
import { API } from '../../Redux/API';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Welcom_page/Welcom_style.css"


function VarifyOTP() {
    // let reg_uid = sessionStorage.getItem("reg_uid");

    let uId = useParams()
    let uid = uId.uId
    const [otp, setOTP] = useState("");
    let history = useNavigate();


    const VerifyOTP = async () => {
        console.log("otp",uid ,otp);
        let Otp1=otp.toString();
        
        try {
            let res = API.post(`/verify_email_otp`, {
                "uid": uid,
                "otp": `${Otp1}`
            });

            res.then(data => {
                // console.log("verify", data);
                // // Now you can access the data properties like data.result
                if (data.data.data.result === "Verified") {
                  toast.success(data.data.data.result);
                  history(`/welComePage/${uid}`);
                } else {
                  toast.error(data.data.data.result);
                }
              });
         
        } catch (e) {
            console.log("Send OTP API", e);
        }
    };

    return (
        <div>

            <div className="login_bg__">
                <div className="Login_page_seting">
                    <div id="root">
                        <div className="App">
                            <div className="Toastify"></div>
                            <div>
                                <div id="reg-layout">
                                    <div className="Toastify">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-11">
                                                    <div className="row bx_hover">
                                                        <div className="col-md-4"></div>
                                                        <div className="col-md-5">
                                                            <div className="box-default">
                                                                <div className="page-login">
                                                                    <div className="box-conteudo">
                                                                        <div className="box-login">
                                                                            <div className="box-log-form">
                                                                                <div className="inner-block">

                                                                                    <h2 style={{ textAlign: "center" }}>
                                                                                      Verify Your OTP
                                                                                    </h2>


                                                                                    <form autocomplete="off" className="">
                                                                                        <fieldset
                                                                                            className="form-group"
                                                                                            id="__BVID__16"
                                                                                        >
                                                                                            <div>
                                                                                                <input
                                                                                                    type="text"
                                                                                                    placeholder="Enter User Id"
                                                                                                    required="required"
                                                                                                    // onChange={handleChangeInput}
                                                                                                    value={uId.uId}
                                                                                                    aria-required="true"
                                                                                                    className="form-control"
                                                                                                    title="Fill this field"
                                                                                                    id="__BVID__17"
                                                                                                    readOnly
                                                                                                />
                                                                                            </div>
                                                                                        </fieldset>
                                                                                        <fieldset
                                                                                            className="form-group"
                                                                                            id="__BVID__16"
                                                                                        >
                                                                                            <div>
                                                                                                <input
                                                                                                    type="text"
                                                                                                    placeholder="Enter OTP "
                                                                                                    required="required"
                                                                                                    value={otp}
                                                                                                    maxLength={8}
                                                                                                    onChange={(e) => {
                                                                                                        setOTP(e.target.value);
                                                                                                    }}
                                                                                                    aria-required="true"
                                                                                                    className="form-control"
                                                                                                    title="Fill this field"
                                                                                                    id="__BVID__17"
                                                                                                />
                                                                                            </div>
                                                                                        </fieldset>

                                                                                        <div className="bt-padrao mt_4">
                                                                                            <button
                                                                                                // disabled
                                                                                                type="button"
                                                                                                onClick={() => VerifyOTP()}
                                                                                                className="btn btn-outline-info"
                                                                                            >
                                                                                              Verify OTP
                                                                                            </button>
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

        </div>
    )
}

export default VarifyOTP