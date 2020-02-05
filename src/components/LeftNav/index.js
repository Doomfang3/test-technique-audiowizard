import React from 'react';

const LeftNav = ({ textArray, linkArray }) => {
  const links = linkArray.map((link, index) => {
    return (
      <li>
        <a href={link}>{textArray[index]}</a>
      </li>
    );
  });

  return (
    <>
      <nav>
        <ul>{links}</ul>
      </nav>
    </>
  );
};

export default LeftNav;
