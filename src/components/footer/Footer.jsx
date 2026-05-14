import React from "react";

function Footer() {

  return (
    <footer
      className="bg-dark text-white mt-5"
      style={{
        padding: "20px 0",
      }}
    >

      <div className="container-fluid">

        <div className="text-center">

          <h5 className="fw-bold">
            SafeStart Assessment
          </h5>

          <p
            className="mb-1"
            style={{
              color: "#d1d5db",
            }}
          >
            Built using React.js, Redux and Bootstrap
          </p>

          <small
            style={{
              color: "#9ca3af",
            }}
          >
            © 2026 SafeStart Assessment. All Rights Reserved.
          </small>

        </div>

      </div>

    </footer>
  );
}

export default Footer;