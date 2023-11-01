import {
  RecipeTitle,
  RecipeBox,
  Picture,
  List,
  ListItem,
} from './RecipePreparation.styled';

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
        <Picture>
          <source
            srcset="
                        src/assets/images/drinkIdPage/drink-id-page-desk@1x.jpg 1x,
                        src/assets/images/drinkIdPage/drink-id-page-desk@2x.jpg 2x
                      "
            media="(min-width:1440px)"
          />
          <source
            srcset="
                       ../../assets/images/drinkIdPage/drink-id-page-tabl@1x.jpg 1x,
                        ../../assets/images/drinkIdPage/drink-id-page-tabl@2x.jpg 2x
                      "
            media="(min-width:768px)"
          />
          <source
            srcset="
                        ../../assets/images/drinkIdPage/drink-id-page-mob@2x.jpg 2x"
            media="(max-width:767px)"
          />
          <img
            src="src/assets/images/drinkIdPage/drink-id-page-mob@1x.jpg"
            alt="Cocktails"
            width="335"
            height="430"
            loading="lazy"
          />
        </Picture>
      </RecipeBox>
    </>
  );
};
export default RecipePreparation;
