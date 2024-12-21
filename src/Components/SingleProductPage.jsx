import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { addItem as addToCartAction } from "../Redux/Slices/CartSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const SingleProductPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = location.state?.product;

  if (!product) {
    // If no product is found in state, redirect to home or show an error
    return (
      <div className="text-center mt-5">
        <h2>Product not found!</h2>
        <Button onClick={() => navigate("/")}>Go Back</Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCartAction({ name: product.name, price: product.price }));
  };

  return (
    <div className="container mt-5">
      <Card className="shadow-lg border-0">
        <Row className="g-0">
          {/* Column for Image */}
          <Col md={6}>
            <Card.Img
              src={product.Image}
              alt={product.name}
              className="img-fluid rounded-start"
              style={{ objectFit: "cover", height: "100%" }}
            />
          </Col>
          {/* Column for Content */}
          <Col md={6} className="d-flex align-items-center">
            <Card.Body>
              <Card.Title className="display-6">{product.name}</Card.Title>
              <Card.Text className="text-muted mb-3">
                <strong>Price:</strong> ${product.price}
              </Card.Text>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                fringilla vel turpis eu laoreet. Morbi fermentum odio a lacus
                tincidunt, vitae ullamcorper felis interdum.
              </Card.Text>
              <div className="mt-4">
                <Button
                  variant="success"
                  className="me-2"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="outline-secondary"
                  onClick={() => navigate(-1)}
                >
                  Go Back
                </Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default SingleProductPage;
