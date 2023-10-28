import styled from 'styled-components';

export const SocialMediaList = styled.ul`
display: flex;
gap: 14px;
align-items: center;


@media screen and (min-width: 768px) {
gap: 16px;
}
`
export const SocialMediaListItem = styled.li`

`
export const SocialMediaLink = styled.a`
width: 22px;
height: 22px;
padding: 8px;
border-radius: 10px;
border: 1px solid var(--white-twenty-color);
color: var(--white-color);

@media screen and (min-width: 768px) {
width: 28px;
height: 28px;
}
`