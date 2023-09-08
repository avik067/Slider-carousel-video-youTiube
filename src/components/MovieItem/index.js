import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'

import 'reactjs-popup/dist/index.css'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = ({details}) => {
  const {videoUrl, thumbnailUrl} = details

  return (
    <Popup
      modal="true"
      trigger={
        <div className="trigger-button">
          <img className="thumb-img" src={thumbnailUrl} alt="thumbnail" />
        </div>
      }
    >
      {close => (
        <>
          <div className="close-container">
            <div>
              <button
                data-testid="closeButton"
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                <IoMdClose className="icon-close" />
              </button>
            </div>
          </div>

          <ReactPlayer
            className="player-container"
            playing="true"
            controls="true"
            url={videoUrl}
          />
        </>
      )}
    </Popup>
  )
}

export default MovieItem
