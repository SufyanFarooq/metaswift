import React from "react";

export default function Rewards() {
  return (
    <div className="nft_theme">
      <div class="main-content app-content">
        {/* <!-- container --> */}
        <div class="main-container container-fluid">
          {/* <!-- breadcrumb --> */}
          <div class="breadcrumb-header justify-content-between">
            <div class="left-content">
              <span class="main-content-title mg-b-0 mg-b-lg-1">Rewards</span>
            </div>
            {/* <!-- <div class="justify-content-center mt-2">
                            <ol class="breadcrumb breadcrumb-style3">
                                <li class="breadcrumb-item active" aria-current="page">Rewards</li>
                            </ol>
                        </div> --> */}
          </div>
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
                                  Level
                                </th>
                                <th
                                  tabIndex="0"
                                  aria-controls="myAssets"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Price: activate to sort column ascending"
                                >
                                  Reward
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
                            <tbody>
                              <tr class="even">
                                <td>1</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
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
            . All rights reserved
          </div>
        </div>
      </div>
      {/* <!---end----> */}
    </div>
  );
}
