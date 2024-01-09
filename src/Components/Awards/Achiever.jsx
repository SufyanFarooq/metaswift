import React, { useEffect, useState } from "react";
import { API } from "../../Redux/API";
import Sidebar from "../Navbar/Sidebar";
import Table from "../Table/Table";
import Table_Buttons from "../Table_Buttons/Table_Button";

function Achiever() {
  const user = sessionStorage.getItem("user");
  let ress = JSON.parse(user);
  if (ress == undefined || ress == "" || ress == null) {
    window.location.href = "/login";
  }
  let uId = ress.uid;
  const [userid, setUserId] = useState(uId);
  const [toDate, setToDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [referralApi, setreferralApi] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [listPerpage, setlistPerpage] = useState(10);

  const Rewards_Income = async () => {
    try {
      let responce = await API.get(
        `/SP_GetMember_RewardForUser?uid=${uId}&type=2`
      );

      responce = responce.data.data;
      console.log("Rewards-->", responce);

      setreferralApi(responce);
      console.log("Checkreward", referralApi);
    } catch (e) {
      console.log("Something Error", e);
    }
  };
  useEffect(() => {
    Rewards_Income();
  }, []);

  const indexOfLastPost = currentPage * listPerpage;
  const indexOfFirstPage = indexOfLastPost - listPerpage;
  const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost);

  var [matching_income, set_matching_income] = new useState({
    cols: [
      { Header: "S.No", accessor: "row" },
      { Header: "Title", accessor: "Title" },
      { Header: "Rewards", accessor: "Reward" },
      { Header: "Bonus Achieved", accessor: "Bonus_Achieved" },
      { Header: "Status", accessor: "STATUS" },
      { Header: "Achieved On", accessor: "achieveddate" },
      { Header: "Paid On", accessor: "paiddate" },
    ],
  });
  return (
    <div className="nft_theme">
      <Sidebar />
      <div class="main-content app-content">
        {/* <!-- container --> */}
        <div class="main-container container-fluid">
          {/* <!-- breadcrumb --> */}
          <div class="breadcrumb-header justify-content-between">
            <div class="left-content">
              <span class="main-content-title mg-b-0 mg-b-lg-1">
                Achievers of EL-DORADO
              </span>
            </div>
            <div class="justify-content-center mt-2">
              <ol class="breadcrumb breadcrumb-style3">
                <li class="breadcrumb-item tx-15">
                  <a href="#">Awards</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Achievers of EL-DORADO
                </li>
              </ol>
            </div>
          </div>
          {/* <!-- /breadcrumb --> */}

          <div class="row">
            <div class="col-xl-12">
              <div class="card">
                <div class="card-body">
                  <div class="table-responsive">
                    <div
                      id="myAssets_wrapper"
                      class="dataTables_wrapper dt-bootstrap5 no-footer"
                    >
                      <div class="row">
                        <div class="col-sm-12">
                          <Table
                            data={[...currentPost]}
                            columns={matching_income.cols}
                          />
                          <Table_Buttons
                            indexOfFirstPage={indexOfFirstPage}
                            indexOfLastPost={indexOfLastPost}
                            setcurrentPage={setcurrentPage}
                            currentPage={currentPage}
                            totalData={referralApi.length}
                            listPerpage={listPerpage}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /Container --> */}
      </div>

      {/* <!---footer----> */}
      <div class="main-footer">
        <div class="col-md-12 col-sm-12 text-center">
          <div class="container-fluid pd-t-0 ht-100p">
            {" "}
            Copyright © 2023{" "}
            <a href="#" class="tx-primary">
              MetaSwift.ai
            </a>
            <a href="#"> </a> All rights reserved{" "}
          </div>
        </div>
      </div>
      {/* <!---end----> */}
    </div>
  );
  // return (
  //     <div className='nft_theme'>
  //         <Sidebar />
  //         <div class="main-content app-content">
  //             {/* <!-- container --> */}
  //             <div class="main-container container-fluid">
  //                 {/* <!-- breadcrumb --> */}
  //                 <div class="breadcrumb-header justify-content-between">
  //                     <div class="left-content">
  //                         <span class="main-content-title mg-b-0 mg-b-lg-1">Achievers of EL-DORADO</span>
  //                     </div>
  //                     <div class="justify-content-center mt-2">
  //                         <ol class="breadcrumb breadcrumb-style3">
  //                             <li class="breadcrumb-item tx-15">
  //                                 <a href="#">Award </a>
  //                             </li>
  //                             <li class="breadcrumb-item active" aria-current="page">Achievers of EL-DORADO</li>
  //                         </ol>
  //                     </div>
  //                 </div>
  //                 {/* <!-- /breadcrumb --> */}
  //                 <div class="row">

  //                     <div class="col-xl-12">
  //                         <div class="card">
  //                             <div class="card-body">
  //                                 <div class="table-responsive">
  //                                     <div id="myAssets_wrapper">
  //                                     <div class="row">
  //                                             <div class="col-sm-12">
  //                                                 <table className='td_ftbold'>
  //                                                     <thead class="border_bottom">
  //                                                         <tr>
  //                                                             <th>Rank</th>
  //                                                             <th>Rewards</th>
  //                                                             <th> Bonus Achieved</th>
  //                                                             <th>Status</th>
  //                                                             <th>Achieved On</th>
  //                                                         </tr>
  //                                                     </thead>
  //                                                     <tbody >
  //                                                         <tr className='table_tr'>
  //                                                             <td>Platinum</td>
  //                                                             <td>$10,000 Or Harley Davidson</td>
  //                                                             <td>Not Yet</td>
  //                                                             <td>Yet to Achieve</td>
  //                                                             <td> 2023-02-22T14:28:47.137Z </td>
  //                                                         </tr>
  //                                                         <tr className='table_tr'>
  //                                                             <td>Double Platinum</td>
  //                                                             <td>$20,000 Or Sedan Car</td>
  //                                                             <td>Hurray Achieved</td>
  //                                                             <td className='congrtulation'>Congratulations</td>
  //                                                             <td> 2023-02-22T14:28:47.137Z </td>
  //                                                         </tr>
  //                                                         <tr className='table_tr'>
  //                                                             <td>Diamond</td>
  //                                                             <td>$50,000 Or Volvo SUV</td>
  //                                                             <td>Not Yet</td>
  //                                                             <td>Yet to Achieve</td>
  //                                                             <td> 2023-02-22T14:28:47.137Z </td>
  //                                                         </tr>
  //                                                         <tr className='table_tr'>
  //                                                             <td>Double Diamond</td>
  //                                                             <td>$125,000 Or Audi Car</td>
  //                                                             <td>Not Yet</td>
  //                                                             <td>Yet to Achieve</td>
  //                                                             <td> 2023-02-22T14:28:47.137Z </td>
  //                                                         </tr>
  //                                                         <tr className='table_tr'>
  //                                                             <td>Royal Diamond</td>
  //                                                             <td>$250,000 Or Lamborghini</td>
  //                                                             <td>Not Yet</td>
  //                                                             <td>Yet to Achieve</td>
  //                                                             <td> 2023-02-22T14:28:47.137Z </td>
  //                                                         </tr>
  //                                                         <tr className='table_tr'>
  //                                                             <td>Ambassador </td>
  //                                                             <td>$500,000 Or Rolls Royce Ghost</td>
  //                                                             <td>Not Yet</td>
  //                                                             <td>Yet to Achieve</td>
  //                                                             <td> 2023-02-22T14:28:47.137Z </td>
  //                                                         </tr>
  //                                                         <tr className='table_tr'>
  //                                                             <td>Royal Ambassador</td>
  //                                                             <td>$12,50,000 Or 4 BHK Luxury Villa</td>
  //                                                             <td>Not Yet</td>
  //                                                             <td>Yet to Achieve</td>
  //                                                             <td> 2023-02-22T14:28:47.137Z </td>
  //                                                         </tr>
  //                                                         <tr className='table_tr'>
  //                                                             <td>Crown Ambassador</td>
  //                                                             <td>$2,500,000 Or Luxury Villa in Emirates Hills</td>
  //                                                             <td>Not Yet</td>
  //                                                             <td>Yet to Achieve</td>
  //                                                             <td> 2023-02-22T14:28:47.137Z </td>
  //                                                         </tr>
  //                                                         <tr className='table_tr'>
  //                                                             <td>Chief of EL-DORADO</td>
  //                                                             <td>$5,000,000 Or Premium Yatch</td>
  //                                                             <td>Not Yet</td>
  //                                                             <td>Yet to Achieve</td>
  //                                                             <td> 2023-02-22T14:28:47.137Z </td>
  //                                                         </tr>
  //                                                     </tbody>
  //                                                 </table>
  //                                             </div>
  //                                         </div>
  //                                     </div>
  //                                 </div>
  //                             </div>
  //                         </div>
  //                     </div>
  //                 </div>
  //                 {/* <!-- row closed --> */}
  //             </div>
  //             {/* <!-- /Container --> */}
  //         </div>

  //         {/* <!---footer----> */}
  //         <div class="main-footer">
  //             <div class="col-md-12 col-sm-12 text-center">
  //                 <div class="container-fluid pd-t-0 ht-100p">
  //                     {' '}
  //                     Copyright ©  2023{' '}
  //                     <a href="#" class="tx-primary">
  //                         MetaSwift.ai
  //                     </a>
  //                     <a href="#"> </a> All rights reserved{' '}
  //                 </div>
  //             </div>
  //         </div>
  //         {/* <!---end----> */}

  //     </div>
  // )
}

export default Achiever;
