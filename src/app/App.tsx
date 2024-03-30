import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { ProductsPage } from "./screens/productsPage";
import { OrdersPage } from "./screens/ordersPage";
import { UserPage } from "./screens/userPage";
import { HomePage } from "./screens/homePage";
import { HelpPage } from "./screens/helpPage";
import Footer from "./components/footer";
import "../css/navbar.css";
import "../css/app.css";
import "../css/footer.css";
import { HomeNavbar } from "./components/headers/HomeNavbar";
import { OtherNavbar } from "./components/headers/OtherNavbar";

function App() {
  const location = useLocation();
  return (
    <>
      {/* {location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />} */}
      {location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}
      <Switch>
        <Route path="/products">
          <ProductsPage />
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
