import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminHome from "./pages/admin/AdminHome";
import ManagerHome from "./pages/manager/ManagerHome";
import HrHome from "./pages/hr/HrHome";
import EmployeeHome from "./pages/employee/EmployeeHome";
import PrivateRoute from "./utils/PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            <PrivateRoute roles={["admin"]}>
              <AdminHome />
            </PrivateRoute>
          }
        />

        {/* Manager */}
        <Route
          path="/manager"
          element={
            <PrivateRoute roles={["manager"]}>
              <ManagerHome />
            </PrivateRoute>
          }
        />

        {/* HR */}
        <Route
          path="/hr"
          element={
            <PrivateRoute roles={["hr"]}>
              <HrHome />
            </PrivateRoute>
          }
        />

        {/* Employee */}
        <Route
          path="/employee"
          element={
            <PrivateRoute roles={["employee"]}>
              <EmployeeHome />
            </PrivateRoute>
          }
        />

        {/* Catch-all → go back to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
