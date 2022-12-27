import './index.css'
import {RxDotFilled} from 'react-icons/rx'

const TestimonialComponent = () => (
  <>
    <div className="test-main-div">
      <div className="test-user-div">
        <img
          className="test-user"
          alt="user"
          src="https://res.cloudinary.com/dj2ghn49v/image/upload/v1668843010/cld-sample-2.jpg"
        />
        <div>
          <RxDotFilled className="test-blue-icon" />
          <RxDotFilled className="test-white-icon" />
          <RxDotFilled className="test-white-icon" />
        </div>
      </div>
      <div>
        <p className="test-para">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as Lorem ipsum may be used as
        </p>
        <div className="test-aleesha-div">
          <div>
            <h4 className="test-head">Aleesha brown</h4>
            <p>Client of notech company</p>
          </div>
          <img
            className="test-img"
            alt="wdev"
            src="https://res.cloudinary.com/dj2ghn49v/image/upload/v1670147238/811476_f9mf7v.png"
          />
        </div>
      </div>
    </div>
  </>
)

export default TestimonialComponent
