import React, { useContext } from 'react';
import { FirstVisitContext } from '../../contexts/FirstVisitContext';

const FirstStep = props => {
  const {
    setCurrentDisplay,
    firstname,
    setFirstname,
    lastname,
    setLastname,
  } = useContext(FirstVisitContext);
  const handleSubmit = event => {
    event.preventDefault();
    setCurrentDisplay('SecondStep');
  };

  return (
    <>
      <p className="text-center">Peux-tu indiquer l'identité du patient ?</p>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4 offset-md-2">
            <input
              id="input-lastname"
              type="text"
              className="form-control form-control-lg"
              placeholder="Nom"
              value={lastname}
              onChange={e => setLastname(e.target.value)}
              required
            />
          </div>
          <div className="col-md-4">
            <input
              id="input-firstname"
              type="text"
              className="form-control form-control-lg"
              placeholder="Prénom"
              value={firstname}
              onChange={e => setFirstname(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-success mx-auto d-block m-4">
          Suivant
        </button>
      </form>
      <div></div>
    </>
  );
};

export default FirstStep;
