import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ tab, setTab, products, carts, setToken }) {
  return (
    <div className="navbar-container">
      <Link to={"/home"}>
        <button
          className={
            "btn " + (tab === "home" ? "btn-danger" : "btn-outline-danger")
          }
          onClick={() => setTab("home")}
        >
          Home
        </button>
      </Link>
      <Link to={"/calculator"}>
        <button
          className={
            "btn " +
            (tab === "calculator" ? "btn-danger" : "btn-outline-danger")
          }
          onClick={() => setTab("calculator")}
        >
          Calculator
        </button>
      </Link>
      <Link to={"/component"}>
        <button
          className={
            "btn " + (tab === "component" ? "btn-danger" : "btn-outline-danger")
          }
          onClick={() => setTab("component")}
        >
          Component
        </button>
      </Link>
      <Link to={"/todo"}>
        <button
          className={
            "btn " + (tab === "todo" ? "btn-danger" : "btn-outline-danger")
          }
          onClick={() => setTab("todo")}
        >
          Todo
        </button>
      </Link>
      <Link to={"/products"}>
        <button
          className={
            "btn " + (tab === "products" ? "btn-danger" : "btn-outline-danger")
          }
          onClick={() => setTab("products")}
        >
          Products ({products.length})
        </button>
      </Link>
      <Link to={"/cart"}>
        <button
          className={
            "position-relative btn " +
            (tab === "cart" ? "btn-danger" : "btn-outline-danger")
          }
          onClick={() => setTab("cart")}
        >
          Cart
          {carts.length > 0 && (
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
              {carts.length < 10 ? carts.length : "9+"}
              <span class="visually-hidden">unread messages</span>
            </span>
          )}
        </button>
      </Link>

      <button className="btn btn-outline-info mx-3"
        onClick={() => setToken("")}>
        Logout
      </button>
    </div>
  );
}

export default Navbar;
