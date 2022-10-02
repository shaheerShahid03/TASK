import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import "./table.css";
const InvoiceTable = () => {
  return (
    <>
      {/* TABLE */}

      <div className="container-sm mt-5 container-md container-lg ">
        <div>
          <div className="d-flex blackColor">
            <h4 className="item">Items</h4>
            <h4 className="item">(1)</h4>
          </div>

          {/* Table Heading */}

          <div>
            <div className=" heading d-flex flex-wrap">
              <p className="mt-2">Item</p>
              <p className="mt-2 u ">Unit</p>
              <p className="mt-2">Cost Price</p>
              <p className="mt-2 x">Quantity</p>
              <p className="mt-2 extra-margin">Total </p>
              <p className="mt-2">VAT%</p>
              <p className="mt-2 exxtra-margin ">Discount</p>
              <p className="mt-2 t">Total</p>
            </div>
          </div>
        </div>

        <div className=" border">
          <div className="d-flex flex-wrap sub-border">
            <div className="select fontSize">
              <div>
                {/* Select ITEM*/}

                <FormControl
                  className="selectItem ms-3 mt-2"
                  variant="standard"
                >
                  <Select

                  // value={age}
                  // onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                {/* <div>
                <h6 className="wareHouse">asdqw</h6>
              </div> */}
              </div>
            </div>

            {/* Unit */}

            <div className="unit br-left ">
              <div className="mt-2">
                <FormControl
                  className="selectUnit blackColor text-center ms-2"
                  variant="standard"
                >
                  <Select
                  // value={}
                  // onChange={}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="KG">KG</MenuItem>
                    <MenuItem value="Mile">Mile</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            {/* Cost Price */}

            <div className="costPrice  text br-left ">
              <div className="  text-center mt-2">
                <FormControl
                  className="cost  ms-2 blackColor"
                  variant="standard"
                >
                  <Input
                    className="text-center"
                    // value={item.costPrice}
                    // onChange={(e) => setCostPrice(e.target.value)}

                    endAdornment={
                      <InputAdornment position="end">SAR</InputAdornment>
                    }
                    // aria-describedby="standard-weight-helper-text"
                    // inputProps={{
                    //   "aria-label": "weight",
                    // }}
                  />
                </FormControl>
              </div>
            </div>

            {/* Quantity */}

            <div className="quantity br-left ">
              <div className="mt-2">
                <FormControl
                  className="quan text blackColor ms-2"
                  variant="standard"
                >
                  <Input
                  // value={quantity}
                  // onChange={(e) => setQuantity(e.target.value)}
                  />
                </FormControl>
              </div>
            </div>

            {/* Total Exc*/}

            <div className="total br-left ">
              <div className="mt-3">
                <p className="text-center blackColor totalVat ms-2">
                  {" "}
                  TOTAL SAR
                </p>
              </div>
            </div>

            {/* VAT */}

            <div className="VAT br-left ">
              <div className="mt-3">
                <p className="text-center blackColor vatPercent ms-2">
                  {" "}
                  VAT vatSAR
                </p>
              </div>
            </div>

            {/* Discount */}

            <div className="discount br-left ">
              <div className="mt-2">
                <FormControl
                  className="dist blackColor ms-2"
                  variant="standard"
                >
                  <Input
                    // value={discount}
                    // onChange={(e) => setDiscount(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">SAR</InputAdornment>
                    }
                    // aria-describedby="standard-weight-helper-text"
                    // inputProps={{
                    //   "aria-label": "weight",
                    // }}
                  />
                </FormControl>
              </div>
            </div>

            {/* Total INC*/}

            <div className="total br-left ">
              <div className="mt-3 d-flex">
                <p
                  // onChange={(e) => setTotalInc(e.target.value)}
                  className=" blackColor totalIncVAT text-center ms-2"
                >
                  TOTAL SAR
                </p>
                <RemoveCircleIcon
                  className="deleteIcon"
                  style={{ color: "red" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* SUMMARY */}

        <div className="row-5">
          <div className="wrapper-2">
            <div>
              <h4 className="summary">Summary</h4>
            </div>

            <div className=" d-flex s justify-content-between">
              <p>Total</p>
              <p>dynamic val</p>
            </div>

            <div className="d-flex justify-content-between s">
              <p>VAT</p>
              <p>dynamic val</p>
            </div>

            <div className="d-flex justify-content-between grandTotal s blueColor">
              <p>Grand Total</p>
              <p>dynamic val</p>
            </div>
            <div className="btn">
              <Button variant="contained">Contained</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default InvoiceTable;
