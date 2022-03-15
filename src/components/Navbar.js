import react from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useSelector } from "react-redux";
import CartSlice from "../redux/CartSlice";

const Navbar = () => {
    const quantity = useSelector(state=> state.cart.quantity)
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <a href={"https://red-family.netlify.app"}>
          <img src="./images/redd.png" />
        </a>
      </div>
      <div className="navbar-label">
        <Link to={"/"}>
        <h1>RED FAMILY SHOP</h1>
        </Link>
      </div>
      <div className="navbar-cart">
        <Link to={"/carrello"}>
          <img src="../images/cart.png" />
          <div className="cart-quantity-wrapper">{quantity}</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
