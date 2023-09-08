import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const MoviesSlider = ({details}) => {
  console.log(details)

  const settings = {
    dots: false,
    slidesToShow: 6, // initial later below we have conditional  breakpoint:''
    slidesToScroll: 6, // initial  ....
    centerMode: true,
    adaptiveHeight: true,
    initialSlide: 0, // starting slide number we start from  slide 0 i.e first
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
