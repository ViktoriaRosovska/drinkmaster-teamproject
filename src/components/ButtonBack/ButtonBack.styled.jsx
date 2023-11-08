import styled from 'styled-components';


export const BtnBack = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 10px auto 10px 10px;
  
  padding-right: 6px;
  padding-left: 6px;
  padding-top: 6px;
  padding-bottom: 6px;

  width: 100px;

  border: none;
  border-radius: 5px;

  font-size: 12px;
  font-weight: 500;
  color: #5a18ff;
  text-transform: uppercase;
  text-align: center;

  background: linear-gradient(141.22deg, var(--blue-color) 9.4%, var(--light-green-color) 91.91%);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
 box-shadow: inset 0px 5px 10px 0px;
  transition: transform var(--transition), border var(--transition), background-color var(--transition);
  

  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: var(--start-page-txt-color);
    color: var(--dark-blue-color);
  
  }

  svg {
    margin-right: 10px;
  }
`;