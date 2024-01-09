import React, { useEffect, useState } from "react";

import click from "./click.png";
import axios from "axios";
import { toast } from "react-toastify";
import {
  ContractAddressBNB_Main,
  ContractAddressBNB_USDT,
  Abi_BNB_Main,
  Abi_BNB_USDT,
  Abi_Main,
} from "../../Utils/ContractBattle";
import { SyncLoader } from "react-spinners";
import { useNavigate } from "react-router-dom/dist";
import "../Deposite/DepositeCoin.css";

import { loadWeb3 } from "../../apis/apiBnb";
import Web3 from "web3";
import { API } from "../../Redux/API";
import Sidebar from "../Navbar/Sidebar";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let sum = 0;

function DepositBNB() {
  const user = sessionStorage.getItem("user");
  let ress = JSON.parse(user);
  if (ress == undefined || ress == "" || ress == null) {
    window.location.href = "/login";
  }
  let uId = ress.uid_output;

  let [liveRate, setliveRate] = useState(0);
  let [amount, setamount] = useState(0);
  let [meticmultiplyablevalue, setmeticmultiplyablevalue] = useState(0);
  let [connected, setconnected] = useState("Wallet is locked");
  let [valueBNB, setvalueBNB] = useState(0);
  let [valueCoin, setvalueCoin] = useState(0);
  let [balanceUle, setbalanceUle] = useState(0);
  let [TrxBalance, setTrxBalance] = useState(0);
  let [spiner, setspiner] = useState(false);
  let [Live_Price, setLive_Price] = useState(0);
  const [package_plan, setpackage_plan] = useState("USDT");
  const [Wallet_Address, setWallet_Address] = useState("");

  const [loading, setloading] = useState(false);
  let navigation = useNavigate();

  const getBetaWallet = async () => {
    try {
      let res = await API.get(`/DashboardDetails?uid=${uId}`);
      console.log("res", res);
      res = res.data.data[0];
      setWallet_Address(res.btcaddress);

      // setLoading(false);
    } catch (e) {
      console.log("error", e);
      // setLoading(false);
    }
  };

  const walletConnected = async () => {
    try {
      let acc = await loadWeb3();

      if (acc == "No Wallet") {
        // toast.error("No Wallet");
        setconnected("Wallet is locked");
      } else if (acc == "Wrong Network") {
        toast.error(" Wrong Network Please Connect BSC Network");
        setconnected("Wrong Network");
      } else {
        // setaddress(acc)
        setconnected("Wallet is Connected");
      }
    } catch (e) {
      console.log("Error While WalletConnect", e);
    }
  };

  const USDTBalance = async () => {
    try {
      let acc = await loadWeb3();
      console.log("acc->", acc);

      let contract = await new window.web3.eth.Contract(
        Abi_BNB_USDT,
        ContractAddressBNB_USDT
      );
      let result = await contract.methods.balanceOf(acc.toString()).call();
      console.log("result-->", result);
      result = window.web3.utils.fromWei(result);
      console.log("result-->", result);
      setbalanceUle(result);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  const CalculateValue = async (val) => {
    const Selvalues = val;
    const tvalue = parseFloat(Selvalues) + parseFloat(amount);

    setamount(tvalue);
  };

  const buyToken = async () => {
    let acc = await loadWeb3();
    if (acc == "No Wallet") {
      toast.error("No Wallet");
    } 
    else if (acc == "Wrong Network") {
      //toast.error("Wrong Network Please Connect BSC Scan Network");
      console.log("Wrong Network Please Connect Polygon Scan Network");
    } 
    else {
      if (Wallet_Address.toUpperCase() == acc.toUpperCase())
      {
        if (amount != 0) {
          if (balanceUle < amount) {
            toast.error("Insufficient USDT Balance");
          } else {
            setspiner(true);

            let amountValue = window.web3.utils.toWei(amount.toString());
            const gasPrice = await window.web3.eth.getGasPrice();
            const approveBlock = window.web3.eth.getBlock("latest");

            try {
              let contract_Main = await new window.web3.eth.Contract(
                Abi_BNB_Main,
                ContractAddressBNB_Main
              );
              let contract_USDT = await new window.web3.eth.Contract(
                Abi_BNB_USDT,
                ContractAddressBNB_USDT
              );

              let approveCall = await contract_USDT.methods
                .approve(ContractAddressBNB_Main, amountValue)
                .send({
                  from: acc,
                  gasLimit: approveBlock.gasLimit,
                  gasPrice: await window.web3.eth.getGasPrice(),
                });
              toast.success("Approved Succesful");
              let sellCall = await contract_Main.methods
                .deposit(amountValue)
                .send({
                  from: acc,
                  gasLimit: approveBlock.gasLimit,
                  gasPrice: await window.web3.eth.getGasPrice(),
                });

              let res = await API.post("Deposite_FundByContract", {
                uid: uId,
                addreslist: acc,
                usd: amount,
                txn: sellCall.transactionHash,
                CoinType: "BNB",
              });
              console.log("buycoin", res.data);
              toast.success("Transaction Succesful");
              if (res.data.success == true) {
                toast.success("Deposit Successful");
                window.location.href = "/Dashboard";
                setspiner(false);
              }

              setspiner(false);
            } catch (err) {
              console.log("error while calling fuction sell", err);
              setspiner(false);
            }
          }
        } else {
          toast.error("Please Enter Amout First");
        }
      }
      else {
        toast.error("Invalid Wallet address");
      }
    }

    // setloader(false)
  };

  useEffect(() => {
    // getLiveRate();
    walletConnected();
    USDTBalance();
    getBetaWallet();
  }, []);

  return (
    <div className="nft_theme">
      <Sidebar />
      {/* <!-----=======body section start=======----> */}
      <div className="live_match">
        <div className="container">
          <div className="row">
            {/* <FirstSlid /> */}
            <div className="col-md-12 ">
              <div className="buy_main">
                <div className="container">
                  <div className="row justify-content-center align-content-center">
                    <div className="col-md-6">
                      <div className="card buy_card">
                        {loading ? (
                          <>
                            <div className="loader rounded-4 d-flex justify-content-center align-items-center w-100 h-100 z-100 ">
                              <SyncLoader color="#fff" />
                            </div>
                          </>
                        ) : (
                          <></>
                        )}

                        <div className="card-header buy_hea">
                          <h2 className="text-white text-start buy_header_h">
                            Deposit (USDT BEP20)
                          </h2>
                          <h5 className="text-white text-start">
                            Available USDT Balance : {balanceUle} USDT
                          </h5>
                          {/* <h5 className="text-white text-start">
                              Live Rate :{" "}
                              <span>
                                <input
                                  type="text"
                                  value={`1 CNX =${liveRate} USD`}
                                  className="text-dark card_in w-50"
                                />
                              </span>{" "}
                            </h5> */}
                        </div>

                        <div className="card-body">
                          {connected == "Wallet is Connected" ? (
                            <h6
                              className="para text-start mb-2"
                              style={{ color: "white" }}
                            >
                              {connected}
                            </h6>
                          ) : (
                            <h6
                              className="para text-start"
                              style={{ color: "red" }}
                            >
                              {connected}
                            </h6>
                          )}

                          <div className="input_buy">
                            <input
                              type="text"
                              className="card_in text-dark"
                              value={amount}
                              style={{ color: "black" }}
                            />{" "}
                            <span className="text-white mt-2 fs-5 ms-1">
                              Amount
                            </span>
                          </div>

                          <div className="row mt-3 ">
                            <div className="col-lg-3 col-3 mb-3 text-center">
                              <button
                                className="btn input_btn"
                                onClick={() => {
                                  CalculateValue(10);
                                }}
                              >
                                $10
                              </button>
                            </div>
                            <div className="col-lg-3 col-3 mb-3 text-center">
                              <button
                                className="btn input_btn"
                                onClick={() => {
                                  CalculateValue(25);
                                }}
                              >
                                $25
                              </button>
                            </div>
                            <div className="col-lg-3 col-3 mb-3 text-center">
                              <button
                                className="btn input_btn"
                                onClick={() => {
                                  CalculateValue(50);
                                }}
                              >
                                $50
                              </button>
                            </div>
                            <div className="col-lg-3 col-3 mb-3 text-center">
                              <button
                                className="btn input_btn"
                                onClick={() => {
                                  CalculateValue(100);
                                }}
                              >
                                $100
                              </button>
                            </div>
                            <div className="col-lg-4 col-4 mb-4 text-center">
                              <button
                                className="btn input_btn"
                                onClick={() => {
                                  CalculateValue(250);
                                }}
                              >
                                $250
                              </button>
                            </div>
                            <div className="col-lg-4 col-4 mb-4 text-center">
                              <button
                                className="btn input_btn"
                                onClick={() => {
                                  CalculateValue(500);
                                }}
                              >
                                $500
                              </button>
                            </div>
                            <div className="col-lg-4 col-4 mb-4 text-center">
                              <button
                                className="btn input_btn"
                                onClick={() => {
                                  CalculateValue(1000);
                                }}
                              >
                                $1000
                              </button>
                            </div>
                            <div className="col-lg-12 col-12 mb-12 text-center">
                              <button
                                style={{ backgroundColor: "#9a0fe0" }}
                                className="btn input_btn"
                                onClick={() => {
                                  setamount(0);
                                }}
                              >
                                Reset
                              </button>
                            </div>
                          </div>
                          <div
                            className="d-flex justify-content-center mt-3"
                            style={{ cursor: "pointer" }}
                          >
                            <div
                              className="buy_token"
                              onClick={() => buyToken()}
                            >
                              {spiner ? (
                                <>
                                  <div
                                    className="spinner-border spinnerload"
                                    role="status"
                                  >
                                    <span className="visually-hidden">
                                      Loading...
                                    </span>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <img src={click} alt="" />
                                  <h4
                                    className="text-white"
                                    onClick={() => buyToken()}
                                  >
                                    Deposit
                                  </h4>
                                </>
                              )}
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
      {/* <!-----=======body section end=========----> */}
    </div>
  );
}

export default DepositBNB;
