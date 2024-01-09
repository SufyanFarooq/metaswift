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
import { API } from "../../Redux/API.js";
import Web3 from "web3";
import Spinner from "../Spinner/Spinner.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gif from "../Spinner/loader.gif";

function termsconditions() {  
  // useEffect(() => {}, []);

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
                  <h1 className="text-white headingtrems">
                    {" "}
                    Affiliate Program Terms and Conditions
                  </h1>
                  <ul className="tremcondation">
                    <li>1. Eligibility:</li>
                    <li>
                      Individuals or entities participating in the MetaSwift
                      Affiliate Program must be at least 18 years old.
                      Affiliates must comply with all applicable laws and
                      regulations.
                    </li>
                    <li>2. Enrollment:</li>
                    <li>
                      To become an affiliate partner, applicants must complete
                      the online registration form accurately. MetaSwift
                      reserves the right to accept or reject affiliate
                      applications at its discretion.
                    </li>
                    <li>3. Approval and Account Setup:</li>
                    <li>
                      Once approved, affiliates will receive unique tracking
                      links and marketing materials for promotional purposes.
                      Affiliates are responsible for maintaining the
                      confidentiality of their account information.
                    </li>
                    <li>4. Commission Structure:</li>
                    <li>
                      Commissions are earned based on qualified referrals.
                      Commission rates, criteria for qualified referrals, and
                      payment schedules are outlined in the Affiliate Agreement.
                    </li>
                    <li>5. Marketing Guidelines:</li>
                    <li>
                      Affiliates agree to promote MetaSwift in a professional
                      and ethical manner. Prohibited marketing practices include
                      spamming, false advertising, and any form of
                      misrepresentation.
                    </li>
                    <li>6. Intellectual Property:</li>
                    <li>
                      Affiliates are granted a limited, non-exclusive, revocable
                      license to use provided marketing materials. Unauthorized
                      use of MetaSwift's intellectual property is strictly
                      prohibited.
                    </li>
                    <li>7. Payment and Reporting:</li>
                    <li>
                      Commissions are paid according to the payment schedule
                      outlined in the Affiliate Agreement.
                    </li>
                    <li>
                      Detailed reports on referrals, commissions, and other
                      relevant metrics are accessible through the affiliate
                      dashboard.
                    </li>
                    <li>8. Termination:</li>
                    <li>
                      Either party may terminate the affiliate partnership at
                      any time with or without cause. Termination does not
                      relieve affiliates of any obligations or liabilities
                      incurred prior to termination.
                    </li>
                    <li>9. Modification of Terms:</li>
                    <li>
                      MetaSwift reserves the right to modify the terms and
                      conditions of the affiliate program at any time.
                      Affiliates will be notified of any changes via email or
                      the affiliate dashboard.
                    </li>
                    <li>10. Code of Conduct:</li>
                    <li>
                      Affiliates must adhere to ethical business practices and
                      avoid engaging in any activities that may harm the
                      reputation of MetaSwift. Violation of the code of conduct
                      may result in the immediate termination of the affiliate
                      partnership.
                    </li>
                    <li>11. Indemnification:</li>
                    <li>
                      Affiliates agree to indemnify and hold MetaSwift harmless
                      from any claims, damages, or liabilities arising from
                      their marketing activities.
                    </li>
                    <li>12. Governing Law:</li>
                    <li>
                      These terms and conditions are governed by the laws of
                      Costa Rica, and any disputes will be resolved in
                      accordance with these laws.
                    </li>
                    <li>
                      By signing up for the MetaSwift Affiliate Program,
                      affiliates acknowledge that they have read, understood,
                      and agreed to these terms and conditions. This document
                      constitutes a legally binding agreement between MetaSwift
                      and its affiliate partners.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default termsconditions;