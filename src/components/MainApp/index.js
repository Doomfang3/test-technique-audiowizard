import React from 'react';

const MainApp = ({ children }) => {
  return <div className="col-md-10 offset-md-2 col-sm-12 p-4 main d-flex flex-column justify-content-around">{children}</div>;
};

export default MainApp;
