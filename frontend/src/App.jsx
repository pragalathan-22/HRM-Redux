import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminHome from "./pages/admin/AdminHome";
import ManagerHome from "./pages/manager/ManagerHome";
import HrHome from "./pages/hr/HrHome";
import EmployeeHome from "./pages/employee/EmployeeHome";
import PrivateRoute from "./utils/PrivateRoute";
import AdminLayout from "./components/AdminLayout";
import AllManagers from "./pages/admin/managers/AllManagers";
import AddManager from "./pages/admin/managers/AddManager";
import ManagerProfiles from "./pages/admin/managers/ManagerProfiles";
import AllHRs from "./pages/admin/hr/AllHRs";  
import HRTeams from "./pages/admin/hr/HRTeams";
import AttendanceReports from "./pages/admin/attendence/AttendanceReports";
import TimeTracking from "./pages/admin/attendence/TimeTracking";
import LeaveRequest from "./pages/admin/Leavemanagement/leaveRequest";
import LeavePolicies from "./pages/admin/Leavemanagement/leavePolicies";
import LeaveReports from "./pages/admin/Leavemanagement/leaveReports";
import SalaryManagement from "./pages/admin/payroll/salaryManagement";
import SalaryReports from "./pages/admin/payroll/salaryReports";
import Benefits from "./pages/admin/payroll/Benefits";
import AllProjects from "./pages/admin/Projects&teams/AllProjects";
import Teams from "./pages/admin/Projects&teams/Teams";
import HRReports from "./pages/admin/Reports & Analytics/HRReports";
import PerformanceReports from "./pages/admin/Reports & Analytics/PerformanceReports";
import PayrollReports from "./pages/admin/Reports & Analytics/PayrollReports";
import CustomReports from "./pages/admin/Reports & Analytics/CustomReports";
import Notifications from "./pages/admin/Notifications/notifications";
import SystemSettings from "./pages/admin/Settings/SystemSettings";
import UserPermissions from "./pages/admin/Settings/UserPermissions";
import CompanyProfile from "./pages/admin/Settings/CompanyProfile";


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
              <AdminLayout>
                <AdminHome />
              </AdminLayout>
            </PrivateRoute>
          }
        />
        <Route 
          path="/admin/managers" 
          element={
            <PrivateRoute roles={["admin"]}>
              <AdminLayout>
                <AllManagers />
              </AdminLayout>
            </PrivateRoute>
          } 
        />
        <Route 
          path="/admin/managers/add" 
          element={
            <PrivateRoute roles={["admin"]}>
              <AdminLayout>
                <AddManager />
              </AdminLayout>
            </PrivateRoute>
          } 
        />
        <Route 
          path="/admin/managers/profiles" 
          element={
            <PrivateRoute roles={["admin"]}>
              <AdminLayout>
                <ManagerProfiles />
              </AdminLayout>
            </PrivateRoute>
          } 
        />
        <Route 
          path="/admin/hr"
          element={
            <PrivateRoute roles={["admin"]}>
              <AdminLayout>
                <AllHRs />
              </AdminLayout>
            </PrivateRoute>
          }
        />
 
        <Route
          path='/admin/hr/teams'
          element={
            <PrivateRoute roles={["admin"]}>
              <AdminLayout>
                <HRTeams />
              </AdminLayout>
            </PrivateRoute>
          }
        />

        <Route
          path='/admin/attendance'
          element={
            <PrivateRoute roles={["admin"]}>
              <AdminLayout>
                <AttendanceReports />
              </AdminLayout>
            </PrivateRoute>
          }
        />

        <Route
          path='/admin/attendance/tracking'
          element={
            <PrivateRoute roles={["admin"]}>
              <AdminLayout>
                <TimeTracking />
              </AdminLayout>
            </PrivateRoute>
          }
        />

        <Route
          path='/admin/attendance/reports'
          element={
            <PrivateRoute roles={["admin"]}>
              <AdminLayout>
                <AttendanceReports />
              </AdminLayout>
            </PrivateRoute>
          }
        />

        <Route
          path='/admin/leave'
          element={
            <PrivateRoute roles={["admin"]}>
              <AdminLayout>
                <LeaveRequest/>
              </AdminLayout>
            </PrivateRoute>
          }
        />

        <Route
          path='/admin/leave/policies'
          element={
            <PrivateRoute roles={["admin"]}>
              <AdminLayout>
                <LeavePolicies/>
              </AdminLayout>
            </PrivateRoute>
          }
        />

        <Route
          path='/admin/leave/reports'
          element={
            <PrivateRoute roles={["admin"]}>
              <AdminLayout>
                <LeaveReports/>
              </AdminLayout>
            </PrivateRoute>
          }
        />

        <Route
          path='/admin/payroll'
          element={
            <PrivateRoute roles={["admin"]}>
              <AdminLayout>
                <SalaryManagement />
              </AdminLayout>
            </PrivateRoute>
          }
        />

        <Route
          path='/admin/payroll/reports'
          element={
            <PrivateRoute roles={["admin"]}>
              <AdminLayout>
                <SalaryReports />
              </AdminLayout>
            </PrivateRoute>
          }
        />

        <Route
          path='/admin/payroll/benefits'
          element={
            <PrivateRoute roles={["admin"]}>
              <AdminLayout>
                <Benefits />
              </AdminLayout>
            </PrivateRoute>
          }
        />

        <Route
          path='/admin/projects'
          element={
            <PrivateRoute roles={["admin"]}>
              <AdminLayout>
                <AllProjects />
              </AdminLayout>
            </PrivateRoute>
          }
        />

        <Route
          path='/admin/teams'
          element={
            <PrivateRoute roles={["admin"]}>
              <AdminLayout>
                <Teams />
              </AdminLayout>
            </PrivateRoute>
          }
        />

        <Route
          path='/admin/reports/hr'
          element={
            <PrivateRoute roles={["admin"]}>
              <AdminLayout>
                <HRReports />
              </AdminLayout>
            </PrivateRoute>
          }
        />

        <Route
          path='/admin/reports/performance'
          element={
            <PrivateRoute roles={["admin"]}>
              <AdminLayout>
                <PerformanceReports />
              </AdminLayout>
            </PrivateRoute>
          }
        />

        <Route
          path='/admin/reports/payroll'
          element={
            <PrivateRoute roles={["admin"]}>
              <AdminLayout>
                <PayrollReports />
              </AdminLayout>
            </PrivateRoute>
          }
        />

        <Route
          path='/admin/reports/custom' 
          element={
            <PrivateRoute roles={["admin"]}>
              <AdminLayout>
                <CustomReports />
              </AdminLayout>
            </PrivateRoute>
          }
        />

        <Route
          path='/admin/notifications'
          element={
            <PrivateRoute roles={["admin"]}>
              <AdminLayout>
                <Notifications/>
              </AdminLayout>
            </PrivateRoute>
          }
        />

        <Route
          path='/admin/settings/system'
          element={
            <PrivateRoute roles={["admin"]}>
              <AdminLayout>
                <SystemSettings/>
              </AdminLayout>
            </PrivateRoute>
          }
        />

        <Route
          path='/admin/settings/permissions'
          element={
            <PrivateRoute roles={["admin"]}>
              <AdminLayout>
                <UserPermissions/>
              </AdminLayout>
            </PrivateRoute>
          }
        />

        <Route
          path='/admin/settings/company'
          element={
            <PrivateRoute roles={["admin"]}>
              <AdminLayout>
                <CompanyProfile/>
              </AdminLayout>
            </PrivateRoute>
          }
        />

{/* ---------------------------------------------------------------------------------------------- */}
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
