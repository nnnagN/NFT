export type MOBILE_STORE_TYPE = {
    link: string,
    srcImg: string,
    altImg: string,
    width: number,
    height: number,
  }
  
  export const APP_STORE: MOBILE_STORE_TYPE = {
    link: 'https://www.apple.com/app-store/',
    srcImg: '/images/store/app-store.png',
    altImg: 'Download on the App Store',
    width: 174,
    height: 55
  };
  
  export const GOOGLE_PLAY: MOBILE_STORE_TYPE = {
    link: 'https://play.google.com/store/apps',
    srcImg: '/images/store/google-play-store.png',
    altImg: 'Get it on Google Play',
    width: 174,
    height: 55,
  };
  