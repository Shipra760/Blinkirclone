import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import ProductDetail from "./Pages/ProductDetail";
import ElectronicDetail from "./Pages/ElectronicDetails";
import CrouselOpen from "./Component/CrouselOpen";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details/:id" element={<ProductDetail />} />
        <Route path="/details/:id" element={<ElectronicDetail />} />
        <Route path="/open" element={<CrouselOpen />} />
      </Routes>
    </BrowserRouter>
  );
}
