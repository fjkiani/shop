import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import CartLink from "./Cart/CartLink";
import { UserContext } from "../context/user";
import LoginLink from "../components/LoginLink";
export default function Header() {
  const { user } = React.useContext(UserContext);
  return (
    <header className="header">
    <Link to ="/">
          <img src={logo} alt="Namak logo" className="logo" /></Link>
      <nav>
        <ul>
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            {user.token && (
              <li>
                <Link to="/checkout">checkout</Link>
              </li>
            )}
          </div>
          <div>
            <LoginLink />
            <CartLink />
          </div>
        </ul>
      </nav>
    </header>
  );
}
