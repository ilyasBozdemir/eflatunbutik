import { Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import Page404 from "./pages/ErrorPage/Page404";
import Favorite from "./pages/Favorite";
import Basket from "./pages/Basket";
import Login from "./pages/Login";
import RequireAuth from "../src/components/RequireAuth";

import Dashboard from "./pages/Dashboard";
import Catalog from "./pages/Dashboard/Catalog";
import Order from "./pages/Dashboard/Order";
import User from "./pages/Dashboard/User";
import UserLogin from "./pages/Dashboard/UserLogin";


function Router() {
  return (
    <>
      <Routes>
        <Route
          element={
            <RequireAuth allowedRoles={["ANONYMOUS", "USER", "ADMIN"]} />
          }
        >
          <Route exact path="/" element={<Home />} />
          <Route path="/iletisim" element={<Home />} />
          <Route path="/yeni-gelenler/" element={<Home />} />
          <Route path="/elbise/" element={<Home />} />
          <Route path="/ust-giyim/" element={<Home />} />
          <Route path="/alt-giyim/" element={<Home />} />/
          <Route path="/ic-giyim/" element={<Home />} />
          <Route path="/dis-giyim/" element={<Home />} />
          <Route path="/outlet/" element={<Home />} />
          <Route path="/kombin/" element={<Home />} />
          <Route path="/sepetim/" element={<Basket />} />
          <Route path="/indirim/" element={<Home />} />
          <Route path="/giris/" element={<Login pathname="/giris/" />} />
          <Route path="/uye-ol/" element={<Login pathname="/uye-ol/" />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={["USER"]} />}>
          <Route path="/favorilerim" element={<Favorite />} />
        </Route>
        <Route
          path="/admin/"
          exact
          element={<RequireAuth allowedRoles={["ADMIN"]} />}
        >
          <Route exact path="/admin/" element={<Dashboard />} />
          <Route path="/admin/catalog/" element={<Catalog />} />
          <Route path="/admin/order/" element={<Order />} />
          <Route path="/admin/user/" element={<User />} />
          <Route path="/admin/giris/" element={<UserLogin />} />

        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default Router;
