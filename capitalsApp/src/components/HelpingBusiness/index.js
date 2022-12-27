import './index.css'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import {AiFillPropertySafety} from 'react-icons/ai'

const HelpingBusiness = () => (
  <>
    <div className="helping-sol-div-cont">
      <div className="helping-banner-div">
        <img
          alt="helping-sol"
          src="https://res.cloudinary.com/dj2ghn49v/image/upload/v1668843010/cld-sample.jpg"
        />
      </div>
      <div className="helping-content-div">
        <div className="helping-get-div">
          <BiDotsVerticalRounded className="news-dots" />
          <span>Get to know us</span>
        </div>
        <h2>Easy solutions for your IT problems</h2>
        <p className="helping-para">
          In publishing and graphic design, Lorem ipsum is a placeholder text
        </p>
        <div className="helping-data-protuction">
          <div className="helping-data-content">
            <AiFillPropertySafety className="helping-protuction-icon" />
            <div>
              <span className="helping-heading">Data protuction</span>
            </div>
            <p className="helping-content-para ">
              In publishing and graphic design, Lorem text
            </p>
          </div>
          <div>
            <AiFillPropertySafety className="helping-protuction-icon" />
            <div>
              <span className="helping-heading">Data protuction</span>
            </div>
            <p className="helping-content-para">
              In publishing and graphic design, Lorem
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default HelpingBusiness
