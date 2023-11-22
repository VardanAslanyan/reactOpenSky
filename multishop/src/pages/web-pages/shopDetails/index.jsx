import "./style.scss";

import Slider from "react-slick";

import { routerLinks } from "../../../router";
import { productList } from "./../../../store";
import { Link } from "react-router-dom";
import Quantity from "../../../components/quantity";

function ShopDetails() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
  };

  const sizes = ["XS", "S", "M", "X", "XL"];
  const colors = ["Black", "White", "Red", "Blue", "Green"];

  return (
    <div className="shop-details">
      <div className="G-container">
        <div className="home-contact">
          <Link to={routerLinks.HOME}>Home</Link>
          <span className="slesh">/</span>
          <Link to={routerLinks.SHOP}>Shop</Link>
          <span className="slesh">/</span>
          <span className="contact-span">Shop Ditail</span>
        </div>
      </div>
      <div className="G-container">
        <div className="shop-ditail-main">
          <div
            className="product-detail"
            style={{
              backgroundImage: `url('${productList[0].backgroundImage}')`,
            }}
          ></div>
          <div className="shop-detail-description">
            <h3>Product Name Goes Here</h3>
            <p className="product-amount">$150.00</p>
            <p>
              Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat
              diam stet sit clita ea. Sanc ipsum et, labore clita lorem magna
              duo dolor no sea Nonumy
            </p>
            <div className="sizes">
              <h4>Sizes:</h4>
              {sizes.map((item, index) => {
                return (
                  <label key={index}>
                    <input type="radio" name="selected-size" id="" />
                    {item}
                  </label>
                );
              })}
            </div>
            <div className="sizes">
              <h4>Colors:</h4>
              {colors.map((item, index) => {
                return (
                  <label key={index}>
                    <input type="radio" name="selected-color" id="" />
                    {item}
                  </label>
                );
              })}
            </div>
            <div className="add-remove">
              <Quantity value={0} />
              <div className="add-to-cart">
                <div className="icon-cart" />
                <h4>Add To Cart</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="G-container">
        <div></div>
      </div>
      <div className="G-container">
        <div className="you-may-also">
          <h3>YOU MAY ALSO LIKE</h3>
        </div>
        <Slider {...settings}>
          {productList.map((item, index) => {
            return (
              <div className="vendors">
                <div
                  key={index}
                  className="vendor-slider"
                  style={{ backgroundImage: `url('${item.backgroundImage}')` }}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default ShopDetails;
