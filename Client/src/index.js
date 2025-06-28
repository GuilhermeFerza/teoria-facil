import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.scss";
import Home from "./pages/Home.jsx";
import AdminBlog from "./pages/AdminBlog.jsx";
import Blog from "./pages/Blog.jsx";
import Admin from "./pages/Admin.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/blog" element={<AdminBlog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;

reportWebVitals();
