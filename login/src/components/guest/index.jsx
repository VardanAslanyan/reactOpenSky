import { Route, Routes, Navigate } from "react-router-dom";
import { routerList } from "../../router/routerList";
import Login from "../../pages/login";
import React from "react";

export const GuestComponents = () => {
  return (
    <div>
      <header></header>
      <Routes>
        <Route path={routerList.guest.LOGIN} element={<Login />}></Route>
        <Route path={"/*"} element={<Navigate to={routerList.guest.LOGIN} />}></Route>
      </Routes>
      <footer></footer>
    </div>
  );
};
