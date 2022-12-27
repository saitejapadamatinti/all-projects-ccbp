import {Component} from 'react'
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

export default class PlanetSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    const {planetsList} = this.props
    return (
      <div testid="planets" className="container">
        <h1 className="text">PLANETS</h1>
        <Slider {...settings}>
          {planetsList.map(each => (
            <div>
              <PlanetItem key={each.id} details={each} />
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}
