import {
  IconEdit,
  SaveUserInfoBtn,
  ModalInfoContainer,
  AvatarImg,
  ReactSVGIcon,
  InputAddFile,
  LabelAddFile,
  ImageWrapper,
  StyledInput,
  StyledForm,
  StyledLabel,
  CloseModalBtn,
  Ellipse222,
  Ellipse224,
} from './UserInfoModal.styled';
import AddPhoto from '../../../assets/images/userInfoModal/addPhoto.svg';
import UserAvatar from '../../../assets/images/userInfoModal/userAvatar.svg';
import { useState } from 'react';
import IconCloseModal from '../IconCloseModal/IconCloseModal';
// import useAuth from 'hooks/useAuth';
// import { useDispatch } from 'react-redux';

export default function UserInfoModal({ onBackdropClose }) {
  // const {
  //   user: { avatarURL, name },
  // } = useAuth();

  // const [username, setUsername] = useState(name);
  // const [avatar, setAvatar] = useState(null);
  const [file, setFile] = useState();

  // const dispatch = useDispatch();

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  // useEffect(() => {
  //   if (avatarURL) {
  //     setAvatar(avatarURL);
  //   }
  // }, [avatarURL]);

  return (
    <ModalInfoContainer>
      <Ellipse222 />
      <Ellipse224 />
      <ImageWrapper>
        <LabelAddFile>
          <InputAddFile type="file" onChange={handleChange} />
          <ReactSVGIcon src={AddPhoto} />
        </LabelAddFile>
        <AvatarImg src={file ? file : UserAvatar} alt="User avatar" />
      </ImageWrapper>
      <StyledForm>
        <StyledLabel>
          <StyledInput type="text" />
          <IconEdit />
          <SaveUserInfoBtn type="submit">Save changes</SaveUserInfoBtn>
        </StyledLabel>
      </StyledForm>
      <CloseModalBtn type="button" onClick={() => onBackdropClose()}>
        <IconCloseModal />
      </CloseModalBtn>
    </ModalInfoContainer>
  );
}
