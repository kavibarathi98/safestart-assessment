import React from "react";

function Header() {

  return (
    <header
      className="bg-dark text-white shadow-sm"
      style={{
        height: "60px",
      }}
    >

      <div className="container-fluid h-100">

        <div className="d-flex align-items-center h-100 px-3">

          <h4 className="fw-bold mb-0">
            SafeStart Assessment
          </h4>

        </div>

      </div>

    </header>
  );
}

export default Header;