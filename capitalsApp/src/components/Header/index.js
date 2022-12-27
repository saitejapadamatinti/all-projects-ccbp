import './index.css'
import {FiSearch} from 'react-icons/fi'

const Header = () => (
  <div className="header-components-container">
    <div className="header-logo-div">
      <div className="footer-logo-div header-logo-div">
        <img
          className="footer-logo"
          alt="globe"
          src="https://res.cloudinary.com/dj2ghn49v/image/upload/v1670131864/worldwide_k2dlru.png"
        />
        <h2 className="header-logo-head">notech</h2>
      </div>
      <div>
        <ul className="header-ul">
          <li className="header-active-list-item">Home</li>
          <li>Page</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
    <div className="header-contact-div">
      <img
        alt="chat"
        src="https://res.cloudinary.com/dj2ghn49v/image/upload/v1670134543/chat_1_fl0szu.png"
      />
      <div>
        <p>Have any questions?</p>
        <p>
          Free <span className="header-contact-para"> +98 (000)-9850</span>
        </p>
      </div>
      <hr className="header-hr-line" />
      <div className="header-search-div">
        <FiSearch className="header-search-icon" />
      </div>
    </div>
  </div>
)

export default Header
