import './index.css'
import {BsFillBriefcaseFill} from 'react-icons/bs'
// import {AiOutlineMinus} from 'react-icons/ai'

const achivementsArray = [
  {
    icon: <BsFillBriefcaseFill />,
    projrctCount: '30+',
    heading: 'Years of experiance',
    content: 'Search for the keywords to learn more.',
  },
  {
    icon: <BsFillBriefcaseFill />,
    projrctCount: '2800',
    heading: 'Years of experiance',
    content: 'Search for the keywords to learn more.',
  },
  {
    icon: <BsFillBriefcaseFill />,
    projrctCount: '6960',
    heading: 'Years of experiance',
    content: 'Search for the keywords to learn more.',
  },
  {
    icon: <BsFillBriefcaseFill />,
    projrctCount: '29+',
    heading: 'Years of experiance',
    content: 'Search for the keywords to learn more.',
  },
]

const Achivements = () => (
  <>
    <div>
      <ul className="achivement-ul">
        {achivementsArray.map(each => (
          <li className="achivements-list">
            <div className="achivements-icon-main-div">
              <div className="achivements-icon-main-div-2">{each.icon}</div>
            </div>
            <p className="achivements-count">{each.projrctCount}</p>
            <p className="achivements-head">{each.heading}</p>
            <p className="achivements-para">{each.content}</p>
          </li>
        ))}
      </ul>
      {/*  */}
      <div className="achivements-blue-div">
        <h1>
          Trusted source in IT <br /> services
        </h1>
        <div className="achivements-icon-div">
          <hr className="achivements-hr-line" />
          <img
            className="achivements-chat-icons"
            alt="chat-icon"
            src="https://res.cloudinary.com/dj2ghn49v/image/upload/v1670123716/chat_ehzuqf.png"
          />
          <hr className="achivements-hr-line" />
        </div>
        <div>
          <p>Have any questuin?</p>
          <h3>
            <span>Free</span> +98 (000)-9850{' '}
          </h3>
        </div>
      </div>
    </div>
  </>
)

export default Achivements
