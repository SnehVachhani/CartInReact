import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@material-ui/core";
import { useSelector } from "react-redux";

const navCSS = {
  fontWeight: "500",
  alignItems: "center",
  float: "right",
  display: "block",
  border: "1px solid grey",
  padding: "1px 7px 3px 7px",
  fontSize: "20px",
  cursor: "pointer",
  marginRight: "8px",
};
function Nav() {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
      <div style={navCSS}>
        <Badge badgeContent={quantity} color="primary">
          GO TO CART
        </Badge>
      </div>
    </Link>
  );
}

export default Nav;
