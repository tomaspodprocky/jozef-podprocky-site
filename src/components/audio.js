import * as React from 'react'

const Player = ({audio_source}) => {

  console.log(audio_source)
  return(
    <div>
      <audio controls src={audio_source.publicURL}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  )};

export default Player;