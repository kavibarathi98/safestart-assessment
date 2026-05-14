import React from "react";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";

function Profile() {

  const { user } = useSelector((state) => state.user);

  return (
    <div
      style={{
        background: "#f5f7fb",
        minHeight: "100vh",
      }}
    >

      {/* Navbar + Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div
        className="container-fluid"
        style={{
          paddingTop: "90px",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "20px",
        }}
      >

        <div className="row justify-content-center">

          <div className="col-lg-8">

            {/* Profile Card */}
            <div
              className="card border-0 shadow-sm"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >

              {/* Top Banner */}
              <div
                style={{
                  height: "180px",
                  background:
                    "linear-gradient(135deg, #2563eb, #1e40af)",
                }}
              ></div>

              {/* Profile Content */}
              <div
                className="text-center px-4 pb-4"
                style={{
                  marginTop: "-60px",
                }}
              >

                {/* Avatar */}
                <div
                  className="mx-auto d-flex align-items-center justify-content-center"
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background: "#ffffff",
                    fontSize: "50px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  }}
                >
                  👨‍💻
                </div>

                {/* User Name */}
                <h2 className="mt-3 fw-bold">
                  {user?.name || "Frontend Developer"}
                </h2>

                {/* Email */}
                <p
                  style={{
                    color: "#6b7280",
                  }}
                >
                  {user?.email || "No Email Available"}
                </p>

                {/* Short Intro */}
                <p
                  className="mt-4"
                  style={{
                    fontSize: "15px",
                    color: "#4b5563",
                    lineHeight: "28px",
                  }}
                >
                  Passionate React.js developer with experience
                  in building responsive and scalable web
                  applications using React, Redux, JavaScript,
                  Bootstrap and modern frontend technologies.
                </p>

                {/* Skills */}
                <div className="mt-4 d-flex flex-wrap justify-content-center gap-2">

                  <span className="badge bg-primary p-2">
                    React.js
                  </span>

                  <span className="badge bg-dark p-2">
                    Redux
                  </span>

                  <span className="badge bg-success p-2">
                    JavaScript
                  </span>

                  <span className="badge bg-danger p-2">
                    Bootstrap
                  </span>

                  <span className="badge bg-warning text-dark p-2">
                    HTML/CSS
                  </span>

                </div>

                {/* Stats */}
                <div className="row mt-5">

                  <div className="col-md-4 mb-3">

                    <div
                      className="p-3 rounded"
                      style={{
                        background: "#f9fafb",
                      }}
                    >

                      <h3 className="fw-bold text-primary">
                        3.5+
                      </h3>

                      <p className="mb-0 text-muted">
                        Years Experience
                      </p>

                    </div>

                  </div>

                  <div className="col-md-4 mb-3">

                    <div
                      className="p-3 rounded"
                      style={{
                        background: "#f9fafb",
                      }}
                    >

                      <h3 className="fw-bold text-success">
                        15+
                      </h3>

                      <p className="mb-0 text-muted">
                        Projects Completed
                      </p>

                    </div>

                  </div>

                  <div className="col-md-4 mb-3">

                    <div
                      className="p-3 rounded"
                      style={{
                        background: "#f9fafb",
                      }}
                    >

                      <h3 className="fw-bold text-danger">
                        100%
                      </h3>

                      <p className="mb-0 text-muted">
                        Responsive UI
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;