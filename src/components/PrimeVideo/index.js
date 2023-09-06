import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = ({moviesList}) => {
  console.log('prime')

  const onlyAction = () =>
    moviesList.filter(each => each.categoryId === 'ACTION')

  const onlyComedy = () =>
    moviesList.filter(each => each.categoryId === 'COMEDY')

  return (
    <div className=" main ">
      <img
        className="banner-img"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />

      <div className="content-container">
        <h1 className="category-name">Action Movies</h1>
        <MoviesSlider details={onlyAction()} />

        <h1 className="category-name">Comedy Movies</h1>
        <MoviesSlider details={onlyComedy()} />
      </div>
    </div>
  )
}

export default PrimeVideo
