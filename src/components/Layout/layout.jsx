import React from "react";
import Footer from "./Footer/footer";
import Header from "./Header/header";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
