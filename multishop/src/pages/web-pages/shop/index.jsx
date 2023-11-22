import "./style.scss";
import {
  shoptProductList,
  filterByPrice,
  colorFilter,
  sizeFilter,
} from "../../../store";

import { routerLinks } from "../../../router";

import { Link } from "react-router-dom";
import Product from "../../../components/product-small";
import SpecFilter from "../../../components/specFilter";

function Shop() {
  return (
    <div className="Shop">
      <div className="G-container">
        <div className="home-contact">
          <Link to={routerLinks.HOME}>Home</Link>
          <span className="slesh">/</span>
          <Link to={routerLinks.SHOP}>Shop</Link>
          <span className="slesh">/</span>
          <span className="contact-span">Shop list</span>
        </div>
        <div className="shop-main">
          <div className="shop-left">
            <div className="filer-by-price">
              <h2>FILTER BY PRICE</h2>
              {filterByPrice.map((item, index) => {
                return (
                  <SpecFilter
                    key={index}
                    filterBy={item.priceRange}
                    quantity={item.quantity}
                  />
                );
              })}
            </div>
            <div className="filer-by-price">
              <h2>FILTER BY COLOR</h2>
              {colorFilter.map((item, index) => {
                return (
                  <SpecFilter
                    key={index}
                    filterBy={item.color}
                    quantity={item.quantity}
                  />
                );
              })}
            </div>
            <div className="filer-by-price">
              <h2>FILTER BY SIZE</h2>
              {sizeFilter.map((item, index) => {
                return (
                  <SpecFilter
                    key={index}
                    filterBy={item.size}
                    quantity={item.quantity}
                  />
                );
              })}
            </div>
          </div>
          <div className="products">
            {shoptProductList.map((item, index) => {
              return (
                <Link
                  className="link-to-shop-details"
                  to={routerLinks.SHOP_DETAILS.replace(":id", item._id)}
                >
                  <Product
                    key={index}
                    className="product-3pic"
                    backgroundImage={item.backgroundImage}
                    stars=""
                    title={item.title}
                    data={item.data}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
