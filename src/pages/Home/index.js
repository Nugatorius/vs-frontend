import React, { Fragment } from 'react';
import SearchBar from '../../components/SearchBar';
import VideoList from '../../components/VideoList';
import { videos } from '../../mocks/videos'
import { routes } from '../../constants/routes';

const Home = (props) => {
  const handleThumbnailClick = (videoId) => {
    props.history.push({
      pathname: routes.MEDIA_PLAYER,
      search: `?v=${videoId}`,
      state: { videoId }
    });
  }

  return (
    <Fragment>
      <SearchBar />
      <VideoList videos={videos} handleClick={handleThumbnailClick} />
    </Fragment>
  );
}

export default Home;
