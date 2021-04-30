import React from 'react';
import '../scss/Footer.scss';
import Social from './Social';
import FooterInfo from './FooterInfo';

const Footer = () => (
  <section className="footer">
    <div className="container">
      <div className="footer__inner">
        <div className="footer__copyright">Copyright © 2021 Христофор колумб</div>
        <FooterInfo />
        <Social />
      </div>
    </div>
  </section>
);
export default Footer;