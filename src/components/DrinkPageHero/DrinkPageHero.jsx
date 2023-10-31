import { WhiteButton } from 'components/Buttons/WhiteLinkBtn/WhiteLinkBtn.styled';
import {
  About,
  DefaultImage,
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
        <WhiteButton>Add favorite</WhiteButton>
      </div>
      {image ? (
        <ImageDrink src={image} alt={title} />
      ) : (
        <DefaultImage>default image</DefaultImage>
      )}
    </HeroContainer>
  );
};
export default DrinkPageHero;
