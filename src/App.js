import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import ProductDetail from "./Pages/ProductDetail";
import ElectronicDetail from "./Pages/ElectronicDetails";
import CrouselOpen from "./Component/CrouselOpen";
import CategoryPage from "./Pages/CategoryPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details/:id" element={<ProductDetail />} />
        <Route path="/details/:id" element={<ElectronicDetail />} />
        <Route path="/open" element={<CrouselOpen />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}
