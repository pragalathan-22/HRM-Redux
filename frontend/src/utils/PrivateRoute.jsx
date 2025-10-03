import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children, roles }) {
  const { token, role } = useSelector((state) => state.auth);
  const location = useLocation();

  // If not logged in → send to /login
  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // If role is restricted
  if (roles && !roles.includes(role)) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
