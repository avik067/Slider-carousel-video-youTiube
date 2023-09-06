import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const MoviesSlider = ({details}) => {
  console.log(details)

  const settings = {
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {details.map(each => (
          <MovieItem key={each.id} details={each} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
