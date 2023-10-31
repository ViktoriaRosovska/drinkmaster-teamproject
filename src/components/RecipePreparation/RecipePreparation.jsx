import { RecipeTitle } from './RecipePreparation.styled';

const RecipePreparation = ({ instructions }) => {
  const steps = instructions.split('.');

  return (
    <>
      <RecipeTitle>Recipe Preparation</RecipeTitle>
      <div>
        <ul>
          {steps.map(step => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default RecipePreparation;
