const DrinkPageHero = ({ glass, about, title, image }) => {
  return (
    <div>
      <div>
        <p>{glass}</p>
        {about ? (
          <p>{about}</p>
        ) : (
          <p>
            <br />
          </p>
        )}
        <button>add favorite</button>
      </div>
      {image ? <img src={image} alt={title} /> : <div>default image</div>}
    </div>
  );
};
export default DrinkPageHero;
