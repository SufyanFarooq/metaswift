import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Academy from "./Components/Academy/Academy";
import Contact from "./Components/Contant/Contact";
import FAQ from "./Components/FAQ/FAQ";
import Index_main from "./Components/Home/Index_main";
import Login from "./Components/Login/Login";
import Mission from "./Components/Mission/Mission";
import Registration from "./Components/Registration/Registration";
import termsconditions from "./Components/Registration/termsconditions";
import Roadmap from "./Components/Roadmap/Roadmap";
import MarketingPlan from "./Components/Marketing_Plan/MarketingPlan";
import Activate from "./Components/Activation/Activate";
import MatrixActivate from "./Components/Activation/MatrixActivate";
import Activate_History from "./Components/Activation/Activate_History";
import Matrix_Activate_History from "./Components/Activation/Matrix_Activate_History";
import NFT_Address from "./Components/Address/NFT_Address";
import Self_Address from "./Components/Address/Self_Address";

import Direct_Income from "./Components/All Income/Matching_Income";
import Level_Income from "./Components/All Income/Level_Income";
import ROI_Income from "./Components/All Income/ROI_Income";
import Dashboard from "./Components/Dashboard/Dashboard";
import Sidebar from "./Components/Navbar/Sidebar";
import Level_Details from "./Components/All Income/Level_Details";
import Direct_Leg_Business from "./Components/Team Details/Direct_Leg_Business";
import Rank_Details from "./Components/Team Details/Rank_Details";
import My_Referral from "./Components/Team Details/My_Referral";
import My_Team from "./Components/Team Details/My_Team";
import Withdrawal from "./Components/Widthdrawal/Withdrawal";
import Withdrawal_History from "./Components/Widthdrawal/Withdrawal_History";
import About from "./Components/About/About";
import Staking_history from "./Components/Staking/Staking_History";
import ROI_Withdrawal from "./Components/Widthdrawal/ROI_Withdrawal";
import Roi_Withdrawal_History from "./Components/Widthdrawal/ROI_Withdrawal_History";
import Reward_Withdrawal from "./Components/Widthdrawal/Reward_Withdrawal";
import Reward_Withdrawal_History from "./Components/Widthdrawal/Reward_Withdrawal_History";
import Staking_Withdrawal from "./Components/Staking/Staking_Withdrawal";
import Staking_Withdrawal_History from "./Components/Staking/Staking_Clai_History";
import Staking_Claim_History from "./Components/Staking/Staking_Clai_History";
import Staking_Actvation from "./Components/Staking/Staking_Activate";
import Boster_Income from "./Components/All Income/Boster_Income";
import Profile from "./Components/Profile/Profile";
import Rewards from "./Components/Awards/Rewards";
import Achiever from "./Components/Awards/Achiever";
import My_Carbon_nfts from "./Components/Activation/My_Carbon_nfts";
import Genealogy_View from "./Components/Team Details/Matching_Tree";
import Query from "./Components/HelpDesk/Query";
import Activate5050 from "./Components/Activation/Activate5050";
import HomeNew from "./Components/Home/HomeNew";
import Diffrencial_Income from "./Components/All Income/Differencial_Income";
import Matrix_Income from "./Components/All Income/Matrix_Income";
import Transaction_Password from "./Components/Password/Transaction_Password";
import Change_Password from "./Components/Password/Change_Password";
import Matrix_downline from "./Components/Team Details/Matrix_Downline";
import Matrix_Tree from "./Components/Team Details/Matrix_Tree";
import WellComePage from "./Components/Welcom_page/wellComePage";
import ForgetPassword from "./Components/ForgetPassword/Forget";

