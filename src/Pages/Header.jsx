import React from "react";

import Logo from "../Components/Logo"; // Logo component
import SearchBar from "../Components/Searchbar"; // Search Bar component
import Cart from "../Components/Cart"; // Cart component

const Header = () => {
  // Accessing the total quantity of items in the cart from the Redux store


  return (
    <header className="header-container">
      {/* Logo Component */}
      <Logo />

      {/* Search Bar Component */}
      <SearchBar />

      {/* Cart Button Component */}
      <Cart />
    </header>
  );
};

export default Header;
