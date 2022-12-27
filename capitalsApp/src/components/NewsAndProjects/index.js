import './index.css'
import {BiDotsVerticalRounded, BiUserCircle, BiTimeFive} from 'react-icons/bi'
import {CgArrowLongRight} from 'react-icons/cg'
import {AiFillFire} from 'react-icons/ai'

const projectsArray = [
  {
    id: 1,
    imageUrl:
      'https://res.cloudinary.com/dj2ghn49v/image/upload/v1670148269/people-hanging-out-together-coffee-shop_53876-12189_raw7no.jpg',
    date: '8 jan, 2022',
    user: 'by Layerdrops',
    descrption: 'In publishing and graphic design, Lorem ipsum is a',
  },
  {
    id: 1,
    imageUrl:
      'https://res.cloudinary.com/dj2ghn49v/image/upload/v1670148243/newspaper-mockup-psd-wooden-table_53876-114511_uczm8l.jpg',
    date: '8 jan, 2022',
    user: 'by Layerdrops',
    descrption: 'In publishing and graphic design, Lorem ipsum is a',
  },
  {
    id: 1,
    imageUrl:
      'https://res.cloudinary.com/dj2ghn49v/image/upload/v1670148299/hands-holding-business-newspaper-with-copy-space-mockup-template-black-desk-topview_185216-128_gfkkjg.jpg',
    date: '8 jan, 2022',
    user: 'by Layerdrops',
    descrption: 'In publishing and graphic design, Lorem ipsum is a',
  },
]

const businesssPartenrLogos = [
  {
    businessLog: <AiFillFire className="partenrs-logo-icon" />,
    businessName: 'envato',
  },
  {
    businessLog: <AiFillFire className="partenrs-logo-icon" />,
    businessName: 'envato',
  },
  {
    businessLog: <AiFillFire className="partenrs-logo-icon" />,
    businessName: 'envato',
  },
  {
    businessLog: <AiFillFire className="partenrs-logo-icon" />,
    businessName: 'envato',
  },
  {
    businessLog: <AiFillFire className="partenrs-logo-icon" />,
    businessName: 'envato',
  },
]

const NewsAndProjects = () => (
  <>
    <div className="news-main-div-flex">
      <div className="news-main-heading-div">
        <h5>
          <BiDotsVerticalRounded className="news-dots" />
          Whats happening
        </h5>
        <h1>News & articles</h1>
      </div>
      <div>
        <ul className="news-div">
          {projectsArray.map(each => (
            <>
              <li className="news-list">
                <div className="news-img-div">
                  <img
                    className="news-imag"
                    alt={each.id}
                    src={each.imageUrl}
                  />
                </div>
                <div className="news-content">
                  <div className="news-date-content">
                    <p className="news-each-para">
                      <BiTimeFive className="news-time-icon" />
                      {each.date}
                    </p>
                    <p className="news-each-para">
                      <BiUserCircle className="news-time-icon" />
                      {each.user}
                    </p>
                  </div>
                  <h2 className="news-heading">{each.descrption}</h2>
                  <div className="news-learn-more-div">
                    <p>Learn more</p>
                    <CgArrowLongRight className="news-arrow-icon" />
                  </div>
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>
      {/*  */}
      <div className="business-partener-div">
        <div className="business-hr-line">
          <hr />
        </div>
        <h5 className="business-head">The business partners</h5>
        <div className="business-hr-line">
          <hr />
        </div>
      </div>
      {/*  */}
      <div className="paratenrs-logo-main-div">
        <ul className="partenes-logos-ul">
          {businesssPartenrLogos.map(each => (
            <li>
              <div className="parateners-logo-li">
                {each.businessLog}
                <h1>{each.businessName}</h1>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
)

export default NewsAndProjects
