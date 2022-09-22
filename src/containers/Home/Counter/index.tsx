import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faStarHalfAlt, faDownload, faGem } from '@fortawesome/free-solid-svg-icons';

type Props = {

};

const Counter: React.FC<Props> = () => {

  return (
    <section id="counter" className="section hero-wrap">
      <div className="hero-mask opacity-8 bg-dark" />
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
        <div className="container">
          <div className="row gy-5">
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <div className="featured-box-icon text-white">
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <h4 className="text-11 text-white fw-500"><span className="counter" data-from={0} data-to={120}>120</span>K</h4>
                <p className="text-light mb-0">Happy Users</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <div className="featured-box-icon text-white">
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <h4 className="text-11 text-white fw-500"><span className="counter" data-from={0} data-to={46}>46</span>K</h4>
                <p className="text-light mb-0">Positive Ratings</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <div className="featured-box-icon text-white">
                  <FontAwesomeIcon icon={faDownload} />
                </div>
                <h4 className="text-11 text-white fw-500"><span className="counter" data-from={0} data-to={125}>125</span>K</h4>
                <p className="text-light mb-0">Total Download</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <div className="featured-box-icon text-white">
                  <FontAwesomeIcon icon={faGem} />
                </div>
                <h4 className="text-11 text-white fw-500"><span className="counter" data-from={0} data-to={58}>58</span>K</h4>
                <p className="text-light mb-0">Premium Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
