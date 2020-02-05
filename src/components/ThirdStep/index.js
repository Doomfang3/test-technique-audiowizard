import React from 'react';

const ThirdStep = props => {
  return (
    <p className="text-center">
      {props.isMan ? 'Monsieur' : 'Madame'} {props.firstname} {props.lastname}
    </p>
  );
};

export default ThirdStep;
