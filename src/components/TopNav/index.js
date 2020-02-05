import React from 'react';

const TopNav = ({ image, buttonText }) => {
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark p-0 px-4">
      <a className="navbar-brand" href="#">
        <img
          src={image}
          alt="logo"
          width="200"
          className="d-inline-block align-top"
        />
      </a>
      <a href="#" role="button" className="btn btn-primary btn-lg">
        {buttonText}
      </a>
    </nav>
  );
};

export default TopNav;
