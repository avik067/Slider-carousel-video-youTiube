import './index.css'

const MovieItem = ({details}) => {
  const {videoUrl, thumbnailUrl} = details

  return (
    <div>
      <img src={thumbnailUrl} alt="" />
    </div>
  )
}

export default MovieItem
