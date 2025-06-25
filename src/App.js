import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import ProductDetail from "./Pages/ProductDetail";
import ElectronicDetail from "./Pages/ElectronicDetails";
import CrouselOpen from "./Component/CrouselOpen";
import CategoryPage from "./Pages/CategoryPage";
import TrendOpen from "./Component/TrendOpen";
import BeautyOpen from "./Component/BeautyOpen"
import Login from "./Component/Login";
import Wallet from "./Component/Wallet"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details/:id" element={<ProductDetail />} />
        <Route path="/details/:id" element={<ElectronicDetail />} />{" "}
       <Route path="/trendopen/:id" element={<TrendOpen />} />
       <Route path="/beautyopen/:id" element={<BeautyOpen />} />
        <Route path="/open" element={<CrouselOpen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}
