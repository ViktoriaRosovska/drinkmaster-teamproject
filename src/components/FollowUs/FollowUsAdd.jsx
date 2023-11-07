import {
    FollowUsList,
  FollowUsListItem,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  FollowUsLinkAdd,
} from './FollowUsAdd.styled';

const FollowUsAdd = () => {
  
  return (
    <FollowUsList>
      <FollowUsListItem>
        <FollowUsLinkAdd
          href="https://www.facebook.com/goITclub/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <FacebookIcon />
        </FollowUsLinkAdd>
      </FollowUsListItem>

      <FollowUsListItem>
        <FollowUsLinkAdd
          href="https://www.instagram.com/goitclub/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <InstagramIcon />
        </FollowUsLinkAdd>
      </FollowUsListItem>

      <FollowUsListItem>
        <FollowUsLinkAdd
          href="https://www.youtube.com/c/GoIT"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <YoutubeIcon />
        </FollowUsLinkAdd>
      </FollowUsListItem>
    </FollowUsList>
  );
};

export default FollowUsAdd;
