import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import products from "../data/products";

function Products() {

  const [selectedProduct, setSelectedProduct] = useState(null);


  return (
    <div
      style={{
        background: "#f5f7fb",
        minHeight: "100vh",
      }}
    >

      <Sidebar />

      <div
        className="container-fluid"
        style={{
          paddingTop: "25px",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "20px",
        }}
      >

        <div className="mb-4">

          <h2 className="fw-bold">
            Products
          </h2>

          <p
            style={{
              color: "#6b7280",
            }}
          >
            Explore trending electronic products
          </p>

        </div>

        <div className="row">

          {products.map((item) => (

            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              key={item.id}
            >

              <div
                className="card border-0 h-100"
                style={{
                  borderRadius: "18px",
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                }}
              >

                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body d-flex flex-column">

                  <h5 className="fw-bold">
                    {item.name}
                  </h5>

                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: "14px",
                      flexGrow: 1,
                    }}
                  >
                    {item.description}
                  </p>

                  <div className="d-flex justify-content-between align-items-center mt-3">

                    <h6
                      className="fw-bold mb-0"
                      style={{
                        color: "#2563eb",
                      }}
                    >
                      {item.price}
                    </h6>

                    <button
                      className="btn btn-dark btn-sm px-3"
                      onClick={() => setSelectedProduct(item)}
                    >
                      View
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {selectedProduct && (

        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2000,
            padding: "20px",
          }}
        >

          <div
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              width: "100%",
              maxWidth: "500px",
              overflow: "hidden",
              position: "relative",
              animation: "fadeIn 0.3s ease",
            }}
          >

            <button
              onClick={() => setSelectedProduct(null)}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "none",
                background: "#ffffff",
                fontSize: "22px",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
              }}
            >
              ×
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
              }}
            />

            {/* Modal Content */}
            <div className="p-4">

              <h3 className="fw-bold">
                {selectedProduct.name}
              </h3>

              <p
                style={{
                  color: "#6b7280",
                  lineHeight: "28px",
                }}
              >
                {selectedProduct.description}
              </p>

              <h4
                className="fw-bold mt-3"
                style={{
                  color: "#2563eb",
                }}
              >
                {selectedProduct.price}
              </h4>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Products;