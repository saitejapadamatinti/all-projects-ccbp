import './index.css'
import {BsTelegram, BsTwitter, BsFacebook, BsPinterest} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => (
  <>
    <div className="fotter-container">
      <div className="footer-dicover-more-div">
        <div className="fotter-discover-logo">
          <img
            className="footer-brain-logo"
            alt="footer-logo"
            src="https://res.cloudinary.com/dj2ghn49v/image/upload/v1670130886/brain_zg2dei.png"
          />
          <p>Helping you overcome your technology challenges</p>
          <p>Helping you overcome your technology challenges</p>
        </div>
        <button className="fotter-banner-btn" type="button">
          Discover more
        </button>
      </div>
      {/*  */}
      <div className="fotter-bottom-div">
        <div>
          <div className="footer-logo-div">
            <img
              className="footer-logo"
              alt="globe"
              src="https://res.cloudinary.com/dj2ghn49v/image/upload/v1670131864/worldwide_k2dlru.png"
            />
            <h2>notech</h2>
          </div>
          <p className="footer-subscribe-para">
            Subscribe for our upcoming latest articals and news resource
          </p>
          <div className="email-input-div">
            <input
              placeholder="Email address"
              className="footer-email-input"
              type="email"
            />
            <div className="footer-tel-icon-div">
              <BsTelegram className="teligram-icon-footer" />
            </div>
          </div>
        </div>
        <div className="footer-links">
          <h4>Links</h4>
          <ul className="footer-links-ul">
            <li>About us</li>
            <li>Meet our team</li>
            <li>News & media</li>
            <li>Our projects</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Contact</h4>
          <ul className="footer-links-ul">
            <li>+98 (000)-9850</li>
            <li>needhelp@company.com</li>
            <li>News & media</li>
            <li>66 broklyn golden street line. New York</li>
          </ul>
        </div>
        <div>
          <BsTwitter className="footer-header-icon" />
          <BsFacebook className="footer-header-icon" />
          <BsPinterest className="footer-header-icon" />
          <AiFillInstagram className="footer-header-icon" />
        </div>
      </div>
    </div>
  </>
)

export default Footer
