import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Tippy from '@tippyjs/react';
import Terms from '@components/Modal/Terms';
import Privacy from '@components/Modal/Privacy';
import Link from 'next/link';

type Props = {

};

const Footer: React.FC<Props> = () => {

  const socialList = [
    {name: 'Twitter', class: 'social-icons-twitter', icon: faTwitter, link: 'https://twitter.com/'},
    {name: 'Facebook', class: 'social-icons-facebook', icon: faFacebookF, link: 'https://www.facebook.com/'},
    {name: 'LinkedIn', class: 'social-icons-linkedin', icon: faLinkedin, link: 'https://www.linkeadin.com/'},
    {name: 'Instagram', class: 'social-icons-instagram', icon: faInstagram, link: 'https://www.instagram.com/'},
  ];

  return (
    <footer id="footer" className="section bg-dark footer-text-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 align-self-center text-center text-lg-start">
            <p className="mb-0">
              © {new Date().getFullYear()}
              <Link href="/" >
                <a> UnitVN</a>
              </Link>
              <span>. All Rights Reserved.</span>
            </p>
          </div>
          <div className="col-lg-4 align-self-center justify-content-center justify-content-lg-start">
            <ul className="social-icons social-icons-lg social-icons-muted justify-content-center py-3 py-lg-0">
              {socialList.map(social => (
                <li className="social-icons-twitter" key={social.name}>
                  <Tippy content={social.name} placement="top">
                    <a data-bs-toggle="tooltip" title="" data-bs-original-title={social.name} href={social.link} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={social.icon} />
                    </a>
                  </Tippy>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4 align-self-center">
            <ul className="nav nav-separator nav-separator-light justify-content-center justify-content-lg-end">
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="modal" data-bs-target="#terms" href="">
                Terms of Use
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="modal" data-bs-target="#privacy" href="">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Terms />
      <Privacy />
    </footer>
  );
};

export default Footer;
