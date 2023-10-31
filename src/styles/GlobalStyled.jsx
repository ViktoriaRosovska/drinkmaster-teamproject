import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
   *,
   *::before,
   *::after {
     box-sizing: border-box;
   }
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
  border: none;
  font-size: 16px;
}

img {
  display: block;
}
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(../assets/fonts/Manrope-Regular.woff2) format('woff2'),
    url(../assets/fonts/Manrope-Regular.woff) format('woff'),
    url(../assets/fonts/Manrope-Regular.ttf) format('ttf'),
    url(../assets//fonts/Manrope-Regular.eot) format('eot');
}

@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(../assets/fonts/Manrope-Medium.woff2) format('woff2'),
    url(../assets/fonts/Manrope-Medium.woff) format('woff'),
    url(../assets/fonts/Manrope-Medium.ttf) format('ttf'),
    url(../assets/fonts/Manrope-Medium.eot) format('eot');
}

@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(../assets/fonts/Manrope-Semibold.woff2) format('woff2'),
    url(../assets/fonts/Manrope-Semibold.woff) format('woff'),
    url(../assets/fonts/Manrope-Semibold.ttf) format('ttf'),
    url(../assets/fonts/Manrope-Semibold.eot) format('eot');
}


`;
