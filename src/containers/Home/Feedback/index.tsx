import { Splide, SplideSlide } from '@splidejs/react-splide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

type Props = {

};

const Feedback: React.FC<Props> = () => {

  // data sample
  const feedbackList = [
    {
      name: 'Jay Shah',
      from: 'India',
      avatarImg: '/images/home-page/avatar/client-sm-1.jpg',
      content: '“Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.”',
    },
    {
      name: 'Dennis Jacques',
      from: 'Canada',
      avatarImg: '/images/home-page/avatar/client-sm-2.jpg',
      content: 'Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.”',
    },
    {
      name: 'Patrick Cary',
      from: 'USA',
      avatarImg: '/images/home-page/avatar/client-sm-3.jpg',
      content: '“I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure.”',
    },
    {
      name: 'Chris Tom',
      from: 'UK',
      avatarImg: '/images/home-page/avatar/client-sm-4.jpg',
      content: '“I have used them twice now. Good rates, very efficient service and priced simply dummy text of the printing and typesetting industry quidam interesset his et. Excellent.”',
    }
  ];

  const sildeOption = {
    type: 'loop',
    flickPower: 50,
    flickMaxPages: 1,
    gap: '40px',
    perPage: 2,
    pagination: true,
    breakpoints: {
      1400: {
        gap: '30px',
      },
      1300: {
        gap: '20px',
      },
      768: {
        perPage: 1,
      }
    }
  };

  return (
    <section id="testimonial" className="section">
      <div className="container">
        <h2 className="text-9 fw-600 text-center">What Our Users Say’s</h2>
        <hr className="heading-separator-line bg-primary opacity-10 mx-auto" />
        <p className="lead text-center mb-4">See what our happy Customer say about app. We are proud to have our users.</p>

        <div className="p-3">
          <Splide
            aria-labelledby="Screenshot slide"
            options={sildeOption}
          >
            {feedbackList.map((feedback, idx: number) => (
              <SplideSlide key={idx}>
                <div>
                  <div className="item testimonial border rounded text-center p-4">
                    <span className="text-9 text-muted opacity-2">
                      <FontAwesomeIcon icon={faQuoteLeft} />
                    </span>
                    <p>{feedback.content}</p>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="img-fluid d-inline-block w-auto rounded-circle shadow-sm border" src={feedback.avatarImg} alt="" />
                    <strong className="d-block fw-500">{feedback.name}</strong>
                    <span className="text-muted text-2">User from {feedback.from}</span>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
