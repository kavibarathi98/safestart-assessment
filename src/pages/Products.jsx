import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

function Products() {

  const [selectedProduct, setSelectedProduct] = useState(null);

const products = [

  {
    id: 1,
    name: "MacBook Pro",
    price: "₹1,25,000",
    image: "https://thesweetsetup.com/wp-content/uploads/2021/11/M1-Pro-MacBook-Pro-9.jpg",
    description: "Powerful laptop designed for developers.",
  },

  {
    id: 2,
    name: "iPhone 15",
    price: "₹79,000",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    description: "Premium smartphone with amazing camera.",
  },

  {
    id: 3,
    name: "Gaming Headset",
    price: "₹4,999",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    description: "Noise cancellation gaming headset.",
  },

  {
    id: 4,
    name: "Smart Watch",
    price: "₹8,999",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
    description: "Track your fitness and notifications.",
  },

  {
    id: 5,
    name: "Gaming Mouse",
    price: "₹2,499",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800",
    description: "RGB mouse with high precision sensor.",
  },

  {
    id: 6,
    name: "Bluetooth Speaker",
    price: "₹3,999",
    image: "https://i.guim.co.uk/img/media/c6af49070512c0a410854a21ccc278910fb23d8b/0_179_5386_3234/master/5386.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=41d3d323639ba9ab3970ca4774b15206",
    description: "Portable wireless bass boosted speaker.",
  },

  {
    id: 7,
    name: "Mechanical Keyboard",
    price: "₹6,999",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800",
    description: "Mechanical keyboard with RGB lighting.",
  },

  {
    id: 8,
    name: "DSLR Camera",
    price: "₹55,000",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
    description: "Professional DSLR camera for photography.",
  },

  {
    id: 9,
    name: "Tablet",
    price: "₹28,000",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800",
    description: "Portable tablet for work and entertainment.",
  },

  {
    id: 10,
    name: "Monitor",
    price: "₹14,999",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800",
    description: "Ultra HD monitor with vibrant display.",
  },

];

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
          paddingTop: "25px",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "20px",
        }}
      >

        {/* Heading */}
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

        {/* Products Grid */}
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

                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                {/* Card Body */}
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

      {/* Modal */}
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

            {/* Close Button */}
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

            {/* Modal Image */}
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