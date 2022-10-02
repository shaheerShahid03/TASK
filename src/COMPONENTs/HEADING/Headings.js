import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "./heading.css";
const Headings = () => {
  return (
    // First Heading

    <div className=" invoice container-sm container-md container-lg">
      <div className=" d-flex ">
        <p>Purchase</p>

        <p className="ms-3 greyColor">/</p>

        <p className="ms-3 greyColor">Purchase Invoice</p>
      </div>

      {/*  Second Heading */}

      <div className=" purchase d-flex">
        <div className=" blueColor">
          <ArrowBackIcon />
        </div>
        <div>
          <p className=" ms-3 blackColor">Purchase Invoice</p>
        </div>
      </div>
    </div>
  );
};

export default Headings;
