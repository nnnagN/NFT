import Image from '../../components/Image';
import { MOBILE_STORE_TYPE } from '../../utils/constants';

type Props = {
  store: MOBILE_STORE_TYPE
  classname?: string
};

const StoreImage: React.FC<Props> = ({store, classname}) => {

  if (store) {
    return (
      <a href={store.link} className={classname} target="_blank" rel="noreferrer">
        <Image
          className="img-fluid"
          src={store.srcImg}
          alt={store.altImg}
          width={store.width}
          height={store.height}
        />
      </a>
    );
  } else return null;
};

export default StoreImage;
