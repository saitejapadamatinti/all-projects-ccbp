import './index.css'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import {BsCheckCircle} from 'react-icons/bs'

const EasySolutions = () => (
  <>
    <div className="easy-sol-div-cont">
      <div className="easy-banner-div">
        <img
          alt="easy-sol"
          src="https://res.cloudinary.com/dj2ghn49v/image/upload/v1670136144/portrait-happy-woman-working-laptop-computer-isolated-white-wall_231208-1194_pygkyv.jpg"
        />
      </div>
      <div className="easy-content-div">
        <div className="easy-get-div">
          <BiDotsVerticalRounded className="news-dots" />
          <span>Get to know us</span>
        </div>
        <h2 className="easy-solution-heading">
          Easy solutions for your IT problems
        </h2>
        <p className="easy-para">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without
        </p>
        <div className="easy-check-icon-div">
          <BsCheckCircle className="easy-check-icon" />
          <span>Lorem ipsum is a placeholder text commonly</span>
        </div>
        <div className="easy-check-icon-div">
          <BsCheckCircle className="easy-check-icon" />
          <span>Lorem ipsum is a placeholder text commonly</span>
        </div>
        <div className="easy-il-div">
          <img
            className="each-ill-image"
            alt="ill"
            src="https://res.cloudinary.com/dj2ghn49v/image/upload/v1668843202/OBJECTS_uoygcd.png"
          />
          <div className="each-stop-para">
            <p>Lorem ipsum is a placeholder text commonly</p>
            <p>placeholder text commonly</p>
          </div>
        </div>
        <div>
          <button className="banner-btn" type="button">
            Discover more
          </button>
        </div>
      </div>
    </div>
  </>
)

export default EasySolutions
