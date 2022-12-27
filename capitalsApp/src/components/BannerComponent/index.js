import './index.css'
import {BsPlayCircleFill} from 'react-icons/bs'

const BannerContainer = () => (
  <>
    <div className="banner">
      <div className="banner-div-flex">
        <p className="banner-it-solution-para">IT SOFTWARE SOLUTIONS &</p>
        <h1 className="banner-technology-para">technology</h1>
        <div className="banner-button-div">
          <div>
            <button className="banner-btn" type="button">
              Discover more
            </button>
          </div>
          <div className="banner-play-div">
            <BsPlayCircleFill className="banner-play-icon" />
            <div className="banner-watch-para">
              <p>Watch</p>
              <p>how it works</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="banner-bottom-para-div">
      <p>
        Stop wasting time and money on technology. <span>Explore notech</span>{' '}
        and get best solution
      </p>
    </div>
  </>
)

export default BannerContainer
