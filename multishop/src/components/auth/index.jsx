import "./style.scss";
import { routerLinks } from "../../router";
import AdminCategories from "../../pages/admin-pages/AdminCategories";
import AdminProducts from "../../pages/admin-pages/AdminProducts";
import { Route, Routes, Navigate } from "react-router-dom";
import AdminNotifications from "../../pages/admin-pages/AdminNotifications";
import AdminSettings from "../../pages/admin-pages/AdminSettings";
import AdminSideBar from "../AdminSideBar";

function AuthComponent() {
  return (
    <div className="auth-component">
      <AdminSideBar />
      <Routes>
        <Route
          path={routerLinks.ADMIN_CATEGORIES}
          element={<AdminCategories />}
        />
        <Route path={routerLinks.ADMIN_PRODUCTS} element={<AdminProducts />} />
        <Route
          path={routerLinks.ADMIN_NOTIFICATION}
          element={<AdminNotifications />}
        />
        <Route path={routerLinks.ADMIN_SETTINGS} element={<AdminSettings />} />
        <Route path={'/*'} element={<Navigate to={routerLinks.ADMIN_CATEGORIES}/>}/>
      </Routes>
    </div>
  );
}

export default AuthComponent;
