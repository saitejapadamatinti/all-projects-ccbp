import {ImLocation} from 'react-icons/im'
import {HiMail} from 'react-icons/hi'
import {BsTwitter, BsFacebook, BsPinterest, BsInstagram} from 'react-icons/bs'
import './index.css'

const TopHeader = () => (
  <>
    <div className="top-header-main-div">
      <div className="top-header-left-div">
        <div>
          <ImLocation className="top-header-icons" />
          <span>66 broklyn golden street line. New York</span>
        </div>
        <div className="top-header-gmail-div">
          <HiMail className="top-header-icons" />
          <span>needhelp@company.com</span>
        </div>
      </div>
      <div className="top-header-left-div">
        <div className="top-header-about-container">
          <p>About </p>
          <p className="top-header-slash"> / </p>
          <p> Leadership </p>
          <p className="top-header-slash"> / </p>
          <p> Contact</p>
        </div>
        <div className="top-header-icons-div">
          <BsTwitter className="header-icon" />
          <BsFacebook className="header-icon" />
          <BsPinterest className="header-icon" />
          <BsInstagram className="header-icon" />
        </div>
      </div>
    </div>
  </>
)

export default TopHeader