import Sign_Up_Bonus from "./Components/All Income/Sign_Up_Bonus";
import Referral_Bonus from "./Components/All Income/Referral_Bonus";
import Global_Single_Leg_Income from "./Components/All Income/Global_Single_Leg_Income";
import Refund_Income from "./Components/All Income/Refund_Income";
import Matrix_IncomeDetails from "./Components/All Income/Matrix_IncomeDetails";
import Infinity_Bonus from "./Components/All Income/Infinity_Bonus";
import Monthly_Salary from "./Components/All Income/Monthly_Salary";
import Binary_Income from "./Components/All Income/SingleLeg";
import Matrix_Referral_Income from "./Components/All Income/Matrix_Referral_Income";
import Matrix_Level_Income from "./Components/All Income/Matrix_Level_Income";
import VarifyOTP from "./Components/Registration/VarifyOTP";
import UserToUser_transfer from "./Components/Widthdrawal/UserToUser_transfer";
import UserToUser_Transfer_History from "./Components/Widthdrawal/UserToUser_Transfer_History";
import CTO_Income from "./Components/All Income/CTO_Income";
import Pool_Income from "./Components/All Income/Pool_Income";
import SingleLeg_Income from "./Components/All Income/SingleLeg";
import DepositeCoin from "./Components/Deposite/DepositeCoin";
import DepositeCoinHistory from "./Components/Deposite/DepositeCoinHistory";
import Receive_Admin_Fund_History from "./Components/Widthdrawal/ReceiveAdminFund";
import IncomeToMatrix from "./Components/Widthdrawal/IncomeToMatrix";
import IncomeToMatrixHistory from "./Components/Widthdrawal/IncomeToMatrixHistory";
import IncomeToActivation from "./Components/Widthdrawal/IncomeToActivation";
import IncomeToActivationHistory from "./Components/Widthdrawal/IncomeToActivationHistory";
import UserToUserMatrix from "./Components/Widthdrawal/UsertoUserMatrix";
import UserToUserMatrixHistory from "./Components/Widthdrawal/UserToUserMatrixHistory";
import Deposit from "../src/Components/Deposite/Deposit";
import DepositeHistory from "./Components/Deposite/DepositeHistory";
import DepositBNB from "./Components/Deposite/DepositBNB";

