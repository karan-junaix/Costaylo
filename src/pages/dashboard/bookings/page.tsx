import { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';

type BookingStatus = 'Confirmed' | 'Pending' | 'Cancelled';
type PaymentStatus = 'Paid' | 'Pending' | 'Failed';
type BookingType = 'Upcoming' | 'Ongoing' | 'Past';

interface Booking {
  id: number;
  pgName: string;
  location: string;
  image: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  price: number;
  bookingStatus: BookingStatus;
  paymentStatus: PaymentStatus;
  type: BookingType;
  bookingDate: string;
}

const BookingsPage = () => {
  const [activeTab, setActiveTab] = useState<BookingType>('Upcoming');
  const [sortBy, setSortBy] = useState('date');

  const allBookings: Booking[] = [
    {
      id: 1,
      pgName: 'Elite Residency',
      location: 'Velachery, Chennai',
      image: 'https://readdy.ai/api/search-image?query=Premium%20single%20occupancy%20PG%20room%20with%20modern%20bed%2C%20study%20table%2C%20chair%2C%20wardrobe%2C%20air%20conditioning%2C%20bright%20lighting%2C%20clean%20white%20walls%2C%20wooden%20flooring%2C%20contemporary%20design%2C%20professional%20photography%2C%20spacious%20and%20comfortable%20living%20space&width=600&height=400&seq=booking-001&orientation=landscape',
      checkIn: '2024-02-15',
      checkOut: '2024-08-15',
      roomType: 'Single Occupancy',
      price: 12000,
      bookingStatus: 'Confirmed',
      paymentStatus: 'Paid',
      type: 'Upcoming',
      bookingDate: '2024-01-20'
    },
    {
      id: 2,
      pgName: 'Comfort Stay PG',
      location: 'T. Nagar, Chennai',
      image: 'https://readdy.ai/api/search-image?query=Modern%20comfortable%20double%20sharing%20PG%20room%20interior%20with%20two%20beds%2C%20clean%20white%20walls%2C%20wooden%20furniture%2C%20study%20desk%2C%20wardrobe%2C%20bright%20natural%20lighting%20from%20large%20window%2C%20minimalist%20decor%2C%20cozy%20atmosphere%2C%20professional%20photography%2C%20neat%20and%20organized%20space&width=600&height=400&seq=booking-002&orientation=landscape',
      checkIn: '2024-02-20',
      checkOut: '2024-08-20',
      roomType: 'Double Sharing',
      price: 8500,
      bookingStatus: 'Pending',
      paymentStatus: 'Pending',
      type: 'Upcoming',
      bookingDate: '2024-01-25'
    },
    {
      id: 3,
      pgName: 'Urban Nest PG',
      location: 'OMR, Chennai',
      image: 'https://readdy.ai/api/search-image?query=Contemporary%20triple%20sharing%20PG%20accommodation%20with%20three%20beds%2C%20modern%20furniture%2C%20study%20area%2C%20storage%20space%2C%20clean%20white%20walls%2C%20good%20lighting%2C%20minimalist%20aesthetic%2C%20professional%20photography%2C%20comfortable%20living%20space&width=600&height=400&seq=booking-003&orientation=landscape',
      checkIn: '2024-01-10',
      checkOut: '2024-07-10',
      roomType: 'Triple Sharing',
      price: 7000,
      bookingStatus: 'Confirmed',
      paymentStatus: 'Paid',
      type: 'Ongoing',
      bookingDate: '2023-12-15'
    },
    {
      id: 4,
      pgName: 'Green Valley Residency',
      location: 'Adyar, Chennai',
      image: 'https://readdy.ai/api/search-image?query=Spacious%20single%20occupancy%20PG%20room%20with%20premium%20bed%2C%20modern%20study%20table%2C%20ergonomic%20chair%2C%20large%20wardrobe%2C%20air%20conditioning%2C%20bright%20lighting%2C%20clean%20white%20walls%2C%20wooden%20flooring%2C%20contemporary%20interior%20design%2C%20professional%20photography&width=600&height=400&seq=booking-004&orientation=landscape',
      checkIn: '2023-12-01',
      checkOut: '2024-06-01',
      roomType: 'Single Occupancy',
      price: 13500,
      bookingStatus: 'Confirmed',
      paymentStatus: 'Paid',
      type: 'Ongoing',
      bookingDate: '2023-11-10'
    },
    {
      id: 5,
      pgName: 'Skyline PG',
      location: 'Anna Nagar, Chennai',
      image: 'https://readdy.ai/api/search-image?query=Modern%20double%20sharing%20PG%20room%20with%20twin%20beds%2C%20clean%20white%20walls%2C%20wooden%20furniture%2C%20study%20desk%2C%20wardrobe%2C%20bright%20natural%20lighting%2C%20minimalist%20decor%2C%20professional%20photography%2C%20neat%20organized%20space&width=600&height=400&seq=booking-005&orientation=landscape',
      checkIn: '2023-08-01',
      checkOut: '2024-01-31',
      roomType: 'Double Sharing',
      price: 9000,
      bookingStatus: 'Confirmed',
      paymentStatus: 'Paid',
      type: 'Past',
      bookingDate: '2023-07-15'
    },
    {
      id: 6,
      pgName: 'Sunrise Hostel',
      location: 'Guindy, Chennai',
      image: 'https://readdy.ai/api/search-image?query=Comfortable%20triple%20sharing%20PG%20accommodation%20with%20three%20beds%2C%20modern%20furniture%2C%20study%20area%2C%20storage%20space%2C%20clean%20white%20walls%2C%20good%20lighting%2C%20minimalist%20aesthetic%2C%20professional%20photography&width=600&height=400&seq=booking-006&orientation=landscape',
      checkIn: '2023-06-15',
      checkOut: '2023-12-15',
      roomType: 'Triple Sharing',
      price: 6500,
      bookingStatus: 'Confirmed',
      paymentStatus: 'Paid',
      type: 'Past',
      bookingDate: '2023-05-20'
    },
    {
      id: 7,
      pgName: 'Metro Stay PG',
      location: 'Porur, Chennai',
      image: 'https://readdy.ai/api/search-image?query=Premium%20single%20occupancy%20PG%20room%20with%20modern%20bed%2C%20study%20table%2C%20chair%2C%20wardrobe%2C%20air%20conditioning%2C%20bright%20lighting%2C%20clean%20white%20walls%2C%20wooden%20flooring%2C%20contemporary%20design%2C%20professional%20photography&width=600&height=400&seq=booking-007&orientation=landscape',
      checkIn: '2023-05-01',
      checkOut: '2023-10-31',
      roomType: 'Single Occupancy',
      price: 11000,
      bookingStatus: 'Cancelled',
      paymentStatus: 'Failed',
      type: 'Past',
      bookingDate: '2023-04-10'
    },
    {
      id: 8,
      pgName: 'Cozy Corner PG',
      location: 'Tambaram, Chennai',
      image: 'https://readdy.ai/api/search-image?query=Modern%20comfortable%20double%20sharing%20PG%20room%20interior%20with%20two%20beds%2C%20clean%20white%20walls%2C%20wooden%20furniture%2C%20study%20desk%2C%20wardrobe%2C%20bright%20natural%20lighting%2C%20minimalist%20decor%2C%20professional%20photography&width=600&height=400&seq=booking-008&orientation=landscape',
      checkIn: '2023-03-15',
      checkOut: '2023-09-15',
      roomType: 'Double Sharing',
      price: 7500,
      bookingStatus: 'Confirmed',
      paymentStatus: 'Paid',
      type: 'Past',
      bookingDate: '2023-02-20'
    }
  ];

  const filteredBookings = allBookings
    .filter(booking => booking.type === activeTab)
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.bookingDate).getTime() - new Date(a.bookingDate).getTime();
      } else if (sortBy === 'price') {
        return b.price - a.price;
      } else if (sortBy === 'location') {
        return a.location.localeCompare(b.location);
      }
      return 0;
    });

  const getBookingStatusColor = (status: BookingStatus) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getPaymentStatusColor = (status: PaymentStatus) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Failed':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const handleDownloadReceipt = (bookingId: number) => {
    // Handle receipt download
    console.log('Download receipt for booking:', bookingId);
  };

  const handleContactPG = (bookingId: number) => {
    // Handle contact PG
    console.log('Contact PG for booking:', bookingId);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Bookings</h1>
          <p className="text-lg text-gray-600">
            Manage all your PG bookings in one place
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Tabs */}
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              {(['Upcoming', 'Ongoing', 'Past'] as BookingType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-lg font-medium transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white shadow-lg'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                Sort by:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:border-[#c8155f] focus:outline-none focus:ring-2 focus:ring-[#c8155f] focus:border-transparent transition-all cursor-pointer"
              >
                <option value="date">Date</option>
                <option value="price">Price</option>
                <option value="location">Location</option>
              </select>
            </div>
          </div>
        </div>

        {/* Bookings Count */}
        <div className="flex items-center justify-between">
          <p className="text-gray-600 font-medium">
            {filteredBookings.length} {filteredBookings.length === 1 ? 'booking' : 'bookings'} found
          </p>
        </div>

        {/* Bookings List */}
        {filteredBookings.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-calendar-line text-4xl text-gray-400"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No bookings found</h3>
            <p className="text-gray-600 mb-6">
              You don't have any {activeTab.toLowerCase()} bookings at the moment.
            </p>
            <Link
              to="/pgs"
              className="inline-block bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-[#041e40] hover:to-[#c8155f] whitespace-nowrap cursor-pointer"
            >
              Browse PGs
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="lg:w-80 w-full h-64 lg:h-auto flex-shrink-0">
                    <img
                      src={booking.image}
                      alt={booking.pgName}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 lg:p-8">
                    <div className="flex flex-col h-full">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            {booking.pgName}
                          </h2>
                          <div className="flex items-center text-gray-600 mb-3">
                            <i className="ri-map-pin-line mr-2 text-[#c8155f]"></i>
                            <span className="text-sm">{booking.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${getBookingStatusColor(booking.bookingStatus)}`}>
                              {booking.bookingStatus}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${getPaymentStatusColor(booking.paymentStatus)}`}>
                              Payment: {booking.paymentStatus}
                            </span>
                          </div>
                        </div>
                        <div className="text-left sm:text-right">
                          <div className="text-sm text-gray-500 mb-1">Monthly Rent</div>
                          <div className="text-3xl font-bold bg-gradient-to-r from-[#c8155f] to-[#041e40] bg-clip-text text-transparent">
                            ₹{booking.price.toLocaleString()}
                          </div>
                        </div>
                      </div>

                      {/* Details Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
                        <div>
                          <div className="text-xs text-gray-500 mb-1 font-medium">Check-in Date</div>
                          <div className="flex items-center text-sm font-semibold text-gray-900">
                            <i className="ri-calendar-check-line mr-2 text-[#c8155f] w-4 h-4 flex items-center justify-center"></i>
                            {formatDate(booking.checkIn)}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1 font-medium">Check-out Date</div>
                          <div className="flex items-center text-sm font-semibold text-gray-900">
                            <i className="ri-calendar-close-line mr-2 text-[#c8155f] w-4 h-4 flex items-center justify-center"></i>
                            {formatDate(booking.checkOut)}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1 font-medium">Room Type</div>
                          <div className="flex items-center text-sm font-semibold text-gray-900">
                            <i className="ri-home-4-line mr-2 text-[#c8155f] w-4 h-4 flex items-center justify-center"></i>
                            {booking.roomType}
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                        <Link
                          to={`/pg/${booking.id}`}
                          className="flex-1 bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white px-6 py-3 rounded-lg font-medium text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-[#041e40] hover:to-[#c8155f] whitespace-nowrap cursor-pointer"
                        >
                          <i className="ri-eye-line mr-2"></i>
                          View Booking
                        </Link>
                        <button
                          onClick={() => handleDownloadReceipt(booking.id)}
                          className="flex-1 bg-white border-2 border-[#c8155f] text-[#c8155f] px-6 py-3 rounded-lg font-medium shadow-md hover:bg-[#c8155f] hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer"
                        >
                          <i className="ri-download-line mr-2"></i>
                          Download Receipt
                        </button>
                        <button
                          onClick={() => handleContactPG(booking.id)}
                          className="flex-1 bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium shadow-md hover:border-[#041e40] hover:text-[#041e40] transition-all duration-300 whitespace-nowrap cursor-pointer"
                        >
                          <i className="ri-phone-line mr-2"></i>
                          Contact PG
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default BookingsPage;
