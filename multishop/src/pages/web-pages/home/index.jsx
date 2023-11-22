import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./style.scss";
import OfferComponent from "../../../components/offer";
import Service from "../../../components/services";
import Product from "../../../components/product-small";

import { carousel, categories, productList, vendorList } from "../../../store";

import Offer1 from "../../../assets/img/offer-1.jpg";
import Offer2 from "../../../assets/img/offer-2.jpg";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settingsVendor = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  } 

  return (
    <div className="Home">
      <div className="G-container">
        <div className="slider-offer">
          <div className="slider-main">
            <Slider {...settings}>
              {carousel.map((item, index) => {
                return (
                  <div className="sliders">
                    <div
                      key={index}
                      className="sub-sliders"
                      style={{
                        backgroundImage: `url('${item.backgroundImage}')`,
                      }}
                    >
                      <div className="slider-description">
                        <h3>{item.h3}</h3>
                        <p>{item.p}</p>
                        <button>{item.button}</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="offer">
            <OfferComponent
              className="offer-component"
              backgroundImage={Offer1}
              save="Save 20%"
              so="Special Offer"
            />
            <OfferComponent
              className="offer-component"
              backgroundImage={Offer2}
              save="Save 20%"
              so="Special Offer"
            />
          </div>
        </div>
      </div>
      <div className="G-container">
        <div className="services">
          <Service icon="icon-done" data="Quality Product" />
          <Service icon="icon-truck" data="Free Shipping" />
          <Service icon="icon-exchange" data="14-Day Return" />
          <Service icon="icon-phone-call" data="24/7 Support" />
        </div>
      </div>
      <div className="G-container">
        <div className="categories">
          <h2>CATEGORIES</h2>
          <div className="categories-list">
            {categories.map((item, index) => {
              return (
                <Product
                  key={index}
                  className="product-small"
                  backgroundImage={item.backgroundImage}
                  title="Category Name"
                  data="100 Products"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="G-container">
        <div className="fp">
          <h2>Featured Products</h2>
          <div className="products">
            {productList.map((item, index) => {
              return (
                <Product
                  key={index}
                  className="product-big"
                  backgroundImage={item.backgroundImage}
                  stars=""
                  title={item.title}
                  data={item.data}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="G-container">
        <div className="offer-big">
          <OfferComponent
            className="offer-component-big"
            backgroundImage={Offer1}
            save="Save 20%"
            so="Special Offer"
          />
          <OfferComponent
            className="offer-component-big"
            backgroundImage={Offer2}
            save="Save 20%"
            so="Special Offer"
          />
        </div>
      </div>
      <div className="G-container">
        <div className="fp">
          <h2>RECENT PRODUCTS</h2>
          <div className="products">
            {productList.map((item, index) => {
              return (
                <Product
                  key={index}
                  className="product-big"
                  backgroundImage={item.backgroundImage}
                  stars=""
                  title={item.title}
                  data={item.data}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="G-container">
        <Slider {...settingsVendor}>
          {vendorList.map((item, index) => {
            return (
              <div className="vendors">
                <div
                  key={index}
                  className="vendor-slider"
                  style={{ backgroundImage:  `url('${item.backgroundImage}')` }}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Home;
