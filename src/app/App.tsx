import React from "react";
import "../css/app.css";
import { Container } from "@mui/material";
import { Link, Route, Switch } from "react-router-dom";
import { ProductsPage } from "./screens/productsPage";
import { OrdersPage } from "./screens/ordersPage";
import { UserPage } from "./screens/userPage";
import { HomePage } from "./screens/homePage";

function App() {
  return (
    <Container>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">HomePage</Link>
            </li>
            <li>
              <Link to="/products">ProductsPage</Link>
            </li>
            <li>
              <Link to="/orders">OrdersPage</Link>
            </li>
            <li>
              <Link to="/member-page">UserPage</Link>
            </li>
          </ul>
        </nav>
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
            {" "}
            <HomePage />{" "}
          </Route>
        </Switch>
      </div>
    </Container>
  );
}

export default App;
