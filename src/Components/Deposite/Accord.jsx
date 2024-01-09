import React, { useState } from "react";

const Accord = ({ tl, cn }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccord = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div>
        <div className={`accord ${isActive ? "active" : ""}`}>
          <div className="accord-header" onClick={toggleAccord}>
            <i class="fa fa-file-text-o" aria-hidden="true"></i>
            {tl}
            <span className={`arrow ${isActive ? "open" : ""}`}>&#9660;</span>
          </div>
          {isActive && <div className="accord-content">{cn}</div>}
        </div>
      </div>
    </>
  );
};

export default Accord;
