import React, { useEffect } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PaginationItem from "@mui/material/PaginationItem";
import Pagination from "@mui/material/Pagination";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import { createSelector } from "reselect";
import { Product } from "../../../lib/types/product";
import { retrieveProducts } from "./selector";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApi } from "../../../lib/config";

/* REDUX SLICE AND SELECTOR*/
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});
const productsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

const Products = () => {
  const { setProducts } = actionDispatch(useDispatch());
  const { products } = useSelector(productsRetriever);

  useEffect(() => {
    const product = new ProductService();
    product
      .getProducts({
        page: 1,
        limit: 8,
        order: "createdAt",
        // productCollection: ProductCollection.DISH,
        search: "",
      })
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={"products"}>
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className={"avatar-big-box"}>
            <Stack className={"top-text"}>
              <p>Burak Restaurant</p>
              <Stack className={"single-search-big-box"}>
                <input
                  type={"search"}
                  className={"single-search-input"}
                  name={"singleResearch"}
                  placeholder={"Type here"}
                  // value={""}
                />
                <Button
                  className={"single-button-search"}
                  variant="contained"
                  endIcon={<SearchIcon />}
                >
                  Search
                </Button>
              </Stack>
            </Stack>
          </Stack>

          <Stack className={"dishes-filter-section"}>
            <Stack className={"dishes-filter-box"}>
              <Button
                variant={"contained"}
                color={"primary"}
                className={"order"}
              >
                New
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className={"order"}
              >
                Price
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className={"order"}
              >
                Views
              </Button>
            </Stack>
          </Stack>

          <Stack className={"list-category-section"}>
            <Stack className={"product-category"}>
              <div className={"category-main"}>
                <Button variant={"contained"} color={"secondary"}>
                  Other
                </Button>
                <Button variant={"contained"} color={"secondary"}>
                  Dessert
                </Button>
                <Button variant={"contained"} color={"secondary"}>
                  Drink
                </Button>
                <Button variant={"contained"} color={"secondary"}>
                  Salad
                </Button>
                <Button variant={"contained"} color={"primary"}>
                  Dish
                </Button>
              </div>
            </Stack>

            <Stack className={"product-wrapper"}>
              {products.length !== 0 ? (
                products.map((product) => {
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  const sizeVolume =
                    product.productCollection === ProductCollection.DRINK
                      ? product.productVolume + " litre"
                      : product.productSize + " size";
                  return (
                    <Stack key={product._id} className={"product-card"}>
                      <Stack
                        className={"product-img"}
                        sx={{ backgroundImage: `url(${imagePath})` }}
                      >
                        <div className={"product-sale"}>{sizeVolume}</div>
                        <Button className={"shop-btn"}>
                          <img
                            src={"/icons/shopping-cart.svg"}
                            style={{ display: "flex" }}
                            alt=""
                          />
                        </Button>
                        <Button className={"view-btn"} sx={{ right: "36px" }}>
                          <Badge badgeContent={product.productViews} color="secondary">
                            <RemoveRedEyeIcon
                              sx={{
                                color: product.productViews === 0 ? "gray" : "white",
                              }}
                            />
                          </Badge>
                        </Button>
                      </Stack>
                      <Box className={"product-desc"}>
                        <span className={"product-title"}>
                          {product.productName}
                        </span>
                        <div className={"product-desc"}>
                          <MonetizationOnIcon />
                          {12}
                        </div>
                      </Box>
                    </Stack>
                  );
                })
              ) : (
                <Box className="no-data">Products are not available!</Box>
              )}
            </Stack>
          </Stack>

          <Stack className={"pagination-section"}>
            <Pagination
              count={3}
              page={1}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color={"secondary"}
                />
              )}
            />
          </Stack>
        </Stack>
      </Container>

      <div className={"brands-logo"}>
        <Container className={"family-brands"}>
          <Box className={"category-title"}>Our Family Brands</Box>
          <Stack className={"brand-list"}>
            <Box className={"review-box"}>
              <img src={"/img/gurme.webp"} alt="" />
            </Box>
            <Box className={"review-box"}>
              <img src={"/img/sweets.webp"} alt="" />
            </Box>
            <Box className={"review-box"}>
              <img src={"/img/seafood.webp"} alt="" />
            </Box>
            <Box className={"review-box"}>
              <img src={"/img/doner.webp"} alt="" />
            </Box>
          </Stack>
        </Container>
      </div>

      <div className={"address"}>
        <Container>
          <Stack className={"address-area"}>
            <Box className={"title"}>Our address</Box>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6044.367898034709!2d-73.9881175244992!3d40.75797873480042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1712120581815!5m2!1sen!2sus"
              style={{ marginTop: "61px" }}
              width="1320"
              height="500"
              referrerPolicy="no-referrer-when-downgrade"
              title="789"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
};

export default Products;
