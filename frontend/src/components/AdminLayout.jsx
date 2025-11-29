import AdminSidebar from './AdminSidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      
      {/* Main Content */}

      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;