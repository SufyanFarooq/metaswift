import React, { useEffect, useState } from "react";
import "./Welcom_style.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { Dna } from "react-loader-spinner";
import { API } from "../../Redux/API";
import gif from "../Spinner/loader.gif";

let again = true;
export default function WellComePage() {
  let history = useNavigate();

  let { uId } = useParams();
  // console.log("uId", uId);
  const [getEmail, setgetEmail] = useState();
  const [spinner, setspinner] = useState(true);

  const [getAllData, setgetAllData] = useState("");
  const [btndisable, setbtndisable] = useState(true);

  const LoninApi = async () => {
    setspinner(true)
    try {
    //   setspinner(true);

      let res = await API.post(`/WelcomeReport`, {
        uid: uId,
      });
      res = res.data.data[0][0];
      console.log("res", res);
      if (res != undefined) {
        setgetAllData(res);
        setspinner(false);
        //  history(`/Dashboard`)
      } else {
        LoninApi();
      }
      // sessionStorage.setItem("user", JSON.stringify(res));
      if (res == undefined) {
      } else {
        setbtndisable(false);
      }
    } catch (e) {
      console.log("WelcomPage Api", e);
    }
  };
  useEffect(() => {
    if (again != false) {
      LoninApi();
    }
  }, []);

  // console.log('Dta...', getAllData)

  return (
    <div>
              {spinner && <img src={gif} className="LoaderSpinner" />}
      <table
        width="100%"
        border="0"
        cellpadding="0"s
        className="welcomheight"
        cellspacing="0"
        style={{ color: "#fff" }}
      >
        <tbody>
          {/* {spinner ? (
            <>
              <div className="d-flex">
                <Dna
                  visible={true}
                  height="50%"
                  width="50%"
                  ariaLabel="dna-loading"
                  wrapperStyle={{}}
                  wrapperClass="dna-wrapper"
                />
              </div>
            </>
          ) : (
            <> */}
              <tr className="tr_table">
                <td style={{ textAlign: "center" }} className="table_centereee maintable">
                  <table width="100%" border="0" className="tabledatata maintable2">
                    <tr>
                      <td>
                        <img
                          class="banner-icon banner-icon-ios heading"
                          src="/favicon.png"
                          style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "20%",
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3
                          style={{
                            textTransform: "capitalize",
                            fontSize: "29px",
                            marginBottom: "10px",
                            whiteSpace:'initial'

                          }}
                        >
                          Hello {getAllData.f_name || ""} and welcome to
                          metaswift.ai
                        </h3>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p
                          style={{
                            fontSize: "16px",
                            lineHeight: "23px",
                            padding: "0px 25px",
                            whiteSpace:'initial'

                          }}
                        >
                          Thank you for joining the community. We are pleased
                          you are ready to take advantage of <br /> the platform
                          and the financial gains available.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <table
                          width="375px"
                          style={{ margin: "auto", textAlign: "center" }}
                        >
                          <tr>
                            <td>
                              <h1 style={{ margin: "5px 0", fontSize: "17px" }}>
                                Your User ID: {getAllData.user_id || ""}
                              </h1>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h1 style={{ margin: "5px 0", fontSize: "17px" }}>
                                Your Email ID:{" "}
                                <a href="#" style={{ color: "#8accf3" }}>
                                  {getAllData.email || ""}
                                </a>
                              </h1>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h1 style={{ margin: "5px 0", fontSize: "17px" }}>
                                Your current password:{" "}
                                {getAllData.password || ""}
                              </h1>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p
                          style={{
                            paddingLeft: "19px",
                            lineHeight: "23px",
                            textAlign: "center",
                            padding: "0px 25px",
                            whiteSpace:'initial'

                          }}
                        >
                          A copy of your user ID and password has been sent to
                          your registered email.
                          <br />
                          Please keep this email safely secured as you may need
                          to refer to it at a later date.
                          <br />
                          Should you have any queries or questions please send
                          an email to{" "}
                          <a href="#" style={{ color: "#8accf3" }}>
                            support@metaswift.ai
                          </a>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style={{whiteSpace:'initial'}}>To proceed with login press the button below</p>
                      </td>
                    </tr>
                    <tr>
                      {/* <td>
                        <Link to="/Login">
                          <a
                            target="_blank"
                            style={{
                              padding: "5px 12px",
                              fontSize: "18px",
                              borderRadius: "5px",
                              fontWeight: "bold",
                              backgroundColor: "#fff",
                              textDecoration: "none",
                            }}
                            disabled={spinner?true:false}
                          >
                            Login
                          </a>
                        </Link>
                      </td> */}
                      <td>
                      {spinner ? (
        <button
          style={{
            padding: '5px 12px',
            fontSize: '18px',
            borderRadius: '5px',
            fontWeight: 'bold',
            backgroundColor: '#fff',
            textDecoration: 'none',
          }}
          disabled
        >
          Login
        </button>
      ) : (
        <Link to="/Login">
          <button
            style={{
              padding: '5px 12px',
              fontSize: '18px',
              borderRadius: '5px',
              fontWeight: 'bold',
              backgroundColor: '#fff',
              textDecoration: 'none',
            }}
          >
            Login
          </button>
        </Link>
      )}
      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            {/* </>
          )} */}
        </tbody>
      </table>
    </div>
  );
}
