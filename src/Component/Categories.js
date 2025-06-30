import React from "react";
import Header from "./Header";

import MobileFooter from "./MobileFooter";
import Footer from "./Footer";
import KidBox from "./KidBox";
import DecorBox from "./DecorBox";
import Box from "./Box";
import Category from "./Category";


export default function categories() {
  return (
    <div>
      <Header />
       <Category />
      <Box />
      <KidBox />
      <DecorBox />
      <MobileFooter />
      <Footer />
     
    </div>
  );
}
