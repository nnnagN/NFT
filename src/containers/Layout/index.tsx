import BackToTop from '../../components/Button/BackToTop';
import Footer from './Footer';
import Header from './Header';
import styles from './index.module.scss';

type Props = {
  children: React.ReactNode
};

const Layout: React.FC<Props> = ({children}) => {

  return (
    <div id="main-wrapper" className={styles.layout}>
      <Header />
      <div className="content">
        {children}
      </div>
      <Footer />

      <BackToTop />
    </div>
  );
};

export default Layout;
