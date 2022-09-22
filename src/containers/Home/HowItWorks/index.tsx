import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

type Props = {

};

const HowItWorks: React.FC<Props> = () => {

  return (
    <section id="how-it-works" className="hero-wrap section">
      <div className="hero-mask opacity-7 bg-dark" />
      <div
        className="hero-bg parallax"
        style={{
          backgroundImage: 'url("/images/home-page/intro-bg-4.jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center 0px'}}
      />
      <div className="hero-content">
        <div className="container text-center">
          <h2 className="text-9 fw-600 text-white mb-4 mb-lg-5">How it's Works? Play And Watch!</h2>
          <a className="popup-youtube btn-video-play" href="http://www.youtube.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faPlay} />
          </a>
          <p className="text-white font text-uppercase ls-1 mt-2 mb-0">View Promo</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
