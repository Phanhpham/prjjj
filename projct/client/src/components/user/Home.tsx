import { Carousel } from "react-bootstrap";
import "../css/home.css";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <>
      <div>
        <header className="header-container">
          <div className="left-container">
            <img
              src="https://theme.hstatic.net/200000182297/1000887316/14/logo.png?v=1342"
              alt=""
            />
          </div>
          <nav className="center-container">
            <ul className="navbar">
              <li>
                <a href="">Sản phẩm</a>
              </li>
              <li>
                <a href="">Sản phẩm mới</a>
              </li>
              <li>
                <a href="">Bộ sưu tập</a>
              </li>
              <li>
                <a href="">Sản phẩm giá tốt</a>
              </li>
              <li>
                <a href="">Sale</a>
              </li>
            </ul>
          </nav>
          <div className="right-container">
            <div className="search">
              <input type="text" placeholder="Tìm kiếm sản phẩm" />
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div className="account">
              <i className="fa-solid fa-user"></i>
              <a href="">Tài khoản</a>
            </div>
            <div className="cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <a href="">Giỏ hàng</a>
            </div>
          </div>
          <div className="line"></div>
        </header>
      </div>
      <div>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img3.jpg?v=1347"
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img2.jpg?v=1347"
              alt="Second slide"
            />
            <Carousel.Caption>
              {/* <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://theme.hstatic.net/200000182297/1000887316/14/hb_image1.jpg?v=1347"
              alt="Third slide"
            />
            <Carousel.Caption>
              {/* <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
              {/* </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <br></br>
      <h1 style={{ textAlign: "center" }}>SẢN PHẨM NỔI BẬT</h1>
      <div style={{ display: "flex" }}>
        <div>
          <img
            src="https://product.hstatic.net/200000182297/product/12_d1100c03ecdd4dd49a03ed139aa67b93_master.jpg"
            style={{ width: "300px", paddingLeft: "50px" }}
          ></img>
          <p style={{ color: "grey", marginLeft: "50px" }}>
            Đầm hoa sen D03932
          </p>
          <b style={{ marginLeft: "80px" }}>1,599,000₫</b>
        </div>

        <div>
          <img
            src="https://product.hstatic.net/200000182297/product/3_e0d0990edf964fba867237097090ec87_master.jpg"
            style={{ width: "300px", paddingLeft: "50px" }}
          ></img>
          <p style={{ color: "grey", marginLeft: "50px" }}>
            SƠ MI HỌA TIẾT SM01552
          </p>
          <b style={{ marginLeft: "110px" }}>779,000₫</b>
        </div>

        <div>
          <img
            src="https://product.hstatic.net/200000182297/product/4_9ffc94aee3564b71b410359272051438_master.jpg"
            style={{ width: "300px", paddingLeft: "50px" }}
          ></img>
          <p style={{ color: "grey", marginLeft: "40px" }}>
            ĐẦM SUÔNG ĐEN ĐÍNH CƯỜM
          </p>
          <b style={{ marginLeft: "120px" }}>1,779,000₫</b>
        </div>

        <div>
          <img
            src="https://product.hstatic.net/200000182297/product/12_9b9ca72572c847708666c49d876e5564_master.jpg"
            style={{ width: "300px", paddingLeft: "50px" }}
          ></img>
          <p style={{ color: "grey", marginLeft: "50px" }}>
            ĐẦM HOA THIẾT KẾ KÈM ĐAI
          </p>
          <b style={{ marginLeft: "120px" }}>1,259,000₫</b>
        </div>
      </div>
      <br></br>
      <h1 style={{ textAlign: "center", fontFamily: "unset" }}>
        ĐỘC QUYỀN ONLINE
      </h1>
      <br></br>
      <div style={{ display: "flex" }}>
        <div>
          <img
            src="https://product.hstatic.net/200000182297/product/3_1a6aa19f98ac4752ace1ee0e6e31a946_master.jpg"
            style={{ width: "300px", paddingLeft: "50px" }}
          ></img>
          <p style={{ color: "grey", marginLeft: "50px" }}>
            ĐẦM HOA NHÍ D40692
          </p>
          <b style={{ marginLeft: "90px" }}>699,000₫</b>
        </div>
        <div>
          <img
            src="https://product.hstatic.net/200000182297/product/3_90b3a15000ea460f925a624216846ec0_master.jpg"
            style={{ width: "300px", paddingLeft: "50px" }}
          ></img>
          <p style={{ color: "grey", marginLeft: "50px" }}>
            ĐẦM HOA NHÍ XANH D40572
          </p>
          <b style={{ marginLeft: "120px" }}>899,000₫</b>
        </div>

        <div>
          <img
            src="https://product.hstatic.net/200000182297/product/4_9505af4dba5a4aad9af063c145e2defb_master.jpg"
            style={{ width: "300px", paddingLeft: "50px" }}
          ></img>
          <p style={{ color: "grey", marginLeft: "60px" }}>
            ĐẦM TƠ HOA HỒNG D40602
          </p>
          <b style={{ marginLeft: "130px" }}>789,000₫</b>
        </div>

        <div>
          <img
            src="https://product.hstatic.net/200000182297/product/2_7d112bfa60704ff4a1f9eddfcae25252_master.jpg"
            style={{ width: "300px", paddingLeft: "50px" }}
          ></img>
          <p style={{ color: "grey", marginLeft: "50px" }}>
            ĐẦM HOA NHÍ CỔ TRỤ D40112
          </p>
          <b style={{ marginLeft: "130px" }}>700,000₫</b>
        </div>
      </div>
      <div>
        <img
          src="https://file.hstatic.net/200000182297/file/banner_web_15_02_23_bc417e51b3bb4665845c5e80fa268e1c.jpg"
          style={{ width: "1300px", height: "500px" }}
        ></img>
      </div>
      <div style={{ textAlign: "center" }}>
        <br></br>
        <b style={{ fontSize: "40px" }}>NEM'S BLOG</b>
        <br></br>
        <b>ĐÓN ĐẦU XU HƯỚNG, ĐỊNH HÌNH PHONG CÁCH</b>
        <br></br>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <img
            src="https://file.hstatic.net/200000182297/article/342544079_185591394364106_3474506149512152400_n__1__7b5ebc8e82e84130a3effdf0c7599fa1_large.jpg"
            style={{ width: "400px", height: "240px", paddingLeft: "50px" }}
          ></img>
          <br></br>
          <b style={{ marginLeft: "160px" }}>MINIMAL CHIC</b>
        </div>
        <div>
          <img
            src="https://file.hstatic.net/200000182297/article/327890757_8735259056545354_6482098786089923519_n_ee711d5e3b9f4541b8c10fed967c16ca_large.jpg"
            style={{ width: "400px", height: "240px", paddingLeft: "10px" }}
          ></img>
          <br></br>
          <b style={{ marginLeft: "60px" }}>3 CÁCH DIỆN SƠ MI ĐẸP ĐÚNG CHUẨN</b>
        </div>
        <div>
          <img
            src="https://file.hstatic.net/200000182297/article/315854475_2623148267823058_3203710229884569157_n_3baa02b3ee4348339faec98be869be0d_large.jpg"
            style={{ width: "440px", height: "240px", paddingLeft: "10px" }}
          ></img>
          <b style={{ marginLeft: "20px" }}>
            KHÁM PHÁ 4 HỌA TIẾT THỒNG LĨNH MÙA XUÂN - HÈ
          </b>
        </div>
      </div>
    </>
  );
}
