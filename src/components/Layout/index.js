import React from "react";
import { Helmet } from "react-helmet";

import Footer from "./Footer";
import Header from "./Header";
import Background from "./Background";

import siteSettings from "../../utils/constants/siteSettings";

const Layout = ({
  children,
  className = "",
  style = {},
  title,
  desciption,
  showHeaderMenus = true,
}) => {
  return (
    <div className="overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-background-2 -z-50 w-full h-full"></div>
      <Background />
      <Helmet>
        <title>{title || siteSettings.siteName}</title>
        <meta
          name="description"
          content={desciption || siteSettings.siteDescription}
        />
      </Helmet>
      <div className={`z-1 min-h-screen ${className}`} style={style}>
        <Header showHeaderMenus={showHeaderMenus}/>
        <div style={{minHeight: "calc( 100vh - 80px )"}}>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
