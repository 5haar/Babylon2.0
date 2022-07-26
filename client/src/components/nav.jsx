import React from 'react';
import { Link } from "react-router-dom";

class Nav extends React.Component {
    render () {
        return (
          <div className="nav_container">
          <h1>
            <a href="/">B A B Y L O N</a>
          </h1>
          <nav>
            <ul>
              <li>
              <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/clothing">Clothing</Link>
              </li>
              <li>
              <Link to="/shoes">Shoes</Link>
              </li>
              <li>
              <Link to="/watches">Watches</Link>
              </li>
              <li>
              <Link to="/accessories">Accessories</Link>
              </li>
              <li>
              <Link to="/blog">The Blog</Link>
              </li>
              <li>
              <Link to="/about">About Us</Link>
              </li>
              <li>
              <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
          <h2>ESSENTIAL MEN'S FASHION</h2>
        </div>
        );
    }
}
export default Nav;