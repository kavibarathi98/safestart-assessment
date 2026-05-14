import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/userSlice";
import { useForm } from "react-hook-form";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // e.preventDefault();
    dispatch(login({ username: data.username }));
    navigate("/products");
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div
        className="card shadow-lg p-4 border-0"
        style={{ width: "400px", borderRadius: "20px" }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold">Welcome Back</h2>
          <p className="text-muted">Login to continue</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Username or Email Address
            </label>
            <input
              type="text"
              className={`form-control p-2 ${errors.username ? "is-invalid" : ""}`}
              placeholder="Enter username or email"
              autoComplete="off"
              {...register("username", {
                required: "Username or Email is required",
              })}
            />
            {errors.username && (
              <div className="invalid-feedback">{errors.username.message}</div>
            )}
          </div>

          <div className="mb-5">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className={`form-control p-2 ${errors.password ? "is-invalid" : ""}`}
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>

          <button className="btn btn-primary w-100 py-2">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
