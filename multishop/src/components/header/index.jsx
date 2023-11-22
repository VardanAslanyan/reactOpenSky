import "./style.scss";
import "../../assets/icons/style.css";
import { Link, NavLink } from "react-router-dom";
import { routerLinks } from "../../router";

function Header() {
  return (
    <div className="header">
      <div className="G-container">
        <div className="MultiShop">
          <h1>
            <span className="multi-icon">MULTI</span>
            <span className="shop-icon">SHOP</span>
          </h1>
        </div>
        <nav>
          <div className="navigation">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to={routerLinks.HOME}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to={routerLinks.SHOP}
            >
              Shop
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to={routerLinks.CONTACT}
            >
              Contact
            </NavLink>
            {/* <NavLink
              className={({ isActive }) =>
                isActive ? "active" : "inactive"
              }
              to={routerLinks.SIGN_IN}
            >
              Sign In
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active" : "inactive"
              }
              to={routerLinks.SIGN_UP}
            >
              Sign Up
            </NavLink> */}
          </div>
          <div className="buy">
            <span className="icon-heart icon-nav"></span>
            <Link to={routerLinks.BACKET}>
              <span className="icon-cart icon-nav"></span>
            </Link>
            <div className="count-cart">0</div>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to={routerLinks.SIGN_IN}
            >
              Sign In
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to={routerLinks.SIGN_UP}
            >
              Sign Up
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
