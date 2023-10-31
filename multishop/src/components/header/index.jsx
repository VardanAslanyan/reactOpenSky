import "./style.scss";
import "../../assets/icons/style.css";
import { NavLink, Routes, Route } from "react-router-dom";
import { routerLinks } from "../../router";

import Home from "../../pages/home";
import Shop from "../../pages/shop";
import Contact from "../../pages/contact";

function Header() {
  return (
    <div className="header">
      <div className="MultiShop">
        <h1>
          <span className="multi-icon">MULTI</span>
          <span className="shop-icon">SHOP</span>
        </h1>
      </div>
      <nav>
        <div className="navigation">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "inactive"
            }
            to={routerLinks.HOME}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "inactive"
            }
            to={routerLinks.SHOP}
          >
            Shop
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "inactive"
            }
            to={routerLinks.CONTACT}
          >
            Contact
          </NavLink>
        </div>
        <div className="buy">
          <span className="icon-heart icon-nav"></span>
          <span className="icon-cart icon-nav"></span>
        </div>
      </nav>

      <div>
        <Routes>
          <Route path={routerLinks.HOME} element={<Home />}></Route>
          <Route path={routerLinks.SHOP} element={<Shop />}></Route>
          <Route path={routerLinks.CONTACT} element={<Contact />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Header;
