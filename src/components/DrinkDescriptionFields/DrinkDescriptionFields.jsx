import {
  AddBtn,
  AddBtnText,
  AddPhotoContainer,
  ReactSVGIcon,
} from './DrinkDescriptionFields.styled';
import IconPlus from '../../assets/images/addDrink/plus.svg';

export const DrinkDescriptionFields = () => {
  return (
    <AddPhotoContainer>
      <AddBtn>
        <ReactSVGIcon src={IconPlus} />
      </AddBtn>
      <AddBtnText>Add image</AddBtnText>
    </AddPhotoContainer>
  );
};
