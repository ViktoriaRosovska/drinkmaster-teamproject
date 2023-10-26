import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute({ isLoggedIn, children, redirectTo }) {
  if (!isLoggedIn) return <Navigate to={redirectTo} />;

  return children ? children : <Outlet />;
}
