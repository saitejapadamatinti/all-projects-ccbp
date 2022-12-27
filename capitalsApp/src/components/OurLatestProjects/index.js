import './index.css'
import {BiDotsVerticalRounded} from 'react-icons/bi'

const projectsArray = [
  {
    id: 1,
    imageUrl:
      'https://res.cloudinary.com/dj2ghn49v/image/upload/v1670068282/robot-handshake-human-background-futuristic-digital-age_kxvutd.jpg',
    technology: 'Technology',
    heading: 'Cloud migration saves money & protect',
    descrption: 'In publishing and graphic design, Lorem ipsum is a',
  },
  {
    id: 1,
    imageUrl:
      'https://res.cloudinary.com/dj2ghn49v/image/upload/v1670147286/coding-man_1098-18084_momtgw.jpg',
    technology: 'Development',
    heading: 'Cloud migration saves money & protect',
    descrption: 'In publishing and graphic design, Lorem ipsum is a',
  },
  {
    id: 1,
    imageUrl:
      'https://res.cloudinary.com/dj2ghn49v/image/upload/v1670068282/robot-handshake-human-background-futuristic-digital-age_kxvutd.jpg',
    technology: 'Solutions',
    heading: 'Cloud migration saves money & protect',
    descrption: 'In publishing and graphic design, Lorem ipsum is a',
  },
]

const OurLatestProjects = () => (
  <>
    <div className="project-main-div-flex">
      <div className="project-main-heading-div">
        <h5>
          <BiDotsVerticalRounded className="news-dots" />
          Recently completed work
        </h5>
        <h1>Our Latest projects</h1>
      </div>
      <div>
        <ul className="project-div">
          {projectsArray.map(each => (
            <>
              <li className="project-list">
                <div className="project-img-div">
                  <img
                    className="project-imag"
                    alt={each.id}
                    src={each.imageUrl}
                  />
                </div>
                <div className="project-content">
                  <p className="project-each-para">{each.technology}</p>
                  <h4 className="project-each-head">{each.heading}</h4>
                  <p>{each.descrption}</p>
                  <button className="project-button" type="button">
                    View our projects
                  </button>
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  </>
)

export default OurLatestProjects
