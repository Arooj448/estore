import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getItemsSelector,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../Redux/Slices/CartSlice";
import { ListGroup, Button } from "react-bootstrap";

const CartPage = () => {
  const items = useSelector(getItemsSelector);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return <h3 className="text-center mt-5">Your Cart is Empty!</h3>;
  }

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      <ListGroup>
        {items.map((item) => (
          <ListGroup.Item
            key={item.name}
            className="d-flex justify-content-between align-items-center"
          >
            <div>
              <h5>{item.name}</h5>
              <p>${item.price.toFixed(2)} x {item.quantity}</p>
            </div>
            <div>
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => dispatch(decrementQuantity({ name: item.name }))}
                disabled={item.quantity <= 1}
              >
                -
              </Button>
              <span className="mx-2">{item.quantity}</span>
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => dispatch(incrementQuantity({ name: item.name }))}
              >
                +
              </Button>
              <Button
                variant="outline-danger"
                size="sm"
                className="ms-3"
                onClick={() => dispatch(removeItem({ name: item.name }))}
              >
                Remove
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h3 className="mt-4">Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default CartPage;
