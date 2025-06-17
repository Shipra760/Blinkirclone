import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";

import AddDetails from "./Component/AddDetails";
import CrouselOpen from "./Component/CrouselOpen"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        
        <Route path="/details" element={<AddDetails />} />
         <Route path="/open" element={<CrouselOpen />} />
        {/* Add more routes here if needed */}
      </Routes>
    </BrowserRouter>
  );
}
