// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import BookingPage from "./pages/BookingPage";
import TransformationDetails from "./pages/TransformationDetails";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/transformation/:id" element={<TransformationDetails />} />
        <Route path="/service/:serviceName" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;