import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {

};

const Subscribe: React.FC<Props> = () => {

  return (
    <section className="hero-wrap section">
      <div className="hero-mask opacity-9 bg-primary" />
      <div
        className="hero-bg parallax"
        style={{
          backgroundImage: 'url("/images/home-page/intro-bg-2.jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center 0px'}}
      />
      <div className="hero-content">
        <div className="container">
          <div className="justify-content-center text-center">
            <h2 className="text-9 fw-600 text-white text-center mb-3">Subscribe to Newsletter</h2>
            <hr className="heading-separator-line bg-white opacity-10 mx-auto" />
            <p className="lead text-center text-white mb-4">Subscribe to receive latest news, new features and updates.</p>
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="subscribe-form">
                  <form action="" method="post" noValidate={true}>
                    <div className="input-group">
                      <input type="email" id="subscribe-form-email" name="subscribe-form-email" className="form-control required" placeholder="Your Email Address" required />
                      <button id="subscribe-form-submit" name="subscribe-form-submit" className="btn btn-dark px-4 shadow-none" type="submit">
                        <span className="d-none d-sm-block">Subscribe</span><span className="text-4 d-block d-sm-none">
                          <FontAwesomeIcon icon={faPaperPlane} />
                        </span>
                      </button>
                    </div>
                  </form>
                  <div className="subscribe-form-result mt-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
