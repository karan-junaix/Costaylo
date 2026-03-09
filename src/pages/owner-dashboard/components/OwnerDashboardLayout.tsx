import { useState, ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface OwnerDashboardLayoutProps {
  children: ReactNode;
}

const OwnerDashboardLayout = ({ children }: OwnerDashboardLayoutProps) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      type: 'booking',
      title: 'New Booking Request',
      message: 'Rahul Kumar requested booking for Room 101 in Sunshine PG',
      time: '5 minutes ago',
      unread: true,
      icon: 'ri-calendar-check-line',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 2,
      type: 'payment',
      title: 'Payment Received',
      message: '₹15,000 rent payment received from Priya Sharma',
      time: '1 hour ago',
      unread: true,
      icon: 'ri-money-rupee-circle-line',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 3,
      type: 'inquiry',
      title: 'New Property Inquiry',
      message: 'Someone inquired about Green Valley Hostel availability',
      time: '2 hours ago',
      unread: false,
      icon: 'ri-question-answer-line',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 4,
      type: 'maintenance',
      title: 'Maintenance Request',
      message: 'AC repair request from Room 205, City Center PG',
      time: '4 hours ago',
      unread: false,
      icon: 'ri-tools-line',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      id: 5,
      type: 'review',
      title: 'New Review',
      message: 'Amit Singh left a 5-star review for Sunshine PG',
      time: '6 hours ago',
      unread: false,
      icon: 'ri-star-line',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  const handleMarkAsRead = (id: number) => {
    // In real app, update notification status via API
    console.log('Mark notification as read:', id);
  };

  const handleMarkAllAsRead = () => {
    // In real app, mark all notifications as read via API
    console.log('Mark all notifications as read');
    setIsNotificationOpen(false);
  };

  const sidebarItems = [
    { icon: 'ri-dashboard-line', label: 'Dashboard', path: '/owner-dashboard' },
    { icon: 'ri-home-3-line', label: 'Properties', path: '/owner-dashboard/properties' },
    { icon: 'ri-calendar-check-line', label: 'Bookings', path: '/owner-dashboard/bookings' },
    { icon: 'ri-question-answer-line', label: 'Inquiries', path: '/owner-dashboard/inquiries' },
    { icon: 'ri-bar-chart-line', label: 'Analytics', path: '/owner-dashboard/revenue' },
    { icon: 'ri-add-circle-line', label: 'Add Property', path: '/owner-dashboard/add-property' },
    { icon: 'ri-settings-3-line', label: 'Profile', path: '/owner-dashboard/settings' },
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
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-2">
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                  className="relative flex items-center justify-center w-10 h-10 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <i className="ri-notification-3-line text-xl text-gray-700"></i>
                  {unreadCount > 0 && (
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  )}
                </button>

                {/* Notification Dropdown */}
                {isNotificationOpen && (
                  <>
                    {/* Backdrop */}
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setIsNotificationOpen(false)}
                    ></div>
                    
                    {/* Dropdown */}
                    <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-lg shadow-lg border border-gray-200 z-20 max-h-96 overflow-hidden">
                      {/* Header */}
                      <div className="flex items-center justify-between p-4 border-b border-gray-100">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-gray-900">Notifications</h3>
                          {unreadCount > 0 && (
                            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                              {unreadCount}
                            </span>
                          )}
                        </div>
                        {unreadCount > 0 && (
                          <button
                            onClick={handleMarkAllAsRead}
                            className="text-sm text-[#c8155f] hover:text-[#041e40] font-medium cursor-pointer"
                          >
                            Mark all as read
                          </button>
                        )}
                      </div>

                      {/* Notifications List */}
                      <div className="max-h-80 overflow-y-auto">
                        {notifications.length > 0 ? (
                          notifications.map((notification) => (
                            <div
                              key={notification.id}
                              className={`p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer ${
                                notification.unread ? 'bg-blue-50/30' : ''
                              }`}
                              onClick={() => handleMarkAsRead(notification.id)}
                            >
                              <div className="flex items-start space-x-3">
                                <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${notification.bgColor} flex items-center justify-center`}>
                                  <i className={`${notification.icon} text-lg ${notification.color}`}></i>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-start justify-between">
                                    <p className={`text-sm font-medium ${notification.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                                      {notification.title}
                                    </p>
                                    {notification.unread && (
                                      <div className="w-2 h-2 bg-[#c8155f] rounded-full flex-shrink-0 mt-2"></div>
                                    )}
                                  </div>
                                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                    {notification.message}
                                  </p>
                                  <p className="text-xs text-gray-500 mt-2">
                                    {notification.time}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="p-8 text-center">
                            <i className="ri-notification-off-line text-4xl text-gray-300 mb-3"></i>
                            <p className="text-gray-500">No notifications yet</p>
                          </div>
                        )}
                      </div>

                      {/* Footer */}
                      {notifications.length > 0 && (
                        <div className="p-3 border-t border-gray-100 bg-gray-50">
                          <Link
                            to="/owner-dashboard/notifications"
                            className="block text-center text-sm text-[#c8155f] hover:text-[#041e40] font-medium cursor-pointer"
                            onClick={() => setIsNotificationOpen(false)}
                          >
                            View all notifications
                          </Link>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>

              {/* Profile Menu */}
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#c8155f] to-[#041e40] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">RS</span>
                  </div>
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
                        <p className="font-medium text-gray-900">Rajesh Sharma</p>
                        <p className="text-sm text-gray-500">Property Owner</p>
                      </div>
                      <div className="py-2">
                        <Link
                          to="/owner-dashboard/settings"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <i className="ri-settings-3-line mr-3 text-gray-400"></i>
                          Settings
                        </Link>
                        <Link
                          to="/help"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <i className="ri-question-line mr-3 text-gray-400"></i>
                          Help & Support
                        </Link>
                        <button
                          onClick={() => {
                            setIsProfileOpen(false);
                            window.REACT_APP_NAVIGATE('/');
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
                <i className="ri-building-line text-xl text-white"></i>
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">Owner Panel</h2>
                <p className="text-sm text-gray-500">Manage Properties</p>
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

          {/* Sidebar Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#c8155f] to-[#041e40] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">RS</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Rajesh Sharma</p>
                <p className="text-xs text-gray-500">Premium Owner</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile sidebar backdrop */}
        {isSidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 z-20 bg-black bg-opacity-50"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          {children}
        </main>
      </div>
    </div>
  );
};

export default OwnerDashboardLayout;
