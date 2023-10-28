import {
  SocialMediaLink,
  SocialMediaList,
  SocialMediaListItem,
} from './SocialMedia.styled';

const SocialMedia = () => {
  return (
    <SocialMediaList>
      <SocialMediaListItem>
        <SocialMediaLink href="https://www.facebook.com/goITclub/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          ></SocialMediaLink>
      </SocialMediaListItem>

      <SocialMediaListItem>
        <SocialMediaLink href="https://www.instagram.com/goitclub/"
          target="_blank"
          rel="noopener noreferrer nofollow"></SocialMediaLink>
      </SocialMediaListItem>

      <SocialMediaListItem>
        <SocialMediaLink href="https://www.youtube.com/c/GoIT" target="_blank"
          rel="noopener noreferrer nofollow">
          
        </SocialMediaLink>
      </SocialMediaListItem>
    </SocialMediaList>
  );
};

export default SocialMedia;
