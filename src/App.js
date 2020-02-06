import React, { useContext } from 'react';
import { FirstVisitContext } from './contexts/FirstVisitContext';
import LinkContextProvider from './contexts/LinkContext';

import MainApp from './components/MainApp';
import TopNav from './components/TopNav';
import LeftNav from './components/LeftNav';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';

import logo from './images/audowizard-logo-white.png';

const App = () => {
  const { CurrentDisplay } = useContext(FirstVisitContext);

  return (
    <>
      <TopNav image={logo} buttonText="Mon Compte" />
      <div className="container-fluid">
        <div className="row">
          <LinkContextProvider>
            <LeftNav />
          </LinkContextProvider>
          <MainApp>
            {CurrentDisplay === 'FirstStep' ? (
              <FirstStep />
            ) : CurrentDisplay === 'SecondStep' ? (
              <SecondStep />
            ) : CurrentDisplay === 'ThirdStep' ? (
              <ThirdStep />
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
