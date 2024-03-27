import React from "react";
import "../css/app.css";
import { Container } from "@mui/material";
import { Route, Switch, useLocation } from "react-router-dom";
import { ProductsPage } from "./screens/productsPage";
import { OrdersPage } from "./screens/ordersPage";
import { UserPage } from "./screens/userPage";
import { HomePage } from "./screens/homePage";
import { HomeNavbar } from "./components/headers/HomeNavbar";
import { Footer } from "./components/footer";

function App() {
  const location = useLocation()
  return (
    <Container>
      <>
      {location.pathname === '/' ? <HomeNavbar /> : <OrdersPage />}
        <Switch>
          <Route path="/products">
            <ProductsPage />{" "}
          </Route>
          <Route path="/orders">
            <OrdersPage />
          </Route>
          <Route path="/member-page">
            <UserPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </>
    </Container>
  );
}

export default App;
