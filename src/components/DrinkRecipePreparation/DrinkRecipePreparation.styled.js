import styled from 'styled-components';

const AddFormTextarea = styled.textarea`
  border-radius: 14px;
  border: 1px solid var(--white-fifty-color);
  background-color: transparent;
  margin-bottom: 20px;
  padding: 18px;
  width: 335px;
  height: 184px;
  color: var(--white-color);
  font-family: 'Manrope';
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  overflow-y: auto;
  resize: none;
  @media screen and (min-width: 768px) {
    width: 480px;
    height: 184px;
    border-radius: 20px;
  }
  &::-moz-scrollbar {
    background-color: transparent;
    width: 5px;
  }

  &::-moz-scrollbar-thumb {
    background-color: var(--white-fifty-color);
    border-radius: 10px;
  }
  &::-webkit-scrollbar {
    background-color: transparent;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--white-color);
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const ResipeLabel = styled.label`
  position: relative;
  top: 40px;
  left: 18px;
  line-height: 40px;
  transition: transform 0.3s ease;
  color: var(--white-fifty-color);
  display: inline-block;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`;
const RecipeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (min-width: 768px) {
    width: 768px;
  }
`;
export { AddFormTextarea, RecipeWrapper, ResipeLabel };
