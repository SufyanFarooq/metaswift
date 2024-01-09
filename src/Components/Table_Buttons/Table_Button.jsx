import React, { useState } from "react";
import "./Table_Button.css";
import { Select } from "antd";
import { Pagination } from 'antd';
const Table_Buttons = ({
  setcurrentPage,
  currentPage,
  indexOfFirstPage,
  indexOfLastPost,
  totalData,
  listPerpage,
  handleRowsPerPageChange,
}) => {
 

    const handlePageChange =(page)=>{
      setcurrentPage(page)
    }

  // const totalPages = Math.ceil(totalData / listPerpage);

  // const handlePageClick = (page) => {
  //   if (page >= 1 && page <= totalPages) {
  //     setcurrentPage(page);
  //   }
  // };

  const handleSizeChange = (current, size) => {
    console.log("Page size changed to", size);
    // Update the page size in your state or perform other actions
    handleRowsPerPageChange(size);
  };


  return (
<div className="pagination-container" >
    <Pagination
      total={totalData}
      current={currentPage}
      pageSize={listPerpage}
      showSizeChanger
      pageSizeOptions={['10', '50', '100']}
      onChange={handlePageChange}
      onShowSizeChange={handleSizeChange}
      select={false}  
      className="custom-pagination"
      /> 
       </div>
  );
};

export default Table_Buttons;
