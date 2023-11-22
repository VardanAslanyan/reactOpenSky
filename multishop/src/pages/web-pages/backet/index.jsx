import "./style.scss";

import { Link } from "react-router-dom";

import { routerLinks } from "../../../router";

import BacketTableRow from "../../../components/backetTableRow";
import { productList } from "../../../store";

function Backet() {
  return (
    <div className="backet">
      <div className="G-container">
        <div className="home-contact">
          <Link to={routerLinks.HOME}>Home</Link>
          <span className="slesh">/</span>
          <Link to={routerLinks.SHOP}>Shop</Link>
          <span className="slesh">/</span>
          <span className="contact-span">Shopping Cart</span>
        </div>
      </div>
      <div className="G-container">
        <div className="backet-main">
          <div className="backet-products">
            <div className="table-header">
              <h4>Product Price</h4>
              <h4>Price</h4>
              <h4>Quantity</h4>
              <h4>Total</h4>
              <h4>Remove</h4>
            </div>
            <div className="table-content">
              {productList.map((item, index) => {
                return (
                  <BacketTableRow
                    key={index}
                    price="$150"
                    total="$150"
                    value="8"
                    backgroundImage={item.backgroundImage}
                    title="Product Name"
                  />
                );
              })}
            </div>
          </div>
          <div className="backet-right">
            <div className="cupon-code">
              <input className="coupn-code-input" type="text" />
              <button className="coupon-code-btn">Apply Coupon</button>
            </div>
            <h4 className="cart-summary">CART SUMMERY</h4>
            <div className="proceed">
              <div className="total-sub">
                <p>Subtotal</p>
                <p>$150</p>
              </div>
              <div className="total-sub">
                <p>Shipping</p>
                <p>$10</p>
              </div>
              <div className="total">
                <p>Total</p>
                <p>$160</p>
              </div>
              <Link to={routerLinks.CHECK_OUT}>
                <button className="proceed-btn">Proceed To Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backet;
