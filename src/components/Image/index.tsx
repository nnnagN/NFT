import NextImage from 'next/image';

declare const VALID_LAYOUT_VALUES: readonly ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
declare type LayoutValue = typeof VALID_LAYOUT_VALUES[number];
declare type ImgElementStyle = NonNullable<JSX.IntrinsicElements['img']['style']>;

type Props = {
  className?: string
  src: string
  alt?: string
  title?: string
  layout?: LayoutValue
  objectFit?: ImgElementStyle['objectFit']
  onClick?: any
  width?: number | string
  height?: number | string
  ratio?: string
}

const Image: React.FC<Props> = ({
  className,
  src,
  alt,
  title='',
  layout='fill',
  objectFit='contain',
  onClick=()=>{},
  width,
  height,
  ratio
}) => {
  return (
    <div
      className={`${className ? className : ''}`}
      style={{
        position: 'relative',
        width: width && width,
        height: height && height,
        paddingBottom: ratio && ratio
      }}
      title={title}
      onClick={onClick}
    >
      <NextImage
        layout={layout}
        objectFit={objectFit}
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default Image;
