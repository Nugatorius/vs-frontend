import React from 'react';

function App() {
  return (
    <div>
      <video id="videoPlayer" controls muted="muted">
        <source src="../assets/sample.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
