import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {

};

const Contact: React.FC<Props> = () => {

  return (
    <section id="contact">
      <div className="row g-0">
        <div className="col-md-6 col-lg-7">
          <div className="section px-4 px-sm-5 mx-lg-5">
            <h2 className="fw-600 text-center mb-3">
              Contact Us
            </h2>
            <hr className="heading-separator-line bg-primary opacity-10 mx-auto" />
            <p className="lead text-center mb-5">
              We will get back to you in less than 24 hours.
            </p>
            <form id="contact-form" action="" method="post">
              <div className="mb-3">
                <input name="name" type="text" className="form-control border-2" placeholder="Name" required />
              </div>
              <div className="mb-3">
                <input name="email" type="email" className="form-control border-2" placeholder="Email" required />
              </div>
              <div className="mb-3">
                <textarea name="form-message" className="form-control border-2" rows={3} placeholder="Message........" defaultValue="" required />
              </div>
              <p className="text-center mt-4 mb-0">
                <button id="submit-btn" className="btn btn-primary text-uppercase" type="submit">
                  Send Message
                </button>
              </p>
            </form>
          </div>
        </div>
        <div className="col-md-6 col-lg-5 bg-light">
          <section className="section px-4 px-sm-5 mx-lg-4">
            <h2 className="fw-600 mb-3">
              Our Headquarter
            </h2>
            <hr className="heading-separator-line bg-primary opacity-10" />
            <p className="lead">
              For Customer Support and Query, Get in touch with us.
            </p>
            <div className="featured-box style-1">
              <div className="featured-box-icon text-6">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <h3>NFTCreator Inc.</h3>
              <p>
                4th Floor, Plot No.22, Above Public Park <br />
                145 Murphy Canyon Rd. <br />
                Suite 100-18 <br />
                San Diego CA 2028
              </p>
            </div>
            <div className="featured-box style-1">
              <div className="featured-box-icon text-6">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <h3>Telephone</h3>
              <p>(+060) 9898980098, (+060) 8898880088</p>
            </div>
            <div className="featured-box style-1">
              <div className="featured-box-icon text-6">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <h3>Business Inquiries</h3>
              <p>info@NFTCreator.com</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Contact;
