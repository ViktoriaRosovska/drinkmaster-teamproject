import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';


export default function useAuth () {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);
  const user = useSelector(authSelectors.selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};