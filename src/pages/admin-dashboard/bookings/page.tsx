import { useState } from 'react';
import AdminDashboardLayout from '../components/AdminDashboardLayout';

const AdminBookingsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedBooking, setSelectedBooking] = useState<any>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const bookings = [
    {
      id: 'BK001',
      user: 'Priya Sharma',
      userEmail: 'priya.sharma@email.com',
      userPhone: '+91 98765 43210',
      property: 'Sunshine PG - Velachery',
      owner: 'Rajesh Sharma',
      roomType: 'Single Sharing',
      checkIn: '2024-03-15',
      checkOut: '2024-09-15',
      duration: '6 months',
      amount: '₹51,000',
      status: 'Confirmed',
      bookingDate: '2024-02-28',
      paymentStatus: 'Paid'
    },
    {
      id: 'BK002',
      user: 'Amit Kumar',
      userEmail: 'amit.kumar@email.com',
      userPhone: '+91 98765 43211',
      property: 'Green Valley Hostel - Adyar',
      owner: 'Sunita Reddy',
      roomType: 'Double Sharing',
      checkIn: '2024-03-20',
      checkOut: '2024-06-20',
      duration: '3 months',
      amount: '₹21,000',
      status: 'Confirmed',
      bookingDate: '2024-03-01',
      paymentStatus: 'Paid'
    },
    {
      id: 'BK003',
      user: 'Sneha Reddy',
      userEmail: 'sneha.reddy@email.com',
      userPhone: '+91 98765 43212',
      property: 'City Center PG - T Nagar',
      owner: 'Arun Kumar',
      roomType: 'Single Sharing',
      checkIn: '2024-03-25',
      checkOut: '2024-12-25',
      duration: '9 months',
      amount: '₹85,500',
      status: 'Pending',
      bookingDate: '2024-03-05',
      paymentStatus: 'Pending'
    },
    {
      id: 'BK004',
      user: 'Rahul Verma',
      userEmail: 'rahul.verma@email.com',
      userPhone: '+91 98765 43213',
      property: 'Lakeside Residency - OMR',
      owner: 'Meena Patel',
      roomType: 'Triple Sharing',
      checkIn: '2024-04-01',
      checkOut: '2024-07-01',
      duration: '3 months',
      amount: '₹36,000',
      status: 'Confirmed',
      bookingDate: '2024-03-10',
      paymentStatus: 'Paid'
    },
    {
      id: 'BK005',
      user: 'Kavya Iyer',
      userEmail: 'kavya.iyer@email.com',
      userPhone: '+91 98765 43214',
      property: 'Metro Stay - Anna Nagar',
      owner: 'Karthik Iyer',
      roomType: 'Double Sharing',
      checkIn: '2024-04-05',
      checkOut: '2024-10-05',
      duration: '6 months',
      amount: '₹48,000',
      status: 'Confirmed',
      bookingDate: '2024-03-12',
      paymentStatus: 'Paid'
    },
    {
      id: 'BK006',
      user: 'Arjun Nair',
      userEmail: 'arjun.nair@email.com',
      userPhone: '+91 98765 43215',
      property: 'Coastal Breeze PG - ECR',
      owner: 'Lakshmi Nair',
      roomType: 'Single Sharing',
      checkIn: '2024-02-15',
      checkOut: '2024-03-10',
      duration: '1 month',
      amount: '₹10,500',
      status: 'Cancelled',
      bookingDate: '2024-02-01',
      paymentStatus: 'Refunded'
    }
  ];

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         booking.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         booking.property.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || booking.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const handleViewDetails = (booking: any) => {
    setSelectedBooking(booking);
    setIsDetailsModalOpen(true);
  };

  const handleUpdateStatus = (bookingId: string, newStatus: string) => {
    console.log('Update booking status:', bookingId, newStatus);
    alert(`Booking ${bookingId} status updated to ${newStatus}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-orange-100 text-orange-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-orange-100 text-orange-800';
      case 'Refunded':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <AdminDashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Management</h1>
          <p className="text-gray-600">Manage all bookings on the platform</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Bookings</p>
                <p className="text-2xl font-bold text-gray-900">{bookings.length}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-[#c8155f] to-[#041e40] rounded-xl flex items-center justify-center">
                <i className="ri-calendar-check-line text-xl text-white"></i>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Confirmed</p>
                <p className="text-2xl font-bold text-green-600">{bookings.filter(b => b.status === 'Confirmed').length}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <i className="ri-check-double-line text-xl text-green-600"></i>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Pending</p>
                <p className="text-2xl font-bold text-orange-600">{bookings.filter(b => b.status === 'Pending').length}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <i className="ri-time-line text-xl text-orange-600"></i>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
                <p className="text-2xl font-bold text-[#c8155f]">₹2.52L</p>
              </div>
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                <i className="ri-money-rupee-circle-line text-xl text-[#c8155f]"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i className="ri-search-line text-gray-400 text-lg"></i>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search bookings..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all text-sm"
              />
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setFilterStatus('all')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all cursor-pointer whitespace-nowrap ${
                  filterStatus === 'all'
                    ? 'bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All ({bookings.length})
              </button>
              <button
                onClick={() => setFilterStatus('confirmed')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all cursor-pointer whitespace-nowrap ${
                  filterStatus === 'confirmed'
                    ? 'bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Confirmed ({bookings.filter(b => b.status === 'Confirmed').length})
              </button>
              <button
                onClick={() => setFilterStatus('pending')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all cursor-pointer whitespace-nowrap ${
                  filterStatus === 'pending'
                    ? 'bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Pending ({bookings.filter(b => b.status === 'Pending').length})
              </button>
            </div>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Booking ID</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">User</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Property</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Check-in</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Duration</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="font-semibold text-gray-900">{booking.id}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-gray-900">{booking.user}</p>
                        <p className="text-sm text-gray-500">{booking.userEmail}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-gray-900">{booking.property}</p>
                        <p className="text-sm text-gray-500">{booking.roomType}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-900">{booking.checkIn}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-900">{booking.duration}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-[#c8155f]">{booking.amount}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(booking.status)}`}>
                          {booking.status}
                        </span>
                        <br />
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPaymentStatusColor(booking.paymentStatus)}`}>
                          {booking.paymentStatus}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleViewDetails(booking)}
                        className="w-8 h-8 flex items-center justify-center bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors cursor-pointer"
                        title="View Details"
                      >
                        <i className="ri-eye-line text-sm"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Details Modal */}
        {isDetailsModalOpen && selectedBooking && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Booking Details</h3>
                <button
                  onClick={() => setIsDetailsModalOpen(false)}
                  className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                >
                  <i className="ri-close-line text-xl text-gray-500"></i>
                </button>
              </div>

              <div className="space-y-6">
                {/* Booking Info */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Booking Information</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Booking ID</p>
                      <p className="font-semibold text-gray-900">{selectedBooking.id}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Booking Date</p>
                      <p className="font-semibold text-gray-900">{selectedBooking.bookingDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Status</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(selectedBooking.status)}`}>
                        {selectedBooking.status}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Payment Status</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getPaymentStatusColor(selectedBooking.paymentStatus)}`}>
                        {selectedBooking.paymentStatus}
                      </span>
                    </div>
                  </div>
                </div>

                {/* User Info */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">User Information</h4>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm text-gray-600">Name</p>
                      <p className="font-semibold text-gray-900">{selectedBooking.user}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-semibold text-gray-900">{selectedBooking.userEmail}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-semibold text-gray-900">{selectedBooking.userPhone}</p>
                    </div>
                  </div>
                </div>

                {/* Property Info */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Property Information</h4>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm text-gray-600">Property</p>
                      <p className="font-semibold text-gray-900">{selectedBooking.property}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Owner</p>
                      <p className="font-semibold text-gray-900">{selectedBooking.owner}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Room Type</p>
                      <p className="font-semibold text-gray-900">{selectedBooking.roomType}</p>
                    </div>
                  </div>
                </div>

                {/* Stay Info */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Stay Information</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Check-in</p>
                      <p className="font-semibold text-gray-900">{selectedBooking.checkIn}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Check-out</p>
                      <p className="font-semibold text-gray-900">{selectedBooking.checkOut}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-semibold text-gray-900">{selectedBooking.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Amount</p>
                      <p className="font-bold text-[#c8155f] text-lg">{selectedBooking.amount}</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                {selectedBooking.status === 'Pending' && (
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => {
                        handleUpdateStatus(selectedBooking.id, 'Confirmed');
                        setIsDetailsModalOpen(false);
                      }}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap"
                    >
                      <i className="ri-check-line mr-2"></i>
                      Confirm Booking
                    </button>
                    <button
                      onClick={() => {
                        handleUpdateStatus(selectedBooking.id, 'Cancelled');
                        setIsDetailsModalOpen(false);
                      }}
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap"
                    >
                      <i className="ri-close-line mr-2"></i>
                      Cancel Booking
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminDashboardLayout>
  );
};

export default AdminBookingsPage;
