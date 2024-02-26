import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Flexslide from './Components/Userside/Userhome/Flexslide';
import Home from './Components/Sellerside/Sellerhome/Home';
import Usersignup from './Components/Userside/Userlogin/Usersignup';
import Footer from './Components/Userside/Userfooter/Footer';
import Midpart from './Components/Userside/Userfooter/Midpart';
import Cart from './Components/Userside/Userhome/Cart';
import CategoryFilter from './Components/Userside/Userfilter/CategoryFilter';
import CategoryPage from './Components/Userside/Userfilter/CategoryPage';
import Sellerlogin from './Components/Sellerside/Sellerlogin/Sellerlogin';
import Sellersignup from './Components/Sellerside/Sellerlogin/Sellersignup';
import Login from './Components/Userside/Userlogin/Login';
import Addproduct from './Components/Sellerside/Selleradd/Addproduct';
import Recentlyadd from './Components/Sellerside/Selleradd/Rcentlyadd';
import Productlist from './Components/Sellerside/Selleradd/Productlist';
import Adminlogin from './Components/Adminside/Adminlogin/Adminlogin';
import Admin from './Components/Adminside/Adminhome/Admin';
import Adminviewproduct from './Components/Adminside/Adminadd/Adminviewproduct';
import Addcategory from './Components/Adminside/Adminadd/Addcategory';
import Admincategoryview from './Components/Adminside/Adminadd/Admincategoryview';
import CategoryView from './Components/Adminside/Adminadd/Categoryview';
import Productview from './Components/Sellerside/Selleradd/Productview';
import Sellersidebar from './Components/Sellerside/Sellerhome/Sellersidebar';

function App() {
  const [auth, setAuth] = useState(false);
  const [sellerAuth, setSellerAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const userResponse = await axios.post(
            "http://localhost:5000/auth/verifyToken",
            { token }
          );
          const sellerResponse = await axios.post(
            "http://localhost:5000/sauth/verifyToken",
            { token }
          );

          if (userResponse.data.success) {
            setAuth(true);
          } else {
            setAuth(false);
          }

          if (sellerResponse.data.success) {
            setSellerAuth(true);
          } else {
            setSellerAuth(false);
          }
        } catch (error) {
          console.error("Token verification failed:", error);
          setAuth(false);
          setSellerAuth(false);
        }
      } else {
        setAuth(false);
        setSellerAuth(false);
      }
      setLoading(false);
    };

    checkToken();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Userside */}
          <Route path='/signup' element={<Usersignup />} />
          <Route path='/' element={<Login setAuth={setAuth} />} />
          <Route path='/userside' element={auth ? <Flexslide /> : <Navigate to="/" />} />
          <Route path='/footer' element={auth ? <Footer /> : <Navigate to="/" />} />
          <Route path='/mid' element={auth ? <Midpart /> : <Navigate to="/" />} />
          <Route path='/cart' element={auth ? <Cart /> : <Navigate to="/" />} />
          <Route path='/filter' element={auth ? <CategoryFilter /> : <Navigate to="/" />} />
          <Route path='/category/:category' element={auth ? <CategoryPage /> : <Navigate to="/" />} />
          
          {/* Sellerside */}
          <Route path='/sellersignup' element={<Sellersignup />} />
          <Route path='/sellerlogin' element={<Sellerlogin setSellerAuth={setSellerAuth} />} />
          <Route path='/seller' element={sellerAuth ? <Home /> : <Navigate to="/sellerlogin" />} />
          <Route path='/products' element={sellerAuth ? <Recentlyadd /> : <Navigate to="/sellerlogin" />} />
          <Route path='/add' element={sellerAuth ? <Addproduct /> : <Navigate to="/sellerlogin" />} />
          <Route path='/productlist' element={<Productlist />} />
          <Route path='/pview' element={sellerAuth ? <Productview /> : <Navigate to="/sellerlogin" />} />

          {/* Admin */}
          <Route path='/alogin' element={<Adminlogin />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/category' element={<Addcategory />} />
          <Route path='/viewcategory' element={<CategoryView />} />
          <Route path='/adminallproduct' element={<Adminviewproduct />} />   
          <Route path='/admincategoryall' element={<Admincategoryview />} />       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
