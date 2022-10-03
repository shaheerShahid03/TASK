import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import "./table.css";
const InvoiceTable = () => {
  // useState for grand total ,sub total , Vat and items count
  const [grandTotal, setGrandTotal] = useState("");
  const [subTotal, setSubTotal] = useState("");
  const [totalVat, setTotalVat] = useState("");
  const [itemsCounter, setItemsCounter] = useState(0);

  const items = [
    {
      itemId: 1,
      itemName: "Ear Pods",
      price: 100,
      unit: "KG",
      quantity: 1,
      discountPercentage: 10,
      vatPercentage: 15,
    },
    {
      itemId: 2,
      itemName: "IPhone",
      price: 90000,
      unit: "Mile",
      quantity: 1,
      discountPercentage: 20,
      vatPercentage: 15,
    },
    {
      itemId: 3,
      itemName: "Pencil",
      price: 20,
      unit: "Mile",
      quantity: 1,
      discountPercentage: 20,
      vatPercentage: 15,
    },
    {
      itemId: 4,
      itemName: "Samsung",
      price: 70000,
      unit: "Mile",
      quantity: 1,
      discountPercentage: 10,
      vatPercentage: 15,
    },
    {
      itemId: 5,
      itemName: "Rubber",
      price: 10,
      unit: "Mile",
      quantity: 1,
      discountPercentage: 20,
      vatPercentage: 15,
    },
    {
      itemId: 6,
      itemName: "Table",
      price: 700,
      unit: "Mile",
      quantity: 1,
      discountPercentage: 20,
      vatPercentage: 15,
    },
    {
      itemId: 7,
      itemName: "Chair",
      price: 90000,
      unit: "Mile",
      quantity: 1,
      discountPercentage: 20,
      vatPercentage: 15,
    },
  ];

  // useStates for handling rows
  const [rows, setRows] = useState([
    {
      itemId: 0,
      itemName: "",
      price: 0,
      unit: "",
      quantity: 0,
      discountPercentage: 0,
      vatPercentage: 0,
    },
  ]);

  React.useEffect(() => {
    totalCalc();
  }, [rows]);

  //total calc handler

  const totalCalc = () => {
    // TOTAL VAT

    const totalVat = rows.reduce((acc, curr) => {
      return acc + curr.vatPercentage;
    }, 0);
    setTotalVat(totalVat);

    // SUB TOTAl
    const subTotal = rows.reduce((acc, curr) => {
      return acc + curr.totalExc;
    }, 0);

    setSubTotal(subTotal);

    // GRAND TOTAL
    const grandTotal = rows.reduce((acc, curr) => {
      return acc + curr.totalInc;
    }, 0);
    setGrandTotal(grandTotal);
  };

  //handler row addition

  const handleNewRow = (key) => {
    const temp = [...rows];

    if (key + 1 >= rows.length) {
      temp.push({
        itemId: 0,
        itemName: "",
        price: 0,
        unit: "",
        quantity: 0,
        discountPercentage: 0,
        vatPercentage: 0,
        totalExc: 0,
        totalInc: 0,
      });

      // Adding 1 to the total items counter
      setItemsCounter(itemsCounter + 1);
    }

    setRows(temp);
  };

  //handle change in rows and Calculate total vat percentage etc

  const handleRowChange = (e, key) => {
    // Filtering specific Item
    const itemm = items.filter((item) => item.itemName === e.target.value);

    // Finding percentage of discount and vat
    const temp = [...rows];
    temp[key].itemId = itemm[0].itemId;
    temp[key].itemName = itemm[0].itemName;
    temp[key].price = itemm[0].price;

    temp[key].unit = itemm[0].unit;
    temp[key].quantity = itemm[0].quantity;
    temp[key].discountPercentage = itemm[0].discountPercentage;
    temp[key].vatPercentage = itemm[0].vatPercentage;

    // Calculating total exc and total inc function
    totalExcInc(key);

    //assign to state
    setRows(temp);
  };

  // Calculating total exc and total inc function
  const totalExcInc = (key) => {
    const temp = [...rows];

    // Calculating discount

    const discountPercent =
      (temp[key].discountPercentage / 100) * temp[key].price;

    const vatpercent = (temp[key].vatPercentage / 100) * temp[key].price;

    //FORMULAS TO CALCULATE TOTAL EXC AND TOTAL INC
    const exc = temp[key].price * temp[key].quantity - discountPercent;
    const inc = exc + vatpercent;

    temp[key].totalExc = exc;
    temp[key].totalInc = inc;
  };

  //handle row deletion &&
  const handleRowDelete = (key) => {
    const temp = [...rows];
    temp.splice(key, 1);

    // subtracting 1 to the total items counter
    setItemsCounter(itemsCounter - 1);

    setRows(temp);
  };

  //value change handler
  const handleChangeValue = (e, key) => {
    const temp = [...rows];
    temp[key][e.target.name] = e.target.value;
    setRows(temp);

    console.log("rows", rows);

    setTimeout(() => {
      //function call for updating the total amount
      totalExcInc(key);
      totalCalc();
      console.log("updated");
    }, 1000);
  };

  return (
    <>
      {/* TABLE */}

      <div className="container-sm mt-5 container-md container-lg ">
        <div>
          <div className="d-flex blackColor">
            <h4 className="item">Items</h4>
            <h4 className="item ms-3">({itemsCounter})</h4>
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

        {/* start */}

        {rows.map((item, key) => {
          return (
            <div key={key}>
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
                          onChange={(e) => handleRowChange(e, key)}
                          onClick={() => handleNewRow(key)}
                        >
                          {items.map((select, index) => {
                            return (
                              <MenuItem key={index} value={select.itemName}>
                                {select.itemName}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
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
                          value={item.unit}
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
                          value={item.price}
                          name="price"
                          onChange={(e) => handleChangeValue(e, key)}
                          endAdornment={
                            <InputAdornment position="end">SAR</InputAdornment>
                          }
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
                          value={item.quantity}
                          name="quantity"
                          onChange={(e) => handleChangeValue(e, key)}
                        />
                      </FormControl>
                    </div>
                  </div>

                  {/* Total Exc*/}

                  <div className="total br-left ">
                    <div className="mt-3">
                      <p className="text-center blackColor totalVat ms-2">
                        {item.totalExc} SAR
                      </p>
                    </div>
                  </div>

                  {/* VAT */}

                  <div className="VAT br-left ">
                    <div className="mt-3">
                      <p className="text-center blackColor vatPercent ms-2">
                        {item.vatPercentage} SAR
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
                          value={item.discountPercentage}
                          name="discountPercentage"
                          onChange={(e) => handleChangeValue(e, key)}
                          endAdornment={
                            <InputAdornment position="end">SAR</InputAdornment>
                          }
                        />
                      </FormControl>
                    </div>
                  </div>

                  {/* Total INC*/}

                  <div className="total br-left ">
                    <div className="mt-3 d-flex">
                      <p className=" blackColor totalIncVAT text-center ms-2">
                        {item.totalInc} SAR
                      </p>

                      {/* Delete Button */}
                      <RemoveCircleIcon
                        onClick={() => handleRowDelete(key)}
                        className="deleteIcon"
                        style={{ color: "red" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* end */}

        {/* SUMMARY */}

        <div className="row-5">
          <div className="wrapper-2">
            <div>
              <h4 className="summary">Summary</h4>
            </div>

            <div className=" d-flex s justify-content-between">
              <p>Total</p>
              <p>{subTotal} SAR</p>
            </div>

            <div className="d-flex justify-content-between s">
              <p>VAT</p>
              <p>{totalVat} SAR</p>
            </div>

            <div className="d-flex justify-content-between grandTotal s blueColor">
              <p>Grand Total</p>
              <p>{grandTotal} SAR</p>
            </div>

            {/* Button */}
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
