import React, { useState } from 'react';

import MainApp from './components/MainApp';
import TopNav from './components/TopNav';
import LeftNav from './components/LeftNav';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';

import logo from './images/audowizard-logo-white.png';

const App = () => {
  const [CurrentDisplay, setCurrentDisplay] = useState('FirstStep');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [isMan, setIsMan] = useState(true);

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
            {CurrentDisplay === 'FirstStep' ? (
              <FirstStep
                onClick={setCurrentDisplay}
                setFirstname={setFirstname}
                setLastname={setLastname}
              />
            ) : CurrentDisplay === 'SecondStep' ? (
              <SecondStep onClick={setCurrentDisplay} setGender={setIsMan} />
            ) : CurrentDisplay === 'ThirdStep' ? (
              <ThirdStep
                isMan={isMan}
                firstname={firstname}
                lastname={lastname}
              />
            ) : (
              <p className="text-center">On dirait qu'il y a une erreur...</p>
            )}
          </MainApp>
        </div>
      </div>
    </>
  );
};

export default App;
