import React from 'react';

import MainApp from './components/MainApp';
import TopNav from './components/TopNav';
import LeftNav from './components/LeftNav';

const App = () => {
  return (
    <>
      <TopNav />
      <LeftNav />
      <MainApp>
        <h1>Main Content</h1>
      </MainApp>
    </>
  );
};

export default App;
