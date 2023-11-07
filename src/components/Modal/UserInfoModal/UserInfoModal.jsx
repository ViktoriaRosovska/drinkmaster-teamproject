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
import { updateUser } from 'redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
// import useAuth from 'hooks/useAuth';
// import { useDispatch } from 'react-redux';

export default function UserInfoModal({ onBackdropClose }) {
  const dispatch = useDispatch();
  const { avatar, name } = useSelector(authSelectors.selectUser);
  const [avatarURL, setAvatarURL] = useState("");
  const [userData, setUserData] = useState({
    avatar,
    name,
  });

  function handleAvatarChange(e) {
    // const selectedFile = (e.target.files[0]);

    // // if (selectedFile) {

    // //   const fileReader = new FileReader();
    // //   fileReader.onload = function (e) {
    // //     const fileContent = e.target.result;
    // //     console.log('File content:', fileContent);
    // //   };
    // //   fileReader.readAsText(selectedFile);
    // //   setUserData({...userData, avatar: selectedFile});
    // // }

    const avatarFile = e.target.files[0];
    
      setUserData({ ...userData, avatar: avatarFile });
   
      const avatarUrl = URL.createObjectURL(e.target.files[0]);
      setAvatarURL(avatarUrl);
    
  }

  const handleNameChange = e => {
    // Обробка зміни імені користувача
    const name = e.target.value;
    setUserData({ ...userData, name });
  };

  const handleSubmitUpdateUser = async () => {
    const formData = new FormData();
    if (userData.avatar) {
      formData.append('avatar', userData.avatar);
    }
    formData.append('name', userData.name);

    try {
      // setIsLoading(true);
      await dispatch(updateUser(formData));
      // setIsLoading(false);

      formData.reset();
      onBackdropClose();
    } catch (error) {
      console.log('Помилка сабміту при оновлені профилю', error.message);
    }
    formData.reset();
    // Після успішної відповіді закрити модальне вікно
    onBackdropClose();
  };

  return (
    <ModalInfoContainer>
      <Ellipse222 />
      <Ellipse224 />
      <ImageWrapper>
        <LabelAddFile>
          <InputAddFile
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
          />
          <ReactSVGIcon src={AddPhoto} />
        </LabelAddFile>
        <AvatarImg
          src={avatarURL ? avatarURL : userData.avatar || UserAvatar}
          alt="User avatar"
        />
      </ImageWrapper>
      <StyledForm onSubmit={handleSubmitUpdateUser}>
        <StyledLabel>
          <StyledInput
            type="text"
            value={userData.name}
            onChange={handleNameChange}
          />
          <IconEdit />
          <SaveUserInfoBtn type="submit" onClick={handleSubmitUpdateUser}>
            Save changes
          </SaveUserInfoBtn>
        </StyledLabel>
      </StyledForm>
      <CloseModalBtn type="button" onClick={() => onBackdropClose()}>
        <IconCloseModal />
      </CloseModalBtn>
    </ModalInfoContainer>
  );
}
