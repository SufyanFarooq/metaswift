import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Sidebar from "../Navbar/Sidebar";

export default function SupportTicket() {
  return (
    <div>
      <Sidebar />
      <div class="main-content app-content">
        {/* <!-- container --> */}
        <div class="main-container container-fluid">
          {/* <!-- breadcrumb --> */}
          <div class="breadcrumb-header justify-content-between">
            <div class="left-content">
              <span class="main-content-title mg-b-0 mg-b-lg-1">
                Support Tickets
              </span>
            </div>
            {/* <!-- <div class="justify-content-center mt-2">
                <ol class="breadcrumb breadcrumb-style3">
                    <li class="breadcrumb-item active" aria-current="page">Support Tickets</li>
                </ol>
            </div> --> */}
          </div>
          {/* <!-- /breadcrumb --> */}

          <div class="row">
            <div class="col-xl-12">
              <div class="card">
                <div class="card-body">
                  <div class="ticke_generate">
                    <Popup
                      trigger={
                        <button
                          type="button"
                          class="btn btn-primary mt-2"
                          //   data-bs-toggle="modal"
                          //   data-bs-target="#myModal"
                        >
                          Generate Ticket{" "}
                        </button>
                      }
                      position="right center"
                    >
                      {(close) => (
                        <div>
                          <div
                            class="modal-dialog modal-dialog-scrollable modal-dialog-centered"
                            role="document"
                          >
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title">Create new Ticket</h5>
                                <button
                                  type="button"
                                  class="close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">×</span>
                                </button>
                              </div>
                              <form
                                action="/Users/HelpDeskPost"
                                method="post"
                                class="ng-pristine ng-valid"
                              >
                                <div class="modal-body">
                                  <div class="row">
                                    <div class="col-md-12">
                                      <label>
                                        <strong>Query Type</strong>
                                      </label>
                                      <select
                                        name="query_type"
                                        id="query_type"
                                        class="form-control input-xlarge form-half"
                                        required=""
                                      >
                                        <option value="Profile Edit">
                                          Profile Edit
                                        </option>
                                        <option value="Sign Up">Sign Up</option>
                                        <option value="Joining Package">
                                          Joining Package
                                        </option>
                                        <option value="Commission/Income">
                                          Commission/Income
                                        </option>
                                        <option value="Payment Issue">
                                          Payment Issue
                                        </option>
                                        <option value="Others">Others</option>
                                      </select>
                                    </div>
                                    <div class="col-md-12">
                                      <label>
                                        <strong>Subject</strong>
                                      </label>
                                      <input
                                        name="querTypeText"
                                        class="form-control input-xlarge form-half "
                                        type="text"
                                        required=""
                                      />
                                    </div>
                                    <div class="col-md-12">
                                      <label>
                                        <strong>Your Query</strong>
                                      </label>
                                      <textarea
                                        name="query"
                                        class="form-control input-xlarge form-full "
                                        required=""
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn btn-danger light"
                                    data-bs-dismiss="modal"
                                    onClick={() => close()}
                                  >
                                    Close
                                  </button>

                                  <br />
                                  <input
                                    class="btn btn-primary"
                                    name="logaTicket"
                                    value="Sumbit Query "
                                    type="submit"
                                    style={{ float: "right" }}
                                  />
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </div>
                  <br />
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
                                <th>#</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Query Type</th>
                                <th>Query Subject</th>
                                <th>Query</th>
                                <th>Admin Reply</th>
                                <th>Ticket Id</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td colspan="8" class="text-center">
                                  No Record found !
                                </td>
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
            <a href="#"> </a> All rights reserved{" "}
          </div>
        </div>
      </div>
      {/* <!---end----> */}
    </div>
  );
}
