import Women from "./componants/Cart";
import Kids from "./componants/Kids";
import Navbar from "./componants/Navbar";
import Product from "./componants/Product";
import { Outlet } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./componants/ProductDetails";
import { lazy, Suspense } from "react";
import TemperatureCalculator from "./componants/ControlledAndUncontrolled";
import { Provider } from 'react-redux'
import appStore from "./store/store";
import MemoAndRef from "./componants/MemoAndRef"
import Cart from "./componants/Cart";
import Login from "./componants/Login";
const Men = lazy(() => import("./componants/Men")); // lazy load

export default function App() {
  return (
    <Provider store={appStore}>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Product />} />

          {/* 🟡 Suspense wrapper for lazy-loaded Men */}
          <Route
            path="men"
            element={
              <Suspense fallback={<div>Loading Men Page...</div>}>
                <Men />
              </Suspense>
            }
          />

          <Route path="cart" element={<Cart />} />
          <Route path="kids" element={<Kids />} />
          <Route path="productdetails/:id" element={<ProductDetails />} />
          <Route path="Forlearn" element={<TemperatureCalculator />} />
          <Route path="memoandref" element={<MemoAndRef />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Provider>
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
