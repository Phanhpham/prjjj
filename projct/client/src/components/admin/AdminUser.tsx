import React from "react";
import Menu from "../Menu";
import "../scss/adminHome.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { User } from "../../interface/user";
import { Users } from "../../interface/admin";

function AdminUser() {
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState<Users>({
    id: Math.ceil(Math.random() * 10000),
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const handleLogOut = () => {
    const logout = confirm("chắc chắn muốn đăng xuất?");
    if (logout) {
      navigate("");
    }
  };
  const handleAdd = () => {
    let valid = true;   
    if(!inputValue.userName){
      error.userName = "Ten nguoi dung khong duoc de trong";
      valid = false;
    }else{
      error.userName = "";
    }

    if(!inputValue.email){
      error.email = "Email không duoc de trong";
      valid = false;
    }else{
      error.email = "";
    }

    if(!inputValue.password){
      error.password = "Mat khau khong duoc de trong"
      valid = false;
    }else{
      error.password = ""
    }
  };
  return (
    <div style={{ display: "flex" }}>
      <div className="sidebar-admin">
        <div className="logo">
          <h2>ADMIN</h2> <br />
          <ul className="menu">
            <li className="active">
              <NavLink to={"/adminHome"}>
                <i className="fas fa-tachometer-alt"></i>
                <span>Trang chủ</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/adminUser"}>
                <i className="fas fa-user"></i>
                <span>Quản lí tài khoản</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/adminProduct"}>
                <i className="fa-solid fa-book"></i>
                <span>Quản lí san phẩm</span>
              </NavLink>
            </li>
            <li>
              <a href="">
                <i className="fas fa-cog"></i>
                <span>Cài đặt</span>
              </a>
            </li>
            <li className="logout">
              <a onClick={handleLogOut} href="">
                <i className="fas fa-sign-out-alt"></i>
                <span>Đăng xuất</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-content-admin">
        <div className="header-wrapper">
          <div className="header-title">
            <div className="title">
              <span>Shop bán quần áo</span>
              <h2>Quản lí tài khoản</h2>
            </div>
            <Button variant="primary" onClick={handleShow}>
              + Thêm tài khoản
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Thêm tài khoản</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Tên người dùng</Form.Label>
                    <Form.Control type="text" placeholder="Nhập tên" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Nhập email" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Nhập mật khẩu</Form.Label>
                    <Form.Control type="text" placeholder="Nhập mật khẩu" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Xác nhận mật khẩu</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nhập xác nhận mật khẩu"
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleAdd}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div className="user-info">
            <div className="search-box">
              <i className="fa-solid fa-search"></i>
              <input type="text" placeholder="Tìm kiếm ở đây" />
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV1mHHzOnO1BG__4Ai6GlaZpfRztsrQM1fols7meZqlY6arSu0mvtlHSArvUHZRquwnA0&usqp=CAU"
              alt=""
            />
          </div>
        </div>

        <div className="table-wrapper">
          <h3 className="main-title">Bảng thống kê</h3> <br />
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên tài khoản</th>
                  <th>Email</th>
                  <th>Ngày tạo</th>
                  <th>Trạng thái hoạt động</th>
                  <th>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>phanh2005</td>
                  <td>phanh123@gmail.com</td>
                  <td>24/07/2023</td>
                  <td>Đang hoạt động</td>
                  <td>
                    <button className="btn btn-primary">Xem</button>
                    <button className="btn btn-danger">Chặn</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>ha2005</td>
                  <td>ha123</td>
                  <td>21/05/2023</td>
                  <td>Đang hoạt động</td>
                  <td>
                    <button className="btn btn-primary">Chặn</button>
                    <button className="btn btn-danger">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>hai2005</td>
                  <td>hai123</td>
                  <td>30/05/2023</td>
                  <td>Đang hoạt động</td>
                  <td>
                    <button className="btn btn-primary">Chặn</button>
                    <button className="btn btn-danger">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>phuonga2005</td>
                  <td>phuonga123</td>
                  <td>24/08/2023</td>
                  <td>Đang hoạt động</td>
                  <td>
                    <button className="btn btn-primary">Chặn</button>
                    <button className="btn btn-danger">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>trang2005</td>
                  <td>trang123</td>
                  <td>11/09/2023</td>
                  <td>Đang hoạt động</td>
                  <td>
                    <button className="btn btn-primary">Chặn</button>
                    <button className="btn btn-danger">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>khanh2005</td>
                  <td>khanh123</td>
                  <td>29/10/2023</td>
                  <td>Đang hoạt động</td>
                  <td>
                    <button className="btn btn-primary">Chặn</button>
                    <button className="btn btn-danger">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>tuan2005</td>
                  <td>tuan123</td>
                  <td>28/05/2023</td>
                  <td>Đang hoạt động</td>
                  <td>
                    <button className="btn btn-primary">Chặn</button>
                    <button className="btn btn-danger">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>tung2005</td>
                  <td>tung123</td>
                  <td>24/12/2023</td>
                  <td>Đang hoạt động</td>
                  <td>
                    <button className="btn btn-primary">Chặn</button>
                    <button className="btn btn-danger">Xóa</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUser;
