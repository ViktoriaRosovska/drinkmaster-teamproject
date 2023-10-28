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
`;
