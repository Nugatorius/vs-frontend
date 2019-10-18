import React from 'react';

function App() {
  return (
    <div>
      <video style="height: 400px; width:600px;" id="videoPlayer" controls muted="muted" autoplay>
        <source src="http://localhost:3000/video" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
