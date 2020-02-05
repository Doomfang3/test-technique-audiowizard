import React from 'react';

const TopNav = ({ image, buttonText }) => {
  return (
    <>
      <nav>
        <div>
          <img src={image} alt="logo" />
        </div>
        <div>
          <button type="button">{buttonText}</button>
        </div>
      </nav>
    </>
  );
};

export default TopNav;
