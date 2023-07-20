import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="d-flex justify-content-around bg-warning">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contactus">Contact Us</NavLink>
      <NavLink to="/person">Person</NavLink>
    </ul>
  );
};

export default Navbar;
