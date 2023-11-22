import "./style.scss";
import { routerLinks } from "../../../router";
import { Link } from "react-router-dom";

function CheckOut() {
  return (
    <div className="checkout">
      <div className="G-container">
        <div className="home-contact">
          <Link to={routerLinks.HOME}>Home</Link>
          <span className="slesh">/</span>
          <Link to={routerLinks.SHOP}>Shop</Link>
          <span className="slesh">/</span>
          <span className="contact-span">Checkout</span>
        </div>
      </div>
      <div className="G-container">
        <div className="order-main">
          <div className="building-address">
            <div className="title-buildind-address">Building Address</div>
            <div className="fill-address">
              <label className="fill-title">
                <p>First Name</p>
                <input className="fill" type="text" placeholder="John" />
              </label>
              <label className="fill-title">
                <p>Last Name</p>
                <input className="fill" type="text" placeholder="Wick" />
              </label>
              <label className="fill-title">
                <p>E-mail</p>
                <input
                  className="fill"
                  type="text"
                  placeholder="example@email.com"
                />
              </label>
              <label className="fill-title">
                <p>Mobile No</p>
                <input
                  className="fill"
                  type="text"
                  placeholder="+123 456 789"
                />
              </label>
              <label className="fill-title">
                <p>Address Line 1</p>
                <input className="fill" type="text" placeholder="123 Street" />
              </label>
              <label className="fill-title">
                <p>Address Line 2</p>
                <input className="fill" type="text" placeholder="123 Street" />
              </label>
              <label className="fill-title">
                <p>Country</p>
                <input
                  className="fill"
                  type="text"
                  placeholder="United States"
                />
              </label>
              <label className="fill-title">
                <p>City</p>
                <input className="fill" type="text" placeholder="LA" />
              </label>
              <label className="fill-title">
                <p>State</p>
                <input className="fill" type="text" placeholder="LA" />
              </label>
              <label className="fill-title">
                <p>ZIP code</p>
                <input className="fill" type="text" placeholder="123" />
              </label>
              <label className="checkbox-shop-detail">
                <input type="checkbox" name="" id="" />
                <p>Create an account</p>
              </label>
              <label className="checkbox-shop-detail">
                <input type="checkbox" name="" id="" />
                <p>Ship to different address</p>
              </label>
            </div>
          </div>
          <div className="order-payment">
            <h3>Order Total</h3>
            <div className="order-total">
              <p className="selected-products">Products</p>
              <div className="selected-products">
                <div className="product-price">
                  <div>Product Name 1</div>
                  <div>$150</div>
                </div>
                <div className="product-price">
                  <div>Product Name 2</div>
                  <div>$150</div>
                </div>
                <div className="product-price">
                  <div>Product Name 3</div>
                  <div>$150</div>
                </div>
                <div className="product-price">
                  <div>Product Name 3</div>
                  <div>$150</div>
                </div>
                <div className="product-price">
                  <div>Subtotal</div>
                  <div>$150</div>
                </div>
                <div className="product-price">
                  <div>Shipping</div>
                  <div>$10</div>
                </div>
                <div className="product-price">
                  <div>Total</div>
                  <div>$160</div>
                </div>
              </div>
            </div>
            <div className="payment-shop-details">
              <h3 className="title-payment">Payment</h3>
              <div className="payment-body">
                <label className="checkbox-payment">
                  <input type="radio" name="payment-method"/>
                  <p>Paypal</p>
                </label>
                <label className="checkbox-payment">
                  <input type="radio" name="payment-method"/>
                  <p>Direct Check</p>
                </label>
                <label className="checkbox-payment">
                  <input type="radio" name="payment-method"/>
                  <p>Bank Transfer</p>
                </label>
                <button>Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
