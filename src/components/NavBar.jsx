import React from "react";
import CartWidget from "./CartWidget";
import { ChakraProvider } from '@chakra-ui/react'

const NavBar = ({ informacion, edad }) => {
  return (
    <>
    <ChakraProvider/> 
      <CartWidget />
      <div>NavBar</div>

      <h1>{informacion}</h1>
      <h1>{edad}</h1>
      <p>esta es mi NavBar </p>
      
    </>
  );
};

export default NavBar;
