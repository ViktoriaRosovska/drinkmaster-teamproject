import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';

export default function PrivateRoute({
  redirectTo,
  component: Component,
}) {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const isRefreshed = useSelector(authSelectors.selectIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshed;

 return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
