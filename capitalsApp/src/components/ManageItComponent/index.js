import {BackgrounImg} from './styledComponents'
import './index.css'

const managerItArray = [
  {
    id: 1,
    imgUrl:
      'https://res.cloudinary.com/dj2ghn49v/image/upload/v1668843010/cld-sample.jpg',
    content: 'Manage IT services',
  },
  {
    id: 1,
    imgUrl:
      'https://res.cloudinary.com/dj2ghn49v/image/upload/v1670146978/portrait-corporate-woman-holding-clipboard-work-standing-formal-outfit-white-background_1258-88411_viqrhi.jpg',
    content: 'Manage IT services',
  },
  {
    id: 1,
    imgUrl:
      'https://res.cloudinary.com/dj2ghn49v/image/upload/v1670147046/man-experiencing-vr-simulation-entertainment-technology_53876-102991_iro8u4.jpg',
    content: 'Manage IT services',
  },
]

const ManageIt = () => (
  <>
    <ul className="manage-it-ul">
      {managerItArray.map(each => (
        <>
          <li className="manage-li-div">
            <BackgrounImg banner={each.imgUrl}>
              <h3 className="manage-it-head">{each.content}</h3>
            </BackgrounImg>
          </li>
        </>
      ))}
    </ul>
  </>
)

export default ManageIt
