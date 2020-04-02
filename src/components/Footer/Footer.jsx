import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import GithubButtons from '../GithubButtons/GithubButtons';

import { githubButtons } from '../../mock/data';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const { isEnabled } = githubButtons;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <a href="#top" aria-label="Back To Top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
        </a>
        <div className="social-links">
          {networks &&
            networks.map(network => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Developed with{' '}
          <i style={{ color: '#dc3545', fontSize: '1.8rem' }} className="fa fa-heart px-1" />
          <a href="https://github.com/nhbduy" target="_blank" rel="noopener noreferrer">
            Hoang-Bao-Duy NGUYEN
          </a>
        </p>
        <p className="footer__text">
          Credit to{' '}
          <i style={{ color: '#dde012', fontSize: '1.8rem' }} className="fa fa-star px-1" />
          <a
            href="https://github.com/cobidev/gatsby-simplefolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jacobo Martínez
          </a>
        </p>

        {isEnabled && <GithubButtons />}
      </Container>
    </footer>
  );
};

export default Footer;
