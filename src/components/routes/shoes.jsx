import React from 'react';
import Nav from '../nav';
import Footer from '../footer';
import Filter from '../filter';


class Shoes extends React.Component {
    render () {
        return (
            <div className='container'>
                            <Nav />
                            <Filter />
          <div className="shoes_container">
           <section className="gallery2">
                    <figure>
                        <img
                        src={(require('./Slideshow/0.webp'))}
                        alt="BABYLON"
                        />
                        <figcaption>
                        <small className="brand">SALVATOR FERRAGAMO</small>
                        <br />
                        Leather Sneaker with Margum Sole
                        <br />
                        $995
                        </figcaption>
                    </figure>
                    <figure>
                        <img
                        src={(require('./Slideshow/1.webp'))}
                        alt="BABYLON"
                        />
                        <figcaption>
                        <small className="brand">SAINT LAURANT</small>
                        <br />
                        Fall collection Leather Buckel Boots
                        <br />
                        $3,450
                        </figcaption>
                    </figure>
                    <figure>
                        <img
                        src={(require('./Slideshow/2.webp'))}
                        alt="BABYLON"
                        />
                        <figcaption>
                        <small className="brand">COMMON PROJECTS</small>
                        <br />
                        Low-top Sneaker
                        <br />
                        $350
                        </figcaption>
                    </figure>
                    <figure>
                        <img
                        src={(require('./Slideshow/3.webp'))}
                        alt="BABYLON"
                        />
                        <figcaption>
                        <small className="brand">COMMON PROJECTS</small>
                        <br />
                        High-top Sneaker
                        <br />
                        $685
                        </figcaption>
                    </figure>
            </section>
            <section className="gallery2">
                    <figure>
                        <img
                        src={(require('./Slideshow/4.webp'))}
                        alt="BABYLON"
                        />
                        <figcaption>
                        <small className="brand">NIKE</small>
                        <br />
                        High-top Sneakers
                        <br />
                        $149
                        </figcaption>
                    </figure>
                    <figure>
                        <img
                        src={(require('./Slideshow/5.webp'))}
                        alt="BABYLON"
                        />
                        <figcaption>
                        <small className="brand">CONVERSE</small>
                        <br />
                        Star Messy Sneaker
                        <br />
                        $89
                        </figcaption>
                    </figure>
                    <figure>
                        <img
                        src={(require('./Slideshow/6.webp'))}
                        alt="BABYLON"
                        />
                        <figcaption>
                        <small className="brand">GUCCI</small>
                        <br />
                        Two-strap Buckle Suede Sandal
                        <br />
                        $275
                        </figcaption>
                    </figure>
                    <figure>
                        <img
                        src={(require('./Slideshow/7.webp'))}
                        alt="BABYLON"
                        />
                        <figcaption>
                        <small className="brand">TOM FORD</small>
                        <br />
                        Black Oxfords
                        <br />
                        $1,260
                        </figcaption>
                    </figure>
            </section>
            <section className="gallery2">
                    <figure>
                        <img
                        src={(require('./Slideshow/8.webp'))}
                        alt="BABYLON"
                        />
                        <figcaption>
                        <small className="brand">GUCCI</small>
                        <br />
                        Carpet Sneakers with Signature Stripe
                        <br />
                        $820
                       </figcaption>
                    </figure>
                    <figure>
                        <img
                        src={(require('./Slideshow/9.webp'))}
                        alt="BABYLON"
                        />
                        <figcaption>
                        <small className="brand">GUCCI</small>
                        <br />
                        Dress Shoes with Signature Golden Buckle
                        <br />
                        $770
                        </figcaption>
                    </figure>
                    <figure>
                        <img
                        src={(require('./Slideshow/11.webp'))}
                        alt="BABYLON"
                        />
                        <figcaption>
                        <small className="brand">RICK OWENS</small>
                        <br />
                        Classics Low-top Sneakers
                        <br />
                        $1,390
                        </figcaption>
                    </figure>
                    <figure>
                        <img
                        src={(require('./Slideshow/12.webp'))}
                        alt="BABYLON"
                        />
                        <figcaption>
                        <small className="brand">SALVATORE FERRAGAMO</small>
                        <br />
                        Triple-black Low-top
                        <br />
                        $610
                        </figcaption>
                    </figure>
            </section>
        </div>
        <Footer />

        </div>
        );
    }
}
export default Shoes;