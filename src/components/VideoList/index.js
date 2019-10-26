import React, {Fragment} from 'react';
import ListItem from '../ListItem';

const VideoList = (props) => {
  const { videos, handleClick } = props;
  
  const renderVideos = (videos) => {
    return videos.map(video => {
      return (
        <Fragment key={video.id} >
          <ListItem video={video} handleClick={() => handleClick(video.id)} />
        </Fragment>
      )
    })
  }
  return (
    <Fragment>
      {renderVideos(videos)}
    </Fragment>
  );
};

export default VideoList;
