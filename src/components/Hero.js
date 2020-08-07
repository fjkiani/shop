import React from "react";
import { Link } from "react-router-dom";


export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1> A Himalayan Salt Shop </h1>
        {/* <div class="vertical-center">
         <Link to="/products" className="btn btn-primary btn-hero center">
          our products
        </Link>
        </div> */}
        {/* <p>A Product from the Khewra Salt Mine in Pakistan.</p> */}
        {children}
      </div>
    </div>
  );
}
