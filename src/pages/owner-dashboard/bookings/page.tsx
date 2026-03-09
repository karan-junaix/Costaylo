import { useState } from 'react';
import OwnerDashboardLayout from '../components/OwnerDashboardLayout';

const BookingsPage = () => {
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBooking, setSelectedBooking] = useState<any>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  // Mock bookings data
  const bookings = [
    {
      id: 'BK001',
      tenantName: 'Rahul Sharma',
      phone: '+91 9876543210',
      email: 'rahul.sharma@email.com',
      property: 'Green Valley PG',
      room: 'Room 101',
      roomType: 'Single Sharing',
      checkinDate: '2024-01-15',
      checkoutDate: '2024-07-15',
      monthlyRent: 12000,
      securityDeposit: 24000,
      totalAmount: 36000,
      paidAmount: 36000,
      status: 'Active',
      paymentStatus: 'Paid',
      joinedDate: '2024-01-15',
      lastPayment: '2024-01-15',
      nextDue: '2024-02-15',
      duration: '6 months',
      profileImage: 'https://readdy.ai/api/search-image?query=professional%20young%20indian%20male%20student%20with%20glasses%20smiling%20confidently%20in%20modern%20residential%20setting%20with%20clean%20background&width=150&height=150&seq=tenant1&orientation=squarish'
    },
    {
      id: 'BK002',
      tenantName: 'Priya Singh',
      phone: '+91 8765432109',
      email: 'priya.singh@email.com',
      property: 'Urban Heights PG',
      room: 'Room 205',
      roomType: 'Double Sharing',
      checkinDate: '2024-02-01',
      checkoutDate: '2024-08-01',
      monthlyRent: 9500,
      securityDeposit: 19000,
      totalAmount: 28500,
      paidAmount: 28500,
      status: 'Active',
      paymentStatus: 'Paid',
      joinedDate: '2024-02-01',
      lastPayment: '2024-02-01',
      nextDue: '2024-03-01',
      duration: '6 months',
      profileImage: 'https://readdy.ai/api/search-image?query=professional%20young%20indian%20female%20student%20smiling%20warmly%20in%20modern%20hostel%20environment%20with%20clean%20neutral%20background&width=150&height=150&seq=tenant2&orientation=squarish'
    },
    {
      id: 'BK003',
      tenantName: 'Arjun Kumar',
      phone: '+91 7654321098',
      email: 'arjun.kumar@email.com',
      property: 'City Center PG',
      room: 'Room 302',
      roomType: 'Triple Sharing',
      checkinDate: '2024-01-20',
      checkoutDate: '2024-07-20',
      monthlyRent: 7500,
      securityDeposit: 15000,
      totalAmount: 22500,
      paidAmount: 15000,
      status: 'Active',
      paymentStatus: 'Due',
      joinedDate: '2024-01-20',
      lastPayment: '2024-01-20',
      nextDue: '2024-02-20',
      duration: '6 months',
      profileImage: 'https://readdy.ai/api/search-image?query=professional%20young%20indian%20male%20working%20professional%20in%20casual%20shirt%20smiling%20in%20modern%20apartment%20setting%20with%20clean%20background&width=150&height=150&seq=tenant3&orientation=squarish'
    },
    {
      id: 'BK004',
      tenantName: 'Sneha Patel',
      phone: '+91 6543210987',
      email: 'sneha.patel@email.com',
      property: 'Metro View PG',
      room: 'Room 401',
      roomType: 'Single Sharing',
      checkinDate: '2023-12-01',
      checkoutDate: '2024-06-01',
      monthlyRent: 13500,
      securityDeposit: 27000,
      totalAmount: 40500,
      paidAmount: 40500,
      status: 'Expired',
      paymentStatus: 'Completed',
      joinedDate: '2023-12-01',
      lastPayment: '2023-12-01',
      nextDue: 'Contract Ended',
      duration: '6 months',
      profileImage: 'https://readdy.ai/api/search-image?query=professional%20young%20indian%20female%20student%20with%20long%20hair%20smiling%20confidently%20in%20modern%20residential%20setting%20with%20clean%20background&width=150&height=150&seq=tenant4&orientation=squarish'
    },
    {
      id: 'BK005',
      tenantName: 'Vikram Reddy',
      phone: '+91 5432109876',
      email: 'vikram.reddy@email.com',
      property: 'Tech Park PG',
      room: 'Room 502',
      roomType: 'Double Sharing',
      checkinDate: '2024-01-10',
      checkoutDate: '2024-07-10',
      monthlyRent: 10500,
      securityDeposit: 21000,
      totalAmount: 31500,
      paidAmount: 10500,
      status: 'Pending',
      paymentStatus: 'Pending',
      joinedDate: '2024-01-10',
      lastPayment: 'Not Paid',
      nextDue: '2024-02-10',
      duration: '6 months',
      profileImage: 'https://readdy.ai/api/search-image?query=professional%20young%20indian%20male%20software%20engineer%20in%20formal%20shirt%20smiling%20in%20modern%20office%20style%20setting%20with%20clean%20background&width=150&height=150&seq=tenant5&orientation=squarish'
    },
    {
      id: 'BK006',
      tenantName: 'Ananya Das',
      phone: '+91 4321098765',
      email: 'ananya.das@email.com',
      property: 'Garden View PG',
      room: 'Room 201',
      roomType: 'Single Sharing',
      checkinDate: '2024-02-10',
      checkoutDate: '2024-08-10',
      monthlyRent: 11800,
      securityDeposit: 23600,
      totalAmount: 35400,
      paidAmount: 35400,
      status: 'Active',
      paymentStatus: 'Paid',
      joinedDate: '2024-02-10',
      lastPayment: '2024-02-10',
      nextDue: '2024-03-10',
      duration: '6 months',
      profileImage: 'https://readdy.ai/api/search-image?query=professional%20young%20indian%20female%20professional%20with%20shoulder%20length%20hair%20smiling%20warmly%20in%20modern%20residential%20setting%20with%20clean%20background&width=150&height=150&seq=tenant6&orientation=squarish'
    }
  ];

  const statusFilters = ['All', 'Active', 'Pending', 'Expired'];

  const statusStats = {
    total: bookings.length,
    active: bookings.filter(b => b.status === 'Active').length,
    pending: bookings.filter(b => b.status === 'Pending').length,
    expired: bookings.filter(b => b.status === 'Expired').length,
    due: bookings.filter(b => b.paymentStatus === 'Due').length
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesStatus = selectedStatus === 'All' || booking.status === selectedStatus;
    const matchesSearch = booking.tenantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.room.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800 border-green-200';
      case 'Pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Expired': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'Paid': return 'bg-green-100 text-green-800 border-green-200';
      case 'Due': return 'bg-red-100 text-red-800 border-red-200';
      case 'Pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Completed': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const openDetailsModal = (booking: any) => {
    setSelectedBooking(booking);
    setShowDetailsModal(true);
  };

  const closeDetailsModal = () => {
    setSelectedBooking(null);
    setShowDetailsModal(false);
  };

  return (
    <OwnerDashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Bookings Management</h1>
            <p className="text-gray-600 mt-1">Manage all your tenant bookings and payments</p>
          </div>
          
          <button className="bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer">
            <i className="ri-add-line mr-2"></i>
            Add New Booking
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Bookings</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{statusStats.total}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <i className="ri-calendar-check-line text-2xl text-blue-600"></i>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Tenants</p>
                <p className="text-2xl font-bold text-green-600 mt-1">{statusStats.active}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <i className="ri-user-check-line text-2xl text-green-600"></i>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600 mt-1">{statusStats.pending}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <i className="ri-time-line text-2xl text-yellow-600"></i>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Payment Due</p>
                <p className="text-2xl font-bold text-red-600 mt-1">{statusStats.due}</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <i className="ri-money-rupee-circle-line text-2xl text-red-600"></i>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Expired</p>
                <p className="text-2xl font-bold text-gray-600 mt-1">{statusStats.expired}</p>
              </div>
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <i className="ri-calendar-close-line text-2xl text-gray-600"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {statusFilters.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all cursor-pointer ${
                    selectedStatus === status
                      ? 'bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

            <div className="flex gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search bookings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-[#c8155f] w-full lg:w-64"
                />
                <i className="ri-search-line absolute left-3 top-3 text-gray-400"></i>
              </div>
              
              <button className="bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition-all whitespace-nowrap cursor-pointer">
                <i className="ri-download-line mr-2"></i>
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Tenant</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Property & Room</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Duration</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Amount</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Status</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Payment</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Next Due</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <img
                          src={booking.profileImage}
                          alt={booking.tenantName}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">{booking.tenantName}</p>
                          <p className="text-sm text-gray-600">{booking.phone}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-gray-900">{booking.property}</p>
                        <p className="text-sm text-gray-600">{booking.room} - {booking.roomType}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="text-sm text-gray-900">{booking.checkinDate}</p>
                        <p className="text-sm text-gray-600">to {booking.checkoutDate}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-semibold text-gray-900">₹{booking.monthlyRent.toLocaleString()}/month</p>
                        <p className="text-sm text-gray-600">₹{booking.paidAmount.toLocaleString()} paid</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPaymentStatusColor(booking.paymentStatus)}`}>
                        {booking.paymentStatus}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-sm text-gray-900">{booking.nextDue}</p>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => openDetailsModal(booking)}
                          className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                          title="View Details"
                        >
                          <i className="ri-eye-line text-lg"></i>
                        </button>
                        <button
                          className="text-green-600 hover:text-green-800 transition-colors cursor-pointer"
                          title="Call Tenant"
                        >
                          <i className="ri-phone-line text-lg"></i>
                        </button>
                        <button
                          className="text-[#25d366] hover:text-green-700 transition-colors cursor-pointer"
                          title="WhatsApp"
                        >
                          <i className="ri-whatsapp-line text-lg"></i>
                        </button>
                        <button
                          className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
                          title="More Options"
                        >
                          <i className="ri-more-2-line text-lg"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredBookings.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-close-line text-2xl text-gray-400"></i>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Bookings Found</h3>
              <p className="text-gray-600 mb-6">No bookings match your current filters.</p>
            </div>
          )}
        </div>

        {/* Booking Details Modal */}
        {showDetailsModal && selectedBooking && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">Booking Details</h2>
                  <button
                    onClick={closeDetailsModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                  >
                    <i className="ri-close-line text-2xl"></i>
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  {/* Tenant Information */}
                  <div className="flex items-start space-x-4">
                    <img
                      src={selectedBooking.profileImage}
                      alt={selectedBooking.tenantName}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{selectedBooking.tenantName}</h3>
                      <p className="text-gray-600">{selectedBooking.email}</p>
                      <p className="text-gray-600">{selectedBooking.phone}</p>
                      <div className="flex space-x-2 mt-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(selectedBooking.status)}`}>
                          {selectedBooking.status}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPaymentStatusColor(selectedBooking.paymentStatus)}`}>
                          {selectedBooking.paymentStatus}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Property Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Property:</span>
                          <span className="font-medium">{selectedBooking.property}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Room:</span>
                          <span className="font-medium">{selectedBooking.room}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Room Type:</span>
                          <span className="font-medium">{selectedBooking.roomType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Duration:</span>
                          <span className="font-medium">{selectedBooking.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Payment Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Monthly Rent:</span>
                          <span className="font-medium">₹{selectedBooking.monthlyRent.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Security Deposit:</span>
                          <span className="font-medium">₹{selectedBooking.securityDeposit.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Total Amount:</span>
                          <span className="font-medium">₹{selectedBooking.totalAmount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Paid Amount:</span>
                          <span className="font-medium text-green-600">₹{selectedBooking.paidAmount.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Booking Timeline</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Check-in Date:</span>
                        <span className="font-medium">{selectedBooking.checkinDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Check-out Date:</span>
                        <span className="font-medium">{selectedBooking.checkoutDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Last Payment:</span>
                        <span className="font-medium">{selectedBooking.lastPayment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Next Due Date:</span>
                        <span className="font-medium">{selectedBooking.nextDue}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                    <button className="flex-1 bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white px-4 py-2.5 rounded-lg font-medium hover:shadow-lg transition-all cursor-pointer">
                      <i className="ri-phone-line mr-2"></i>
                      Call Now
                    </button>
                    <button className="flex-1 bg-[#25d366] text-white px-4 py-2.5 rounded-lg font-medium hover:bg-green-600 transition-all cursor-pointer">
                      <i className="ri-whatsapp-line mr-2"></i>
                      WhatsApp
                    </button>
                    <button className="flex-1 bg-blue-600 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-all cursor-pointer">
                      <i className="ri-mail-line mr-2"></i>
                      Send Email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </OwnerDashboardLayout>
  );
};

export default BookingsPage;