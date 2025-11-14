import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react'
import Components from "./pages/Components";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import Animation from "./pages/Animation";
import ForwardToHome from "./Home";
import AppLayout from "./layouts/AppLayout";
import Todos from "./pages/Todos";
import './App.css';
import Carts from './pages/Carts';
import Products from './pages/Products';
import Login from "./pages/Login/Login";

import { fetchProducts } from './data/products'

function App() {
  const [token, setToken] = useState("x");
  const [role, setRole] = useState("");

  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])

  useEffect(() => setProducts(fetchProducts()), [])

  if (token === "") {
    return <Login setToken={setToken} setRole={setRole} />;
  } else {
  return (
    <BrowserRouter basename='/csi205/'>
      <Routes>
        <Route element={<AppLayout products={products} carts={carts} setToken={setToken} />}>
          <Route path="home" element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="animation" element={<Animation />} />
          <Route path="components" element={<Components />} />
          <Route path="todos" element={<Todos />} />
          <Route path="products" element={<Products products={products} carts={carts} setCarts={setCarts} />} />
          <Route path="carts" element={<Carts carts={carts} setCarts={setCarts} />} />
          <Route path="*" element={<ForwardToHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}}

export default App
