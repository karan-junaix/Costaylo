import { useState, ReactNode } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { id: 1, label: 'Dashboard', icon: 'ri-dashboard-line', path: '/dashboard' },
    { id: 2, label: 'My Bookings', icon: 'ri-calendar-check-line', path: '/dashboard/bookings' },
    { id: 3, label: 'Saved PGs', icon: 'ri-heart-line', path: '/dashboard/saved' },
    { id: 4, label: 'Recently Viewed', icon: 'ri-eye-line', path: '/dashboard/recent' },
    { id: 5, label: 'Profile Settings', icon: 'ri-user-settings-line', path: '/dashboard/profile' }
  ];

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src="https://static.readdy.ai/image/0be37e4d464cdcdfc96c4a625bbb732f/46c7907775a13ea6d80472ef874ec660.png"
                alt="CoStaylo Logo"
                className="h-14 w-auto object-contain"
              />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 cursor-pointer"
            >
              <i className={`${isSidebarOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl text-gray-700`}></i>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/pgs"
                className="text-gray-700 hover:text-[#c8155f] font-medium px-4 py-2 rounded-lg transition-all whitespace-nowrap cursor-pointer"
              >
                Browse PGs
              </Link>
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white px-6 py-2.5 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-[#041e40] hover:to-[#c8155f] whitespace-nowrap cursor-pointer"
              >
                <i className="ri-logout-box-line mr-2"></i>
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex pt-[88px]">
        {/* Left Sidebar */}
        <aside
          className={`fixed lg:sticky top-[88px] left-0 h-[calc(100vh-88px)] bg-white shadow-lg transition-transform duration-300 z-40 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          } w-64`}
        >
          <nav className="p-6 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setIsSidebarOpen(false)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all cursor-pointer ${
                  location.pathname === item.path
                    ? 'bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <i className={`${item.icon} text-xl w-6 h-6 flex items-center justify-center`}></i>
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Logout */}
          <div className="lg:hidden p-6 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="w-full bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-logout-box-line mr-2"></i>
              Logout
            </button>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          ></div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8 lg:ml-0">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
