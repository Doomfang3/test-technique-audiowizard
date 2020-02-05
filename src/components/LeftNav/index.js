import React from 'react';

const LeftNav = ({ navLinks }) => {
  const links = navLinks.linkArray.map((link, index) => {
    return (
      <li className="nav-item" key={navLinks.textArray[index]}>
        <a
          className={
            index === 0
              ? 'nav-link btn btn-outline-primary btn-sm active py-4'
              : 'nav-link btn btn-outline-primary btn-sm py-4'
          }
          role="button"
          href={link}
        >
          {navLinks.textArray[index]}
        </a>
      </li>
    );
  });

  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="d-flex justify-content-center sidebar-sticky">
        <ul className="nav flex-column justify-content-around">{links}</ul>
      </div>
    </nav>
  );
};

export default LeftNav;
