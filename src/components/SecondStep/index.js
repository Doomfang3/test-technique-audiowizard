import React from 'react';

const SecondStep = props => {
  const functionsHandler = event => {
    props.setGender(event);
    props.onClick('ThirdStep');
 }
  return (
    <>
      <p className="text-center">Peux-tu indiquer son sexe ?</p>
      <div className="row">
        <div className="col-md-1">
          <button
            type="button"
            className="btn btn-outline-warning mx-auto d-block"
            onClick={() => props.onClick('FirstStep')}
          >
            Retour
          </button>
        </div>
        <div className="offset-md-1 col-md-4">
          <button
            type="button"
            className="btn btn-primary mx-auto d-block"
            onClick={() => functionsHandler(true)}
          >
            Homme
          </button>
        </div>
        <div className="col-md-4">
          <button
            type="button"
            className="btn btn-primary mx-auto d-block"
            onClick={() => functionsHandler(false)}
          >
            Femme
          </button>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default SecondStep;
