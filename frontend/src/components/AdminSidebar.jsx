import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Users,
  UserCheck,
  UserPlus,       // Added for Manager menu
  Shield,         // Added for HR menu
  Building2,
  Calendar,
  Clock,
  DollarSign,
  FolderKanban,   // Added for Projects & Teams
  BarChart3,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Briefcase,    
} from 'lucide-react';

import { logout } from '../features/auth/authSlice';

const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');
  const [expandedItems, setExpandedItems] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

const menuItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    path: '/admin',
    color: 'text-blue-500'
  },
  {
  id: 'managers',
  label: 'Manager',
  icon: UserPlus,
  color: 'text-teal-500',
  subItems: [
    { label: 'All Managers', path: '/admin/managers' },
    { label: 'Add Manager', path: '/admin/managers/add' },
    { label: 'Manager Profiles', path: '/admin/managers/profiles' }
  ]
},
  {
    id: 'hr',
    label: 'HR Management',
    icon: Shield,
    color: 'text-purple-600',
    subItems: [
      { label: 'All HRs', path: '/admin/hr' },
      { label: 'HR Teams', path: '/admin/hr/teams' }
    ]
  },
  // {
  //   id: 'departments',
  //   label: 'Departments',
  //   icon: Building2,
  //   color: 'text-indigo-500',
  //   subItems: [
  //     { label: 'All Departments', path: '/admin/departments' },
  //     { label: 'Add Department', path: '/admin/departments/add' },
  //     { label: 'Department Reports', path: '/admin/departments/reports' }
  //   ]
  // },
  {
    id: 'attendance',
    label: 'Attendance',
    icon: Clock,
    color: 'text-purple-500',
    subItems: [
      { label: 'View Attendance', path: '/admin/attendance' },
      { label: 'Time Tracking', path: '/admin/attendance/tracking' },
      { label: 'Attendance Reports', path: '/admin/attendance/reports' }
    ]
  },
  {
    id: 'leave',
    label: 'Leave Management',
    icon: Calendar,
    color: 'text-pink-500',
    subItems: [
      { label: 'Leave Requests', path: '/admin/leave' },
      { label: 'Leave Policies', path: '/admin/leave/policies' },
      { label: 'Leave Reports', path: '/admin/leave/reports' }
    ]
  },
  {
    id: 'payroll',
    label: 'Payroll',
    icon: DollarSign,
    color: 'text-yellow-500',
    subItems: [
      { label: 'Salary Management', path: '/admin/payroll' },
      { label: 'Salary Reports', path: '/admin/payroll/reports' },
      { label: 'Benefits', path: '/admin/payroll/benefits' }
    ]
  },
  {
    id: 'projects',
    label: 'Projects & Teams',
    icon: FolderKanban,
    color: 'text-cyan-500',
    subItems: [
      { label: 'All Projects', path: '/admin/projects' },
      { label: 'Teams', path: '/admin/teams' }
    ]
  },
  {
    id: 'reports',
    label: 'Reports & Analytics',
    icon: BarChart3,
    color: 'text-orange-500',
    subItems: [
      { label: 'HR Reports', path: '/admin/reports/hr' },
      { label: 'Performance Reports', path: '/admin/reports/performance' },
      { label: 'Payroll Reports', path: '/admin/reports/payroll' },
      { label: 'Custom Reports', path: '/admin/reports/custom' }
    ]
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: Bell,
    color: 'text-red-500',
    path: '/admin/notifications'
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: Settings,
    color: 'text-gray-500',
    subItems: [
      { label: 'System Settings', path: '/admin/settings/system' },
      { label: 'User Permissions', path: '/admin/settings/permissions' },
      { label: 'Company Profile', path: '/admin/settings/company' }
    ]
  }
];


  const handleItemClick = (item) => {
    if (item.path) {
      setActiveItem(item.id);
      navigate(item.path);
    } else if (item.subItems) {
      setExpandedItems(prev => ({
        ...prev,
        [item.id]: !prev[item.id]
      }));
    }
  };

  const handleSubItemClick = (subItem) => {
    navigate(subItem.path);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <motion.div
      initial={{ width: 280 }}
      animate={{ width: isCollapsed ? 80 : 280 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="h-screen bg-white border-r border-gray-200 shadow-lg flex flex-col"
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="flex items-center space-x-3"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-800">HRM Admin</h1>
                  <p className="text-xs text-gray-500">Management Portal</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isCollapsed ? (
              <Menu className="w-5 h-5 text-gray-600" />
            ) : (
              <X className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeItem === item.id;
          const isExpanded = expandedItems[item.id];

          return (
            <div key={item.id}>
              <motion.button
                onClick={() => handleItemClick(item)}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-500'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3">
                  <IconComponent
                    className={`w-5 h-5 ${isActive ? 'text-blue-500' : item.color} transition-colors`}
                  />
                  <AnimatePresence>
                    {!isCollapsed && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="font-medium"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {!isCollapsed && item.subItems && (
                  <motion.div
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </motion.div>
                )}
              </motion.button>

              {/* Sub Items */}
              <AnimatePresence>
                {!isCollapsed && isExpanded && item.subItems && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="ml-8 mt-2 space-y-1">
                      {item.subItems.map((subItem, index) => (
                        <motion.button
                          key={index}
                          onClick={() => handleSubItemClick(subItem)}
                          className="w-full text-left p-2 rounded-md text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          {subItem.label}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <motion.button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 p-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <LogOut className="w-5 h-5" />
          <AnimatePresence>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-medium"
              >
                Logout
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default AdminSidebar;

