import React from "react";

function Reward_Income() {
  return (
    <div className="nft_theme">
      <div class="main-content app-content">
        {/* <!-- container --> */}
        <div class="main-container container-fluid">
          {/* <!-- breadcrumb --> */}
          <div class="breadcrumb-header justify-content-between">
            <div class="left-content">
              <span class="main-content-title mg-b-0 mg-b-lg-1">
                Booster Income
              </span>
            </div>
            <div class="justify-content-center mt-2">
              <ol class="breadcrumb breadcrumb-style3">
                <li class="breadcrumb-item tx-15">
                  <a href="#">My Earnings</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Booster Income
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
                          <table
                            class="table table-bordered mb-0 text-nowrap dataTable no-footer"
                            id="myAssets"
                            role="grid"
                            aria-describedby="myAssets_info"
                          >
                            <thead>
                              <tr role="row">
                                <th
                                  tabIndex="0"
                                  aria-controls="myAssets"
                                  rowspan="1"
                                  colspan="1"
                                  aria-sort="ascending"
                                  aria-label="Coin: activate to sort column descending"
                                >
                                  S.No
                                </th>
                                <th
                                  tabIndex="0"
                                  aria-controls="myAssets"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Holdings: activate to sort column ascending"
                                >
                                  User Id
                                </th>
                                <th
                                  tabIndex="0"
                                  aria-controls="myAssets"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Price: activate to sort column ascending"
                                >
                                  From ID
                                </th>

                                <th
                                  tabIndex="0"
                                  aria-controls="myAssets"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Price: activate to sort column ascending"
                                >
                                  Income
                                </th>
                                <th
                                  tabIndex="0"
                                  aria-controls="myAssets"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Market Cap: activate to sort column ascending"
                                >
                                  Date &amp; Time
                                </th>
                              </tr>
                            </thead>
                            <tbody class="border-top-0">
                              {/* <!-- ngRepeat: m in matchingIncome --> */}
                              <tr
                                ng-repeat="m in matchingIncome"
                                class="ng-scope"
                              >
                                <td class="ng-binding">1</td>
                                <td class="ng-binding">778899</td>
                                <td class="ng-binding">772343</td>

                                <td class="ng-binding">100.0000 </td>

                                <td class="ng-binding">10-01-2023 18:13:01</td>
                              </tr>
                              {/* <!-- end ngRepeat: m in matchingIncome --> */}
                              <tr
                                ng-repeat="m in matchingIncome"
                                class="ng-scope"
                              >
                                <td class="ng-binding">2</td>
                                <td class="ng-binding">778899</td>
                                <td class="ng-binding">772343</td>

                                <td class="ng-binding">50.0000 </td>

                                <td class="ng-binding">10-01-2023 14:44:00</td>
                              </tr>
                              {/* <!-- end ngRepeat: m in matchingIncome --> */}
                              <tr
                                ng-repeat="m in matchingIncome"
                                class="ng-scope"
                              >
                                <td class="ng-binding">3</td>
                                <td class="ng-binding">778899</td>
                                <td class="ng-binding">774881</td>

                                <td class="ng-binding">5.0000 </td>

                                <td class="ng-binding">21-12-2022 13:35:59</td>
                              </tr>
                              {/* <!-- end ngRepeat: m in matchingIncome --> */}
                              <tr
                                ng-repeat="m in matchingIncome"
                                class="ng-scope"
                              >
                                <td class="ng-binding">4</td>
                                <td class="ng-binding">778899</td>
                                <td class="ng-binding">774881</td>

                                <td class="ng-binding">5.0000 </td>

                                <td class="ng-binding">21-12-2022 13:15:00</td>
                              </tr>
                              {/* <!-- end ngRepeat: m in matchingIncome --> */}
                              <tr
                                ng-repeat="m in matchingIncome"
                                class="ng-scope"
                              >
                                <td class="ng-binding">5</td>
                                <td class="ng-binding">778899</td>
                                <td class="ng-binding">772343</td>

                                <td class="ng-binding">10.0000 </td>

                                <td class="ng-binding">09-12-2022 23:42:31</td>
                              </tr>
                              {/* <!-- end ngRepeat: m in matchingIncome --> */}
                              <tr
                                ng-repeat="m in matchingIncome"
                                class="ng-scope"
                              >
                                <td class="ng-binding">6</td>
                                <td class="ng-binding">778899</td>
                                <td class="ng-binding">384701</td>

                                <td class="ng-binding">5.0000 </td>

                                <td class="ng-binding">08-12-2022 19:33:25</td>
                              </tr>
                              {/* <!-- end ngRepeat: m in matchingIncome -->
                                                            <!-- ngIf: matchingIncome.length==0 --> */}
                            </tbody>
                          </table>
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
            . <a href="#"> </a> All rights reserved{" "}
          </div>
        </div>
      </div>
      {/* <!---end----> */}
    </div>
  );
}

export default Reward_Income;
