import "./style.scss";
import { Routes, Route, Navigate } from 'react-router-dom'

import FooterComponent from '../../components/footer';
import Header from '../../components/header';

import Home from "../../pages/web-pages/home";
import Shop from "../../pages/web-pages/shop";
import Contact from "../../pages/web-pages/contact";

import { routerLinks } from "../../router";
import ShopDetails from '../../pages/web-pages/shopDetails';
import CheckOut from '../../pages/web-pages/checkout';
import Backet from '../../pages/web-pages/backet'
import SignIn from '../../pages/web-pages/sign_in';
import SignUp from '../../pages/web-pages/sign_up';

function GuestComponent() {
  return (
    <div className="guest-component">
      <Header />
        <Routes>
          <Route path={routerLinks.HOME} element={<Home />} />
          <Route path={routerLinks.SHOP} element={<Shop />} />
          <Route path={routerLinks.CONTACT} element={<Contact />} />
          <Route path={routerLinks.SHOP_DETAILS} element={<ShopDetails />} />
          <Route path={routerLinks.CHECK_OUT} element={<CheckOut />} />
          <Route path={routerLinks.BACKET} element={<Backet />} />
          <Route path={routerLinks.SIGN_IN} element={<SignIn />} />
          <Route path={routerLinks.SIGN_UP} element={<SignUp />} />
          <Route path={'/*'} element={<Navigate to={routerLinks.HOME}/>}/>
        </Routes>
      <FooterComponent />
    </div>
  );
}


export default GuestComponent
