import {
  About,
  GlassName,
  HeroContainer,
  ImageDrink,
} from './DrinkPageHero.styled';

const DrinkPageHero = ({ glass, about, alcoholic, title, image }) => {
  return (
    <HeroContainer>
      <div>
        <GlassName>
          {glass} / {alcoholic}
        </GlassName>

        {about ? (
          <About>{about}</About>
        ) : (
          <p>
            <br />
          </p>
        )}
        <button>add favorite</button>
      </div>
      {image ? (
        <ImageDrink src={image} alt={title} />
      ) : (
        <div>default image</div>
      )}
    </HeroContainer>
  );
};
export default DrinkPageHero;
