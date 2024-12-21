import React from "react";
import ProductCard from "./ProductCard";
import {Container , Row , Col} from 'react-bootstrap'


const ProductGrid =() =>{

    const product=[
    {id:1,
     name:"Product 1", 
     price:29, 
     Image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800'},

    {id:2,
     name:"Product 2",
     price:29 , 
     Image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800'},

    {id:3, name:"Product 3",  price:29 , Image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800'},
    {id:4, name:"Product 4",  price:29 , Image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800'},
    {id:5, name:"Product 5",  price:29 , Image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800'},
    {id:6, name:"Product 6",  price:29 , Image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800'},
    ];

    return(
        <Container>
            <Row>
                {product.map((product)=>
                (
                   <Col key={product.id} sm={12} md={6} lg={4} className="d-flex justify-content-center">
                         <ProductCard product={product}  // map product name and price dynically get
                        />
                    
                    </Col>
                )
                
               ) }
            </Row>
        </Container>
    )

}


export default ProductGrid;