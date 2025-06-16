import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* Add more routes here if needed */}
      </Routes>
    </BrowserRouter>
  );
}
