const DrinkIngridientList = ({ ingredients }) => {
  return (
    <>
      <p>Ingredients</p>
      <ul>
        {ingredients.map(({ title, measure, ingredientThumb }) => (
          <div key={title}>
            <li>
              {ingredientThumb ? (
                <img src={ingredientThumb} alt={title} />
              ) : (
                <div>default image</div>
              )}
              <div>
                <p>{title}</p>
                <p>{measure}</p>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};
export default DrinkIngridientList;
