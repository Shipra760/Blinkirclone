import React from "react";
import Header from "../Component/Header";
import Category from "../Component/Category";
import Footer from "../Component/Footer";
import Banner from "../Component/Banner";
import Add from "../Component/Add";
import Slick from "../Component/Slick";  
import Box from "../Component/Box"; 
import Cart from "../Component/Cart";
import Box1 from "../Component/Box1"; 
import Crousel from "../Component/Crousel";
import Add1 from "../Component/Add1";
import TwoBanner from "../Component/TwoBanner";
import Add2 from "../Component/Add2";
import Box2 from "../Component/Box2";

export default function Main() {
  return (
    <>
      <Header />
      <Category />
      <Banner />
      <Add />
      <Slick />
      <Box />
      <Cart />
      <Box1 />
      <Crousel />
      <Add1 />
      <TwoBanner />
      <Add2 />
      <Box2 />
      <Footer />
    </>
  );
}
