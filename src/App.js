import React , { Fragment } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import {videos} from './mocks/videos'

const App = () => {
  const handleThumbnailClick = (videoId) => {
    console.log('video id', videoId);
  }

  return (
   <Fragment>
     <SearchBar />
     <VideoList videos={videos} handleClick={handleThumbnailClick} />
   </Fragment>
  );
}

export default App;


/*  <div>
      <video id="videoPlayer" controls muted="muted">
        <source src="../assets/sample.mp4" type="video/mp4" />
      </video>
    </div> */