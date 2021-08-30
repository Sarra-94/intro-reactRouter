import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      {/* how to send a parameter in match props */}
      <li>
        {" "}
        <Link to={`/about/${66}`}>About</Link>
      </li>
      {/* How To send a state in the location props */}
      <li>
        <Link
          to={{
            pathname: "/contact",
            state: { movie: { name: "zootopia", date: 2019 } },
          }}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
