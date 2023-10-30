const selectUser = state => state.auth.user;
const selectUserName = state => state.auth.user.name;
const selectUserBirthDate = state => state.auth.user.birthDate;
const selectAvatarURL = state => state.auth.user.avatarURL;

const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectIsRefreshing = state => state.auth.isRefreshing;
const selectToken = state => state.auth.token;
const selectSubscribe = state => state.auth.isSubscribed;

const authSelectors = {
  selectUser,
  selectUserName,
  selectUserBirthDate,
  selectAvatarURL,
  selectToken,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectSubscribe,
};

export default authSelectors;
