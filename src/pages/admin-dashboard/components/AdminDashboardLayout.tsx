
import { useState, ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface AdminDashboardLayoutProps {
  children: ReactNode;
}

const AdminDashboardLayout = ({ children }: AdminDashboardLayoutProps) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const sidebarItems = [
    { icon: 'ri-dashboard-line', label: 'Dashboard', path: '/admin-dashboard' },
    { icon: 'ri-user-line', label: 'Users', path: '/admin-dashboard/users' },
    { icon: 'ri-building-line', label: 'PG Owners', path: '/admin-dashboard/owners' },
    { icon: 'ri-home-3-line', label: 'Properties', path: '/admin-dashboard/properties' },
    { icon: 'ri-calendar-check-line', label: 'Bookings', path: '/admin-dashboard/bookings' },
    { icon: 'ri-image-edit-line', label: 'Home Page', path: '/admin-dashboard/home-content' },
    { icon: 'ri-bar-chart-line', label: 'Analytics', path: '/admin-dashboard/analytics' },
    { icon: 'ri-settings-3-line', label: 'Settings', path: '/admin-dashboard/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side */}
            <div className="flex items-center space-x-4">
              {/* Mobile menu button */}
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden relative flex items-center justify-center w-10 h-10 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors"
              >
                <i className="ri-menu-line text-xl text-gray-700"></i>
              </button>

              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2 cursor-pointer">
                <img 
                  src="https://static.readdy.ai/image/0be37e4d464cdcdfc96c4a625bbb732f/46c7907775a13ea6d80472ef874ec660.png" 
                  alt="CoStaylo Logo" 
                  className="h-14 w-auto object-contain"
                />
              </Link>

              <div className="hidden sm:flex items-center px-3 py-1 bg-gradient-to-r from-[#c8155f] to-[#041e40] rounded-full">
                <span className="text-white text-xs font-semibold">ADMIN</span>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-2">
              {/* Profile Menu */}
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#c8155f] to-[#041e40] rounded-full flex items-center justify-center">
                    <i className="ri-shield-keyhole-line text-white text-sm"></i>
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-gray-700">Admin</span>
                  <i className="ri-arrow-down-s-line text-gray-500"></i>
                </button>

                {/* Profile Dropdown */}
                {isProfileOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setIsProfileOpen(false)}
                    ></div>
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
                      <div className="p-3 border-b border-gray-100">
                        <p className="font-medium text-gray-900">Administrator</p>
                        <p className="text-sm text-gray-500">Super Admin</p>
                      </div>
                      <div className="py-2">
                        <Link
                          to="/admin-dashboard/settings"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <i className="ri-settings-3-line mr-3 text-gray-400"></i>
                          Settings
                        </Link>
                        <button
                          onClick={() => {
                            setIsProfileOpen(false);
                            window.REACT_APP_NAVIGATE('/admin-login');
                          }}
                          className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                        >
                          <i className="ri-logout-box-line mr-3 text-gray-400"></i>
                          Logout
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white shadow-lg border-r border-gray-200 transition-transform duration-300 ease-in-out overflow-y-auto`}>
          {/* Sidebar Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#c8155f] to-[#041e40] rounded-xl flex items-center justify-center">
                <i className="ri-shield-keyhole-line text-xl text-white"></i>
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">Admin Panel</h2>
                <p className="text-sm text-gray-500">Full Control</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-2">
            {sidebarItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <i className={`${item.icon} text-xl`}></i>
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Mobile sidebar backdrop */}
        {isSidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 z-20 bg-black bg-opacity-50"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <main className="flex-1 lg:ml-0 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
