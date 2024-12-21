import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getItemsSelector } from "../Redux/Slices/CartSlice";
import { useNavigate } from "react-router-dom";

const CartButton = () => {
  const items = useSelector(getItemsSelector);
  const navigate = useNavigate();

  return (
    <Button
      variant="outline-secondary"
      className="cart-button ms-3 position-relative"
      onClick={() => navigate("/cart")} // Navigate to the cart page
    >
      <span role="img" aria-label="cart">
        🛒
      </span>
      {items.length > 0 && (
        <span className="cart-badge">
          {items.length}
        </span>
      )}
    </Button>
  );
};

export default CartButton;
