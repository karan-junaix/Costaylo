
import { Link } from 'react-router-dom';
import AdminDashboardLayout from './components/AdminDashboardLayout';

const AdminDashboardPage = () => {
  const stats = [
    { 
      label: 'Total Users', 
      value: '2,847', 
      change: '+12.5%', 
      icon: 'ri-user-line', 
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    { 
      label: 'PG Owners', 
      value: '156', 
      change: '+8.2%', 
      icon: 'ri-building-line', 
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    { 
      label: 'Total Properties', 
      value: '423', 
      change: '+15.3%', 
      icon: 'ri-home-3-line', 
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    { 
      label: 'Active Bookings', 
      value: '1,234', 
      change: '+23.1%', 
      icon: 'ri-calendar-check-line', 
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    },
    { 
      label: 'Total Revenue', 
      value: '₹45.2L', 
      change: '+18.7%', 
      icon: 'ri-money-rupee-circle-line', 
      color: 'from-[#c8155f] to-[#041e40]',
      bgColor: 'bg-pink-50',
      textColor: 'text-[#c8155f]'
    },
    { 
      label: 'Pending Approvals', 
      value: '23', 
      change: '-5.4%', 
      icon: 'ri-time-line', 
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600'
    }
  ];

  const recentActivities = [
    { id: 1, type: 'user', message: 'New user registration: Priya Sharma', time: '5 minutes ago', icon: 'ri-user-add-line', color: 'text-blue-600' },
    { id: 2, type: 'property', message: 'New property listed: Sunshine PG - Velachery', time: '15 minutes ago', icon: 'ri-home-add-line', color: 'text-green-600' },
    { id: 3, type: 'booking', message: 'Booking confirmed: Room 101 at Green Valley Hostel', time: '1 hour ago', icon: 'ri-calendar-check-line', color: 'text-orange-600' },
    { id: 4, type: 'payment', message: 'Payment received: ₹15,000 from Rahul Kumar', time: '2 hours ago', icon: 'ri-money-rupee-circle-line', color: 'text-[#c8155f]' },
    { id: 5, type: 'approval', message: 'Property approval pending: City Center PG', time: '3 hours ago', icon: 'ri-time-line', color: 'text-yellow-600' }
  ];

  const quickActions = [
    { label: 'Manage Users', icon: 'ri-user-settings-line', path: '/admin-dashboard/users', color: 'from-blue-500 to-blue-600' },
    { label: 'Manage Owners', icon: 'ri-building-line', path: '/admin-dashboard/owners', color: 'from-purple-500 to-purple-600' },
    { label: 'View Properties', icon: 'ri-home-3-line', path: '/admin-dashboard/properties', color: 'from-green-500 to-green-600' },
    { label: 'Edit Home Page', icon: 'ri-image-edit-line', path: '/admin-dashboard/home-content', color: 'from-[#c8155f] to-[#041e40]' }
  ];

  return (
    <AdminDashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome back, Administrator! Here's what's happening today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                  <i className={`${stat.icon} text-2xl ${stat.textColor}`}></i>
                </div>
                <span className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.path}
                className={`bg-gradient-to-r ${action.color} text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer`}
              >
                <i className={`${action.icon} text-3xl mb-3 block`}></i>
                <span className="font-semibold">{action.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Recent Activities</h2>
            <Link to="/admin-dashboard/analytics" className="text-sm text-[#c8155f] hover:text-[#041e40] font-medium cursor-pointer">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex-shrink-0">
                  <i className={`${activity.icon} text-xl ${activity.color}`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminDashboardLayout>
  );
};

export default AdminDashboardPage;
