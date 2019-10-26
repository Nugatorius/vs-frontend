import React from 'react';

const ListItem = (props) => {
  const { video, handleClick } = props;
  return (
    <div>
      <p>{video.title}</p>
      <p>{video.duration}</p>
      <img onClick={handleClick} src={video.imageThumbnail} width="100" height="100" alt="image_alt"/>
    </div>
  );
};

export default ListItem;
