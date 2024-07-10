import { Route, Routes } from "react-router-dom";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Home from "./components/user/Home";
import AdminHome from "./components/admin/AdminHome";
import AdminProduct from "./components/admin/AdminProduct";
import DetailProduct from "./components/user/DetailProduct";
import LoginAdmin from "./components/admin/LoginAdmin";
import AdminUser from "./components/admin/AdminUser";

export default function App() {
  return (
    <Routes>
      <Route path="/detailProduct" element={<DetailProduct />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/adminProduct" element={<AdminProduct />} />
      <Route path="/adminHome" element={<AdminHome />} />
     <Route path="/login-admin" element={<LoginAdmin></LoginAdmin>}></Route>
    <Route path="/adminUser" element={<AdminUser></AdminUser>}></Route>
    <Route path ="/adminProduct" element ={<AdminProduct></AdminProduct>}></Route>
    </Routes>
  );
}
