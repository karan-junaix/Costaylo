import OwnerDashboardLayout from './components/OwnerDashboardLayout';

const OwnerDashboardPage = () => {
  const stats = [
    { id: 1, label: 'Total Properties', value: '12', icon: 'ri-building-line', color: 'from-blue-500 to-blue-600' },
    { id: 2, label: 'Active Bookings', value: '47', icon: 'ri-calendar-check-line', color: 'from-green-500 to-green-600' },
    { id: 3, label: 'Pending Inquiries', value: '23', icon: 'ri-question-answer-line', color: 'from-orange-500 to-orange-600' },
    { id: 4, label: 'Monthly Revenue', value: '₹5.2L', icon: 'ri-money-rupee-circle-line', color: 'from-[#c8155f] to-[#041e40]' }
  ];

  const recentBookings = [
    { id: 1, tenant: 'Priya Sharma', property: 'Sunshine PG - Velachery', room: 'Double Sharing', amount: '₹12,000', status: 'Confirmed', date: '2024-01-15' },
    { id: 2, tenant: 'Rahul Kumar', property: 'Green Valley Hostel - Adyar', room: 'Single Room', amount: '₹18,000', status: 'Pending', date: '2024-01-14' },
    { id: 3, tenant: 'Anjali Reddy', property: 'City Center PG - T Nagar', room: 'Triple Sharing', amount: '₹9,000', status: 'Confirmed', date: '2024-01-13' },
    { id: 4, tenant: 'Vikram Singh', property: 'Lakeside Residency - OMR', room: 'Double Sharing', amount: '₹14,000', status: 'Confirmed', date: '2024-01-12' },
    { id: 5, tenant: 'Sneha Patel', property: 'Metro Stay - Anna Nagar', room: 'Single Room', amount: '₹16,000', status: 'Pending', date: '2024-01-11' }
  ];

  const properties = [
    { 
      id: 1, 
      name: 'Sunshine PG - Velachery', 
      location: 'Velachery, Chennai',
      occupancy: '18/24',
      revenue: '₹2.16L',
      rating: 4.5,
      image: 'https://readdy.ai/api/search-image?query=Modern%20comfortable%20PG%20accommodation%20building%20exterior%20with%20clean%20white%20walls%2C%20well-maintained%20entrance%2C%20professional%20photography%2C%20bright%20daylight%2C%20simple%20background&width=400&height=300&seq=owner-prop-001&orientation=landscape'
    },
    { 
      id: 2, 
      name: 'Green Valley Hostel - Adyar', 
      location: 'Adyar, Chennai',
      occupancy: '22/30',
      revenue: '₹3.96L',
      rating: 4.7,
      image: 'https://readdy.ai/api/search-image?query=Contemporary%20hostel%20building%20with%20green%20surroundings%2C%20modern%20architecture%2C%20clean%20facade%2C%20professional%20photography%2C%20natural%20lighting%2C%20simple%20background&width=400&height=300&seq=owner-prop-002&orientation=landscape'
    },
    { 
      id: 3, 
      name: 'City Center PG - T Nagar', 
      location: 'T Nagar, Chennai',
      occupancy: '15/20',
      revenue: '₹1.35L',
      rating: 4.3,
      image: 'https://readdy.ai/api/search-image?query=Urban%20PG%20accommodation%20in%20city%20center%2C%20modern%20building%20exterior%2C%20well-lit%20entrance%2C%20professional%20photography%2C%20clear%20sky%2C%20simple%20background&width=400&height=300&seq=owner-prop-003&orientation=landscape'
    }
  ];

  return (
    <OwnerDashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your properties.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${stat.color} rounded-lg`}>
                  <i className={`${stat.icon} text-2xl text-white`}></i>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Recent Bookings */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Bookings</h2>
            <button className="text-[#c8155f] hover:text-[#041e40] font-medium text-sm transition-colors cursor-pointer">
              View All →
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Tenant</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Property</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Room Type</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Amount</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#c8155f] to-[#041e40] rounded-full text-white font-semibold">
                          {booking.tenant.charAt(0)}
                        </div>
                        <span className="font-medium text-gray-900">{booking.tenant}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-700">{booking.property}</td>
                    <td className="py-4 px-4 text-sm text-gray-700">{booking.room}</td>
                    <td className="py-4 px-4 text-sm font-semibold text-gray-900">{booking.amount}</td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        booking.status === 'Confirmed' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-orange-100 text-orange-700'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">{booking.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Properties Overview */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Your Properties</h2>
            <button className="bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white px-4 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer text-sm">
              <i className="ri-add-line mr-1"></i>
              Add Property
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <div key={property.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative w-full h-48 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <i className="ri-star-fill text-yellow-500 text-sm"></i>
                    <span className="text-sm font-semibold text-gray-900">{property.rating}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{property.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 flex items-center">
                    <i className="ri-map-pin-line mr-1"></i>
                    {property.location}
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-xs text-gray-500">Occupancy</p>
                      <p className="font-semibold text-gray-900">{property.occupancy}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Monthly Revenue</p>
                      <p className="font-semibold text-[#c8155f]">{property.revenue}</p>
                    </div>
                  </div>
                  <button className="w-full bg-gray-100 hover:bg-gradient-to-r hover:from-[#c8155f] hover:to-[#041e40] text-gray-700 hover:text-white py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap cursor-pointer text-sm">
                    Manage Property
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </OwnerDashboardLayout>
  );
};

export default OwnerDashboardPage;
