import Men from "./componants/Men";
import Women from "./componants/Women"
import Kids from "./componants/Kids"
import Navbar from "./componants/Navbar";
import Product from "./componants/Product";
import { Outlet } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import ProductDetails from "./componants/ProductDetails";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Product />} />
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
        <Route path="kids" element={<Kids />} />
        <Route path="productdetails/:id" element={<ProductDetails/>}/>
      </Route>
    </Routes>
  );
}

function HomeLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}



