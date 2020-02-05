import React from 'react';

const MainApp = ({ children }) => {
  return (
    <>
      <div className="col-md-2"></div>
      <div className="col-md-10 col-sm-12 p-4 main">{children}</div>
    </>
  );
};

export default MainApp;
