import React, { useState, useEffect, useRef } from 'react'
import PlayerControls from './player-controls';
import PlayerDetails from './player-details';

function Player(props) {
   const audioElement = useRef(null);
   const [isPlaying, setIsPlaying] = useState(false);

   useEffect(() => {
      if (isPlaying) {
         audioElement.current.play();
      } else {
         audioElement.current.pause();
      }
   });

   const songs = props.songs, numOfSongs = songs.length;
   const currentSongIndex = props.currentSongIndex;
   const nextSongIndex = props.nextSongIndex;

   const skipSong = (next = true) => {
      if (next) {
         props.setCurrentSongIndex(() => {
            return (currentSongIndex + 1) % numOfSongs;
         });
      } else {
         props.setCurrentSongIndex(() => {
            const csi = currentSongIndex - 1;
            if (csi < 0)
               return numOfSongs - 1;
            return csi;
         });
      }
      setIsPlaying(true);
   };

   return (
      <div className="c-player">
         <audio src={songs[currentSongIndex].src} ref={audioElement}></audio>
         <h4>Playing Now</h4>
         <PlayerDetails song={songs[currentSongIndex]} />
         <PlayerControls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            skipSong={skipSong}
         />
         <p>
            <strong>Next Up: </strong>{songs[nextSongIndex].title} by {songs[nextSongIndex].artist}
         </p>
      </div>
   )
}

export default Player;
