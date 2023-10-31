import {
  FollowUsLink,
  FollowUsList,
  FollowUsListItem,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from './FollowUs.styled';

const FollowUs = () => {
  return (
    <FollowUsList>
      <FollowUsListItem>
        <FollowUsLink
          href="https://www.facebook.com/goITclub/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <FacebookIcon />
        </FollowUsLink>
      </FollowUsListItem>

      <FollowUsListItem>
        <FollowUsLink
          href="https://www.instagram.com/goitclub/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <InstagramIcon />
        </FollowUsLink>
        
      </FollowUsListItem>

      <FollowUsListItem>
        <FollowUsLink
          href="https://www.youtube.com/c/GoIT"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <YoutubeIcon />
        </FollowUsLink>
        
      </FollowUsListItem>
    </FollowUsList>
  );
};

export default FollowUs;