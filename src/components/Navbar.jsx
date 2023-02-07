import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div>Welcome to Amar's Page</div>
      <h1>Admin Table</h1>

      <section>
        <div>
          Come here to the better understanding of the redux application
        </div>
        <br />
        <nav>
          <ul>
            <li>
              <a href="/" data-item="Home">
                Home
              </a>
            </li>
            <li>
              <a href="/" data-item="About">
                About
              </a>
            </li>
            <li>
              <a href="/" data-item="Projects">
                Projects
              </a>
            </li>
            <li>
              <a href="/" data-item="Code">
                Code
              </a>
            </li>
            <li>
              <a href="/" data-item="Contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
