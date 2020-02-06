import React, { useContext } from 'react';
import { LinkContext } from '../../contexts/LinkContext';

const LeftNav = () => {
  const { links } = useContext(LinkContext);

  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="d-flex justify-content-center sidebar-sticky">
        <ul className="nav flex-column justify-content-around">
          {links.map(link => {
            return (
              <li className="nav-item" key={link.id}>
                <a
                  className={
                    link.id === 1
                      ? 'nav-link btn btn-outline-primary btn-sm active py-4'
                      : 'nav-link btn btn-outline-primary btn-sm py-4'
                  }
                  role="button"
                  href={link.url}
                >
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default LeftNav;
