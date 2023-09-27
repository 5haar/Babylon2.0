import React from 'react';
import Nav from '../nav';
import Footer from '../footer';
import Filter from '../filter';

class Clothing extends React.Component {
    render () {
        return (
          <div className="container">
            <Nav />
            <Filter />
            <section id="clothingSection1">
              <section className="clothingGallery">
                <section className="layer1">
                  <section className="image">
                    <figure>
                      <video
                    src={require('.//clothingVideos/amiri.mp4')}
                    loop=""
                    onMouseOver={event => event.target.play()}
                    onMouseOut={event => event.target.pause()}
                      />
                      <figcaption>
                        <small className="clothingCap">AMIRI</small>
                        <br />
                        Camp-Collar Logo-Print Silk Shirt
                        <br />
                        $1,395
                      </figcaption>
                    </figure>
                  </section>
                  <section className="image">
                    <figure>
                      <video
                        src={require('.//clothingVideos/balmain.mp4')}
                        loop=""
                        onMouseOver={event => event.target.play()}
                        onMouseOut={event => event.target.pause()}
                      />
                      <figcaption>
                        <small className="clothingCap">BALMAIN</small>
                        <br />
                        Padded Striped Crinkled-Shell Bomber
                        <br />
                        $2,175
                      </figcaption>
                    </figure>
                  </section>
                  <section className="image">
                    <figure>
                      <video
                        src={require('.//clothingVideos/bogliolo.mp4')}
                        loop=""
                        onMouseOver={event => event.target.play()}
                        onMouseOut={event => event.target.pause()}
                      />
                      <figcaption>
                        <small className="clothingCap">BOGLIOLO</small>
                        <br />
                        Camp-Collar Logo-Print Silk Shirt
                        <br />
                        $820
                      </figcaption>
                    </figure>
                  </section>
                  <section className="image">
                    <figure>
                      <video
                        src={require('.//clothingVideos/pendeleton.mp4')}
                        loop=""
                        onMouseOver={event => event.target.play()}
                        onMouseOut={event => event.target.pause()}
                      />
                      <figcaption>
                        <small className="clothingCap">PENDELETON</small>
                        <br />
                        Cotton-Terry Jacquard Hooded Robe
                        <br />
                        $1,730
                      </figcaption>
                    </figure>
                  </section>
                </section>
                <section className="layer2">
                  <section className="image">
                    <figure>
                      <video
                        src={require('.//clothingVideos/gucci.mp4')}
                        loop=""
                        onMouseOver={event => event.target.play()}
                        onMouseOut={event => event.target.pause()}
                      />
                      <figcaption>
                        <small className="clothingCap">GUCCI</small>
                        <br />
                        Jacquard Wool-Blend Cardigan
                        <br />
                        $1,030
                      </figcaption>
                    </figure>
                  </section>
                  <section className="image">
                    <figure>
                      <video
                        src={require('.//clothingVideos/mrp.mp4')}
                        loop=""
                        onMouseOver={event => event.target.play()}
                        onMouseOut={event => event.target.pause()}
                      />
                      <figcaption>
                        <small className="clothingCap">MR P.</small>
                        <br />
                        Leather Blouson Jacket
                        <br />
                        $2,390
                      </figcaption>
                    </figure>
                  </section>
                  <section className="image">
                    <figure>
                      <video
                        src={require('.//clothingVideos/tomford.mp4')}
                        loop=""
                        onMouseOver={event => event.target.play()}
                        onMouseOut={event => event.target.pause()}
                      />
                      <figcaption>
                        <small className="clothingCap">TOM FORD</small>
                        <br />
                        Metallic Silk-Chiffon Shirt
                        <br />
                        $1,330
                      </figcaption>
                    </figure>
                  </section>
                  <section className="image">
                    <figure>
                      <video
                        src={require('.//clothingVideos/ysl.mp4')}
                        loop=""
                        onMouseOver={event => event.target.play()}
                        onMouseOut={event => event.target.pause()}
                      />
                      <figcaption>
                        <small className="clothingCap">SAINT LAURANT</small>
                        <br />
                        Logo-Embroidered Striped T-Shirt
                        <br />
                        $875
                      </figcaption>
                    </figure>
                  </section>
                </section>
                <section className="layer3">
                  <section className="image">
                    <figure>
                      <video
                        src={require('.//clothingVideos/givenchy.mp4')}
                        loop=""
                        onMouseOver={event => event.target.play()}
                        onMouseOut={event => event.target.pause()}
                      />
                      <figcaption>
                        <small className="clothingCap">GIVENCHY</small>
                        <br />
                        Bandana-Print Cotton Shirt
                        <br />
                        $1,035
                      </figcaption>
                    </figure>
                  </section>
                  <section className="image">
                    <figure>
                      <video
                        src={require('.//clothingVideos/fullrick.mp4')}
                        loop=""
                        onMouseOver={event => event.target.play()}
                        onMouseOut={event => event.target.pause()}
                      />
                      <figcaption>
                        <small className="clothingCap">RICK OWENS</small>
                        <br />
                        Slim-Fit Black Trousers
                        <br />
                        $615
                      </figcaption>
                    </figure>
                  </section>
                  <section className="image">
                    <figure>
                      <video
                        src={require('.//clothingVideos/orlebar.mp4')}
                        loop=""
                        onMouseOver={event => event.target.play()}
                        onMouseOut={event => event.target.pause()}
                      />
                      <figcaption>
                        <small className="clothingCap">ORLEBAR BROWN</small>
                        <br />
                        Club Tropica Ridley Woven Shirt
                        <br />
                        $375
                      </figcaption>
                    </figure>
                  </section>
                  <section className="image">
                    <figure>
                      <video
                        src={require('.//clothingVideos/kingsman.mp4')}
                        loop=""
                        onMouseOver={event => event.target.play()}
                        onMouseOut={event => event.target.pause()}
                      />
                      <figcaption>
                        <small className="clothingCap">KINGSMAN</small>
                        <br />
                        Cashmere-Jacquard Sweater
                        <br />
                        $1,370
                      </figcaption>
                    </figure>
                  </section>
                </section>
              </section>
            </section>
            <Footer />
        </div>
        );
    }
}
export default Clothing;
