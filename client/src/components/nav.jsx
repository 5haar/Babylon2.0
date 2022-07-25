import React from 'react';

class Nav extends React.Component {
    render () {
        return (
          <div className="nav_container">
          <h1>
            <a href="index.html">B A B Y L O N</a>
          </h1>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="">Clothing</a>
              </li>
              <li>
                <a href="shoes.html">Shoes</a>
              </li>
              <li>
                <a href="watches.html">Watches</a>
              </li>
              <li>
                <a href="accessories.html">Accessories</a>
              </li>
              <li>
                <a href="theblog.html">The Blog</a>
              </li>
              <li>
                <a href="aboutus.html">About Us</a>
              </li>
              <li>
                <a href="contactus.html">Contact Us</a>
              </li>
            </ul>
          </nav>
          <h2>ESSENTIAL MEN'S FASHION</h2>
        </div>
        );
    }
}
export default Nav;

