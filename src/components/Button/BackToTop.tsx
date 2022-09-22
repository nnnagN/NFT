import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';

type Props = {
  heightVisible?: number
};

const BackToTop: React.FC<Props> = ({heightVisible=150}) => {

  const [hideScrollToTop, setHideScrollToTop] = useState(false);

  useEffect(() => {
    const controlScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY <= heightVisible) {
          setHideScrollToTop(true);
        } else {
          setHideScrollToTop(false);
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlScroll);

      return () => {
        window.removeEventListener('scroll', controlScroll);
      };
    }
  }, [heightVisible]);

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // };

  return (
    <Link href="">
      <a className="">
        <Tippy content="Back to top" placement="left" >
          <span id="back-to-top" className={hideScrollToTop ? 'hidden' : ''} aria-label="Back to Top">
            <FontAwesomeIcon icon={faChevronUp} />
          </span>
        </Tippy>
      </a>
    </Link>
  );
};

export default BackToTop;
