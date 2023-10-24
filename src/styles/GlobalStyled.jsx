import styled from 'styled-components';

const GlobalStyle = styled.main`
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
//main background color 
--black-color: #OAOA11;
--black-fifty-color: rgba(10, 10, 17, 0.5);
--black-forty-color: rgba(10, 10, 17, 0.4);

--dark-blue-color: #161F37;
--dark-blue-fifty-color: rgba(22, 31, 55, 0.5);
--dark-blue-twenty-color: rgba(22, 31, 55, 0.2);

--grey-color: #434D67;

--blue-color: #4070CD;
--blue-fifty-color: rgba(64, 112, 205, 0.5);

--light-green-color: #BCE6D2;
--light-green-forty-color: rgba(188, 230 210, 0.4);

--white-color: #F3F3F3;
--white-twenty-color: rgba(243, 243, 243, 0.2);
--white-thirty-color: rgba(243, 243, 243, 0.3);
--white-forty-color: rgba(243, 243, 243, 0.4);
--white-fifty-color: rgba(243, 243, 243, 0.5);

--red-error-color: #DA1414;
--red-error-fifty-color: rgba(218, 20, 20, 0.5);
--green-success-color: rgba(60, 188, 129, 1); 
--green-success-fifty-color: rgba(60, 188, 129, 0.5); 

--start-page-txt-color: #FAFAFA;

--linear-start-color: rgba(10, 10, 17, 0.03);
--linear-end-color: rgba(10, 10, 17, 0.8);


}



`
export default GlobalStyle;