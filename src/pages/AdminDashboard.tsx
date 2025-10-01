import { useEffect } from 'react';
import AdminSidebar from './AdminSidebar'; // Adjust path if needed

const AdminDashboard = () => {
  useEffect(() => {
    document.title = 'Admin Dashboard - SUSNAVA';
  }, []);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-green-100 to-green-200">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-extrabold text-green-800 mb-6">Welcome to Admin Dashboard</h1>
        <p className="text-green-700 text-lg max-w-xl">
          Manage your application settings, employees, projects, and more from this Admin Dashboard.
        </p>

        {/* Here you can add other dashboard widgets, charts, content */}
      </main>
    </div>
  );
};

export default AdminDashboard;
