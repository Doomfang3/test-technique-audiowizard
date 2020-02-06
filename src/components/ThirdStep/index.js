import React, { useContext } from 'react';
import { FirstVisitContext } from '../../contexts/FirstVisitContext';

const ThirdStep = () => {
  const { firstname, lastname, isMan } = useContext(FirstVisitContext);

  return (
    <p className="text-center">
      {isMan ? 'Monsieur' : 'Madame'} {firstname} {lastname}
    </p>
  );
};

export default ThirdStep;
