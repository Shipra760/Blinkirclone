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
import Slick from "../Component/Slick";
import SlickElectronic from "../Component/SlickElectronic";
import SlickBeauty from "../Component/SlickBeauty";
import TrendingCarousel from "../Component/TrendingCarousel";
import ElectronicPara from "../Component/ElectronicPara";
import BannerElectronic from "../Component/BannerElectronic"

import BeautyCarousel from "../Component/BeautyCarousel";
import BannerBeauty from "../Component/BannerBeauty";


export default function CategoryPage() {
  const { categoryName } = useParams();

  const allContent = (
    <>
      <Banner />
      <Add />
      <Box />
      <Slick />
      <Cart />
      <Add1 />
      <Crousel />
      <Electronic />
      <Add2 />
      <Box2 />
      <Beauty />
      <Decor />
      <Box1 />
      <TwoBanner />
      <Kid />
    </>
  );

  const categoryContent = {
    electronics: (
      <div>
        <BannerElectronic />
        <SlickElectronic />
        <Add2 />
        <TrendingCarousel />
         <Electronic />
         <ElectronicPara />
      </div>
    ),
    beauty: (
      <div>
        <BannerBeauty />
        <Beauty />
        <SlickBeauty />
        <BeautyBox />
         <BeautyCarousel />
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
