import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./components/home";
import Navbar from "./components/navbar";
import Arts from "./components/arts";
import Footer from "./components/footer";
import About from "./components/about";
import Contact from "./components/contact";
import PreloadImages from "./components/preloadImages";
import Loader from "./components/Loader";

import "./App.css";


const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    if (location.pathname === "/") {
      // show loader ONLY for home
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 5000); // 3 sec
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [location]);

  return (
    <>
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/arts" element={<Arts />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <PreloadImages />
        </>
      )}
    </>
  );
};

export default App;
