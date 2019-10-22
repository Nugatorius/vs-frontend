import React from 'react';
import Header  from './component/header';
import Headline  from './component/headline';
import './app.scss';
import {Provider} from 'react-redux';
import {store} from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to show posts" />
      </section>
    </div>
    </Provider>
  );
}

export default App;
