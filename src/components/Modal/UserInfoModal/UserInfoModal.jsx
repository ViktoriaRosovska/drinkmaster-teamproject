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
} from './UserInfoModal.styled';
import AddPhoto from '../../../assets/images/userInfoModal/addPhoto.svg';
import UserAvatar from '../../../assets/images/userInfoModal/userAvatar.svg';
import { useState } from 'react';
import IconCloseModal from '../IconCloseModal/IconCloseModal';

export default function UserInfoModal({ onBackdropClose }) {
  const [file, setFile] = useState();

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <ModalInfoContainer>
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
