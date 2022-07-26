import React from 'react';
import Nav from './nav';
import Footer from './footer';

class Construction extends React.Component {
    render () {
        return (
            <div className="construction_container">
                <Nav />
                <section className="vh_container">
                    <section className="construction">
                        <h3>THIS PAGE IS UNDER CONSTRUCTION BY THE BABYLON TEAM</h3>
                    </section>
                </section>
                <Footer />
          </div>
        );
    }
}
export default Construction;