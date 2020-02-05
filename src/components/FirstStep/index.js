import React from 'react';

const FirstStep = () => {
  return (
    <>
      <p className="text-center">Peux-tu indiquer l'identité du patient ?</p>
      <form>
        <div className="row">
          <div className="col-md-4 offset-md-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Nom"
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Prénom"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mx-auto d-block">
          Suivant
        </button>
      </form>
    </>
  );
};

export default FirstStep;
