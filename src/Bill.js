import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { popularProducts } from "./data";
import { empty } from "./redux/cartRedux";
import {v4 as uuid} from "uuid";
import { addBill } from "./redux/billsRedux";
const mainContainer = {
  margin: "20px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  backgroundColor: " #f5fbfd",
};

const headerText = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  fontWeight: "500",
  fontSize: "25px",
};
const info = {
  display: "flex",
  flexDirection: "vertical",
  justifyContent: "space-around",
  width: "100%",
};
const text = {
  fontWeight: "500",
  display: "flex",
  flex: 1,
  justifyContent: "space-around",
};
const totalText = {
  fontWeight: "500",
  display: "flex",
  flex: 1,
  padding: "10px",
  justifyContent: "space-around",
};
const billRow = {
  display: "flex",
  fontWeight: "500",
  border: "1px solid grey",
  borderRadius: "5px",
  padding: "10px",
  flexDirection: "column",
  justifyContent: "space-between",
};
const homeButton = {
  padding: "10px",
  border: "1px solid grey",
  borderRadius: "5px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: " #f5fbfd",
};
const billver = {
  display: "flex",
  flexDirection: "vertical",
  justifyContent: "space-between",
};
function Bill() {
  const bill = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleClickHome = () => {
    dispatch(empty());
  };
  const ref=uuid();
  dispatch(addBill({ref,...bill}));
  console.log(useSelector((state) => state.bill));
  return (
    <div>
      <div style={headerText}>THANK YOU FOR ORDER</div>
      <div style={mainContainer}>
        <div style={billRow}>
          <div>
            {bill.products.map((product) => {
              return (
                <div key={product.id}>
                  <div style={info}>
                    <div style={text}>{product.name}</div>
                    <div style={text}>{product.price} Rs</div>
                    <div style={text}>x {product.quantity}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={billver}>
            <div style={totalText}>Total : {bill.total}</div>
            <div style={totalText}>Reference Id : {ref}</div>
          </div>

          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <div style={homeButton} onClick={handleClickHome}>
              HOME
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Bill;
