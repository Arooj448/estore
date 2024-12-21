import React from "react";
import { Button, Card, CardBody, CardText } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItem , removeItem } from "../Redux/Slices/CartSlice";
import { Link } from "react-router-dom";




const ProductCard = ({ product }) =>{
  const dispatch = useDispatch();

  console.log ("product" , product);

 

  

    return(
         <Card className="card-product">
                <Card.Img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800" alt="wool" className="product-img" />
                <Card.Body>
  <Card.Title>{product.name}</Card.Title>
  <CardText>Topshop knitted oversized crew mini dress with exposed seam detail in grey</CardText>
  <Card.Text>${product.price}</Card.Text>
  <Link to={`/product/${product.id}`} state={{ product }}>

    <Button variant="success">View Details</Button>
  </Link>
 
  
</Card.Body>
            
         </Card>
         
    );
};

export default ProductCard;