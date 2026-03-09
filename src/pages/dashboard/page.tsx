import { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';

const DashboardPage = () => {
  // Mock user data
  const userName = 'Srivarsha';

  const stats = [
    {
      id: 1,
      icon: 'ri-calendar-check-line',
      label: 'Active Bookings',
      value: 2,
      color: 'from-[#c8155f] to-[#041e40]'
    },
    {
      id: 2,
      icon: 'ri-heart-line',
      label: 'Saved PGs',
      value: 12,
      color: 'from-[#041e40] to-[#c8155f]'
    },
    {
      id: 3,
      icon: 'ri-eye-line',
      label: 'Recently Viewed',
      value: 8,
      color: 'from-[#c8155f] to-[#041e40]'
    },
    {
      id: 4,
      icon: 'ri-calendar-event-line',
      label: 'Visits Scheduled',
      value: 3,
      color: 'from-[#041e40] to-[#c8155f]'
    }
  ];

  const upcomingBookings = [
    {
      id: 1,
      name: 'Elite Residency',
      location: 'Velachery, Chennai',
      checkIn: '2024-02-15',
      image: 'https://readdy.ai/api/search-image?query=Premium%20single%20occupancy%20PG%20room%20with%20modern%20bed%2C%20study%20table%2C%20chair%2C%20wardrobe%2C%20air%20conditioning%2C%20bright%20lighting%2C%20clean%20white%20walls%2C%20wooden%20flooring%2C%20contemporary%20design%2C%20professional%20photography%2C%20spacious%20and%20comfortable&width=400&height=300&seq=dash-booking-001&orientation=landscape',
      status: 'Confirmed',
      price: 12000
    },
    {
      id: 2,
      name: 'Comfort Stay PG',
      location: 'T. Nagar, Chennai',
      checkIn: '2024-02-20',
      image: 'https://readdy.ai/api/search-image?query=Modern%20comfortable%20PG%20room%20interior%20with%20two%20beds%2C%20clean%20white%20walls%2C%20wooden%20furniture%2C%20study%20desk%2C%20wardrobe%2C%20bright%20natural%20lighting%20from%20large%20window%2C%20minimalist%20decor%2C%20cozy%20atmosphere%2C%20professional%20photography%2C%20neat%20and%20organized%20space&width=400&height=300&seq=dash-booking-002&orientation=landscape',
      status: 'Pending',
      price: 8500
    },
    {
      id: 3,
      name: 'Urban Nest PG',
      location: 'OMR, Chennai',
      checkIn: '2024-03-01',
      image: 'https://readdy.ai/api/search-image?query=Contemporary%20double%20sharing%20PG%20accommodation%20with%20twin%20beds%2C%20modern%20furniture%2C%20study%20area%2C%20storage%20space%2C%20clean%20white%20walls%2C%20good%20lighting%2C%20minimalist%20aesthetic%2C%20professional%20photography%2C%20comfortable%20living%20space&width=400&height=300&seq=dash-booking-003&orientation=landscape',
      status: 'Visit Scheduled',
      price: 9500
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Visit Scheduled':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <DashboardLayout>
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Welcome back, {userName}
        </h1>
        <p className="text-lg text-gray-600">
          Here's a quick snapshot of your activity.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4`}>
              <i className={`${stat.icon} text-2xl text-white`}></i>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Bookings Preview */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Upcoming Bookings
            </h2>
            <p className="text-gray-600">
              Your scheduled visits and confirmed bookings
            </p>
          </div>
          <Link
            to="/dashboard/bookings"
            className="text-[#c8155f] font-semibold hover:text-[#041e40] transition-colors flex items-center space-x-2 cursor-pointer whitespace-nowrap"
          >
            <span>View All</span>
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {upcomingBookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <img
                  src={booking.image}
                  alt={booking.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className={`absolute top-3 right-3 ${getStatusColor(booking.status)} px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                  {booking.status}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {booking.name}
                </h3>
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <i className="ri-map-pin-line mr-1"></i>
                  <span>{booking.location}</span>
                </div>

                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Check-in Date</div>
                    <div className="text-sm font-semibold text-gray-900 flex items-center">
                      <i className="ri-calendar-line mr-1 text-[#c8155f]"></i>
                      {new Date(booking.checkIn).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 mb-1">Monthly Rent</div>
                    <div className="text-lg font-bold bg-gradient-to-r from-[#c8155f] to-[#041e40] bg-clip-text text-transparent">
                      ₹{booking.price.toLocaleString()}
                    </div>
                  </div>
                </div>

                <Link
                  to={`/pg/${booking.id}`}
                  className="block w-full bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white px-4 py-2.5 rounded-lg font-medium text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-[#041e40] hover:to-[#c8155f] whitespace-nowrap cursor-pointer"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
