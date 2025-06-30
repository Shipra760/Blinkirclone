import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import ProductDetail from "./Pages/ProductDetail";
import ElectronicDetail from "./Pages/ElectronicDetails";
import CrouselOpen from "./Component/CrouselOpen";
import CategoryPage from "./Pages/CategoryPage";
import TrendOpen from "./Component/TrendOpen";
import BeautyOpen from "./Component/BeautyOpen";
import Login from "./Component/Login";
import Wallet from "./Component/Wallet";
import DecorOpen from "./Component/DecorOpen";
import AddMoney from "./Component/AddMoney";
import KidOpen from "./Component/KidOpen";
import PrintPage from "./Component/PrintPage";
import Home from "./Component/Home";
import Orders from "./Component/Orders";
import Categories from "./Component/Categories";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details/:id" element={<ProductDetail />} />
        <Route path="/details/:id" element={<ElectronicDetail />} />{" "}
        <Route path="/trendopen/:id" element={<TrendOpen />} />
        <Route path="/beautyopen/:id" element={<BeautyOpen />} />
        <Route path="/decoropen/:id" element={<DecorOpen />} />
        <Route path="/kidopen" element={<KidOpen />} />
        <Route path="/open" element={<CrouselOpen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/print" element={<PrintPage />} />
        <Route path="/add-money" element={<AddMoney />} />
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}
