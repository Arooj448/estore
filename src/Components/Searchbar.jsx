import React from "react";
import { FormControl ,Form , Button } from "react-bootstrap";

const Searchbar = () =>{
return(
   <Form className="search-bar d-flex">
    <FormControl
      type="search"
      placeholder="Search for products..."
      className="me-2"
      aria-label="Search"
    />
    <Button variant="success" >Search</Button>

 </Form>
);

};


export default Searchbar;
