import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Navbar from "./components/Navbar.jsx";
import { Provider } from "react-redux";
import store from "./Store/store.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
