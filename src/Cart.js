import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { popularProducts } from "./data";
const mainContainer = {
  padding: "2px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  clear: "right",
};

const Container = {
  flex: "1",
  margin: "5px",
  minWidth: "280px",
  height: "350px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: " #f5fbfd",
  position: " relative",
  flexDirection: "column",
};

const imageContainer = {
  display: "flex",
  flexDirection: "vertical",
  width: "auto",
  height: "80%",
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
  alignItems: "center",
};
const billRow = {
  display: "flex",
  fontWeight: "500",
  border: "1px solid grey",
  borderRadius: "5px",
  margin: "5px",
  padding: "10px",
  flexDirection: "vertical",
  justifyContent: "space-between",
  //   flex: "1",
};
const orderButton = {
  padding: "10px",
  border: "1px solid grey",
  borderRadius: "5px",
  cursor: "pointer",
};
const emptyCart = {
  fontWeight: "500",
  fontSize:"50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart.products.length);
  return (
    <div>
      <div style={headerText}>CART</div>
      {cart.products.length ? (
        <>
          <div style={mainContainer}>
            {cart.products.map((product) => {
              return (
                <div key={product.id} style={Container}>
                  <img src={product.img} style={imageContainer} alt="Hola" />
                  <div style={info}>
                    <div style={text}>{product.name}</div>
                    <div style={text}>{product.price} Rs</div>
                    <div style={text}>x {product.quantity}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={billRow}>
            <div style={text}>Total: {cart.total}</div>
            <Link to="/bill" style={{ textDecoration: "none", color: "black" }}>
              <div style={orderButton}>Place Order</div>
            </Link>
          </div>
        </>
      ) : (
        <div style={emptyCart}>Cart is Empty</div>
      )}
    </div>
  );
}

export default Cart;
