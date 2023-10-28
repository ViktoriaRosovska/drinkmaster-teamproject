import { EditProfileBtn, IconEdit, SaveUserInfoBtn, ModalInfoContainer } from "./UserInfoModal.styled";

export default function UserInfoModal({onBackdropClose}) {

    return (
      <ModalInfoContainer>
      
        <EditProfileBtn>
          Victoria
          <IconEdit/>
        </EditProfileBtn>
        <SaveUserInfoBtn type="submit">Save changes</SaveUserInfoBtn>
        <button type="button" onClick={() => onBackdropClose()}>Close Modal</button>
      </ModalInfoContainer>
    );
  }
  