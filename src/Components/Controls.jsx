import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPlay,
//   faPause,
//   faForward,
//   faBackward,
// } from "@fortawesome/free-solid-svg-icons";

function Controls(props) {
  return (
    <div className="c-player--controls">
      <button className="skip-btn" onClick={() => props.SkipSong(false)}>
        ⏪
      </button>
      <button
        className="play-btn"
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >
        ⏸
      </button>
      <button className="skip-btn" onClick={() => props.SkipSong()}>
        ⏩
      </button>
    </div>
  );
}

export default Controls;
