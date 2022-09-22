import Image from '@components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilRuler, faCloudUploadAlt, faTags, faLock, faPaperPlane, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

type Props = {

};

const Feature: React.FC<Props> = () => {

  return (
    <section id="features" className="section">
      <div className="container">
        <h2 className="text-9 fw-600 text-center">App's Features</h2>
        <hr className="heading-separator-line bg-primary opacity-10 mx-auto" />
        <p className="lead text-center mb-5">You can present your app features. It is all very easy!</p>
        <div className="row">
          <div className="col-lg-4 align-self-center">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-12">
                <div className="featured-box featured-box-reverse-xl style-3 mb-5">
                  <div className="featured-box-icon bg-light-1 rounded-circle">
                    <FontAwesomeIcon icon={faPencilRuler} />
                  </div>
                  <h3>Exclusive Design</h3>
                  <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-12">
                <div className="featured-box featured-box-reverse-xl style-3 mb-5">
                  <div className="featured-box-icon bg-light-1 rounded-circle">
                    <FontAwesomeIcon icon={faCloudUploadAlt} />
                  </div>
                  <h3>Your Data in Cloud</h3>
                  <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-12">
                <div className="featured-box featured-box-reverse-xl style-3 mb-5">
                  <div className="featured-box-icon bg-light-1 rounded-circle">
                    <FontAwesomeIcon icon={faTags} />
                  </div>
                  <h3>Low Pricing</h3>
                  <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center mb-4 mb-xl-0">
            <Image alt="" src="/images/home-page/app-showcase-feature-2.png" className="img-fluid mx-auto" width={284} height={582} />
          </div>
          <div className="col-lg-4 align-self-center">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-12">
                <div className="featured-box style-3 mb-5">
                  <div className="featured-box-icon bg-light-1 rounded-circle">
                    <FontAwesomeIcon icon={faLock} />
                  </div>
                  <h3>Fully Secured</h3>
                  <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-12">
                <div className="featured-box style-3 mb-5">
                  <div className="featured-box-icon bg-light-1 rounded-circle">
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </div>
                  <h3>Easy to Use</h3>
                  <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-12">
                <div className="featured-box style-3 mb-5">
                  <div className="featured-box-icon bg-light-1 rounded-circle">
                    <FontAwesomeIcon icon={faSyncAlt} />
                  </div>
                  <h3>Free Updates</h3>
                  <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
