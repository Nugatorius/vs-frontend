import React from 'react';

const MediaPlayer = (props) => {

  const videoId = props.location.state ?
    props.location.state.videoId :
    props.location.search.split('=')[1];

  return (
    <div>
      <video id="videoPlayer" controls>
        <source src={`http://localhost:3005/video/${videoId}`} type="video/mp4" />
      </video>
    </div>
  );
};

export default MediaPlayer;