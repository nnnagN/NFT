import Image from '../../../components/Image';
import StoreImage from '../../../components/Image/StoreImage';
import { APP_STORE, GOOGLE_PLAY } from '../../../utils/constants';

type Props = {

};

const Intro: React.FC<Props> = () => {

  return (
    <section id="home">
      <div className="hero-wrap">
        <div className="hero-mask opacity-1 bg-primary" />
        <div className="hero-content d-flex fullscreen">
          <div className="container my-auto">
            <div className="row my-5 my-lg-0">
              <div className="col-lg-6 align-self-center text-center text-lg-start order-1 order-lg-0">
                <h2 className="text-17 fw-600 mb-3">
                  Your Mobile
                  <span className="text-primary"> App</span> Showcase
                </h2>
                <p className="lead mb-4">
                  Create your next mobile app landing page in minutes. Lisque persius interesset his et,
                  in quot quidam persequeris vim, ad mea essent possim iriure.
                </p>
                <div className="d-inline-flex flex-wrap gap-4 justify-content-center pt-2">
                  <StoreImage store={APP_STORE} />
                  <StoreImage store={GOOGLE_PLAY} />
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center justify-content-center order-0 order-lg-1 mb-4 mb-lg-0">
                <Image className="img-fluid" src="/images/home-page/app-showcase-2.png" width={250} height={509} alt="app showcase" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
