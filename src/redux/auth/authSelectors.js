const selectUser = state => state.auth.user;
const selectUserName = state => state.auth.user.name;
const selectUserBirthDate = state => state.auth.user.birthDate;
const selectAvatarURL = state => state.auth.user.avatarURL;

const selectTheme = state => state.auth.theme;
const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectIsRefreshing = state => state.auth.isRefreshing;
const selectToken = state => state.auth.token;

const authSelectors = {
  selectUser,
  selectUserName,
  selectUserBirthDate,
  selectAvatarURL,
  selectTheme,
  selectToken,
  selectIsLoggedIn,
  selectIsRefreshing,
};

export default authSelectors;
