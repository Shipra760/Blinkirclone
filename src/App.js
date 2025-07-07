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
import Order from "./Component/Order";
import Recipes from "./Component/Recipes";
import Book from "./Component/Book";
import Gift from "./Component/Gift";
import Gst from "./Component/Gst";
import Wal from "./Component/Wal";
import Money from "./Component/Money";
import Payment from "./Component/Payment";
import Reward from "./Component/Reward";
import Pay from "./Component/Pay";
import Support from "./Component/Support";
import Blinkitmoney from "./Component/Blinkitmoney";
import Share from "./Component/Share";
import Account from "./Component/Account";
import About from "./Component/About";
import Feeding from "./Component/Feeding";
import Notification from "./Component/Notification";
import Logout from "./Component/Logout";
import Enterdetail from "./Component/Enterdetail"

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
        <Route path="/order" element={<Order />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/book" element={<Book />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/gst" element={<Gst />} />
        <Route path="/wal" element={<Wal />} />
        <Route path="/money" element={<Money />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/reward" element={<Reward />} />
        <Route path="/blinkit-money" element={<Blinkitmoney />} />
        <Route path="/support" element={<Support />} />
        <Route path="/payments" element={<Pay />} />
        <Route path="/share" element={<Share />} />
        <Route path="/about" element={<About />} />
        <Route path="/feeding" element={<Feeding />} />
        <Route path="/account" element={<Account />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/enter-details" element={<Enterdetail />} />
      </Routes>
    </BrowserRouter>
  );
}
