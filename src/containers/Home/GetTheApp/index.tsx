import StoreImage from '../../../components/Image/StoreImage';
import { APP_STORE, GOOGLE_PLAY } from '../../../utils/constants';

type Props = {

};

const GetTheApp: React.FC<Props> = () => {

  return (
    <section id="download" className="hero-wrap section">
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
            <h2 className="text-9 fw-600 text-white text-center mb-3">Get the App</h2>
            <hr className="heading-separator-line bg-white opacity-10 mx-auto" />
            <p className="lead text-center text-white mb-4">Download our app! Join over 500,000 people already using Our App.</p>
            <StoreImage store={APP_STORE} classname="d-inline-flex mx-3 my-2" />
            <StoreImage store={GOOGLE_PLAY} classname="d-inline-flex mx-3 my-2" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default GetTheApp;
