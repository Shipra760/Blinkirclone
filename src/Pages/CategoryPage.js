import React from "react";
import { useParams } from "react-router-dom";

// Common Layout Components
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import MobileFooter from "../Component/MobileFooter";
import Category from "../Component/Category";

// Your Custom Content Components

import Add from "../Component/Add";
import Add1 from "../Component/Add1";
import Add2 from "../Component/Add2";
import Box from "../Component/Box";
import Box1 from "../Component/Box1";
import Box2 from "../Component/Box2";
import Cart from "../Component/Cart";
import Crousel from "../Component/Crousel";
import TwoBanner from "../Component/TwoBanner";
import Banner from "../Component/Banner";
import Beauty from "../Component/Beauty";
import Decor from "../Component/Decor";
import Kid from "../Component/Kid";
import KidBox from "../Component/KidBox";
import KidCart from "../Component/KidCart";
import DecorBox from "../Component/DecorBox";
import BeautyBox from "../Component/BeautyBox";
import Electronic from "../Component/Electronic";

export default function CategoryPage() {
  const { categoryName } = useParams();

  const allContent = (
    <>
      <Banner />
      <Add />
      <Box />
      <Cart />
      <Add1 />
      <Box1 />
      <Crousel />
      <Electronic />
      <Add2 />
      <Box2 />
      <Beauty />
      <Decor />
      <TwoBanner />
      <Kid />
    </>
  );

  const categoryContent = {
    electronics: (
      <div>
        <Add2 />
        <Electronic />
        <Crousel />
        <Box2 />
        <TwoBanner />
      </div>
    ),
    beauty: (
      <div>
        <Beauty />

        <Crousel />
        <BeautyBox />
        <TwoBanner />
      </div>
    ),
    kids: (
      <div>
        <Kid />
        <KidCart />
        <TwoBanner />
        <KidBox />
        <Crousel />
      </div>
    ),
    decor: (
      <div>
        <Decor />
        <Crousel />
        <DecorBox />
        <TwoBanner />
      </div>
    ),
  };

  return (
    <>
      <Header />
      <Category />

      <div style={{ marginTop: "1px" }}>
        {categoryName === "all"
          ? allContent
          : categoryContent[categoryName] || <p>❌ Category not found</p>}
      </div>

      <Footer />
      <MobileFooter />
    </>
  );
}
