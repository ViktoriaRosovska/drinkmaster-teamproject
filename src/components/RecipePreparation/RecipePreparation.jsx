import {
  RecipeTitle,
  RecipeBox,
  Picture,
  List,
  ListItem,
  Box,
} from './RecipePreparation.styled';

import drinkIdPageDesk1x from '../../assets/images/drinkIdPage/drink-id-page-desk@1x.jpg';
// import drinkIdPageDesk2x from  '/src/assets/images/drinkIdPage/drink-id-page-desk@2x.jpg'
import drinkIdPageTabl1x from '../../assets/images/drinkIdPage/drink-id-page-tabl@1x.jpg';
import drinkIdPageMob1x from '../../assets/images/drinkIdPage/drink-id-page-mob@1x.jpg';
import drinkIdPageMob2x from '../../assets/images/drinkIdPage/drink-id-page-mob@2x.jpg';

const RecipePreparation = ({ instructions }) => {
  const steps = instructions.split('.');
  const noEmptySteps = steps.filter(step => step.trim() !== '');
  return (
    <>
      <RecipeTitle>Recipe Preparation</RecipeTitle>
      <RecipeBox>
        <List>
          {noEmptySteps.map(step => (
            <ListItem key={step}>{step}</ListItem>
          ))}
        </List>
        <Box>
          <Picture>
            <source
              srcSet={drinkIdPageDesk1x}
              // {drinkIdPageDesk2x}

              media="(min-width:1440px)"
            />
            <source srcSet={drinkIdPageTabl1x} media="(min-width:768px)" />
            <source srcSet={drinkIdPageMob2x} media="(max-width:767px)" />
            <img src={drinkIdPageMob1x} alt="Cocktails" loading="lazy" />
          </Picture>
        </Box>
      </RecipeBox>
    </>
  );
};
export default RecipePreparation;
