import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Home, Users, Settings, FileText } from 'lucide-react';
import Logo from "@/assets/logo-removebg-preview.png";

const menuItems = [
  { label: 'Dashboard', to: '/admin/dashboard', icon: Home },
  { label: 'Contacts', to: '/admin/contact', icon: Users },
  { label: 'blogs', to: '/admin/blogs', icon: Settings },
];

const AdminSidebar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check token existence in localStorage on mount
    const token = localStorage.getItem('token'); // Replace 'token' with your token key if different
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    // Clear token and update state
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    // Redirect to login page
    navigate('/admin/login');
  };

  return (
    <aside className="w-64 bg-gradient-to-b from-green-300 to-green-500 text-white min-h-screen p-6 flex flex-col">
      <h1 className="text-2xl font-bold mb-10"><img 
              src={Logo} 
              alt="Logo" 
              className="w-30 h-11 object-cover group-hover:scale-105 transition-transform duration-300"
            />     </h1>

      <nav className="flex flex-col space-y-4 flex-grow">
        {menuItems.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 text-lg px-3 py-2 rounded-md transition ${
                isActive ? 'bg-green-700 font-semibold' : 'hover:bg-green-700/70'
              }`
            }
          >
            <Icon className="w-5 h-5" />
            {label}
          </NavLink>
        ))}
      </nav>

      {isLoggedIn && (
        <button
          onClick={handleLogout}
          className="mt-auto bg-red-600 hover:bg-red-700 py-2 rounded text-white font-semibold shadow-lg transition"
        >
          Logout
        </button>
      )}
    </aside>
  );
};

export default AdminSidebar;
