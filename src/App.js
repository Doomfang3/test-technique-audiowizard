import React from 'react';

import MainApp from './components/MainApp';
import TopNav from './components/TopNav';
import LeftNav from './components/LeftNav';

import logo from './images/audowizard-logo-white.png';

const App = () => {
  const navLinks = {
    textArray: [
      'Première visite',
      'Adaptation',
      'Patients en lorem',
      'Patients appareillés',
      'Relances',
      'Statistiques',
    ],
    linkArray: ['#', '#', '#', '#', '#', '#'],
  };

  return (
    <>
      <TopNav image={logo} buttonText="Mon Compte" />
      <div className="container-fluid">
        <div className="row">
          <LeftNav navLinks={navLinks} />
          <MainApp>
            <h1>Main Content</h1>
          </MainApp>
        </div>
      </div>
    </>
  );
};

export default App;
