import { WhiteButton } from 'components/Buttons/WhiteLinkBtn/WhiteLinkBtn.styled';
import {
  About,
  DefaultImage,
  GlassName,
  HeroContainer,
  ImageDrink,
  Box,
} from './DrinkPageHero.styled';

import drinkIdPageBlock from '../../assets/images/drinkIdPage/block-big@1x.jpg';

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
      <Box>
        {image ? (
          <ImageDrink src={image} alt={title} />
        ) : (
          <DefaultImage src={drinkIdPageBlock} alt={title} />
        )}
      </Box>
    </HeroContainer>
  );
};
export default DrinkPageHero;
