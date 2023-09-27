import React from 'react';

class Footer extends React.Component {
    render () {
        return (
            <>
            {/* -------------------------------------------------------- Footer ------------------------------------------------------- */}
            <footer>
              <section className="footerBackgroundContainer">
                <section className="firstLayer">
                  <article className="article1">
                    <p>BABYLON ACCEPTS</p>
                    <img src={require('../assets/images/payments/payments.png')} />
                  </article>
                  <article className="article2">
                    <p>
                      CONNECT WITH THE TEAM
                      <br />
                    </p>
                    <a
                      href="https://twitter.com"
                      aria-label="Twitter"
                      className="fa fa-twitter"
                      target="_blank"
                    />
                    <a
                      href="https://www.reddit.com"
                      aria-label="Reddit"
                      className="fa fa-reddit"
                      target="_blank"
                    />
                    <a
                      href="https://www.instagram.com"
                      aria-label="Instagram"
                      className="fa fa-instagram"
                      target="_blank"
                    />
                    <a
                      href="https://www.facebook.com"
                      aria-label="Facebook"
                      className="fa fa-facebook"
                      target="_blank"
                    />
                    <a
                      href="https://www.snapchat.com"
                      aria-label="Snapchat"
                      className="fa fa-snapchat"
                      target="_blank"
                    />
                    <br />
                    <p className="me">A PROJECT BY SHAAR</p>
                  </article>
                  <article className="article3">
                    <p>PRIVACY POLICY</p>
                    <small>
                      Babylon may collect User Personal Information from third parties. We
                      only collect the minimum amount of personal information necessary
                      from you, unless you choose to provide more.
                    </small>
                  </article>
                </section>
              </section>
              <section className="copyrightContainer">
                <section className="copyright">
                  <p className="signature">Babylon</p>
                  <p className="cp">© 2022 Babylon</p>
                </section>
              </section>
            </footer>
          </>
          
        );
    }
}
export default Footer;

