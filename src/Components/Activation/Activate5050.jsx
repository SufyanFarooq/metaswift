import React, { useState } from "react";
import Sidebar from "../Navbar/Sidebar";
import { useEffect } from "react";

import {
  contractAddress,
  contractAbi,
  contractAbiBNB,
  contractAddressbnb,
  contractAbiBUSD,
  contractAddressBUSD,
  contractAbiBUSDToken,
  contractAddressBUSDToken,
  contractAddressToken,
  contractAbiToken,
  DoradoTokenContract,
  DoradoTokenContractAbi,
} from "../../Utils/contract";
import { loadWeb4 } from "../../api2.js";
import { API } from "../../Redux/API";
import Web3 from "web3";

import { Dna } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gif from "../Spinner/loader.gif";

function Activate5050() {
  const user = sessionStorage.getItem("user");
  let ress = JSON.parse(user);
  if (ress == undefined || ress == "" || ress == null) {
    window.location.href = "/login";
  }
  let uId = ress.uid;

  // const Package_Amount = sessionStorage.getItem("Package_Amount");

  const [select, setSelect] = useState("");
  let [Package_Amount, setPackage_Amount] = useState("0");
  const [loader, setloader] = useState(false);
  const [connected, setconnected] = useState(
    "Wallet is not connected..!..Wait..."
  );
  const [Account, setAccount] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [TokenBal, setTokenBal] = useState(0);
  const [BUSDBal, setBUSDBal] = useState(0);
  const [BNBBal, setBNBBal] = useState(0);
  const [LiveRateBNB, setLiveRateBNB] = useState(0);
  const [LiveRateToken, setLiveRateToken] = useState(0);
  const [WalletAddress, setWalletAddress] = useState();
  const [IsUpgrade, setIsUpgrade] = useState(0);

  console.log("select", select);
  console.log("Account", Account);
  console.log("WalletAddress", WalletAddress);

  const metamask = async () => {
    let isConnected = false;
    try {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        isConnected = true;
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        isConnected = true;
      } else {
        isConnected = false;
      }
      if (isConnected === true) {
        const web3 = window.web3;
        let accounts = await web3.eth.getAccounts();
        if (Account !== accounts[0]) {
          setAccount(accounts[0]);
          setconnected("Wallet is connected");
        }

        let chain = await web3.eth.getChainId();
        setChainId(chain);
        if (chain === 56) {
          // handleLogin2(accounts[0]);
        }
        window.ethereum.on("accountsChanged", async function (accounts) {
          if (Account !== accounts[0]) {
            setAccount(accounts[0]);
          }

          let chain = await web3.eth.getChainId();
          setChainId(chain);
          if (chain === 56) {
          }
        });
      }
    } catch (error) {
      console.log("error message", error.message);
    }
  };

  const LiveContractBalance = async () => {
    let acc = await loadWeb4();
    if (acc == "No Wallet") {
      toast.error("No Wallet", {
        className: "copied-message",
      });
      setconnected("Wallet is locked");
    } else {
      let contract = await new window.web3.eth.Contract(
        contractAbiToken,
        contractAddressToken
      );
      let result = await contract.methods.balanceOf(acc).call();
      result = window.web3.utils.fromWei(result);
      result = parseFloat(result).toFixed(4);
      setTokenBal(result);
      console.log("Balance Token", result);

      let Busdcontract = await new window.web3.eth.Contract(
        contractAbiBUSDToken,
        contractAddressBUSDToken
      );

      let contractBUSD = await new window.web3.eth.Contract(
        contractAbiBUSDToken,
        contractAddressBUSDToken
      );
      let Busdresult = await contractBUSD.methods.balanceOf(acc).call();
      Busdresult = window.web3.utils.fromWei(Busdresult);
      Busdresult = parseFloat(Busdresult).toFixed(4);
      setBUSDBal(Busdresult);
      console.log("Balance BUSD", Busdresult);

      let bNB_balance = await window.web3.eth.getBalance(acc);
      bNB_balance = window.web3.utils.fromWei(bNB_balance);
      bNB_balance = parseFloat(bNB_balance).toFixed(4);
      console.log("Balance BNB", bNB_balance);
      setBNBBal(bNB_balance);
    }
  };

  const UsdToBnbLiveRateApi = async () => {
    let res = await API.get(`/convertUsdToBnb?amount=1`);
    console.log("UsdToBnbLiveRateApi", Number(res.data.data[0][0].bnb));
    setLiveRateBNB(Number(res.data.data[0][0].bnb));
  };

  const [liveRateUSD, setLiveRateUSD] = useState("");
  const UsdToTokenLiveRateApi = async () => {
    let res = await API.get(`/convertUsdToBusd?amount=1`);
    console.log("UsdToTokenLiveRateApi", Number(res.data.data[0][0].busd));
    console.log("DrDRate", 1 / parseFloat(res.data.data[0][0].busd));
    setLiveRateToken(Number(res.data.data[0][0].busd));
    setLiveRateUSD(1 / parseFloat(res.data.data[0][0].busd));
  };
  let data = parseFloat(liveRateUSD);

  const getBetaWallet = async () => {
    try {
      const res = await API.get(`/DashboardDetails?uid=${uId}`);
      console.log("walletAddress db ", res.data.data[0].walletAddress);
      setWalletAddress(res.data.data[0].walletAddress);

      // sessionStorage.setItem("walletAddressDB",res.data.data[0].walletAddress);
      setIsUpgrade(res.data.data[0].package);
      // setLoading(false);
    } catch (e) {
      console.log("error", e);
      // setLoading(false);
    }
  };

  //handleActivationBUSD
  const handleActivationBUSD = async () => {
    setloader(true);
    try {
      console.log("amount", Package_Amount);
      setloader(true);

      let address = WalletAddress; //Login User Address
      let uid = uId; //Login User aId

      if (
        Package_Amount == "0" ||
        Package_Amount == "" ||
        Package_Amount == undefined
      ) {
        toast.error("Please Select Package Amount !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      if (select == "") {
        toast.error("Please select Currency Type !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      if (parseInt(BUSDBal) < parseInt(Package_Amount)) {
        toast.error("Wallet balance insufficient !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      if (Account == undefined || Account == "") {
        toast.error("Please connect wallet !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      if (address.toUpperCase() != Account.toUpperCase()) {
        toast.error("Wallet address and login miss match", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      // Check Activate Condition
      let responceEligible = await API.post(
        `/Check_Actiavte_Upgrade_Condition_BUSD`,
        {
          uid: uid,
          type: "Activate",
        }
      );

      responceEligible = responceEligible.data.data;
      if (responceEligible != "Success") {
        toast.error(responceEligible, {
          className: "copied-message",
        });
        setloader(false);
        window.web3 = new Web3(window.ethereum);
        return;
      }

      debugger;
      ///  BUSD Connectivity  //////
      let contract = await new window.web3.eth.Contract(
        contractAbiBUSD,
        contractAddressBUSD
      );

      let Amount = window.web3.utils.toWei(Package_Amount.toString());

      let token = await new window.web3.eth.Contract(
        contractAbiBUSDToken,
        contractAddressBUSDToken
      );
      let approveCall = await token.methods
        .approve(contractAddressBUSD, Amount.toString())
        .send({ from: Account });
      toast.success("Approved", {
        className: "copied-message",
      });
      setloader(true);

      let sellCall = await contract.methods
        .Activate(Amount.toString())
        .send({ from: Account });
      toast.success("Transaction Succesfull", {
        className: "copied-message",
      });
      sellCall = sellCall.transactionHash;

      console.log("trxResult", sellCall);

      if (sellCall != "" || sellCall != undefined || sellCall != null) {
        try {
          let responce = await API.post(`/busdActivation`, {
            uid: uid,
            walletAddress: Account,
            amount: Package_Amount,
            traxn: sellCall,
            busdValue: Package_Amount,
          });

          console.log("responce", responce);

          responce = responce.data.data;
          toast.success("Please Wait while transaction is processing...", {
            className: "copied-message",
          });
        } catch (e) {
          console.log("error", e);
          toast.error("Something went wrong ! ", {
            className: "copied-message",
          });
        }
      }
      console.log("Final Output:", sellCall, "\n");
      // toast.success("Transaction is complete");
      setTimeout(() => {
        setloader(false);
      }, 40000);
    } catch (error) {
      console.log("error", error);
      setloader(false);
    }
  };

  //handleUpgradationBUSD
  const handleUpgradationBUSD = async () => {
    try {
      setloader(true);

      let address = WalletAddress; //Login User Address
      let uid = uId; //Login User aId

      if (
        Package_Amount == "0" ||
        Package_Amount == "" ||
        Package_Amount == undefined
      ) {
        toast.error("Please Select Package Amount !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      if (select == "") {
        toast.error("Please select Currency Type !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      if (parseInt(BUSDBal) < parseInt(Package_Amount)) {
        toast.error("Wallet balance insufficient !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      if (Account == undefined || Account == "") {
        toast.error("Please connect wallet !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      if (address.toUpperCase() != Account.toUpperCase()) {
        toast.error("Wallet address and login miss match", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      // Check Upgrade Condition
      let responceEligible = await API.post(
        `/Check_Actiavte_Upgrade_Condition_BUSD`,
        {
          uid: uid,
          type: "Upgrade",
        }
      );

      responceEligible = responceEligible.data.data;
      if (responceEligible != "Success") {
        toast.error(responceEligible, {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      ///  BUSD Connectivity  //////
      let contract = await new window.web3.eth.Contract(
        contractAbiBUSD,
        contractAddressBUSD
      );

      let Amount = window.web3.utils.toWei(Package_Amount.toString());

      let token = await new window.web3.eth.Contract(
        contractAbiBUSDToken,
        contractAddressBUSDToken
      );
      let approveCall = await token.methods
        .approve(contractAddressBUSD, Amount.toString())
        .send({ from: Account });
      toast.success("Approved", {
        className: "copied-message",
      });
      setloader(true);

      let sellCall = await contract.methods
        .Activate(Amount.toString())
        .send({ from: Account });
      toast.success("Transection Succesfull", {
        className: "copied-message",
      });
      sellCall = sellCall.transactionHash;

      console.log("trxResult", sellCall);

      if (sellCall != "" || sellCall != undefined || sellCall != null) {
        try {
          let responce = await API.post(`/busdUpgrade`, {
            uid: uid,
            walletAddress: Account,
            amount: Package_Amount,
            traxn: sellCall,
            busdValue: Package_Amount,
          });

          console.log("responce", responce);

          responce = responce.data.data;
          toast.success("Please Wait while transaction is processing...", {
            className: "copied-message",
          });
        } catch (e) {
          console.log("error", e);
          toast.error("Something went wrong ! ", {
            className: "copied-message",
          });
        }
      }
      console.log("Final Output:", sellCall, "\n");
      // toast.success("Transaction is complete");
      setTimeout(() => {
        setloader(false);
      }, 40000);
    } catch (error) {
      console.log("error", error);

      setloader(false);
    }
  };

  //handleActivationToken
  const handleActivationToken = async () => {
    try {
      console.log("amount", Package_Amount);
      setloader(true);

      let address = WalletAddress; //Login User Address
      let uid = uId; //Login User aId

      if (
        Package_Amount == "0" ||
        Package_Amount == "" ||
        Package_Amount == undefined
      ) {
        toast.error("Please Select Package Amount !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      if (select == "") {
        toast.error("Please select Currency Type !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }
      let TokenAmount = Package_Amount * LiveRateToken;
      console.log("TokenAmount", TokenAmount);
      if (parseInt(TokenBal) < parseInt(TokenAmount)) {
        toast.error("Wallet Token balance insufficient !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      if (Account == undefined || Account == "") {
        toast.error("Please connect wallet !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      if (address.toUpperCase() != Account.toUpperCase()) {
        toast.error("Wallet address and login miss match", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      // Check Activate Condition
      let responceEligible = await API.post(
        `/Check_Actiavte_Upgrade_Condition_Token`,
        {
          uid: uid,
          type: "Activate",
        }
      );

      responceEligible = responceEligible.data.data;
      if (responceEligible != "Success") {
        toast.error(responceEligible, {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      ///  Token Connectivity  //////

      let contract = await new window.web3.eth.Contract(
        DoradoTokenContractAbi,
        DoradoTokenContract
      );

      let Amount = window.web3.utils.toWei(TokenAmount.toString());

      let token = await new window.web3.eth.Contract(
        contractAbiToken,
        contractAddressToken
      );
      let approveCall = await token.methods
        .approve(DoradoTokenContract, Amount.toString())
        .send({ from: Account });
      toast.success("Approved", {
        className: "copied-message",
      });
      setloader(true);

      let sellCall = await contract.methods
        .Activate(Amount.toString())
        .send({ from: Account });
      toast.success("Transection Succesfull", {
        className: "copied-message",
      });
      sellCall = sellCall.transactionHash;

      console.log("trxResult", sellCall);

      if (sellCall != "" || sellCall != undefined || sellCall != null) {
        try {
          let responce = await API.post(`/tokenActivation`, {
            uid: uid,
            walletAddress: Account,
            amount: Package_Amount,
            traxn: sellCall,
            tokenValue: TokenAmount,
          });

          console.log("responce", responce);

          responce = responce.data.data;
          toast.success("Please Wait while transaction is processing...", {
            className: "copied-message",
          });
        } catch (e) {
          console.log("error", e);
          toast.error("Something went wrong ! ", {
            className: "copied-message",
          });
        }
      }
      console.log("Final Output:", sellCall, "\n");
      //  toast.success("Transaction is complete");
      setTimeout(() => {
        setloader(false);
      }, 40000);
    } catch (error) {
      console.log("error", error);

      setloader(false);
    }
  };

  //handleUpgradeToken
  const handleUpgradeToken = async () => {
    try {
      setloader(true);

      let address = WalletAddress; //Login User Address
      let uid = uId; //Login User aId

      if (
        Package_Amount == "0" ||
        Package_Amount == "" ||
        Package_Amount == undefined
      ) {
        toast.error("Please Select Package Amount !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      if (select == "") {
        toast.error("Please select Currency Type !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }
      let TokenAmount = Package_Amount * LiveRateToken;
      console.log("TokenAmount", TokenAmount);
      if (parseInt(TokenBal) < parseInt(TokenAmount)) {
        toast.error("Wallet Token balance insufficient !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      if (Account == undefined || Account == "") {
        toast.error("Please connect wallet !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      if (address.toUpperCase() != Account.toUpperCase()) {
        toast.error("Wallet address and login miss match", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      // Check Upgrade Condition
      let responceEligible = await API.post(
        `/Check_Actiavte_Upgrade_Condition_Token`,
        {
          uid: uid,
          type: "Upgrade",
        }
      );

      responceEligible = responceEligible.data.data;
      if (responceEligible != "Success") {
        toast.error(responceEligible, {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      ///  Token Connectivity  //////
      let contract = await new window.web3.eth.Contract(
        DoradoTokenContractAbi,
        DoradoTokenContract
      );

      let Amount = window.web3.utils.toWei(TokenAmount.toString());

      let token = await new window.web3.eth.Contract(
        contractAbiToken,
        contractAddressToken
      );
      let approveCall = await token.methods
        .approve(DoradoTokenContract, Amount.toString())
        .send({ from: Account });
      toast.success("Approved", {
        className: "copied-message",
      });
      setloader(true);

      let sellCall = await contract.methods
        .Activate(Amount.toString())
        .send({ from: Account });
      toast.success("Transection Succesfull", {
        className: "copied-message",
      });
      sellCall = sellCall.transactionHash;

      console.log("trxResult", sellCall);

      if (sellCall != "" || sellCall != undefined || sellCall != null) {
        try {
          let responce = await API.post(`/tokenUpgrade`, {
            uid: uid,
            walletAddress: Account,
            amount: Package_Amount,
            traxn: sellCall,
            tokenValue: TokenAmount,
          });

          console.log("responce", responce);

          responce = responce.data.data;
          toast.success("Please Wait while transaction is processing...", {
            className: "copied-message",
          });
        } catch (e) {
          console.log("error", e);
          toast.error("Something went wrong ! ", {
            className: "copied-message",
          });
        }
      }
      console.log("Final Output:", sellCall, "\n");
      // toast.success("Transaction is complete");
      setTimeout(() => {
        setloader(false);
      }, 40000);
    } catch (error) {
      console.log("error", error);
      setloader(false);
    }
  };

  //handleActivationBNB
  const handleActivationBNB = async () => {
    try {
      console.log("amount", Package_Amount);
      setloader(true);

      let address = WalletAddress; //Login User Address
      let uid = uId; //Login User aId

      if (
        Package_Amount == "0" ||
        Package_Amount == "" ||
        Package_Amount == undefined
      ) {
        toast.error("Please Select Package Amount !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      if (select == "") {
        toast.error("Please select Currency Type !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }
      let BNBAmount = Package_Amount * LiveRateBNB;

      console.log("BNBAmount", BNBAmount);
      console.log("BNBBal", BNBBal);
      if (parseFloat(BNBBal) < parseFloat(BNBAmount)) {
        toast.error("Wallet BNB balance insufficient !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      if (Account == undefined || Account == "") {
        toast.error("Please connect wallet !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      if (address.toUpperCase() != Account.toUpperCase()) {
        toast.error("Wallet address and login miss match", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      // Check Activate Condition
      let responceEligible = await API.post(
        `/Check_Actiavte_Upgrade_Condition_BNB`,
        {
          uid: uid,
          type: "Activate",
        }
      );

      responceEligible = responceEligible.data.data;
      if (responceEligible != "Success") {
        toast.error(responceEligible, {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      ///  Bnb Connectivity  //////

      let contract = await new window.web3.eth.Contract(
        contractAbi,
        contractAddress
      );

      let Amount = window.web3.utils.toWei(BNBAmount.toString());

      let sellCall = await contract.methods
        .Buy()
        .send({ value: Amount, from: Account });
      toast.success("Transection Succesfull", {
        className: "copied-message",
      });
      sellCall = sellCall.transactionHash;

      console.log("trxResult", sellCall);

      if (sellCall != "" || sellCall != undefined || sellCall != null) {
        try {
          let responce = await API.post(`/bnbActivation`, {
            uid: uid,
            walletAddress: Account,
            amount: Package_Amount,
            traxn: sellCall,
            bnbValue: BNBAmount,
          });

          console.log("responce", responce);

          responce = responce.data.data;
          toast.success("Please Wait while transaction is processing...", {
            className: "copied-message",
          });
        } catch (e) {
          console.log("error", e);
          toast.error("Something went wrong ! ", {
            className: "copied-message",
          });
        }
      }
      console.log("Final Output:", sellCall, "\n");
      // toast.success("Transaction is complete");
      setTimeout(() => {
        setloader(false);
      }, 40000);
    } catch (error) {
      console.log("error", error);
      setloader(false);
    }
  };

  // handleUpgradeBNB
  const handleUpgradeBNB = async () => {
    try {
      setloader(true);

      let address = WalletAddress; //Login User Address
      let uid = uId; //Login User aId

      if (
        Package_Amount == "0" ||
        Package_Amount == "" ||
        Package_Amount == undefined
      ) {
        toast.error("Please Select Package Amount !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      if (select == "") {
        toast.error("Please select Currency Type !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }
      let BNBAmount = Package_Amount * LiveRateBNB;

      if (parseFloat(BNBBal) < parseFloat(BNBAmount)) {
        toast.error("Wallet BNB balance insufficient !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      if (Account == undefined || Account == "") {
        toast.error("Please connect wallet !!!", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      if (address.toUpperCase() != Account.toUpperCase()) {
        toast.error("Wallet address and login miss match", {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      // Check Upgrade Condition
      let responceEligible = await API.post(
        `/Check_Actiavte_Upgrade_Condition_BNB`,
        {
          uid: uid,
          type: "Upgrade",
        }
      );

      responceEligible = responceEligible.data.data;
      if (responceEligible != "Success") {
        toast.error(responceEligible, {
          className: "copied-message",
        });
        setloader(false);
        return;
      }

      ///  BNB Connectivity  //////
      let contract = await new window.web3.eth.Contract(
        contractAbi,
        contractAddress
      );

      let Amount = window.web3.utils.toWei(BNBAmount.toString());

      let sellCall = await contract.methods
        .Buy()
        .send({ value: Amount, from: Account });
      toast.success("Transection Succesfull", {
        className: "copied-message",
      });
      sellCall = sellCall.transactionHash;

      console.log("trxResult", sellCall);

      if (sellCall != "" || sellCall != undefined || sellCall != null) {
        try {
          let responce = await API.post(`/bnbUpgrade`, {
            uid: uid,
            walletAddress: Account,
            amount: Package_Amount,
            traxn: sellCall,
            bnbValue: BNBAmount,
          });

          console.log("responce", responce);

          responce = responce.data.data;
          toast.success("Please Wait while transaction is processing...", {
            className: "copied-message",
          });
        } catch (e) {
          console.log("error", e);
          toast.error("Something went wrong ! ", {
            className: "copied-message",
          });
        }
      }
      console.log("Final Output:", sellCall, "\n");
      // toast.success("Transaction is complete");
      setTimeout(() => {
        setloader(false);
      }, 40000);
    } catch (error) {
      console.log("error", error);
      setloader(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setAccount("");
      metamask();
      LiveContractBalance();

      getBetaWallet();
      UsdToBnbLiveRateApi();
      UsdToTokenLiveRateApi();
    });
  }, []);

  /*
  useEffect(() => {
    return () => {
      UsdToBnbLiveRateApi();
      UsdToTokenLiveRateApi();
     // getBetaWallet();
    };
  }, []);
*/

  return (
    <div className="nft_theme">
      <Sidebar />
      <div class="horizontalMenucontainer">
        <a
          href="#top"
          id="back-to-top"
          class="back-to-top rounded-circle shadow"
        >
          <i class="angle fe fe-chevron-up"></i>
        </a>
        {/* <!-- Loader -->  */}
        {loader && <img src={gif} className="LoaderSpinner" />}
        {/* <!-- /Loader --> <!-- Page -->  */}
        <div class="page">
          <div class="layout-position-binder">
            {/* <!-- main-header -->  */}
          </div>

          <div class="main-content app-content">
            {/* <!-- container --> */}
            <div class="main-container container-fluid">
              {/* <!-- breadcrumb --> */}
              <div class="breadcrumb-header justify-content-between">
                <div class="left-content">
                  <span class="main-content-title mg-b-0 mg-b-lg-1">
                    Activate
                  </span>
                </div>
                <div class="justify-content-center mt-2">
                  <ol class="breadcrumb breadcrumb-style3">
                    <li class="breadcrumb-item tx-15">
                      <a href="#">Activation</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Activate
                    </li>
                  </ol>
                </div>
              </div>
              {/* <!-- /breadcrumb --> */}

              <div class="row" style={{ marginTop: "0rem" }}>
                <div class="col-md-4"></div>
                <div class="col-md-4 card1">
                  <div class="" role="document">
                    <div class="modal-content10">
                      <div class="" style={{ paddingBottom: "10px" }}>
                        <div class="avlbal">
                          <h3
                            id="exampleModal3Label2"
                            style={{ textAlign: "center" }}
                          >
                            Activate 5050 / Upgrade 5050
                          </h3>

                          <div class="Model_text_inner activation_Item">
                            <div class="rate_item">
                              <span>BNB Balance</span>
                              <input
                                type="text"
                                id="tokenbalance"
                                value={BNBBal}
                                BNB
                              />
                            </div>
                            <div class="rate_item">
                              <span>BUSD Balance</span>
                              <input
                                type="text"
                                id="tokenbalance"
                                value={BUSDBal}
                                BUSD
                              />
                            </div>
                            <div class="rate_item">
                              <span>DRD Token Balance </span>
                              <input
                                type="text"
                                id="getBalance"
                                value={TokenBal}
                                Token
                              />
                            </div>

                            <div class="rate_item">
                              <span>1 BUSD</span>
                              <span className="live__rate_">
                                {LiveRateToken} DRD Token
                              </span>
                            </div>
                            <div class="rate_item">
                              <span>1 Dorado</span>
                              <span className="live__rate_">
                                {data.toFixed(4)} USD
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="activation_modal">
                        <div class="popup_net">
                          {/* <span class="metamaskConnection text-center">Please Connect wallet Address!</span> */}
                          {connected ==
                          "Wallet is not connected..!..Wait..." ? (
                            <p className="peera2" style={{ color: "red" }}>
                              {connected}
                            </p>
                          ) : connected == "Wallet is locked" ? (
                            <p className="peera2" style={{ color: "red" }}>
                              {connected}
                            </p>
                          ) : (
                            <p className="peera2" style={{ color: "green" }}>
                              {connected}
                            </p>
                          )}

                          <div class="set_column staking_mx_wdth cstm_cheveron">
                            <span></span>
                            <label>Select Package </label>
                            <select
                              id="status"
                              onChange={(e) =>
                                setPackage_Amount(e.target.value)
                              }
                              class="floating-input form-control select_bg "
                              data-val="true"
                              data-val-required="Position is required"
                            >
                              <option value="">Select Package</option>
                              <option value="100">100 USD</option>
                              <option value="300">300 USD</option>
                              <option value="500">500 USD</option>
                              <option value="1000">1000 USD</option>
                              <option value="3000">3000 USD</option>
                              <option value="5000">5000 USD</option>
                            </select>
                          </div>
                          <div class="addNum">
                            <div class="trxnumber">
                              <input
                                type="text"
                                readonly=""
                                id="txtamount2"
                                value={Package_Amount}
                                class="form5"
                              />
                              <span style={{ marginLeft: "10px" }}>
                                BUSD Package
                              </span>
                            </div>

                            {select == 0 ? (
                              <div class="trxnumber">
                                <input
                                  type="text"
                                  readonly=""
                                  id="txtTokenvalue"
                                  class="form5"
                                  value={
                                    `${Package_Amount}` *
                                    `${Number(LiveRateToken)}`
                                  }
                                />
                                <span style={{ marginLeft: "10px" }}>
                                  DRD Token Value
                                </span>
                              </div>
                            ) : select == 1 ? (
                              <div class="trxnumber">
                                <input
                                  type="text"
                                  readonly=""
                                  id="txtBNBalue"
                                  class="form5"
                                  value={
                                    `${Package_Amount}` *
                                    `${Number(LiveRateBNB)}`
                                  }
                                />
                                <span style={{ marginLeft: "10px" }}>
                                  BNB Value
                                </span>
                              </div>
                            ) : (
                              <div class="trxnumber">
                                <input
                                  type="text"
                                  readonly=""
                                  id="txtTokenvalue2"
                                  class="form5"
                                  placeholder={
                                    `${Package_Amount}` + " " + "BUSD"
                                  }
                                  value={`${Package_Amount}`}
                                />
                                <span style={{ marginLeft: "10px" }}>
                                  BUSD Value
                                </span>
                              </div>
                            )}
                            {/* 
                            <div class="btn-list btn_set_item">
                              <a
                                href="javascript:void(0);"
                                onClick={() => {
                                  setPackage_Amount(1);
                                }}
                                class="btn btn-sm btn-outline-primary"
                              >
                                {" "}
                                1 $
                              </a>

                              <a
                                href="javascript:void(0);"
                                onClick={() => {
                                  setPackage_Amount(100);
                                }}
                                class="btn btn-sm btn-outline-primary"
                              >
                                {" "}
                                100 $
                              </a>
                              <a
                                href="javascript:void(0);"
                                onClick={() => {
                                  setPackage_Amount(300);
                                }}
                                class="btn btn-sm btn-outline-primary"
                              >
                                {" "}
                                300 $
                              </a>
                              <a
                                href="javascript:void(0);"
                                onClick={() => {
                                  setPackage_Amount(500);
                                }}
                                class="btn btn-sm btn-outline-primary"
                              >
                                {" "}
                                500 $
                              </a>
                              <a
                                href="javascript:void(0);"
                                onClick={() => {
                                  setPackage_Amount(1000);
                                }}
                                class="btn btn-sm btn-outline-primary"
                              >
                                {" "}
                                1000 $
                              </a>

                              <a
                                href="javascript:void(0);"
                                onClick={() => {
                                  setPackage_Amount(3000);
                                }}
                                class="btn btn-sm btn-outline-primary"
                              >
                                {" "}
                                3000 $
                              </a>

                              <a
                                href="javascript:void(0);"
                                onClick={() => {
                                  setPackage_Amount(5000);
                                }}
                                class="btn btn-sm btn-outline-primary"
                              >
                                {" "}
                                5000 $
                              </a>


                              <a
                                href="javascript:void(0);"
                                onClick={() => {
                                  setPackage_Amount("");
                                }}
                                class="btn btn-sm bdr_reset_btn"
                              >
                                Reset
                              </a>
                            </div> */}

                            {/* <a
                              href="/My_Carbon_nfts"
                              class="btn btn-sm btn-outline-primary"
                            >
                              Go to NFT Page
                            </a> */}

                            <input
                              type="hidden"
                              id="amount"
                              name="name"
                              autocomplete="off"
                            />
                          </div>

                          <div class="row">
                            <div class="col-md-12">
                              {loader == true ? (
                                <gif />
                              ) : (
                                <>
                                  {/* <div class="trxnumber">
                                    {IsUpgrade == 0 ? (
                                      <a
                                        href="#"
                                        onClick={() => {
                                          handleActivationToken();
                                        }}
                                      >
                                        <div class="activate_btn">
                                          <img
                                            src="images/activate.png"
                                            class="img-fluid"
                                          />
                                          <h4>Activation</h4>
                                        </div>
                                      </a>
                                    ) : (
                                      <a
                                        href="#"
                                        onClick={() => {
                                          handleUpgradeToken();
                                        }}
                                      >
                                        <div class="activate_btn">
                                          <img
                                            src="images/activate.png"
                                            class="img-fluid"
                                          />
                                          <h4>Upgrade</h4>
                                        </div>
                                      </a>
                                    )}
                                  </div> */}
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4"></div>
              </div>
              {/* <!-- row closed --> */}
            </div>
            {/* <!-- /Container --> */}
          </div>

          {/* <!---footer----> */}
          <div class="main-footer">
            <div class="col-md-12 col-sm-12 text-center">
              <div class="container-fluid pd-t-0 ht-100p">
                {" "}
                Copyright 2023{" "}
                <a href="#" class="tx-primary">
                  MetaSwift.ai
                </a>
                . <a href="#"> </a> All rights reserved{" "}
              </div>
            </div>
          </div>
          {/* // <!---end----> */}
        </div>
      </div>
    </div>
  );
}

export default Activate5050;
