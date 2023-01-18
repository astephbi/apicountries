import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const style = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px",
  };
  return (
    <div>
      <nav className="navBar">
        <ul style={style}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
