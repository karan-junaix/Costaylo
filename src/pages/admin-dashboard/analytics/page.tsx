import { useState } from 'react';
import AdminDashboardLayout from '../components/AdminDashboardLayout';

const AdminAnalyticsPage = () => {
  const [timeRange, setTimeRange] = useState('7days');

  const overviewStats = [
    { label: 'Total Revenue', value: '₹45.2L', change: '+18.7%', icon: 'ri-money-rupee-circle-line', color: 'text-green-600' },
    { label: 'Total Bookings', value: '1,234', change: '+23.1%', icon: 'ri-calendar-check-line', color: 'text-blue-600' },
    { label: 'New Users', value: '847', change: '+12.5%', icon: 'ri-user-add-line', color: 'text-purple-600' },
    { label: 'Active Properties', value: '398', change: '+8.3%', icon: 'ri-home-3-line', color: 'text-orange-600' }
  ];

  const revenueData = [
    { month: 'Jan', revenue: 3.2, bookings: 145 },
    { month: 'Feb', revenue: 3.8, bookings: 167 },
    { month: 'Mar', revenue: 4.1, bookings: 189 },
    { month: 'Apr', revenue: 3.9, bookings: 178 },
    { month: 'May', revenue: 4.5, bookings: 203 },
    { month: 'Jun', revenue: 5.2, bookings: 234 }
  ];

  const topProperties = [
    { name: 'Green Valley Hostel', location: 'Velachery', bookings: 89, revenue: '₹4.2L', rating: 4.8 },
    { name: 'Sunshine PG', location: 'Adyar', bookings: 76, revenue: '₹3.8L', rating: 4.7 },
    { name: 'City Center PG', location: 'T Nagar', bookings: 68, revenue: '₹3.5L', rating: 4.6 },
    { name: 'Comfort Stay', location: 'Anna Nagar', bookings: 62, revenue: '₹3.2L', rating: 4.5 },
    { name: 'Royal Residency', location: 'Porur', bookings: 58, revenue: '₹2.9L', rating: 4.4 }
  ];

  const topOwners = [
    { name: 'Rajesh Kumar', properties: 8, bookings: 234, revenue: '₹12.5L', rating: 4.8 },
    { name: 'Priya Sharma', properties: 6, bookings: 189, revenue: '₹9.8L', rating: 4.7 },
    { name: 'Amit Patel', properties: 5, bookings: 156, revenue: '₹8.2L', rating: 4.6 },
    { name: 'Sneha Reddy', properties: 4, bookings: 134, revenue: '₹7.1L', rating: 4.5 },
    { name: 'Vikram Singh', properties: 4, bookings: 128, revenue: '₹6.8L', rating: 4.4 }
  ];

  const cityPerformance = [
    { city: 'Chennai', properties: 156, bookings: 567, revenue: '₹18.5L', growth: '+24%' },
    { city: 'Bangalore', properties: 134, bookings: 489, revenue: '₹15.8L', growth: '+19%' },
    { city: 'Mumbai', properties: 98, bookings: 356, revenue: '₹12.3L', growth: '+15%' },
    { city: 'Delhi', properties: 87, bookings: 312, revenue: '₹10.7L', growth: '+12%' },
    { city: 'Hyderabad', properties: 76, bookings: 278, revenue: '₹9.2L', growth: '+18%' }
  ];

  const maxRevenue = Math.max(...revenueData.map(d => d.revenue));

  return (
    <AdminDashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics</h1>
            <p className="text-gray-600">Comprehensive insights and performance metrics</p>
          </div>
          <div className="flex items-center space-x-2">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c8155f] cursor-pointer"
            >
              <option value="7days">Last 7 Days</option>
              <option value="30days">Last 30 Days</option>
              <option value="3months">Last 3 Months</option>
              <option value="6months">Last 6 Months</option>
              <option value="1year">Last Year</option>
            </select>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {overviewStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <i className={`${stat.icon} text-3xl ${stat.color}`}></i>
                <span className="text-sm font-semibold text-green-600">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Revenue Chart */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Revenue Trend</h2>
          <div className="space-y-4">
            {revenueData.map((data, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-700">{data.month}</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-600">{data.bookings} bookings</span>
                    <span className="font-semibold text-gray-900">₹{data.revenue}L</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-[#c8155f] to-[#041e40] h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(data.revenue / maxRevenue) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Properties & Owners */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Properties */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Top Performing Properties</h2>
            <div className="space-y-4">
              {topProperties.map((property, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#c8155f] to-[#041e40] rounded-lg flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{property.name}</h3>
                      <p className="text-sm text-gray-600">{property.location} • {property.bookings} bookings</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{property.revenue}</p>
                    <div className="flex items-center space-x-1">
                      <i className="ri-star-fill text-yellow-500 text-sm"></i>
                      <span className="text-sm text-gray-600">{property.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Owners */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Top Performing Owners</h2>
            <div className="space-y-4">
              {topOwners.map((owner, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{owner.name}</h3>
                      <p className="text-sm text-gray-600">{owner.properties} properties • {owner.bookings} bookings</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{owner.revenue}</p>
                    <div className="flex items-center space-x-1">
                      <i className="ri-star-fill text-yellow-500 text-sm"></i>
                      <span className="text-sm text-gray-600">{owner.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* City Performance */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">City-wise Performance</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">City</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Properties</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Bookings</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Revenue</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Growth</th>
                </tr>
              </thead>
              <tbody>
                {cityPerformance.map((city, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <i className="ri-map-pin-line text-[#c8155f]"></i>
                        <span className="font-medium text-gray-900">{city.city}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-700">{city.properties}</td>
                    <td className="py-4 px-4 text-gray-700">{city.bookings}</td>
                    <td className="py-4 px-4 font-semibold text-gray-900">{city.revenue}</td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                        {city.growth}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminDashboardLayout>
  );
};

export default AdminAnalyticsPage;
