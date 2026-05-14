import React, { useState } from "react";

import { Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import { logout } from "../redux/userSlice";

function Sidebar() {

  const [showSidebar, setShowSidebar] = useState(false);

  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleMenuClick = () => {
    setShowSidebar(false);
  };

  const getPageTitle = () => {

    switch (location.pathname) {

      case "/products":
        return "Product List";

      case "/profile":
        return "Profile Page";

      default:
        return "Dashboard";
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className="navbar navbar-light bg-white shadow-sm px-3"
        style={{
          height: "70px",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >

        <div className="d-flex align-items-center gap-3">

          <button
            className="btn btn-light border"
            onClick={() => setShowSidebar(true)}
          >
            ☰
          </button>

          <h4 className="mb-0 fw-bold">
            {getPageTitle()}
          </h4>

        </div>

        <div className="fw-semibold text-secondary">
          {"SafeStart Assessment"}
        </div>

      </nav>

      {/* Overlay */}
      {showSidebar && (

        <div
          onClick={() => setShowSidebar(false)}
          style={{
            position: "fixed",
            width: "100%",
            height: "100vh",
            background: "rgba(0,0,0,0.4)",
            top: 0,
            left: 0,
            zIndex: 998,
          }}
        ></div>

      )}

      {/* Sidebar */}
    <div
    style={{
        width: "280px",
        height: "calc(100vh - 70px)",
        background: "#ffffff",
        position: "fixed",
        top: "70px",
        left: showSidebar ? "0" : "-300px",
        transition: "0.3s ease",
        zIndex: 1200,
        boxShadow: "0 0 20px rgba(0,0,0,0.1)",
        padding: "20px",
        overflowY: "auto",
    }}
    >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-2">

          {/* Close Button */}
          <button  type="button" class="btn-close" aria-label="Close"
            onClick={() => setShowSidebar(false)}
            style={{
                marginLeft:'13rem'
            }}
          >
          </button>

        </div>

        {/* User Details */}
        <div
          className="p-3 mb-4"
          style={{
            background: "#f3f4f6",
            borderRadius: "12px",
          }}
        >

          <h5>
            👤 {user?.name || "User"}
          </h5>

          <p
            className="mb-0"
            style={{
              fontSize: "13px",
              color: "#6b7280",
            }}
          >
            {user?.email || "No Email"}
          </p>

        </div>

        {/* Menu Items */}
        <div className="d-flex flex-column gap-2">

          <Link
            to="/products"
            onClick={handleMenuClick}
            className={`text-decoration-none p-3 rounded fw-semibold ${
              location.pathname === "/products"
                ? "bg-dark text-white"
                : "text-dark"
            }`}
          >
            📦 Product List
          </Link>

          <Link
            to="/profile"
            onClick={handleMenuClick}
            className={`text-decoration-none p-3 rounded fw-semibold ${
              location.pathname === "/profile"
                ? "bg-dark text-white"
                : "text-dark"
            }`}
          >
            👤 Profile Page
          </Link>

        </div>

        {/* Logout */}
        <div className="mt-4">

            <button
                className="btn btn-danger w-100"
                onClick={handleLogout}
            >
                Logout
            </button>

        </div>

      </div>
    </>
  );
}

export default Sidebar;