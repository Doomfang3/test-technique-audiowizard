import React from 'react';

const FirstStep = props => {
  const handleSubmit = event => {
    event.preventDefault();
    props.setFirstname(document.getElementById('input-firstname').value);
    props.setLastname(document.getElementById('input-lastname').value);
    props.onClick('SecondStep');
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
              required
            />
          </div>
          <div className="col-md-4">
            <input
              id="input-firstname"
              type="text"
              className="form-control form-control-lg"
              placeholder="Prénom"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mx-auto d-block m-4">
          Suivant
        </button>
      </form>
      <div></div>
    </>
  );
};

export default FirstStep;
