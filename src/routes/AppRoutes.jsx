import React from 'react'
import { BrowserRouter as Router,Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from '../pages/Login';
import Products from '../pages/Products';
import Profile from '../pages/Profile';
import Sidebar from '../components/Sidebar';
import { useSelector } from 'react-redux';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const ProtectedLayout = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  
  if (!isAuthenticated) return <Navigate to="/" replace />;

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ padding: '20px', width: '100%' }}>
        <Outlet />
      </main>
    </div>
  )
}


function AppRoutes() {
  return (
    <Router>
      <Header />
        <Routes>
            <Route path='/' element={<Login />} />
            <Route element={<ProtectedLayout />}>
              <Route path='/products' element = { <Products />} />
              <Route path='/profile' element = { <Profile />} />
            </Route>
        </Routes>
        <Footer />
    </Router>
  )
}

export default AppRoutes

