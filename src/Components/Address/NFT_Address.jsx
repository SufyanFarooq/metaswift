import React from "react";
import Sidebar from "../Navbar/Sidebar";

function NFT_Address() {
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
                Contract Address
              </span>
            </div>
            <div class="justify-content-center mt-2">
              <ol class="breadcrumb breadcrumb-style3">
                <li class="breadcrumb-item tx-15">
                  <a href="#">Address </a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Contract Address
                </li>
              </ol>
            </div>
          </div>
          {/* <!-- /breadcrumb --> */}
          {/* <div class="col-xl-7 col-sm-7 address_self">
              <div class="card cccd address_card " >
                <div class="card-body min_height">
                  <div class="row">
                    <div class="col-xl-12 col-lg-12 col-12">
                      <div class="mb-3 d-flex align-items-center">
                        <span class="tx-14">DORADO SmartContract : <a href="https://bscscan.com/address/0x6BeA8E272B0E9722ef3432Da1B366e2015542c1f#code" class="Txn_here txt_breack" target="_blank" >0x6BeA8E272B0E9722ef3432Da1B366e2015542c1f</a> </span>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-7 col-sm-7 address_self1">
              <div class="card cccd address_card" >
                <div class="card-body min_height">
                  <div class="row">
                    <div class="col-xl-12 col-lg-12 col-12">
                      <div class="mb-3 d-flex align-items-center">
                        <span class="tx-14">BUSD SmartContact  : <a href="https://bscscan.com/address/0x1cC96389D70B8fccF6D5dFB9C636163C0209e77a#code" class="Txn_here txt_breack" target="_blank" >0x1cC96389D70B8fccF6D5dFB9C636163C0209e77a</a> </span>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
            
           
            <div class="col-xl-7 col-sm-7 address_self1">
              <div class="card cccd address_card " >
                <div class="card-body min_height">
                  <div class="row">
                    <div class="col-xl-12 col-lg-12 col-12">
                      <div class="mb-3 d-flex align-items-center">
                        <span class="tx-14">Baby Doge Contract : <a href="https://bscscan.com/address/0xc748673057861a797275CD8A068AbB95A902e8de#code" class="Txn_here txt_breack" target="_blank" >0xc748673057861a797275CD8A068AbB95A902e8de</a> </span>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div> */}
          {/* <div class="col-xl-7 col-sm-7 address_self1">
              <div class="card cccd address_card" >
                <div class="card-body min_height">
                  <div class="row">
                    <div class="col-xl-12 col-lg-12 col-12">
                      <div class="mb-3 d-flex align-items-center">
                        <span class="tx-14">NFT Transfer SmartContract : <a href="https://bscscan.com/address/0xC9e29bc273861A510C3d259fc5152284E0aEf8e6#code" class="Txn_here txt_breack" target="_blank" >0xC9e29bc273861A510C3d259fc5152284E0aEf8e6</a> </span>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div> */}
          {/* <h5 class="mt-5"> Address : <a href="https://tronscan.org/#/contract/TW4FkjhirQG3ZPi8neDBtVmiyL6uMULVse" class="Txn_here txt_breack" target="_blank" >TW4FkjhirQG3ZPi8neDBtVmiyL6uMULVse</a> 
             </h5> */}
          {/* <!-- row closed --> */}
        </div>
        {/* <!-- /Container --> */}
      </div>

      {/* <!---footer----> */}
      <div class="main-footer">
        <div class="col-md-12 col-sm-12 text-center">
          <div class="container-fluid pd-t-0 ht-100p">
            {' '}
            Copyright ©  2023{' '}
            <a href="#" class="tx-primary">
              MetaSwift.ai
            </a>
            <a href="#"> </a> All rights reserved{' '}
          </div>
        </div>
      </div>
      {/* <!---end----> */}
    </div>
  );
}

export default NFT_Address;
