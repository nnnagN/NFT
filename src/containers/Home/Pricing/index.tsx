import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

type Props = {

};

const Pricing: React.FC<Props> = () => {

  // data sample
  const featureList = [
    {name: 'Fully Responsive', isSupport: true},
    {name: 'Dedicated Support', isSupport: true},
    {name: 'Clean and Modern Design', isSupport: true},
    {name: 'Simple and Professional', isSupport: true},
    {name: '24/7 Support', isSupport: true}
  ];

  // data sample
  const planList = [
    {
      name: 'Basic',
      price: 'Free',
      type: 'Monthly',
      isPrimary: false,
      featureList: JSON.parse(JSON.stringify(featureList))
    },
    {
      name: 'Advance',
      price: '$9.99',
      type: 'Monthly',
      isPrimary: false,
      featureList: JSON.parse(JSON.stringify(featureList))
    },
    {
      name: 'Standard',
      price: '$19.99',
      type: 'Monthly',
      isPrimary: true,
      featureList: JSON.parse(JSON.stringify(featureList))
    },
    {
      name: 'Premium',
      price: '$29.99',
      type: 'Monthly',
      isPrimary: false,
      featureList: JSON.parse(JSON.stringify(featureList))
    },
  ];
  planList[0].featureList[4].isSupport = false;

  return (
    <section id="pricing" className="section bg-light">
      <div className="container">
        <h2 className="text-9 fw-600 text-center">Pricing Plan</h2>
        <hr className="heading-separator-line bg-primary opacity-10 mx-auto" />
        <p className="lead text-center mb-5">You can present your app pricing plan here!</p>
        <div className="row gy-4">

          {planList.map((plan) => (
            <div className="col-sm-6 col-lg-3" key={plan.name}>
              <div className="card text-center border-0 shadow-md">
                <div className={`card-header text-white text-6 fw-500 py-4 ${plan.isPrimary ? 'bg-primary' : 'bg-secondary'}`}>
                  {plan.name}
                </div>
                <div className="card-body">
                  <h5 className="text-9 fw-600 mb-0">{plan.price}</h5>
                  <p className=" text-2 badge bg-warning text-dark fw-600 rounded-pill">{plan.type}</p>
                  <ul className="list-style-2 text-2 text-start">
                    {plan.featureList.map((feature: any, idx: number) => (
                      <li key={idx}>
                        <span className="text-1 me-2">
                          <FontAwesomeIcon icon={feature.isSupport ? faCheck : faTimes} />
                        </span>
                        {feature.name}
                      </li>
                    ))}
                  </ul>
                  <Link href="">
                    <a className={`btn text-uppercase my-1 ${plan.isPrimary ? 'btn-primary' : 'btn-secondary'}`}>
                      Start Now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Pricing;
