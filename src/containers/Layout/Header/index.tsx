import Link from 'next/link';
import Image from '../../../components/Image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type Props = {

};

const Header: React.FC<Props> = () => {

  const listMenu = [
    {name: 'Home', link: '/#home'},
    {name: 'About', link: '/#about'},
    {name: 'Features', link: '/#features'},
    {name: 'Screenshot', link: '/#screenshot'},
    {name: 'Testimonial', link: '/#testimonial'},
    {name: 'Pricing', link: '/#pricing'},
    {name: 'Faq', link: '/#faq'},
    {name: 'Contact Us', link: '/#contact'},
  ];

  const router = useRouter();
  const [path, setPath] = useState('');

  useEffect(() => {
    setPath(router.asPath);
  }, [router.asPath]);

  return (
    <header id="header" className="sticky-top-slide">
      <nav className="primary-menu navbar navbar-expand-lg fw-600 sticky-on">
        <div className="container-lg">
          <Link href="/">
            <a><Image src="/images/logo.svg" className="header-logo" width={125} height={35} /></a>
          </Link>

          <button type="button" data-bs-toggle="collapse" data-bs-target="#header-nav" className="navbar-toggler collapsed" aria-expanded="false">
            <span />
            <span />
            <span />
          </button>

          <div id="header-nav" className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              {listMenu.map((menu, idx) => (
                <li className="nav-item" key={idx} onClick={() => setPath(router.asPath)}>
                  <Link href={menu.link}>
                    <a className={`nav-link ${menu.link === path ? 'active' : ''}`}>
                      {menu.name}
                    </a>
                  </Link>
                </li>
              ))}
              <li className="align-items-center h-auto ms-lg-3">
                <Link href="#download">
                  <a className="nav-link btn btn-primary link-light text-3 fw-600 shadow-none d-inline-block mt-3 mt-lg-0 smooth-scroll">
                    Download
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
