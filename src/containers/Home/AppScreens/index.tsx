import { Splide, SplideSlide } from '@splidejs/react-splide';

type Props = {

};

const AppScreens: React.FC<Props> = () => {

  const screenshotList = [
    '/images/home-page/screenshot/app-1.jpg',
    '/images/home-page/screenshot/app-2.jpg',
    '/images/home-page/screenshot/app-3.jpg',
    '/images/home-page/screenshot/app-4.jpg',
    '/images/home-page/screenshot/app-5.jpg',
    '/images/home-page/screenshot/app-6.jpg',
    '/images/home-page/screenshot/app-7.jpg'
  ];

  const sildeOption = {
    type: 'loop',
    autoplay: true,
    interval: 5000,
    flickPower: 50,
    flickMaxPages: 1,
    gap: '40px',
    perPage: 3,
    perMove: 1,
    pagination: true,
    breakpoints: {
      1400: {
        gap: '30px',
      },
      1300: {
        gap: '20px',
      },
      992: {
        perPage: 2,
      },
      576: {
        perPage: 1,
      },
    }
  };

  return (
    <section id="screenshot" className="section bg-light">
      <div className="container">
        <h2 className="text-9 fw-600 text-center">App Screens</h2>
        <hr className="heading-separator-line bg-primary opacity-10 mx-auto" />
        <p className="lead text-center mb-4">You can present your app screens. It is all very easy!</p>

        <div className="p-3">
          <Splide
            aria-labelledby="Screenshot slide"
            options={sildeOption}
          >
            {screenshotList.map((scrImg: string, idx: number) => (
              <SplideSlide key={idx}>
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img style={{width: '100%'}} src={scrImg} alt="app screenshot" />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default AppScreens;
