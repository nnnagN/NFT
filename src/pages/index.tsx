import About from '../containers/Home/About/index';
import Contact from '../containers/Home/Contact';
import Counter from '../containers/Home/Counter';
import Faq from '../containers/Home/Faq';
import Feature from '../containers/Home/Feature';
import Feedback from '../containers/Home/Feedback';
import GetTheApp from '../containers/Home/GetTheApp';
import HowItWorks from '../containers/Home/HowItWorks';
import Intro from '../containers/Home/intro';
import Pricing from '../containers/Home/Pricing';
import AppScreens from '../containers/Home/AppScreens';
import Subscribe from '../containers/Home/Subscribe';
import type { NextPage } from 'next';

const Home: NextPage = () => {

  return (
    <>
      <Intro />
      <About />
      <Counter />
      <Feature />
      <AppScreens />
      <HowItWorks />
      <Feedback />
      <Pricing />
      <GetTheApp />
      <Faq />
      <Subscribe />
      <Contact />
    </>
  );
};

export default Home;
