import React from 'react';
import Nav from './nav';
import Footer from './footer';

class Home extends React.Component {
    render () {
        return (
          <section className="full_container">
          <section className="main">
            <Nav />
            <section className="intro">
            <figure className="banner">
              <h3>Shop Spring Collection</h3>
            </figure>
            <section className="newSpringItems">
              <h3>Latest Spring Items</h3>
              <section className="gallery1">
                <figure>
                  <img
                    src={(require('../assets/images/SpringLooks/springYSL1.webp'))}
                    onMouseOver={e => (e.currentTarget.src = require('../assets/images/SpringLooks/springYSL2.webp'))}
                    onMouseOut={e => (e.currentTarget.src = require('../assets/images/SpringLooks/springYSL1.webp'))}
                    alt="BABYLON"
                  />
                  <figcaption>
                    <small className="brand">SAINT LAURANT</small>
                    <br />
                    Straight-Leg Pleated Wool and Silk-Blend Brocade Shorts
                    <br />
                    $1,290
                  </figcaption>
                </figure>
                <figure>
                  <img
                    src={(require('../assets/images/SpringLooks/tf1.webp'))}
                    onMouseOver={e => (e.currentTarget.src = require('../assets/images/SpringLooks/tf2.webp'))}
                    onMouseOut={e => (e.currentTarget.src = require('../assets/images/SpringLooks/tf1.webp'))}
                    alt="BABYLON"
                  />
                  <figcaption>
                    <small className="brand">TOM FORD</small>
                    <br />
                    Straight-Leg Floral-Print Cotton-Blend Shorts
                    <br />
                    $840
                  </figcaption>
                </figure>
                <figure>
                  <img
                    src={(require('../assets/images/SpringLooks/fog1.webp'))}
                    onMouseOver={e => (e.currentTarget.src = require('../assets/images/SpringLooks/fog2.webp'))}
                    onMouseOut={e => (e.currentTarget.src = require('../assets/images/SpringLooks/fog1.webp'))}
                    alt="BABYLON"
                  />
                  <figcaption>
                    <small className="brand">FEAR OF GOD</small>
                    <br />
                    Logo-Flocked Cotton-Jersey T-Shirt
                    <br />
                    <br />
                    <small className="brand">SOLD OUT</small>
                  </figcaption>
                </figure>
                <figure>
                  <img
                    src={(require('../assets/images/SpringLooks/bbb1.webp'))}
                    onMouseOver={e => (e.currentTarget.src = require('../assets/images/SpringLooks/bbb2.webp'))}
                    onMouseOut={e => (e.currentTarget.src = require('../assets/images/SpringLooks/bbb1.webp'))}
                    alt="BABYLON"
                  />
                  <figcaption>
                    <small className="brand">BILLIONAIRE BOYS CLUB</small>
                    <br />
                    Spencer Slim-Fit Metallic Velvet-Jacquard Tuxedo Jacket
                    <br />
                    $5,990
                  </figcaption>
                </figure>
              </section>
            </section>
            <a href="#section1" aria-label="scroll-down-link">
              <div className="scroll-down" />
            </a>
          </section>
          {/* --------------------------------------------------------------------- */}
          
  <section id="section1">
    <h3 className="LA">Latest Arrivals</h3>
    <section className="gallery2">
      <figure>
        <img
          src={(require('../assets/images/LatestArrivals/balmain.webp'))}
          onMouseOver={e => (e.currentTarget.src = require('../assets/images/LatestArrivals/balmain2.webp'))}
          onMouseOut={e => (e.currentTarget.src = require('../assets/images/LatestArrivals/balmain.webp'))}
          alt="BABYLON"
        />
        <figcaption>
          <small className="brand">BALMAIN</small>
          <br />
          Camp-Collar Logo-Print Silk Shirt
          <br />
          $995
        </figcaption>
      </figure>
      <figure>
        <img
          src={(require('../assets/images/LatestArrivals/greymathieu2.webp'))}
          onMouseOver={e => (e.currentTarget.src = require('../assets/images/LatestArrivals/greaymathieu.webp'))}
          onMouseOut={e => (e.currentTarget.src = require('../assets/images/LatestArrivals/greymathieu2.webp'))}
          alt="BABYLON"
        />
        <figcaption>
          <small className="brand">OFFICINE GÉNÉRALE</small>
          <br />
          Grey Mathieu Suede Bomber
          <br />
          $2,450
        </figcaption>
      </figure>
      <figure>
        <img
          src={(require('../assets/images/LatestArrivals/guccishades2.webp'))}
          onMouseOver={e => (e.currentTarget.src = require('../assets/images/LatestArrivals/guccishades.webp'))}
          onMouseOut={e => (e.currentTarget.src = require('../assets/images/LatestArrivals/guccishades2.webp'))}
          alt="BABYLON"
        />
        <figcaption>
          <small className="brand">GUCCI</small>
          <br />
          Navigator Gold-Tone Sunglasses
          <br />
          $350
        </figcaption>
      </figure>
      <figure>
        <img
          src={(require('../assets/images/LatestArrivals/tomford1.webp'))}
          onMouseOver={e => (e.currentTarget.src = require('../assets/images/LatestArrivals/tomfordtux2.webp'))}
          onMouseOut={e => (e.currentTarget.src = require('../assets/images/LatestArrivals/tomford1.webp'))}
          alt="BABYLON"
        />
        <figcaption>
          <small className="brand">TOM FORD</small>
          <br />
          Metallic Velvet Tuxedo Jacket
          <br />
          $5,990
        </figcaption>
      </figure>
    </section>
    <section className="gallery3">
      <figure>
        <img
          src={(require('../assets/images/LatestArrivals/cl1.webp'))}
          onMouseOver={e => (e.currentTarget.src = require('../assets/images/LatestArrivals/cl2.webp'))}
          onMouseOut={e => (e.currentTarget.src = require('../assets/images/LatestArrivals/cl1.webp'))}
          alt="BABYLON"
        />
        <figcaption>
          <small className="brand">CHRISTIAN LOUBOUTIN</small>
          <br />
          Louis Junior Spikes Suede Sneakers
          <br />
          $895
        </figcaption>
      </figure>
      <figure>
        <img
          src={(require('../assets/images/LatestArrivals/converse.webp'))}
          onMouseOver={e => (e.currentTarget.src = require('../assets/images/LatestArrivals/converse2.webp'))}
          onMouseOut={e => (e.currentTarget.src = require('../assets/images/LatestArrivals/converse.webp'))}
          alt="BABYLON"
        />
        <figcaption>
          <small className="brand">CONVERSE</small>
          <br />
          Chuck 70 Canvas High-Top Sneakers
          <br />
          $80
        </figcaption>
      </figure>
      <figure>
        <img
          src={(require('../assets/images/LatestArrivals/commonprojects.webp'))}
          onMouseOver={e => (e.currentTarget.src = require('../assets/images/LatestArrivals/commonp2.webp'))}
          onMouseOut={e => (e.currentTarget.src = require('../assets/images/LatestArrivals/commonprojects.webp'))}
          alt="BABYLON"
        />
        <figcaption>
          <small className="brand">COMMON PROJECTS</small>
          <br />
          Original Achilles Leather Sneakers
          <br />
          $450
        </figcaption>
      </figure>
      <figure>
        <img
          src={(require('../assets/images/LatestArrivals/tomford.webp'))}
          onMouseOver={e => (e.currentTarget.src = require('../assets/images/LatestArrivals/tomford2.webp'))}
          onMouseOut={e => (e.currentTarget.src = require('../assets/images/LatestArrivals/tomford.webp'))}
          alt="BABYLON"
        />
        <figcaption>
          <small className="brand">TOM FORD</small>
          <br />
          Buckled Polished-Leather Boots
          <br />
          $2,490
        </figcaption>
      </figure>
    </section>
  </section>
  <section id="section2">
    <section className="figureBlog">
      <section className="blogContent">
        <section className="blogText">
          <section className="blogTitle">
            <h3>THE BLOG</h3>
            <h4>
              Thursday, Dec. 19
              <br />
              <br />
              "The contemporary brands had spectacular releases this year, but
              there was one that outshined them all."
              <br />~ J.C Beaver | Baselworld 2022
            </h4>
          </section>
          <figure>
            <img src={require('../assets/images/baselworld.jpg')} alt="Basel World Lobby" />
          </figure>
          <p>
            <br />
            <br />
            <br />
            We asked the leading experts on their opinions on which luxury watch
            brands had the best releases this year at Basel. There is one that
            won by unanimous decision.
            <br />
            <a href="#">Read More</a>{" "}
          </p>
        </section>
        <section className="moreBlogs">
          <article>
            <h4>Gucci's New Footwear</h4>
            <br></br>
            <small>Sept. 15, 2022</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              officia deserunt corrupti tenetur dignissimos illo cumque facere
              eum, animi dolor corporis voluptate, sunt excepturi placeat odio
              libero consectetur quibusdam at?
            </p>
            <br />
            <a href="#">Read More</a>
          </article>
          <article>
            <h4>Fall Lookbook</h4>
            <br></br>
            <small>Oct. 27, 2022</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              officia deserunt corrupti tenetur dignissimos illo cumque facere
              eum, animi dolor corporis voluptate, sunt excepturi placeat odio
              libero consectetur quibusdam at?
            </p>
            <br />
            <a href="#">Read More</a>
          </article>
          <article>
            <h4>Rolex Price Hikes</h4>
            <br></br>
            <small>Nov. 3, 2022</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              officia deserunt corrupti tenetur dignissimos illo cumque facere
              eum, animi dolor corporis voluptate, sunt excepturi placeat odio
              libero consectetur quibusdam at?
            </p>
            <br />
            <a href="#">Read More</a>
          </article>
        </section>
      </section>
    </section>
  </section>
  <section id="section3">
    <h5>Best Selling Watches</h5>
    <section className="watchSection">
      <section className="galleryWatches">
        <figure>
          <img
            src={(require('../assets/images/watches/fp1.jpg'))}
            onMouseOver={e => (e.currentTarget.src = require('../assets/images/watches/fp2.jpg'))}
            onMouseOut={e => (e.currentTarget.src = (require('../assets/images/watches/fp1.jpg')))}
            alt="BABYLON"
          />
          <figcaption>
            <small className="brand">
              F.P. JOURNE
              <br />
            </small>
            Chronometre Souverain 18K Rose Gold
            <br />
            $72,875
          </figcaption>
        </figure>
        <figure>
          <img
            src={(require('../assets/images/watches/submariner.jpg'))}
            onMouseOver={e => (e.currentTarget.src = require('../assets/images/watches/submariner2.jpg'))}
            onMouseOut={e => (e.currentTarget.src = (require('../assets/images/watches/submariner.jpg')))}
            alt="BABYLON"
          />
          <figcaption>
            <small className="brand">ROLEX</small>
            <br />
            Submariner Date
            <br />
            $17,250
          </figcaption>
        </figure>
        <figure>
          <img
            src={(require('../assets/images/watches/rm1.jpg'))}
            onMouseOver={e => (e.currentTarget.src = require('../assets/images/watches/rm2.jpg'))}
            onMouseOut={e => (e.currentTarget.src = (require('../assets/images/watches/rm1.jpg')))}
            alt="BABYLON"
          />
          <figcaption>
            <small className="brand">RICHARD MILLE</small>
            <br />
            RM11-03
            <br />
            $785,575
          </figcaption>
        </figure>
        <figure>
          <img
            src={(require('../assets/images/watches/datejust.jpg'))}
            onMouseOver={e => (e.currentTarget.src = require('../assets/images/watches/datejust2.jpg'))}
            onMouseOut={e => (e.currentTarget.src = (require('../assets/images/watches/datejust.jpg')))}
            alt="BABYLON"
          />
          <figcaption>
            <small className="brand">ROLEX</small>
            <br />
            Datejust 36mm
            <br />
            $9,500
          </figcaption>
        </figure>
      </section>
      <section className="galleryWatches">
        <figure>
          <img
            src={(require('../assets/images/watches/ap1.jpg'))}
            onMouseOver={e => (e.currentTarget.src = require('../assets/images/watches/ap2.jpg'))}
            onMouseOut={e => (e.currentTarget.src = (require('../assets/images/watches/ap1.jpg')))}
            alt="BABYLON"
          />
          <figcaption>
            <small className="brand">AUDEMARS PIGUET</small>
            <br />
            26331OR Royal Oak Chronograph
            <br />
            $125,875
          </figcaption>
        </figure>
        <figure>
          <img
            src={(require('../assets/images/watches/batman.jpg'))}
            onMouseOver={e => (e.currentTarget.src = require('../assets/images/watches/batman2.jpg'))}
            onMouseOut={e => (e.currentTarget.src = (require('../assets/images/watches/batman.jpg')))}
            alt="BABYLON"
          />
          <figcaption>
            <small className="brand">ROLEX</small>
            <br />
            GMT Master II "Batman"
            <br />
            $21,500
          </figcaption>
        </figure>
        <figure>
          <img
            src={(require('../assets/images/watches/daytona.jpg'))}
            onMouseOver={e => (e.currentTarget.src = require('../assets/images/watches/daytona2.jpg'))}
            onMouseOut={e => (e.currentTarget.src = (require('../assets/images/watches/daytona.jpg')))}
            alt="BABYLON"
          />
          <figcaption>
            <small className="brand">ROLEX</small>
            <br />
            Platinum Daytona With Diamond Dial
            <br />
            $198,750
          </figcaption>
        </figure>
        <figure>
          <img
            src={(require('../assets/images/watches/patek1.jpg'))}
            onMouseOver={e => (e.currentTarget.src = require('../assets/images/watches/patek2.jpg'))}
            onMouseOut={e => (e.currentTarget.src = (require('../assets/images/watches/patek1.jpg')))}
            alt="BABYLON"
          />
          <figcaption>
            <small className="brand">PATEK PHILIPPE</small>
            <br />
            5990/1A Nautilus Chronograph
            <br />
            $235,875
          </figcaption>
        </figure>
      </section>
    </section>
    <section className="videoContainer">
      <section className="shoesVideo">
        <img src={(require('../assets/images/Slideshow/1.webp'))} id="image" alt="cool animation" />
        <h6>
          LUXURY FOOTWEAR: THE LATEST ARRIVALS
          <br />
          <br />
          <button>SHOP NOW</button>
        </h6>
      </section>
    </section>
    <section className="shopNow">
      <figure className="bannerA">
        <h6>
          <a href="lookbook.html">Lookbook</a>
        </h6>
      </figure>
      <figure className="bannerB">
        <h6>
          <a href="theblog.html">The Blog</a>
        </h6>
      </figure>
      <figure className="bannerC">
        <h6>
          <a href="accessories.html">Accessories</a>
        </h6>
      </figure>
    </section>
  </section>
        </section>
        <Footer />
</section>

        );
    }
}
export default Home;

