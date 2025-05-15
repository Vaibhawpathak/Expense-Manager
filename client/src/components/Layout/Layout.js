import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  };

  const contentStyle = {
    flex: 1,
  };

  return (
    <div style={layoutStyle}>
      <Header />
      <div style={contentStyle} className="container mt-4">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
