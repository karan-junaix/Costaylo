import { useState } from 'react';
import OwnerDashboardLayout from '../components/OwnerDashboardLayout';

const RevenuePage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('current-month');
  const [selectedProperty, setSelectedProperty] = useState('all');

  const revenueStats = [
    { 
      id: 1, 
      label: 'Total Revenue', 
      value: '₹8.47L', 
      change: '+12.5%', 
      trend: 'up', 
      icon: 'ri-money-rupee-circle-line', 
      color: 'from-green-500 to-green-600' 
    },
    { 
      id: 2, 
      label: 'Monthly Recurring', 
      value: '₹6.32L', 
      change: '+8.3%', 
      trend: 'up', 
      icon: 'ri-repeat-line', 
      color: 'from-[#c8155f] to-[#041e40]' 
    },
    { 
      id: 3, 
      label: 'Security Deposits', 
      value: '₹1.85L', 
      change: '+15.2%', 
      trend: 'up', 
      icon: 'ri-shield-check-line', 
      color: 'from-orange-500 to-orange-600' 
    },
    { 
      id: 4, 
      label: 'Pending Payments', 
      value: '₹30K', 
      change: '-5.8%', 
      trend: 'down', 
      icon: 'ri-time-line', 
      color: 'from-red-500 to-red-600' 
    }
  ];

  const monthlyRevenue = [
    { month: 'Jan 2024', revenue: 785000, bookings: 42, occupancy: 88 },
    { month: 'Feb 2024', revenue: 812000, bookings: 45, occupancy: 92 },
    { month: 'Mar 2024', revenue: 798000, bookings: 44, occupancy: 89 },
    { month: 'Apr 2024', revenue: 834000, bookings: 47, occupancy: 94 },
    { month: 'May 2024', revenue: 847000, bookings: 49, occupancy: 96 },
    { month: 'Jun 2024', revenue: 863000, bookings: 51, occupancy: 98 }
  ];

  const propertyRevenue = [
    {
      id: 1,
      name: 'Sunshine PG - Velachery',
      location: 'Velachery, Chennai',
      monthlyRevenue: 216000,
      occupancy: '18/24',
      occupancyRate: 75,
      totalRooms: 24,
      avgRent: 12000,
      image: 'https://readdy.ai/api/search-image?query=Modern%20comfortable%20PG%20accommodation%20building%20exterior%20with%20clean%20white%20walls%2C%20well-maintained%20entrance%2C%20professional%20photography%2C%20bright%20daylight%2C%20simple%20background&width=300&height=200&seq=rev-prop-001&orientation=landscape'
    },
    {
      id: 2,
      name: 'Green Valley Hostel - Adyar',
      location: 'Adyar, Chennai',
      monthlyRevenue: 396000,
      occupancy: '22/30',
      occupancyRate: 73,
      totalRooms: 30,
      avgRent: 18000,
      image: 'https://readdy.ai/api/search-image?query=Contemporary%20hostel%20building%20with%20green%20surroundings%2C%20modern%20architecture%2C%20clean%20facade%2C%20professional%20photography%2C%20natural%20lighting%2C%20simple%20background&width=300&height=200&seq=rev-prop-002&orientation=landscape'
    },
    {
      id: 3,
      name: 'City Center PG - T Nagar',
      location: 'T Nagar, Chennai',
      monthlyRevenue: 135000,
      occupancy: '15/20',
      occupancyRate: 75,
      totalRooms: 20,
      avgRent: 9000,
      image: 'https://readdy.ai/api/search-image?query=Urban%20PG%20accommodation%20in%20city%20center%2C%20modern%20building%20exterior%2C%20well-lit%20entrance%2C%20professional%20photography%2C%20clear%20sky%2C%20simple%20background&width=300&height=200&seq=rev-prop-003&orientation=landscape'
    }
  ];

  const recentTransactions = [
    {
      id: 1,
      tenant: 'Priya Sharma',
      property: 'Sunshine PG - Velachery',
      amount: 12000,
      type: 'Monthly Rent',
      status: 'Completed',
      date: '2024-01-15',
      paymentMethod: 'UPI'
    },
    {
      id: 2,
      tenant: 'Rahul Kumar',
      property: 'Green Valley Hostel - Adyar',
      amount: 18000,
      type: 'Monthly Rent',
      status: 'Pending',
      date: '2024-01-14',
      paymentMethod: 'Bank Transfer'
    },
    {
      id: 3,
      tenant: 'Anjali Reddy',
      property: 'City Center PG - T Nagar',
      amount: 15000,
      type: 'Security Deposit',
      status: 'Completed',
      date: '2024-01-13',
      paymentMethod: 'Cash'
    },
    {
      id: 4,
      tenant: 'Vikram Singh',
      property: 'Sunshine PG - Velachery',
      amount: 14000,
      type: 'Monthly Rent',
      status: 'Completed',
      date: '2024-01-12',
      paymentMethod: 'UPI'
    },
    {
      id: 5,
      tenant: 'Sneha Patel',
      property: 'Green Valley Hostel - Adyar',
      amount: 16000,
      type: 'Monthly Rent',
      status: 'Failed',
      date: '2024-01-11',
      paymentMethod: 'Credit Card'
    }
  ];

  const formatCurrency = (amount: number) => {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    }
    return `₹${amount.toLocaleString()}`;
  };

  return (
    <OwnerDashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Revenue Analytics</h1>
            <p className="text-gray-600">Track your property income and financial performance</p>
          </div>
          <div className="flex items-center space-x-3">
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-[#c8155f] bg-white text-sm"
            >
              <option value="current-month">Current Month</option>
              <option value="last-month">Last Month</option>
              <option value="last-3-months">Last 3 Months</option>
              <option value="last-6-months">Last 6 Months</option>
              <option value="current-year">Current Year</option>
            </select>
            <button className="bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white px-4 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer text-sm">
              <i className="ri-download-line mr-2"></i>
              Export Report
            </button>
          </div>
        </div>

        {/* Revenue Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {revenueStats.map((stat) => (
            <div key={stat.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${stat.color} rounded-lg`}>
                  <i className={`${stat.icon} text-2xl text-white`}></i>
                </div>
                <div className={`flex items-center space-x-1 text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  <i className={`${stat.trend === 'up' ? 'ri-arrow-up-line' : 'ri-arrow-down-line'}`}></i>
                  <span>{stat.change}</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Revenue Trend Chart */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Revenue Trend</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-gradient-to-r from-[#c8155f] to-[#041e40] rounded-full"></div>
                <span>Revenue</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Occupancy</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {monthlyRevenue.map((data, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="text-sm font-medium text-gray-900 min-w-[80px]">{data.month}</div>
                  <div className="flex items-center space-x-6">
                    <div>
                      <div className="text-xs text-gray-500">Revenue</div>
                      <div className="text-lg font-bold text-gray-900">{formatCurrency(data.revenue)}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Bookings</div>
                      <div className="text-lg font-bold text-gray-900">{data.bookings}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Occupancy</div>
                      <div className="text-lg font-bold text-gray-900">{data.occupancy}%</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#c8155f] to-[#041e40] rounded-full transition-all duration-500"
                      style={{ width: `${(data.revenue / 900000) * 100}%` }}
                    ></div>
                  </div>
                  <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500 rounded-full transition-all duration-500"
                      style={{ width: `${data.occupancy}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Property-wise Revenue */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Property Performance</h2>
              <select 
                value={selectedProperty}
                onChange={(e) => setSelectedProperty(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-[#c8155f] bg-white text-sm"
              >
                <option value="all">All Properties</option>
                <option value="sunshine">Sunshine PG</option>
                <option value="green-valley">Green Valley</option>
                <option value="city-center">City Center</option>
              </select>
            </div>
            <div className="space-y-4">
              {propertyRevenue.map((property) => (
                <div key={property.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={property.image} 
                        alt={property.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-1">{property.name}</h3>
                      <p className="text-sm text-gray-600 mb-2 flex items-center">
                        <i className="ri-map-pin-line mr-1"></i>
                        {property.location}
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-500">Monthly Revenue</div>
                          <div className="text-lg font-bold text-[#c8155f]">{formatCurrency(property.monthlyRevenue)}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-500">Occupancy</div>
                          <div className="text-sm font-semibold text-gray-900">{property.occupancy}</div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                          <span>Occupancy Rate</span>
                          <span>{property.occupancyRate}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-[#c8155f] to-[#041e40] rounded-full transition-all duration-500"
                            style={{ width: `${property.occupancyRate}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Transactions</h2>
              <button className="text-[#c8155f] hover:text-[#041e40] font-medium text-sm transition-colors cursor-pointer">
                View All →
              </button>
            </div>
            <div className="space-y-3">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#c8155f] to-[#041e40] rounded-full text-white font-semibold text-sm">
                      {transaction.tenant.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{transaction.tenant}</div>
                      <div className="text-xs text-gray-600">{transaction.type}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900 text-sm">₹{transaction.amount.toLocaleString()}</div>
                    <div className={`text-xs font-medium ${
                      transaction.status === 'Completed' ? 'text-green-600' :
                      transaction.status === 'Pending' ? 'text-orange-600' : 'text-red-600'
                    }`}>
                      {transaction.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Methods Summary */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Methods Distribution</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-3">
                <i className="ri-smartphone-line text-2xl text-white"></i>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">45%</div>
              <div className="text-sm text-gray-600">UPI Payments</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-3">
                <i className="ri-bank-line text-2xl text-white"></i>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">30%</div>
              <div className="text-sm text-gray-600">Bank Transfer</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mx-auto mb-3">
                <i className="ri-money-rupee-circle-line text-2xl text-white"></i>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">20%</div>
              <div className="text-sm text-gray-600">Cash Payments</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-3">
                <i className="ri-credit-card-line text-2xl text-white"></i>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">5%</div>
              <div className="text-sm text-gray-600">Credit Cards</div>
            </div>
          </div>
        </div>
      </div>
    </OwnerDashboardLayout>
  );
};

export default RevenuePage;