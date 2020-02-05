import React from 'react';

const SecondStep = () => {
  return (
    <>
      <p className="text-center">Peux-tu indiquer son sexe ?</p>
      <div className="row">
        <div className="col-md-1">
          <button
            type="button"
            className="btn btn-outline-warning mx-auto d-block"
          >
            Retour
          </button>
        </div>
        <div className="offset-md-1 col-md-4">
          <button type="button" className="btn btn-primary mx-auto d-block">
            Homme
          </button>
        </div>
        <div className="col-md-4">
          <button type="button" className="btn btn-primary mx-auto d-block">
            Femme
          </button>
        </div>
      </div>
    </>
  );
};

export default SecondStep;
