import React, { useState } from "react";
import Sidebar from "../Navbar/Sidebar";
import { useEffect } from "react";
import { API } from "../../Redux/API";
import "react-toastify/dist/ReactToastify.css";
import gif from "../Spinner/loader.gif";
import Accord from "./Accord";
import "../Deposite/DepositeCoin.css";
import { toast } from "react-toastify";

const DepositeCoin = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchvalue, setsearchvalue] = useState("");
  const [isBarCode, setisBarCode] = useState(true);

  const user = sessionStorage.getItem("user");
  let ress = JSON.parse(user);
  if (ress == undefined || ress == "" || ress == null) {
    window.location.href = "/login";
  }
  let userId = ress.uid_output;

  const [amount, setAmount] = useState("");
  const [barcode, setBarcode] = useState(
    "https://rahul-matrix-api.nakshtech.info/GetGenerateQRCode?uid=" + userId
  );

  const [address, setAddress] = useState("");
  const Dashboard_API = async () => {
    try {
      let res = await API.get(`DashboardDetails?uid=${userId}`);
      res = res.data.data[0];
      setAddress(res.DepositeBNBAddress);
    } catch (e) {
      console.log("Something Error in Dashboard API", e);
    }
  };

  const copyAddress = () => {
    // console.log("all text copied");
    navigator.clipboard.writeText(address);
    toast.success("Copied");
  };

  useEffect(() => {
    Dashboard_API();
  }, []);

  return (
    <div className="nft_theme">
      <Sidebar />
      <div className="">
        <div className="deposite_coin_inner mt4rem">
          <div className="left_side">
            <div className="deposit_history mb_2">
              <h1>Deposit Crypto</h1>
              <p style={{color: "rgb(255, 236, 28)",fontSize:'20px'}}>Note * Minimum deposite value is 10 USD.</p>
              <a className="btn btn-success" href="/DepositeCoinHistory">
                Deposit History
              </a>
            </div>
            <div className="mb_2 text-center">
              <span>
                <h1 className="col">Deposit Address(USDT BEP20)</h1>
              </span>
              <div className="mb-3">
              <input type="text" value={address} placeholder="" readOnly />
              <span class="input-group-btn">
                <button
                  class="btn btn-success"
                  type="button"
                  onClick={copyAddress}
                >
                  {" "}
                  <img
                    src="data:image/jpeg;base64,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"
                    width="23px"
                    alt="img2"
                  />
                  &nbsp;Copy
                </button>
              </span>
              </div>
            {/* </div> */}
            {isBarCode == true ? (
              <>
                {/* <div className="barcode_set_new"> */}
                  <img src={barcode} alt="barcode" />
                {/* </div> */}
              </>
            ) : (
              <></>
            )}
          </div>
          </div>
          {/* <div className="right_side mt0set">
            <h2>FAQ</h2>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyHDtZVA8kgRE8pbkiBQG3J7twneZPH8sxDQPA8JgtcozHIm_swx2pyWSxO7j0PU29P3o&usqp=CAU"
              alt="img2"
              className="img2"
            />

            <div>
              <Accord
                tl="How to Deposit Crypto Step-by-step Guide"
                cn={
                  <>
                    1. How to Deposit Crypto Step-by-step Guide BNB refers to
                    the BNB Beacon Chain (BEP2); <br />
                    <br />
                    2. BSC refers to the BNB Smart Chain (BEP20); <br />
                    <br />
                    3. ETH refers to the Ethereum network (ERC20);
                    <br />
                    <br />
                    4. TRX refers to the TRON network (TRC20);
                    <br />
                    <br />
                    5. BTC refers to the Bitcoin network;
                  </>
                }
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DepositeCoin;
