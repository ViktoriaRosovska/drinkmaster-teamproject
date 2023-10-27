const RecipePreparation = ({ instructions }) => {
  const steps = instructions.split('.');

  return (
    <>
      <h2>Recipe Preparation</h2>
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