function App() {
  return (
    <div className="App">
      {/* <Sidebar /> */}
      <BrowserRouter>
        <Routes>
          <Route />
          {/* <Route exact path="/" element={<Index_main />} /> */}
          <Route exact path="/" element={<HomeNew />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Mission" element={<Mission />} />
          <Route exact path="/Roadmap" element={<Roadmap />} />
          <Route exact path="/Academy" element={<Academy />} />
          <Route exact path="/FAQ" element={<FAQ />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/MarketingPlan" element={<MarketingPlan />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Registration" element={<Registration />} />
          <Route exact path="/termsconditions" element={<termsconditions />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
          <Route exact path="/Activate" element={<Activate />} />
          <Route exact path="/MatrixActivate" element={<MatrixActivate />} />
          
          <Route
            exact
            path="/Activation_History"
            element={<Activate_History />}
          />
          <Route
            exact
            path="/Matrix_Activate_History"
            element={<Matrix_Activate_History />}
          />
          <Route exact path="/Matching_Income" element={<Binary_Income />} />
          <Route exact path="/Trading_Income" element={<ROI_Income />} />
          <Route exact path="/CTO_Income" element={<CTO_Income />} />
          <Route exact path="/Pool_Income" element={<Pool_Income />} />
          <Route exact path="/Boster_Income" element={<Boster_Income />} />
          <Route exact path="/Level_Income" element={<Level_Income />} />
          <Route exact path="/Referral_Income" element={<Direct_Income />} />
          <Route exact path="/Matrix_Tree" element={<Matrix_Tree />} />
          <Route path="welComePage/:uId" element={<WellComePage />} />
          <Route path="VarifyOTP/:uId" element={<VarifyOTP />} />
          <Route path="/Forget_Password" element={<ForgetPassword />} />
          <Route exact path="/Sign_Up_Bonus" element={<Sign_Up_Bonus />} />
          <Route exact path="/Referral_Bonus" element={<Referral_Bonus />} />
          <Route
            exact
            path="/Global_Single_Leg_Income"
            element={<Global_Single_Leg_Income />}
          />
          <Route exact path="/DepositeCoin" element={<DepositeCoin />} />
          <Route
            exact
            path="/DepositeCoinHistory"
            element={<DepositeCoinHistory />}
          />
          <Route exact path="/Deposit" element={<Deposit />} />
          <Route exact path="/DepositHistory" element={<DepositeHistory />}/>
          <Route exact path="/DepositBNB" element={<DepositBNB/>}/>
          <Route exact path="/Refund_Income" element={<Refund_Income />} />
          <Route exact path="/Matrix_IncomeDetails" element={<Matrix_IncomeDetails />} />
          <Route exact path="/Infinity_Bonus" element={<Infinity_Bonus />} />
          <Route exact path="/Weekly_Salary" element={<Monthly_Salary />} />
          <Route exact path="/IncomeToMatrix" element={<IncomeToMatrix />} />
          <Route
            exact
            path="/IncomeToMatrixHistory"
            element={<IncomeToMatrixHistory />}
          />
          <Route
            exact
            path="/IncomeToActivation"
            element={<IncomeToActivation />}
          />
          <Route
            exact
            path="/IncomeToActivationHistory"
            element={<IncomeToActivationHistory />}
          />
          <Route
            exact
            path="/SingleLeg_Income"
            element={<SingleLeg_Income />}
          />
          <Route
            exact
            path="/Matrix_Referral_Income"
            element={<Matrix_Referral_Income />}
          />
          <Route
            exact
            path="/Matrix_Level_Income"
            element={<Matrix_Level_Income />}
          />
          <Route
            exact
            path="/Receive_Admin_Fund_History"
            element={<Receive_Admin_Fund_History />}
          />

          <Route
            exact
            path="/Diffrencial_Income"
            element={<Diffrencial_Income />}
          />
          <Route exact path="/Matrix_Income" element={<Matrix_Income />} />

          <Route exact path="/Working_Withdrawal" element={<Withdrawal />} />
          <Route
            exact
            path="/UserToUser_transfer"
            element={<UserToUser_transfer />}
          />
          <Route
            exact
            path="/UserToUser_Transfer_History"
            element={<UserToUser_Transfer_History />}
          />
          <Route
            exact
            path="/Withdrawal_History"
            element={<Withdrawal_History />}
          />
          <Route
            exact
            path="/Trading_Withdrawal"
            element={<ROI_Withdrawal />}
          />
          <Route
            exact
            path="/Trading_Withdrawal_History"
            element={<Roi_Withdrawal_History />}
          />
          <Route
            exact
            path="/Reward_Withdrawal"
            element={<Reward_Withdrawal />}
          />
          <Route
            exact
            path="/Reward_Withdrawal_History"
            element={<Reward_Withdrawal_History />}
          />
          <Route
            exact
            path="/UserToUserMatrix"
            element={<UserToUserMatrix />}
          />
          <Route
            exact
            path="/UserToUserMatrixHistory"
            element={<UserToUserMatrixHistory />}
          />
          <Route exact path="/My_Referral" element={<My_Referral />} />
          <Route exact path="/Level_Details" element={<Level_Details />} />
          <Route
            exact
            path="/Direct_Leg_Business"
            element={<Direct_Leg_Business />}
          />
          <Route exact path="/Rank_Details" element={<Rank_Details />} />

          <Route exact path="/Matrix_downline" element={<Matrix_downline />} />
          <Route exact path="/Genealogy_View" element={<Genealogy_View />} />
          <Route exact path="/My_Team" element={<My_Team />} />
          <Route exact path="/Self_Address" element={<Self_Address />} />
          <Route
            exact
            path="/Transaction_Password"
            element={<Transaction_Password />}
          />
          <Route exact path="/Change_Password" element={<Change_Password />} />
          <Route exact path="/NFT_Address" element={<NFT_Address />} />
          <Route exact path="/Staking_history" element={<Staking_history />} />
          <Route
            exact
            path="/Staking_Claim_History"
            element={<Staking_Claim_History />}
          />
          <Route
            exact
            path="/Staking_Actvation"
            element={<Staking_Actvation />}
          />
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/Rewards" element={<Rewards />} />
          <Route exact path="/Achiever" element={<Achiever />} />
          <Route exact path="/My_Carbon_nfts" element={<My_Carbon_nfts />} />
          <Route exact path="/Query" element={<Query />} />
          <Route exact path="/Activate5050" element={<Activate5050 />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
