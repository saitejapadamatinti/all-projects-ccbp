import './index.css'
import {BiDotsVerticalRounded} from 'react-icons/bi'

const IconsArry = [
  {
    id: 1,
    iconImg:
      'https://res.cloudinary.com/dj2ghn49v/image/upload/v1670077747/coding_ovuefk.png',
    heading: 'Product development',
    content: 'In publishing and graphic design',
  },
  {
    id: 2,
    iconImg:
      'https://res.cloudinary.com/dj2ghn49v/image/upload/v1670137230/design-thinking_lwg2wa.png',
    heading: 'UI/UX designing',
    content: 'In publishing and graphic design',
  },
  {
    id: 3,
    iconImg:
      'https://res.cloudinary.com/dj2ghn49v/image/upload/v1670137229/technology_cpjdn4.png',
    heading: 'Digitalmarketing',
    content: 'In publishing and graphic design',
  },
  {
    id: 4,
    iconImg:
      'https://res.cloudinary.com/dj2ghn49v/image/upload/v1670137229/content_bkqdjf.png',
    heading: 'Content management',
    content: 'In publishing and graphic design',
  },
  {
    id: 5,
    iconImg:
      'https://res.cloudinary.com/dj2ghn49v/image/upload/v1670137229/analysis_od3xvi.png',
    heading: 'Data analysis',
    content: 'In publishing and graphic design',
  },
]

const Offering = () => (
  <>
    <div className="offering-div">
      <div>
        <div className="easy-get-div">
          <BiDotsVerticalRounded className="offer-dot-icon" />
          <span>Get to know us</span>
        </div>
        <h1 className="offer-heading">
          Easy solutions for your <br /> IT problems
        </h1>
      </div>
      <div className="offer-para-div">
        <p className="easy-para">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without
        </p>
      </div>
    </div>
    <div>
      <ul className="offer-ul">
        {IconsArry.map(each => (
          <li className="offer-list">
            <img className="offer-icon" alt={each.id} src={each.iconImg} />
            <h4 className="offer-heading-box">{each.heading}</h4>
            <p className="offer-para">{each.content}</p>
          </li>
        ))}
      </ul>
    </div>
  </>
)

export default Offering
