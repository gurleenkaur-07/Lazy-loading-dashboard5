import { NavLink } from "react-router-dom";

function Shell({ children }) {
  return (
    <div className="app">
      <nav className="navbar">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <main className="main-content">{children}</main>
    </div>
  );
}

export default Shell;
