
import { useState } from 'react';
import OwnerDashboardLayout from '../components/OwnerDashboardLayout';

interface Inquiry {
  id: number;
  leadName: string;
  phone: string;
  email: string;
  property: string;
  roomType: string;
  budget: string;
  moveInDate: string;
  message: string;
  status: 'New' | 'Contacted' | 'Interested' | 'Not Interested' | 'Converted';
  date: string;
  time: string;
}

const InquiriesPage = () => {
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const [inquiries, setInquiries] = useState<Inquiry[]>([
    {
      id: 1,
      leadName: 'Priya Sharma',
      phone: '+91 98765 43210',
      email: 'priya.sharma@email.com',
      property: 'Sunshine PG - Velachery',
      roomType: 'Double Sharing',
      budget: '₹10,000 - ₹12,000',
      moveInDate: '2024-02-01',
      message: 'Looking for a clean and safe PG near IT corridor. Need food facility.',
      status: 'New',
      date: '2024-01-20',
      time: '10:30 AM'
    },
    {
      id: 2,
      leadName: 'Rahul Kumar',
      phone: '+91 87654 32109',
      email: 'rahul.k@email.com',
      property: 'Green Valley Hostel - Adyar',
      roomType: 'Single Room',
      budget: '₹15,000 - ₹18,000',
      moveInDate: '2024-01-25',
      message: 'Need AC room with attached bathroom. Working professional.',
      status: 'Contacted',
      date: '2024-01-19',
      time: '02:15 PM'
    },
    {
      id: 3,
      leadName: 'Anjali Reddy',
      phone: '+91 76543 21098',
      email: 'anjali.reddy@email.com',
      property: 'City Center PG - T Nagar',
      roomType: 'Triple Sharing',
      budget: '₹8,000 - ₹10,000',
      moveInDate: '2024-02-10',
      message: 'Student looking for affordable accommodation near college.',
      status: 'Interested',
      date: '2024-01-18',
      time: '11:45 AM'
    },
    {
      id: 4,
      leadName: 'Vikram Singh',
      phone: '+91 65432 10987',
      email: 'vikram.singh@email.com',
      property: 'Lakeside Residency - OMR',
      roomType: 'Double Sharing',
      budget: '₹12,000 - ₹14,000',
      moveInDate: '2024-01-28',
      message: 'Looking for PG with gym facility and parking.',
      status: 'Converted',
      date: '2024-01-17',
      time: '04:20 PM'
    },
    {
      id: 5,
      leadName: 'Sneha Patel',
      phone: '+91 54321 09876',
      email: 'sneha.p@email.com',
      property: 'Metro Stay - Anna Nagar',
      roomType: 'Single Room',
      budget: '₹16,000 - ₹18,000',
      moveInDate: '2024-02-05',
      message: 'Need fully furnished room with Wi-Fi and housekeeping.',
      status: 'New',
      date: '2024-01-16',
      time: '09:00 AM'
    },
    {
      id: 6,
      leadName: 'Arjun Mehta',
      phone: '+91 43210 98765',
      email: 'arjun.mehta@email.com',
      property: 'Sunshine PG - Velachery',
      roomType: 'Triple Sharing',
      budget: '₹7,000 - ₹9,000',
      moveInDate: '2024-02-15',
      message: 'Budget accommodation needed for 6 months.',
      status: 'Not Interested',
      date: '2024-01-15',
      time: '03:30 PM'
    }
  ]);

  const handleStatusChange = (inquiryId: number, newStatus: Inquiry['status']) => {
    setInquiries(prev =>
      prev.map(inq => inq.id === inquiryId ? { ...inq, status: newStatus } : inq)
    );
    if (selectedInquiry?.id === inquiryId) {
      setSelectedInquiry(prev => prev ? { ...prev, status: newStatus } : null);
    }
  };

  const filteredInquiries = inquiries.filter(inquiry => {
    const matchesSearch = 
      inquiry.leadName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inquiry.phone.includes(searchQuery) ||
      inquiry.property.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || inquiry.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New': return 'bg-[#c8155f] text-white';
      case 'Contacted': return 'bg-orange-500 text-white';
      case 'Interested': return 'bg-green-500 text-white';
      case 'Not Interested': return 'bg-gray-500 text-white';
      case 'Converted': return 'bg-teal-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const statusCounts = {
    all: inquiries.length,
    new: inquiries.filter(i => i.status === 'New').length,
    contacted: inquiries.filter(i => i.status === 'Contacted').length,
    interested: inquiries.filter(i => i.status === 'Interested').length,
    converted: inquiries.filter(i => i.status === 'Converted').length
  };

  return (
    <OwnerDashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Leads & Enquiries</h1>
          <p className="text-gray-600">Manage and track all property inquiries</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-xs text-gray-600 mb-1">Total Leads</p>
            <p className="text-2xl font-bold text-gray-900">{statusCounts.all}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-xs text-gray-600 mb-1">New</p>
            <p className="text-2xl font-bold text-[#c8155f]">{statusCounts.new}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-xs text-gray-600 mb-1">Contacted</p>
            <p className="text-2xl font-bold text-orange-500">{statusCounts.contacted}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-xs text-gray-600 mb-1">Interested</p>
            <p className="text-2xl font-bold text-green-500">{statusCounts.interested}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-xs text-gray-600 mb-1">Converted</p>
            <p className="text-2xl font-bold text-teal-500">{statusCounts.converted}</p>
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
                placeholder="Search by name, phone, or property..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all text-sm"
              />
            </div>
            <div className="flex items-center space-x-2 overflow-x-auto">
              <button
                onClick={() => setFilterStatus('all')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all cursor-pointer whitespace-nowrap ${
                  filterStatus === 'all'
                    ? 'bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterStatus('new')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all cursor-pointer whitespace-nowrap ${
                  filterStatus === 'new'
                    ? 'bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                New
              </button>
              <button
                onClick={() => setFilterStatus('contacted')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all cursor-pointer whitespace-nowrap ${
                  filterStatus === 'contacted'
                    ? 'bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Contacted
              </button>
              <button
                onClick={() => setFilterStatus('interested')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all cursor-pointer whitespace-nowrap ${
                  filterStatus === 'interested'
                    ? 'bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Interested
              </button>
              <button
                onClick={() => setFilterStatus('converted')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all cursor-pointer whitespace-nowrap ${
                  filterStatus === 'converted'
                    ? 'bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Converted
              </button>
            </div>
          </div>
        </div>

        {/* Inquiries List */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Lead Details</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Contact</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Property</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Requirements</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Status</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInquiries.map((inquiry) => (
                  <tr key={inquiry.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-semibold text-gray-900">{inquiry.leadName}</p>
                        <p className="text-xs text-gray-500">{inquiry.date} • {inquiry.time}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-700 flex items-center">
                          <i className="ri-phone-line mr-1 text-[#c8155f]"></i>
                          {inquiry.phone}
                        </p>
                        <p className="text-xs text-gray-600 flex items-center">
                          <i className="ri-mail-line mr-1 text-[#c8155f]"></i>
                          {inquiry.email}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-sm font-medium text-gray-900">{inquiry.property}</p>
                    </td>
                    <td className="py-4 px-6">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-700">{inquiry.roomType}</p>
                        <p className="text-xs text-gray-600">{inquiry.budget}</p>
                        <p className="text-xs text-gray-600">Move-in: {inquiry.moveInDate}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(inquiry.status)}`}>
                        {inquiry.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <button
                        onClick={() => setSelectedInquiry(inquiry)}
                        className="text-[#c8155f] hover:text-[#041e40] font-medium text-sm transition-colors cursor-pointer whitespace-nowrap"
                      >
                        View Details →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredInquiries.length === 0 && (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-full mx-auto mb-4">
              <i className="ri-question-answer-line text-4xl text-gray-400"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Inquiries Found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Inquiry Detail Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Lead Details</h2>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-2xl text-gray-700"></i>
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Lead Info */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#c8155f] to-[#041e40] rounded-full text-white text-2xl font-bold">
                    {selectedInquiry.leadName.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{selectedInquiry.leadName}</h3>
                    <p className="text-sm text-gray-600">{selectedInquiry.date} • {selectedInquiry.time}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Phone Number</p>
                    <p className="text-sm font-medium text-gray-900">{selectedInquiry.phone}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Email Address</p>
                    <p className="text-sm font-medium text-gray-900">{selectedInquiry.email}</p>
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Property Interest</h4>
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Property</p>
                    <p className="text-sm font-medium text-gray-900">{selectedInquiry.property}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Room Type</p>
                      <p className="text-sm font-medium text-gray-900">{selectedInquiry.roomType}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Budget</p>
                      <p className="text-sm font-medium text-gray-900">{selectedInquiry.budget}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Move-in Date</p>
                      <p className="text-sm font-medium text-gray-900">{selectedInquiry.moveInDate}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Message</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">{selectedInquiry.message}</p>
                </div>
              </div>

              {/* Status Update */}
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Update Follow Status</h4>
                <div className="flex flex-wrap gap-2">
                  {(['New', 'Contacted', 'Interested', 'Not Interested', 'Converted'] as const).map((status) => (
                    <button
                      key={status}
                      onClick={() => handleStatusChange(selectedInquiry.id, status)}
                      className={`px-4 py-2 rounded-lg font-medium text-sm transition-all cursor-pointer whitespace-nowrap ${
                        selectedInquiry.status === status
                          ? getStatusColor(status)
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3 pt-4">
                <a
                  href={`tel:${selectedInquiry.phone}`}
                  className="flex-1 bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-phone-line mr-2"></i>
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${selectedInquiry.phone.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 text-white py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-whatsapp-line mr-2"></i>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </OwnerDashboardLayout>
  );
};

export default InquiriesPage;
