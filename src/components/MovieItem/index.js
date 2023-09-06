import './index.css'

const MovieItem = ({details}) => {
  const {videoUrl, thumbnailUrl} = details

  return (
    <div>
      <img className="each-card" src={thumbnailUrl} alt="" />
    </div>
  )
}

export default MovieItem
