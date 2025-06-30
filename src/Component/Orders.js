import React from "react";

import Add from "./Add";
import Box from "./Box";
import Header from "./Header";
import MobileFooter from "./MobileFooter";
import Footer from "./Footer";
import Category from "./Category";

export default function Orders() {
  return (
    <div>
      <Header />
      <Category />
      <Add />
      <Box />
      <MobileFooter />
      <Footer />
    </div>
  );
}
