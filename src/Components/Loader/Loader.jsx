import React from "react";
import { CirclesWithBar, Dna } from "react-loader-spinner";
import './Loader.css'
export default function Loader() {
  return (
    <div>
        <div className="Spinner_main">
            <div className="Inner_div_loader">

        <Dna
  visible={true}
  height="500"
  width="500"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/>
            </div>

        </div>
    </div>
  );
}
