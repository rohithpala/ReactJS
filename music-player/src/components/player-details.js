import React from 'react';

function PlayerDetails(props) {
  return (
    <div className="c-player-details">
      <div className="details-image">
        <img src={props.song.img_src} alt="" />
      </div>
      <h3 className="details-title">
        {props.song.title}
      </h3>
      <h3 className="details-artist">
        {props.song.artist}
      </h3>
    </div>
  )
}

export default PlayerDetails;
