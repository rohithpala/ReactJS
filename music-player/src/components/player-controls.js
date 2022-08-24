import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faBackward, faForward, faPause } from "@fortawesome/free-solid-svg-icons";

function PlayerControls(props) {
  return (
    <div className="c-player-controls">
      <button className="previous-button" onClick={() => props.skipSong(false)}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button className="play-button" onClick={() => props.setIsPlaying(!props.isPlaying)}>
        <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
      </button>
      <button className="next-button" onClick={() => props.skipSong(true)}>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  )
}

export default PlayerControls;
