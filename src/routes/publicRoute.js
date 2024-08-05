import { Route, Navigate } from 'react-router-dom';

function PublicRoute({ path, isAuthenticated, element }) {
  return (
    <Route
      path={path}
      element={isAuthenticated ? <Navigate to="/home" /> : element}
    />
  );
}

export default PublicRoute;