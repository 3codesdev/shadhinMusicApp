import React from 'react';
import logo from '../assets/img/logo2.png';
import gp from '../assets/img/gp.png';
import as from '../assets/img/as.png';

const Footer = () => {
	return (
	<>
	<footer>
              <div className="row">
                <div className="col">
                  <ul className="first-block">
                    <li><a href="index.html"><img src={logo} className="footer-logo" alt="logo" /></a></li>
                    <li><a href="#!"><i className="fa fa-instagram"></i>Instagram</a></li>
                    <li><a href="#!"><i className="fa fa-facebook"></i>Facebook</a></li>
                    <li><a href="#!"><i className="fa fa-twitter"></i>Twitter</a></li>
                  </ul>
                </div>
                <div className="col">
                  <ul>
                    <li><h4 className="footer-title">Who we are?</h4></li>
                    <li><a href="#!">About us</a></li>
                    <li><a href="#!">Contact us</a></li>
                    <li><a href="#!">News</a></li>
                  </ul>
                </div>
                <div className="col">
                  <ul>
                    <li><h4 className="footer-title">Explore</h4></li>
                    <li><a href="#!">Home</a></li>
                    <li><a href="#!">Podcast</a></li>
                    <li><a href="#!">Video</a></li>
                  </ul>
                </div>
                <div className="col">
                  <ul>
                    <li><h4 className="footer-title">Legal</h4></li>
                    <li><a href="#!">Help &amp; Support</a></li>
                    <li><a href="#!">Terms of services</a></li>
                    <li><a href="#!">FAQ</a></li>
                  </ul>
                </div>
                <div className="col d-none d-md-block">
                  <ul>
                    <li><h4 className="footer-title">Products</h4></li>
                    <li><a href="#!">Android</a></li>
                    <li><a href="#!">iOS</a></li>
                    <li><a href="#!">Web Player</a></li>
                  </ul>
                </div>
                <div className="col-12 d-block d-md-none">
                  <div className="footer-mobile-app">
                    <h6>Download the App</h6>
                    <ul>
                      <li><a href="#!"><img src={gp} /></a></li>
                      <li><a href="#!"><img src={as} /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="copyright">© 2020 Shadhin. All rights reserved.</p>
            </footer>
	</>
	)
}

export default Footer;