import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import ProductsPage from "./screens/productsPage";
import UserPage from "./screens/userPage";
import HomePage from "./screens/homePage";
import HelpPage from "./screens/helpPage";
import Footer from "./components/footer";
import "../css/navbar.css";
import "../css/app.css";
import "../css/footer.css";
import HomeNavbar from "./components/headers/HomeNavbar";
import OtherNavbar from "./components/headers/OtherNavbar";
import OrdersPage from "./screens/ordersPage";
import { CartItem } from "../lib/types/search";

function App() {
  const location = useLocation(),
    cartJson: string | null = localStorage.getItem("cartData"),
    currentCart = cartJson ? JSON.parse(cartJson) : [],
    [cartItems, setCartItems] = useState<CartItem[]>(currentCart);

  /*  handlers */

  const onAdd = (input: CartItem) => {
    const exist: any = cartItems.find(
      (item: CartItem) => item._id === input._id
    );

    if (exist) {
      const cartUpdate = cartItems.map((item: CartItem) =>
        item._id === input._id
          ? { ...exist, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(cartUpdate);
      localStorage.setItem("cardData", JSON.stringify(cartUpdate));
    } else {
      const cartUpdate = [...cartItems, { ...input }];
      setCartItems(cartUpdate);
      localStorage.setItem("cardData", JSON.stringify(cartUpdate));
    }
  };
  return (
    <>
       {location.pathname === "/" ? (
        <HomeNavbar cartItems={cartItems} />
      ) : (
        <OtherNavbar cartItems={cartItems} />
      )}
      <Switch>
        <Route path="/products">
          <ProductsPage onAdd={onAdd} />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
