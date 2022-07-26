import React from 'react';
import Nav from '../nav';
import Footer from '../footer';

class Clothing extends React.Component {
    render () {
        return (
          <div className="clothing_container">
            <Nav />
          <p>Clothing</p>
            <Footer />
        </div>
        );
    }
}
export default Clothing;
