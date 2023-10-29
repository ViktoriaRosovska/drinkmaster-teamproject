import { Navigate } from 'react-router-dom';

export default function PrivateRoute({
  isLoggedIn,
  redirectTo,
  component: Component,
}) {
  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}
